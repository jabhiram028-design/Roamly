import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DESTINATIONS } from '../../data/mockData';
import { Search, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToDestination, setActiveTab, setSearchQuery: setGlobalSearch } = useApp();
  const [searchInput, setSearchInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const suggestions = searchInput.trim()
    ? DESTINATIONS.filter((d) =>
        d.name.toLowerCase().includes(searchInput.toLowerCase()) ||
        d.country.toLowerCase().includes(searchInput.toLowerCase())
      )
    : DESTINATIONS.slice(0, 4);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setGlobalSearch(searchInput);
      setActiveTab('destinations');
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden font-sans">

      {/* High Quality Santorini Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2000&q=90"
          alt="Santorini Greece blue domed churches and Mediterranean sea"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-10000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F5] via-transparent to-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-24 flex flex-col justify-between min-h-[85vh]">

        <div className="max-w-3xl space-y-6">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase animate-in fade-in slide-in-from-top-4">
            <Sparkles className="w-3.5 h-3.5 text-[#1769E8]" />
            EXPLORE. EXPERIENCE. BELONG.
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.08] drop-shadow-sm">
            Discover <br />
            <span className="italic font-normal text-sky-100">Extraordinary</span> Places
          </h1>

          <p className="text-lg sm:text-xl text-gray-200 max-w-xl font-normal leading-relaxed">
            Curated travel experiences for meaningful adventures around the world.
          </p>

          <div className="relative pt-4 max-w-xl">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-floating border border-white/40 group transition-all"
            >
              <div className="pl-4 pr-2 text-[#1769E8]">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="Where do you want to explore? (e.g. Santorini, Bali...)"
                className="w-full py-3.5 px-2 text-[#101C35] placeholder:text-gray-400 text-base font-medium outline-none bg-transparent"
              />
              <button
                type="submit"
                className="bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg shrink-0"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {isFocused && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-card border border-gray-100 p-3 z-30 animate-in fade-in slide-in-from-top-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 py-1">
                  Suggested Destinations
                </p>
                <div className="space-y-1">
                  {suggestions.map((dest) => (
                    <button
                      key={dest.id}
                      type="button"
                      onClick={() => navigateToDestination(dest.id)}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#EAF5FF] transition-colors text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#1769E8]" />
                        <span className="text-sm font-semibold text-[#101C35] group-hover:text-[#1769E8]">
                          {dest.name}
                        </span>
                        <span className="text-xs text-gray-400">— {dest.country}</span>
                      </div>
                      <span className="text-xs font-semibold text-[#1769E8] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

        <div className="flex items-center justify-between pt-12 border-t border-white/20">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white text-xs sm:text-sm">
            <MapPin className="w-4 h-4 text-[#1769E8] shrink-0" />
            <div>
              <span className="font-bold text-white">Santorini, Greece</span>
              <span className="hidden sm:inline text-gray-300"> — Whitewashed cliffside Oia & Aegean Sea vistas</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6 text-white/80 text-xs font-medium uppercase tracking-widest">
            <span>500+ Curated Trips</span>
            <span>•</span>
            <span>4.9★ Global Rating</span>
            <span>•</span>
            <span>100% Carbon Offset</span>
          </div>
        </div>

      </div>
    </div>
  );
};
