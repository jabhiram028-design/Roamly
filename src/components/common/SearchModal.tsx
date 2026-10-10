import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { DESTINATIONS, FEATURED_TRIPS, TRAVEL_GUIDES } from '../../data/mockData';
import { Search, X, MapPin, Compass, BookOpen } from 'lucide-react';

export const SearchModal: React.FC = () => {
  const {
    isSearchModalOpen,
    closeSearchModal,
    navigateToDestination,
    navigateToTrip,
    navigateToGuide
  } = useApp();

  const [query, setQuery] = useState('');

  if (!isSearchModalOpen) return null;

  const filteredDestinations = query.trim()
    ? DESTINATIONS.filter(
        (d) =>
          d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.country.toLowerCase().includes(query.toLowerCase()) ||
          d.category.toLowerCase().includes(query.toLowerCase())
      )
    : DESTINATIONS.slice(0, 4);

  const filteredTrips = query.trim()
    ? FEATURED_TRIPS.filter(
        (t) =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.destinationName.toLowerCase().includes(query.toLowerCase()) ||
          t.location.toLowerCase().includes(query.toLowerCase())
      )
    : FEATURED_TRIPS.slice(0, 3);

  const filteredGuides = query.trim()
    ? TRAVEL_GUIDES.filter(
        (g) =>
          g.title.toLowerCase().includes(query.toLowerCase()) ||
          g.destination.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="bg-white rounded-2xl shadow-floating max-w-2xl w-full overflow-hidden border border-gray-100 relative">

        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-3 relative">
          <Search className="w-5 h-5 text-[#1769E8] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations (Santorini, Bali...), trips, or guides..."
            className="w-full text-base text-[#101C35] placeholder:text-gray-400 outline-none font-medium bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={closeSearchModal}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[70vh] overflow-y-auto p-4 space-y-6">

          {/* Destinations */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
              <MapPin className="w-4 h-4 text-[#1769E8]" /> Destinations ({filteredDestinations.length})
            </div>
            {filteredDestinations.length === 0 ? (
              <p className="text-xs text-gray-400 px-2">No matching destinations found.</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredDestinations.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => {
                      navigateToDestination(dest.id);
                      closeSearchModal();
                    }}
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors text-left group cursor-pointer"
                  >
                    <img
                      src={dest.heroImage}
                      alt={dest.name}
                      className="w-12 h-12 rounded-lg object-cover group-hover:scale-105 transition-transform"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors">
                        {dest.name}
                      </h5>
                      <p className="text-xs text-gray-500">{dest.country} • {dest.category}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Featured Trips */}
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
              <Compass className="w-4 h-4 text-[#1769E8]" /> Holiday Packages ({filteredTrips.length})
            </div>
            {filteredTrips.length === 0 ? (
              <p className="text-xs text-gray-400 px-2">No matching packages found.</p>
            ) : (
              <div className="space-y-2">
                {filteredTrips.map((trip) => (
                  <button
                    key={trip.id}
                    onClick={() => {
                      navigateToTrip(trip.id);
                      closeSearchModal();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={trip.heroImage}
                        alt={trip.title}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <h5 className="text-sm font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors">
                          {trip.title}
                        </h5>
                        <p className="text-xs text-gray-500">{trip.durationDays} Days • {trip.country}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#1769E8] shrink-0">
                      From ${trip.startingPrice.toLocaleString()}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Travel Guides */}
          {filteredGuides.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 px-2">
                <BookOpen className="w-4 h-4 text-[#1769E8]" /> Travel Guides ({filteredGuides.length})
              </div>
              <div className="space-y-2">
                {filteredGuides.map((guide) => (
                  <button
                    key={guide.id}
                    onClick={() => {
                      navigateToGuide(guide.id);
                      closeSearchModal();
                    }}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group cursor-pointer"
                  >
                    <img
                      src={guide.heroImage}
                      alt={guide.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h5 className="text-sm font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors line-clamp-1">
                        {guide.title}
                      </h5>
                      <p className="text-xs text-gray-500">{guide.readTimeMinutes} min read • {guide.destination}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
