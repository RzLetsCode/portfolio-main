'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Mail, Phone, FileText, ArrowLeft } from 'lucide-react';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', phone: '', email: '', purpose: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage('Error sending message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Error sending message. Please try again.');
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
          <p className="text-lg text-slate-400">Let's discuss Enterprise AI Architecture, Databricks pipelines, or Azure Cloud scaling.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
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

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Phone size={16} /> Phone Number *
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

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 flex items-center gap-2">
              <Mail size={16} /> Email Address *
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

          {/* Purpose Field */}
          <div>
            <label htmlFor="purpose" className="block text-sm font-medium mb-2 flex items-center gap-2">
              <FileText size={16} /> Purpose of Contact *
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 disabled:from-slate-600 disabled:to-slate-700 text-slate-950 font-bold rounded-lg transition flex items-center justify-center gap-2"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`p-4 rounded-lg text-center ${
              submitMessage.includes('successfully')
                ? 'bg-emerald-900/30 border border-emerald-700 text-emerald-200'
                : 'bg-red-900/30 border border-red-700 text-red-200'
            }`}>
              {submitMessage}
            </div>
          )}
        </form>

        <div className="mt-12 text-center text-slate-400 text-sm">
          <p>All fields are required. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    </div>
  );
}
