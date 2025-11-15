'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactFormData } from '@/types';

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const handleFormSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      await onSubmit(data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Failed to send message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 tablet:space-y-8">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          disabled={isSubmitting}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.name ? 'border-red-600' : 'border-gray-300'
          } focus:border-black focus:outline-none text-black placeholder-gray-500 py-3 transition-colors disabled:opacity-50 min-h-[44px]`}
          style={{ fontSize: '16px' }}
          {...register('name', {
            required: 'Name is required',
            minLength: {
              value: 2,
              message: 'Name must be at least 2 characters',
            },
          })}
        />
        {errors.name && (
          <p className="mt-2 text-sm tablet:text-base text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          disabled={isSubmitting}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.email ? 'border-red-600' : 'border-gray-300'
          } focus:border-black focus:outline-none text-black placeholder-gray-500 py-3 transition-colors disabled:opacity-50 min-h-[44px]`}
          style={{ fontSize: '16px' }}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && (
          <p className="mt-2 text-sm tablet:text-base text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          placeholder="Message"
          rows={5}
          disabled={isSubmitting}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.message ? 'border-red-600' : 'border-gray-300'
          } focus:border-black focus:outline-none text-black placeholder-gray-500 py-3 resize-none transition-colors disabled:opacity-50`}
          style={{ fontSize: '16px' }}
          {...register('message', {
            required: 'Message is required',
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters',
            },
          })}
        />
        {errors.message && (
          <p className="mt-2 text-sm tablet:text-base text-red-600">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 tablet:px-8 tablet:py-4 bg-black text-white text-base tablet:text-lg font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[120px] touch-target"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success Message */}
        {submitSuccess && (
          <p className="text-green-600 text-center text-sm tablet:text-base animate-fade-in">
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {/* Error Message */}
        {submitError && (
          <p className="text-red-600 text-center text-sm tablet:text-base">{submitError}</p>
        )}
      </div>
    </form>
  );
}
