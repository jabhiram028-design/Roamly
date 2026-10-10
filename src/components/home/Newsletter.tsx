import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const { showToast } = useApp();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (str: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter your email address.');
      setStatus('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }

    setStatus('loading');

    // Simulate real submission
    setTimeout(() => {
      setStatus('success');
      showToast('Thank you for subscribing to Roamly Inspiration!', 'success');
    }, 600);
  };

  return (
    <section className="py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative rounded-3xl overflow-hidden shadow-floating bg-[#101C35] text-white">

          {/* Scenic Background Image overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1800&q=85"
              alt="Maldives turquoise sea newsletter banner"
              className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101C35] via-[#101C35]/90 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">

            <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8] bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block mb-4">
              Join Our Club
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Get Travel Inspiration in Your Inbox
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed max-w-xl">
              Exclusive deals, travel tips, and stunning destinations — straight to your inbox every week.
            </p>

            {status === 'success' ? (
              <div className="mt-8 p-6 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/40 rounded-2xl flex items-center gap-4 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="font-bold text-white text-lg">You're on the list!</h4>
                  <p className="text-xs text-emerald-100">
                    We've sent a welcome email with our secret 2026 destination guide to <span className="font-semibold underline">{email}</span>.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
                  <div className="relative flex-1">
                    <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address"
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#1769E8]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shrink-0"
                  >
                    <span>{status === 'loading' ? 'Subscribing...' : 'Subscribe'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {status === 'error' && (
                  <p className="text-xs text-red-400 font-medium pl-1 animate-in fade-in">
                    {errorMessage}
                  </p>
                )}

                <div className="flex items-center gap-2 text-xs text-gray-400 pl-1 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>We care about your privacy. Unsubscribe anytime with one click.</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
