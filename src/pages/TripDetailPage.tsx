import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FEATURED_TRIPS } from '../data/mockData';
import { Clock, Star, Check, X as XIcon, Heart, ArrowLeft, ShieldCheck, Users, ChevronDown, ChevronUp } from 'lucide-react';

export const TripDetailPage: React.FC = () => {
  const {
    selectedTripId,
    setActiveTab,
    openBookingModal,
    toggleWishlist,
    isInWishlist
  } = useApp();

  const trip = FEATURED_TRIPS.find((t) => t.id === selectedTripId) || FEATURED_TRIPS[0];
  const favorited = isInWishlist(trip.id);

  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [selectedDate, setSelectedDate] = useState<string>(trip.departureDates[0]);

  return (
    <div className="pt-20 font-sans bg-[#F8F8F5] min-h-screen">

      {/* Hero Header Banner */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src={trip.heroImage}
          alt={trip.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Back Button & Wishlist */}
        <div className="absolute top-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between z-10">
          <button
            onClick={() => setActiveTab('trips')}
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md hover:bg-white text-[#101C35] font-semibold text-xs px-4 py-2 rounded-full shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Packages
          </button>

          <button
            onClick={() => toggleWishlist(trip.id)}
            className={`p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
              favorited ? 'bg-red-500 text-white shadow-md' : 'bg-white/90 text-gray-700 hover:bg-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${favorited ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="absolute bottom-10 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sky-200 mb-2">
            <Clock className="w-4 h-4 text-[#1769E8]" />
            <span>{trip.durationDays} Days / {trip.durationDays - 1} Nights</span>
            <span>•</span>
            <span>{trip.location}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {trip.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm font-semibold">
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{trip.rating} ({trip.reviewsCount} reviews)</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <Users className="w-4 h-4 text-sky-300" />
              <span>Max Group: {trip.maxGroupSize} Guests</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content (2 cols) */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 space-y-4">
              <h2 className="font-serif text-3xl font-bold text-[#101C35]">
                Trip Overview
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed">
                {trip.overview}
              </p>
            </div>

            {/* Day-by-day Itinerary */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-3xl font-bold text-[#101C35]">
                  Day-by-Day Itinerary
                </h2>
                <span className="text-xs font-bold text-gray-500">
                  {trip.itinerary.length} Days Total
                </span>
              </div>

              <div className="space-y-4">
                {trip.itinerary.map((dayItem) => {
                  const isOpen = expandedDay === dayItem.day;
                  return (
                    <div
                      key={dayItem.day}
                      className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => setExpandedDay(isOpen ? null : dayItem.day)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-10 h-10 rounded-full bg-[#EAF5FF] text-[#1769E8] font-serif font-bold text-lg flex items-center justify-center shrink-0">
                            {dayItem.day}
                          </span>
                          <div>
                            <h4 className="font-serif text-xl font-bold text-[#101C35]">
                              {dayItem.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                              <span>Meals: {dayItem.mealsIncluded.join(', ')}</span>
                            </div>
                          </div>
                        </div>

                        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-sm text-[#4B5563] space-y-4 animate-in fade-in">
                          <p className="leading-relaxed">{dayItem.description}</p>
                          {dayItem.highlights.length > 0 && (
                            <div className="bg-[#F8F8F5] p-3.5 rounded-xl border border-gray-200/60">
                              <span className="text-xs font-bold uppercase tracking-wider text-[#101C35] block mb-2">
                                Day Highlights:
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {dayItem.highlights.map((hl, i) => (
                                  <span key={i} className="bg-white px-3 py-1 rounded-md text-xs font-semibold text-[#1769E8] shadow-2xs border border-gray-100">
                                    ✓ {hl}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#101C35] mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-500" /> What's Included
                </h3>
                <ul className="space-y-3 text-sm text-[#4B5563]">
                  {trip.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl font-bold text-[#101C35] mb-4 flex items-center gap-2">
                  <XIcon className="w-5 h-5 text-red-400" /> What's Excluded
                </h3>
                <ul className="space-y-3 text-sm text-[#4B5563]">
                  {trip.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-500">
                      <XIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Sticky Booking Sidebar (1 col) */}
          <div>
            <div className="bg-white rounded-3xl p-6 shadow-floating border border-gray-100 space-y-6 sticky top-24">

              <div className="flex items-baseline justify-between border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs text-gray-400 font-medium block">Starting Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-[#101C35]">
                      ${trip.startingPrice.toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">/ person</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                    Guaranteed Departure
                  </span>
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2">
                  Available Departure Dates
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101C35] font-semibold outline-none cursor-pointer"
                >
                  {trip.departureDates.map((d) => (
                    <option key={d} value={d}>
                      {new Date(d).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => openBookingModal(trip)}
                  className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-4 rounded-xl shadow-md transition-all cursor-pointer text-center block text-sm"
                >
                  Book This Journey
                </button>
                <button
                  onClick={() => openBookingModal(trip)}
                  className="w-full py-3 border border-gray-200 text-[#101C35] font-semibold rounded-xl text-sm hover:bg-gray-50 transition-colors cursor-pointer text-center block"
                >
                  Request Custom Itinerary
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2 border-t border-gray-100">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>100% Refund Guarantee up to 30 days prior</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
