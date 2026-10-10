import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { DESTINATIONS } from '../data/mockData';
import { Search, Grid, List, Star, Heart, ArrowUpRight, X, RefreshCw } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const {
    navigateToDestination,
    selectedCategory,
    setSelectedCategory,
    selectedStyle,
    setSelectedStyle,
    toggleWishlist,
    isInWishlist
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState<string>('All');
  const [maxPrice] = useState<number>(500);
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [displayCount, setDisplayCount] = useState<number>(6);

  const continents = ['All', 'Asia', 'Europe', 'North America', 'Africa', 'Oceania'];

  // Filtered & Sorted list
  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      const matchesSearch =
        !searchQuery ||
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || selectedCategory === 'All' || dest.category === selectedCategory;

      const matchesStyle =
        !selectedStyle || dest.travelStyles.includes(selectedStyle as any);

      const matchesContinent =
        selectedContinent === 'All' || dest.continent === selectedContinent;

      const matchesPrice = dest.averagePricePerDay <= maxPrice;

      return matchesSearch && matchesCategory && matchesStyle && matchesContinent && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'popular') return b.rating - a.rating;
      if (sortBy === 'price-asc') return a.averagePricePerDay - b.averagePricePerDay;
      if (sortBy === 'price-desc') return b.averagePricePerDay - a.averagePricePerDay;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedStyle, selectedContinent, maxPrice, sortBy]);

  const displayedList = filteredDestinations.slice(0, displayCount);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedStyle(null);
    setSelectedContinent('All');
    setSortBy('popular');
  };

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
            Global Catalog
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#101C35] mt-1">
            Explore All Destinations
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] mt-2 max-w-2xl">
            Discover iconic landmarks, pristine beaches, and hidden mountain retreats tailored to your travel style.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 space-y-6">

          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">

            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by destination or country..."
                className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101C35] focus:ring-2 focus:ring-[#1769E8] outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e: any) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold text-[#101C35] outline-none cursor-pointer"
                >
                  <option value="popular">Most Popular (Rating)</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>

              <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'grid' ? 'bg-white text-[#1769E8] shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    viewMode === 'list' ? 'bg-white text-[#1769E8] shadow-sm' : 'text-gray-500'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-[#101C35] uppercase mr-2">Region:</span>
            {continents.map((continent) => (
              <button
                key={continent}
                onClick={() => setSelectedContinent(continent)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedContinent === continent
                    ? 'bg-[#1769E8] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {continent}
              </button>
            ))}
          </div>

          {(selectedCategory || selectedStyle || selectedContinent !== 'All' || searchQuery) && (
            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="text-gray-500 font-medium">Active Filters:</span>
              {selectedCategory && (
                <span className="bg-[#EAF5FF] text-[#1769E8] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                  Category: {selectedCategory}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setSelectedCategory(null)}
                  />
                </span>
              )}
              {selectedStyle && (
                <span className="bg-[#EAF5FF] text-[#1769E8] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1">
                  Style: {selectedStyle}
                  <X
                    className="w-3 h-3 cursor-pointer"
                    onClick={() => setSelectedStyle(null)}
                  />
                </span>
              )}
              <button
                onClick={resetFilters}
                className="text-[#1769E8] underline font-semibold flex items-center gap-1 ml-auto cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" /> Reset All
              </button>
            </div>
          )}

        </div>

        {filteredDestinations.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center space-y-4 shadow-sm border border-gray-100">
            <h3 className="font-serif text-2xl font-bold text-[#101C35]">
              No Destinations Match Your Filter
            </h3>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Try adjusting your search keywords, region, or price filters to see more results.
            </p>
            <button
              onClick={resetFilters}
              className="bg-[#1769E8] text-white font-semibold px-6 py-2.5 rounded-full text-sm hover:bg-[#1253BD] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedList.map((dest) => {
              const favorited = isInWishlist(dest.id);
              return (
                <div
                  key={dest.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating border border-gray-100 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div
                    className="relative h-64 overflow-hidden cursor-pointer"
                    onClick={() => navigateToDestination(dest.id)}
                  >
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#101C35] flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{dest.rating}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(dest.id);
                      }}
                      className={`absolute top-4 right-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                        favorited ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-gray-700'
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

                  <div className="p-6 flex-1 flex flex-col justify-between">
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
                        className="w-10 h-10 rounded-full bg-[#EAF5FF] group-hover:bg-[#1769E8] text-[#1769E8] group-hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-6">
            {displayedList.map((dest) => {
              const favorited = isInWishlist(dest.id);
              return (
                <div
                  key={dest.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-floating border border-gray-100 transition-all duration-300 flex flex-col sm:flex-row group"
                >
                  <div
                    className="relative sm:w-1/3 h-64 sm:h-auto overflow-hidden cursor-pointer"
                    onClick={() => navigateToDestination(dest.id)}
                  >
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="p-6 sm:w-2/3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#1769E8]">
                          {dest.country} • {dest.category}
                        </span>
                        <button
                          onClick={() => toggleWishlist(dest.id)}
                          className="text-gray-400 hover:text-red-500 cursor-pointer"
                        >
                          <Heart className={`w-5 h-5 ${favorited ? 'fill-red-500 text-red-500' : ''}`} />
                        </button>
                      </div>

                      <h3
                        onClick={() => navigateToDestination(dest.id)}
                        className="font-serif text-2xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors cursor-pointer"
                      >
                        {dest.name}
                      </h3>
                      <p className="text-sm text-[#4B5563] mt-2 line-clamp-3 leading-relaxed">
                        {dest.fullDescription}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="text-xs text-gray-400 block font-medium">Rating</span>
                          <span className="text-sm font-bold text-[#101C35] flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {dest.rating}
                          </span>
                        </div>
                        <div>
                          <span className="text-xs text-gray-400 block font-medium">Avg. Price</span>
                          <span className="text-sm font-bold text-[#101C35]">${dest.averagePricePerDay}/day</span>
                        </div>
                      </div>

                      <button
                        onClick={() => navigateToDestination(dest.id)}
                        className="px-5 py-2.5 bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold text-xs rounded-full transition-colors cursor-pointer"
                      >
                        Explore Destination
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {displayCount < filteredDestinations.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="bg-white border border-gray-200 text-[#101C35] font-bold px-8 py-3.5 rounded-full text-sm hover:bg-gray-50 shadow-sm transition-all cursor-pointer"
            >
              Load More Destinations ({filteredDestinations.length - displayCount} remaining)
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
