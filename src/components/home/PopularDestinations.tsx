import React from 'react';
import { useApp } from '../../context/AppContext';
import { DESTINATIONS } from '../../data/mockData';
import { Heart, ArrowUpRight, Star } from 'lucide-react';

export const PopularDestinations: React.FC = () => {
  const { navigateToDestination, setActiveTab, toggleWishlist, isInWishlist } = useApp();

  const popularList = DESTINATIONS.slice(0, 6);

  return (
    <section className="py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
              Handpicked Discovery
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101C35] mt-1">
              Popular Destinations
            </h2>
            <p className="text-base sm:text-lg text-[#4B5563] max-w-2xl mt-3 font-normal">
              Iconic places. Unforgettable experiences. Start your next chapter in one of these amazing destinations.
            </p>
          </div>

          <button
            onClick={() => setActiveTab('destinations')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1769E8] hover:text-[#1253BD] group cursor-pointer shrink-0"
          >
            <span>View All Destinations</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Responsive Grid: 6 Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularList.map((dest) => {
            const favorited = isInWishlist(dest.id);
            return (
              <div
                key={dest.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating border border-gray-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-72 overflow-hidden cursor-pointer" onClick={() => navigateToDestination(dest.id)}>
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#101C35] flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{dest.rating}</span>
                    <span className="text-gray-400 font-normal">({dest.reviewsCount})</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(dest.id);
                    }}
                    title={favorited ? 'Remove from wishlist' : 'Add to wishlist'}
                    className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                      favorited
                        ? 'bg-red-500 text-white shadow-md'
                        : 'bg-white/80 hover:bg-white text-gray-700 hover:text-red-500'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorited ? 'fill-white' : ''}`} />
                  </button>

                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {dest.country}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3
                      onClick={() => navigateToDestination(dest.id)}
                      className="font-serif text-2xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors cursor-pointer"
                    >
                      {dest.name}
                    </h3>
                    <p className="text-sm text-[#4B5563] mt-2 line-clamp-2 leading-relaxed">
                      {dest.shortDescription}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block font-medium">Avg. daily cost</span>
                      <span className="text-base font-bold text-[#101C35]">
                        ${dest.averagePricePerDay} <span className="text-xs font-normal text-gray-500">/ day</span>
                      </span>
                    </div>

                    <button
                      onClick={() => navigateToDestination(dest.id)}
                      className="w-10 h-10 rounded-full bg-[#EAF5FF] group-hover:bg-[#1769E8] text-[#1769E8] group-hover:text-white flex items-center justify-center transition-all cursor-pointer"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
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
