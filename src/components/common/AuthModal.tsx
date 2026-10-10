import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, login, signup } = useApp();
  const [mode, setMode] = useState<'login' | 'signup'>(authMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      login(email, name);
    } else {
      signup(email, name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-white rounded-3xl shadow-floating max-w-md w-full overflow-hidden relative border border-gray-100 p-8 space-y-6">

        <button
          onClick={closeAuthModal}
          className="absolute top-6 right-6 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab Headers */}
        <div className="flex border-b border-gray-100 pb-2 gap-6">
          <button
            onClick={() => setMode('login')}
            className={`font-serif text-2xl font-bold cursor-pointer transition-colors ${
              mode === 'login' ? 'text-[#101C35] border-b-2 border-[#1769E8] pb-1' : 'text-gray-400'
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setMode('signup')}
            className={`font-serif text-2xl font-bold cursor-pointer transition-colors ${
              mode === 'signup' ? 'text-[#101C35] border-b-2 border-[#1769E8] pb-1' : 'text-gray-400'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Sarah Jenkins"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
          >
            <span>{mode === 'login' ? 'Sign In to Account' : 'Create Account'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="text-center text-xs text-gray-500">
          Demo mode: Any email and password will log you in instantly.
        </p>

      </div>
    </div>
  );
};
