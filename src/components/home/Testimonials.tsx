import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white font-sans border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
              Community Voices
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101C35] mt-1">
              What Travelers Say
            </h2>
            <p className="text-base sm:text-lg text-[#4B5563] max-w-xl mt-2 font-normal">
              Real stories from our global community of adventurers.
            </p>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#1769E8] bg-white hover:bg-[#EAF5FF] text-[#101C35] hover:text-[#1769E8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full border border-gray-200 hover:border-[#1769E8] bg-white hover:bg-[#EAF5FF] text-[#101C35] hover:text-[#1769E8] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={item.id}
                className={`bg-[#F8F8F5] rounded-3xl p-8 border border-gray-200/80 transition-all duration-500 flex flex-col justify-between relative ${
                  isActive ? 'ring-2 ring-[#1769E8] shadow-card bg-white' : 'hover:bg-white hover:shadow-card'
                }`}
              >
                <div>
                  {/* Quote Icon & Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <Quote className="w-8 h-8 text-[#1769E8]/30" />
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="font-serif text-lg text-[#101C35] italic leading-relaxed mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Profile Footer */}
                <div className="pt-6 border-t border-gray-200/60 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm ring-2 ring-[#1769E8]/20"
                  />
                  <div>
                    <h4 className="font-bold text-[#101C35] text-base">{item.name}</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#1769E8]" />
                      <span>{item.destinationVisited}</span>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
