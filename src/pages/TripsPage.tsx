import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FEATURED_TRIPS } from '../data/mockData';
import { Clock, Star, MapPin, Heart } from 'lucide-react';

export const TripsPage: React.FC = () => {
  const { navigateToTrip, openBookingModal, toggleWishlist, isInWishlist } = useApp();
  const [durationFilter, setDurationFilter] = useState<string>('All');

  const filteredTrips = durationFilter === 'All'
    ? FEATURED_TRIPS
    : FEATURED_TRIPS.filter((t) => {
        if (durationFilter === 'short') return t.durationDays <= 6;
        if (durationFilter === 'medium') return t.durationDays >= 7;
        return true;
      });

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
            Curated Journeys
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#101C35] mt-1">
            Holiday Packages & Itineraries
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] mt-3">
            Fully planned multi-day adventures with handpicked luxury stays, transfers, and private guided excursions.
          </p>
        </div>

        {/* Duration Filter */}
        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setDurationFilter('All')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              durationFilter === 'All' ? 'bg-[#1769E8] text-white' : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            All Durations
          </button>
          <button
            onClick={() => setDurationFilter('short')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              durationFilter === 'short' ? 'bg-[#1769E8] text-white' : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            Up to 6 Days
          </button>
          <button
            onClick={() => setDurationFilter('medium')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              durationFilter === 'medium' ? 'bg-[#1769E8] text-white' : 'bg-white text-gray-700 border border-gray-200'
            }`}
          >
            7+ Days
          </button>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredTrips.map((pkg) => {
            const favorited = isInWishlist(pkg.id);
            return (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating border border-gray-100 transition-all duration-300 flex flex-col justify-between group"
              >
                <div
                  className="relative h-72 overflow-hidden cursor-pointer"
                  onClick={() => navigateToTrip(pkg.id)}
                >
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#101C35] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1769E8]" />
                    <span>{pkg.durationDays} Days</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(pkg.id);
                    }}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                      favorited ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-gray-700'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorited ? 'fill-white' : ''}`} />
                  </button>

                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-1.5 text-xs font-semibold">
                    <MapPin className="w-4 h-4 text-[#1769E8]" />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1769E8] bg-[#EAF5FF] px-2.5 py-0.5 rounded-md">
                        {pkg.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-[#101C35]">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>{pkg.rating}</span>
                      </div>
                    </div>

                    <h3
                      onClick={() => navigateToTrip(pkg.id)}
                      className="font-serif text-2xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors cursor-pointer"
                    >
                      {pkg.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] mt-2 line-clamp-2 leading-relaxed">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Starting from</span>
                      <span className="text-2xl font-bold text-[#101C35]">
                        ${pkg.startingPrice.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => navigateToTrip(pkg.id)}
                        className="px-4 py-2.5 rounded-xl border border-gray-200 text-[#101C35] hover:bg-gray-50 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => openBookingModal(pkg)}
                        className="px-4 py-2.5 rounded-xl bg-[#1769E8] hover:bg-[#1253BD] text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
