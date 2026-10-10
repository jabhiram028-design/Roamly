import React from 'react';
import { useApp } from '../../context/AppContext';
import { Compass, Share2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActiveTab, showToast } = useApp();

  const handleDummyClick = (title: string) => {
    showToast(`${title} section active`, 'info');
  };

  return (
    <footer className="bg-white border-t border-gray-100 text-[#4B5563] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#1769E8] text-white flex items-center justify-center shadow-sm">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#101C35]">
                Roamly
              </span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Curated travel experiences for meaningful adventures around the world. Discover extraordinary destinations, handpicked itineraries, and world-class hospitality.
            </p>
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider font-semibold text-[#101C35] mb-2">
                Tagline
              </p>
              <p className="font-serif text-[#1769E8] text-lg italic">
                Explore. Experience. Belong.
              </p>
            </div>
          </div>

          {/* Group 1: Explore */}
          <div>
            <h4 className="text-sm font-bold text-[#101C35] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('destinations')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('experiences')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Experiences
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('trips')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Holiday Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('guides')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Travel Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Special Offers')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  Special Offers <span className="bg-[#EAF5FF] text-[#1769E8] text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Group 2: Company */}
          <div>
            <h4 className="text-sm font-bold text-[#101C35] uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => setActiveTab('about')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Our Impact')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Careers')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Press')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Press & Media
                </button>
              </li>
            </ul>
          </div>

          {/* Group 3: Support */}
          <div>
            <h4 className="text-sm font-bold text-[#101C35] uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleDummyClick('Help Center')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Help Center
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Contact Us')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Travel FAQs')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Travel FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleDummyClick('Safety Updates')}
                  className="hover:text-[#1769E8] transition-colors cursor-pointer"
                >
                  Safety & Travel Updates
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Social & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">

          <div className="flex items-center gap-6">
            <span className="font-medium text-[#101C35]">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="#instagram" aria-label="Instagram" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#1769E8] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#facebook" aria-label="Facebook" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#1769E8] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/></svg>
              </a>
              <a href="#youtube" aria-label="YouTube" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#1769E8] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
              <a href="#share" aria-label="Share" className="w-8 h-8 rounded-full bg-gray-50 hover:bg-[#1769E8] hover:text-white flex items-center justify-center transition-all cursor-pointer">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => handleDummyClick('Privacy Policy')} className="hover:text-[#1769E8] cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleDummyClick('Terms of Service')} className="hover:text-[#1769E8] cursor-pointer">
              Terms of Service
            </button>
            <button onClick={() => handleDummyClick('Cookie Preferences')} className="hover:text-[#1769E8] cursor-pointer">
              Cookie Preferences
            </button>
          </div>

          <div>
            © {new Date().getFullYear()} Roamly Inc. All rights reserved.
          </div>

        </div>

      </div>
    </footer>
  );
};
