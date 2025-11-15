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
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6 tablet:space-y-8" aria-label="Contact form">
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
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.name ? 'border-accent-error' : 'border-neutral-gray200'
          } focus:border-primary-black focus:outline-none text-primary-black placeholder-neutral-gray200 py-3 transition-colors disabled:opacity-50 min-h-[44px]`}
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
          <p id="name-error" className="mt-2 text-sm tablet:text-base text-accent-error" role="alert">
            {errors.name.message}
          </p>
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
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.email ? 'border-accent-error' : 'border-neutral-gray200'
          } focus:border-primary-black focus:outline-none text-primary-black placeholder-neutral-gray200 py-3 transition-colors disabled:opacity-50 min-h-[44px]`}
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
          <p id="email-error" className="mt-2 text-sm tablet:text-base text-accent-error" role="alert">
            {errors.email.message}
          </p>
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
          aria-required="true"
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full bg-transparent border-0 border-b-2 ${
            errors.message ? 'border-accent-error' : 'border-neutral-gray200'
          } focus:border-primary-black focus:outline-none text-primary-black placeholder-neutral-gray200 py-3 resize-none transition-colors disabled:opacity-50`}
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
          <p id="message-error" className="mt-2 text-sm tablet:text-base text-accent-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex flex-col items-center gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="px-6 py-3 tablet:px-8 tablet:py-4 bg-primary-black text-primary-white text-base tablet:text-lg font-medium hover:bg-neutral-gray800 active:bg-neutral-gray900 focus:outline-none focus:ring-2 focus:ring-primary-black focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[120px] touch-target will-change-transform active:scale-[0.98]"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success Message */}
        {submitSuccess && (
          <p className="text-accent-success text-center text-sm tablet:text-base animate-fade-in will-change-opacity" role="status" aria-live="polite">
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {/* Error Message */}
        {submitError && (
          <p className="text-accent-error text-center text-sm tablet:text-base animate-fade-in will-change-opacity" role="alert" aria-live="assertive">
            {submitError}
          </p>
        )}
      </div>
    </form>
  );
}
