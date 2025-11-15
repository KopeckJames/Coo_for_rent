import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST } from './route';
import { NextRequest } from 'next/server';

// Mock environment variables
const originalEnv = process.env;

beforeEach(() => {
  vi.resetModules();
  process.env = {
    ...originalEnv,
    RESEND_API_KEY: 'test_api_key',
    RESEND_FROM_EMAIL: 'test@example.com',
    CONTACT_EMAIL: 'contact@cooforrent.com',
  };
});

afterEach(() => {
  process.env = originalEnv;
  vi.restoreAllMocks();
});

// Helper to create a mock NextRequest
function createMockRequest(body: any): NextRequest {
  return {
    json: async () => body,
  } as NextRequest;
}

describe('POST /api/contact', () => {
  describe('Validation', () => {
    it('should return 400 when name is missing', async () => {
      const request = createMockRequest({
        email: 'test@example.com',
        message: 'This is a test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Validation failed');
      expect(data.details).toContain('Name is required');
    });

    it('should return 400 when name is too short', async () => {
      const request = createMockRequest({
        name: 'A',
        email: 'test@example.com',
        message: 'This is a test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.details).toContain('Name must be at least 2 characters');
    });

    it('should return 400 when email is missing', async () => {
      const request = createMockRequest({
        name: 'John Doe',
        message: 'This is a test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.details).toContain('Email is required');
    });

    it('should return 400 when email format is invalid', async () => {
      const request = createMockRequest({
        name: 'John Doe',
        email: 'invalid-email',
        message: 'This is a test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.details).toContain('Invalid email address');
    });

    it('should return 400 when message is missing', async () => {
      const request = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.details).toContain('Message is required');
    });

    it('should return 400 when message is too short', async () => {
      const request = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'Short',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.details).toContain('Message must be at least 10 characters');
    });
  });

  describe('Email Service Integration', () => {
    it('should return 500 when RESEND_API_KEY is not configured', async () => {
      delete process.env.RESEND_API_KEY;

      const request = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Failed to send message. Please try again later.');
    });

    it('should successfully send email with valid data', async () => {
      // Mock fetch to simulate successful Resend API call
      global.fetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'test-email-id' }),
      });

      const request = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.message).toBe('Your message has been sent successfully');

      // Verify fetch was called with correct parameters
      expect(global.fetch).toHaveBeenCalledWith(
        'https://api.resend.com/emails',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: 'Bearer test_api_key',
          }),
        })
      );
    });

    it('should handle Resend API errors', async () => {
      // Mock fetch to simulate failed Resend API call
      global.fetch = vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ error: 'API error' }),
      });

      const request = createMockRequest({
        name: 'John Doe',
        email: 'test@example.com',
        message: 'This is a valid test message',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(500);
      expect(data.success).toBe(false);
      expect(data.error).toBe('Failed to send message. Please try again later.');
    });
  });

  describe('Successful Form Submission', () => {
    it('should trim and normalize input data', async () => {
      // Reset and setup fresh mock
      vi.clearAllMocks();
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ id: 'test-email-id' }),
      });
      global.fetch = mockFetch as any;

      const request = createMockRequest({
        name: '  John Doe  ',
        email: '  test@example.com  ',
        message: '  This is a test message with enough characters  ',
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);

      // Verify the email payload was normalized
      expect(mockFetch).toHaveBeenCalledTimes(1);
      const fetchCall = mockFetch.mock.calls[0];
      const emailPayload = JSON.parse(fetchCall[1].body);
      
      expect(emailPayload.html).toContain('John Doe');
      expect(emailPayload.html).toContain('test@example.com');
    });
  });
});
