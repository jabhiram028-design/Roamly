import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Users, ShieldCheck, CheckCircle, ChevronRight, Lock } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const {
    isBookingModalOpen,
    closeBookingModal,
    selectedTripForBooking,
    submitBooking,
    user
  } = useApp();

  const [step, setStep] = useState<1 | 2>(1);
  const [startDate, setStartDate] = useState(
    selectedTripForBooking?.departureDates[0] || '2026-11-15'
  );
  const [guestsCount, setGuestsCount] = useState(2);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (!isBookingModalOpen || !selectedTripForBooking) return null;

  const trip = selectedTripForBooking;
  const totalPrice = trip.startingPrice * guestsCount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    await submitBooking({
      tripId: trip.id,
      tripTitle: trip.title,
      startDate,
      guestsCount,
      totalPrice,
      contactName: name,
      contactEmail: email,
      contactPhone: phone,
      specialRequests
    });
    setIsSubmitting(false);
    setIsCompleted(true);
  };

  const handleClose = () => {
    setIsCompleted(false);
    setStep(1);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-floating max-w-xl w-full overflow-hidden relative border border-gray-100 font-sans">

        {/* Header */}
        <div className="bg-[#101C35] text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1769E8] font-bold mb-1">
            <ShieldCheck className="w-4 h-4 text-[#1769E8]" /> Official Booking Inquiry
          </div>
          <h3 className="font-serif text-2xl font-bold">{trip.title}</h3>
          <p className="text-xs text-gray-300 mt-1">
            {trip.durationDays} Days • {trip.location}
          </p>
        </div>

        {/* Modal Body */}
        {isCompleted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="font-serif text-2xl font-bold text-[#101C35]">
              Reservation Request Confirmed!
            </h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#101C35]">{name}</span>. Our dedicated travel concierge team will review your departure date on{' '}
              <span className="font-semibold text-[#1769E8]">{startDate}</span> and email your travel confirmation to <span className="font-semibold text-[#101C35]">{email}</span> within 2 hours.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 border border-gray-100 text-xs text-gray-600">
              <div className="flex justify-between">
                <span>Trip Package:</span>
                <span className="font-semibold text-[#101C35]">{trip.title}</span>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span>
                <span className="font-semibold text-[#101C35]">{guestsCount} Traveler(s)</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Total:</span>
                <span className="font-bold text-[#1769E8] text-sm">${totalPrice.toLocaleString()} USD</span>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3 rounded-xl transition-colors cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">

            {step === 1 && (
              <div className="space-y-5 animate-in fade-in">

                {/* Trip Date Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2">
                    Select Departure Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    <select
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101C35] font-medium focus:ring-2 focus:ring-[#1769E8] focus:border-transparent outline-none cursor-pointer"
                    >
                      {trip.departureDates.map((date) => (
                        <option key={date} value={date}>
                          {new Date(date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })} — Guaranteed Departure
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#101C35]">
                      Number of Guests
                    </label>
                    <span className="text-xs text-gray-500">Max group size: {trip.maxGroupSize}</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200">
                    <Users className="w-5 h-5 text-gray-500" />
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                    >
                      -
                    </button>
                    <span className="font-bold text-[#101C35] text-base px-2">
                      {guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuestsCount(Math.min(trip.maxGroupSize, guestsCount + 1))}
                      className="w-8 h-8 rounded-lg bg-white border border-gray-200 text-gray-700 font-bold hover:bg-gray-100 flex items-center justify-center cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Summary Breakdown */}
                <div className="bg-[#EAF5FF] rounded-xl p-4 border border-[#1769E8]/20 space-y-2">
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>${trip.startingPrice.toLocaleString()} x {guestsCount} guest(s)</span>
                    <span className="font-semibold text-[#101C35]">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Taxes & Concierge Fees</span>
                    <span className="text-emerald-600 font-semibold">Included</span>
                  </div>
                  <div className="border-t border-[#1769E8]/20 pt-2 flex justify-between text-sm font-bold text-[#101C35]">
                    <span>Total Price</span>
                    <span className="text-[#1769E8] text-lg">${totalPrice.toLocaleString()} USD</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  Continue to Traveler Info <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            )}

            {step === 2 && (
              <div className="space-y-4 animate-in fade-in">

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-1">
                    Special Requests / Dietary Notes
                  </label>
                  <textarea
                    rows={2}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Dietary requirements, honeymoon setup, room preferences..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#1769E8] outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                  <Lock className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>No immediate payment required. Your spot is reserved risk-free for 48 hours.</span>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl text-sm hover:bg-gray-50 cursor-pointer"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-2/3 bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Confirm Reservation'}
                  </button>
                </div>

              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
};
