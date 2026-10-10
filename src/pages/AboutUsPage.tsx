import React from 'react';
import { useApp } from '../context/AppContext';
import { Compass, Leaf, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Brand Story Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] text-[#1769E8] text-xs font-bold tracking-widest uppercase">
            <Compass className="w-4 h-4" /> About Roamly
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#101C35] leading-tight">
            Explore. Experience. Belong.
          </h1>
          <p className="text-lg sm:text-xl text-[#4B5563] font-light leading-relaxed">
            Roamly was created to transform generic vacations into deeply meaningful journeys. We believe travel should leave you feeling inspired and leave every community better off.
          </p>
        </div>

        {/* Impact Numbers Bar */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1769E8]">50+</span>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Countries Covered</p>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1769E8]">14,000+</span>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Happy Travelers</p>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1769E8]">100%</span>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Carbon Offset</p>
          </div>
          <div>
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#1769E8]">4.95★</span>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">Global Rating</p>
          </div>
        </div>

        {/* Company Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769E8] flex items-center justify-center">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#101C35]">Curated Excellence</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We personally vet every boutique ryokan, cave hotel, private yacht charter, and local master chef so your experience is seamless.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769E8] flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#101C35]">Sustainable Impact</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              5% of every booking profit goes directly into local marine conservation projects, reforestation, and heritage preservation funds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EAF5FF] text-[#1769E8] flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#101C35]">24/7 Concierge Support</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              From the second your flight touches down to your final departure, our dedicated concierge team is available via instant messaging.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#101C35] rounded-3xl p-12 text-center text-white space-y-6 relative overflow-hidden">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready to Begin Your Next Adventure?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base">
            Join thousands of discerning travelers who discover extraordinary places with Roamly.
          </p>
          <button
            onClick={() => setActiveTab('destinations')}
            className="bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            Explore Destinations <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
