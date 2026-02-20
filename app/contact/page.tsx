'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Mail, Phone, FileText, ArrowLeft } from 'lucide-react';
// 1. Import EmailJS
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    purpose: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 2. Map form data to EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.purpose,
    };

    try {
      // 3. Send using EmailJS directly to their servers (Fixes the 405 error)
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setSubmitMessage("✓ Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.");
        setFormData({
          name: '',
          phone: '',
          email: '',
          purpose: '',
        });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      console.error('Message submission error:', error);
      setSubmitMessage('Error sending message. Please check your information and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/#contact" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-400">
            Let's discuss Enterprise AI Architecture, Databricks pipelines, or Azure Cloud scaling.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              placeholder="Your full name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
              placeholder="Your phone number"
            />
          </div>

          {/* Purpose Field */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium mb-2">
              Purpose/Message *
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none h-32"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`p-4 rounded-lg ${
              submitMessage.includes('✓')
                ? 'bg-green-900/30 border border-green-700 text-green-200'
                : 'bg-red-900/30 border border-red-700 text-red-200'
            }`}>
              {submitMessage}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}
