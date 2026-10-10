import React, { useState } from 'react';
import { TRAVEL_GUIDES } from '../data/mockData';
import type { TravelGuide } from '../types';
import { Clock, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export const TravelGuidesPage: React.FC = () => {
  const [activeGuide, setActiveGuide] = useState<TravelGuide | null>(null);

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
            Editorial Journal
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#101C35] mt-1">
            Travel Guides & Insights
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] mt-3">
            In-depth guides, sustainable tips, and insider culinary secrets curated by our editors.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAVEL_GUIDES.map((guide) => (
            <div
              key={guide.id}
              onClick={() => setActiveGuide(guide)}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating border border-gray-100 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={guide.heroImage}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#1769E8]">
                  {guide.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {guide.readTimeMinutes} min read
                    </span>
                    <span>•</span>
                    <span>{guide.publishedDate}</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors leading-tight">
                    {guide.title}
                  </h3>

                  <p className="text-sm text-[#4B5563] mt-2 line-clamp-3 leading-relaxed">
                    {guide.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={guide.author.avatar}
                      alt={guide.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-[#101C35]">{guide.author.name}</span>
                  </div>

                  <span className="text-xs font-bold text-[#1769E8] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {activeGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl shadow-floating max-w-3xl w-full max-h-[90vh] overflow-y-auto relative border border-gray-100 p-8 space-y-6">
              <button
                onClick={() => setActiveGuide(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1769E8] bg-[#EAF5FF] px-3 py-1 rounded-full">
                  {activeGuide.category}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#101C35]">
                  {activeGuide.title}
                </h2>
                <p className="text-sm text-gray-500 italic">{activeGuide.subtitle}</p>

                <div className="flex items-center gap-4 pt-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <img
                      src={activeGuide.author.avatar}
                      alt={activeGuide.author.name}
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="font-bold text-[#101C35]">{activeGuide.author.name}</span>
                  </div>
                  <span>•</span>
                  <span>{activeGuide.publishedDate}</span>
                  <span>•</span>
                  <span>{activeGuide.readTimeMinutes} min read</span>
                </div>
              </div>

              <img
                src={activeGuide.heroImage}
                alt={activeGuide.title}
                className="w-full h-80 rounded-2xl object-cover"
              />

              <div className="space-y-6 text-base text-[#4B5563] leading-relaxed">
                {activeGuide.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-serif text-xl font-bold text-[#101C35]">
                      {sec.heading}
                    </h4>
                    <p>{sec.content}</p>
                  </div>
                ))}

                {activeGuide.packingList && (
                  <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-gray-200/60 space-y-3">
                    <h4 className="font-serif text-lg font-bold text-[#101C35]">
                      Essentials Packing Checklist
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeGuide.packingList.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-[#101C35]">
                          <CheckCircle2 className="w-4 h-4 text-[#1769E8]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setActiveGuide(null)}
                className="w-full bg-[#101C35] hover:bg-[#1769E8] text-white font-semibold py-3.5 rounded-xl transition-colors cursor-pointer text-center"
              >
                Close Article
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
