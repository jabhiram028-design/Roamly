import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Users, ShieldCheck, CheckCircle, ChevronRight, Lock } from 'lucide-react';

export const BookingModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, selectedTripForBooking, submitBooking, user } = useApp();
  const [step, setStep] = useState<1 | 2>(1);
  const [startDate, setStartDate] = useState(selectedTripForBooking?.departureDates[0] || '2026-11-15');
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
    if (!name.trim() || !email.trim()) return;
    setIsSubmitting(true);
    const success = await submitBooking({ tripId: trip.id, tripTitle: trip.title, startDate, guestsCount, totalPrice, contactName: name, contactEmail: email, contactPhone: phone, specialRequests });
    setIsSubmitting(false);
    if (success) setIsCompleted(true);
  };

  const handleClose = () => { setIsCompleted(false); setStep(1); closeBookingModal(); };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-floating max-w-xl w-full overflow-hidden relative border border-gray-100 font-sans">
        <div className="bg-[#101C35] text-white p-6 relative">
          <button onClick={handleClose} className="absolute top-5 right-5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white cursor-pointer"><X className="w-5 h-5" /></button>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1769E8] font-bold mb-1"><ShieldCheck className="w-4 h-4" /> Official Booking Inquiry</div>
          <h3 className="font-serif text-2xl font-bold">{trip.title}</h3><p className="text-xs text-gray-300 mt-1">{trip.durationDays} Days • {trip.location}</p>
        </div>
        {isCompleted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-10 h-10" /></div>
            <h4 className="font-serif text-2xl font-bold text-[#101C35]">Reservation Request Sent!</h4>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">Thank you, <b>{name}</b>. Your booking request has been sent to the Roamly team. We will contact you at <b>{email}</b>.</p>
            <div className="bg-gray-50 rounded-xl p-4 text-left space-y-2 border border-gray-100 text-xs text-gray-600"><div className="flex justify-between"><span>Trip Package:</span><b>{trip.title}</b></div><div className="flex justify-between"><span>Guests:</span><b>{guestsCount} Traveler(s)</b></div><div className="flex justify-between"><span>Estimated Total:</span><b className="text-[#1769E8]">₹{totalPrice.toLocaleString()} INR</b></div></div>
            <button onClick={handleClose} className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3 rounded-xl cursor-pointer">Done & Return to Site</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {step === 1 && <div className="space-y-5">
              <div><label className="block text-xs font-bold uppercase tracking-wider text-[#101C35] mb-2">Select Departure Date</label><div className="relative"><Calendar className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" /><select value={startDate} onChange={e => setStartDate(e.target.value)} className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none">{trip.departureDates.map(date => <option key={date} value={date}>{new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} — Guaranteed Departure</option>)}</select></div></div>
              <div><div className="flex justify-between mb-2"><label className="text-xs font-bold uppercase tracking-wider text-[#101C35]">Number of Guests</label><span className="text-xs text-gray-500">Max group size: {trip.maxGroupSize}</span></div><div className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-200"><Users className="w-5 h-5 text-gray-500" /><button type="button" onClick={() => setGuestsCount(Math.max(1, guestsCount - 1))} className="w-8 h-8 rounded-lg bg-white border cursor-pointer">-</button><span className="font-bold">{guestsCount} {guestsCount === 1 ? 'Guest' : 'Guests'}</span><button type="button" onClick={() => setGuestsCount(Math.min(trip.maxGroupSize, guestsCount + 1))} className="w-8 h-8 rounded-lg bg-white border cursor-pointer">+</button></div></div>
              <div className="bg-[#EAF5FF] rounded-xl p-4 border border-[#1769E8]/20"><div className="flex justify-between text-sm"><span>Total Price</span><b className="text-[#1769E8] text-lg">₹{totalPrice.toLocaleString()} INR</b></div><div className="text-xs text-gray-500 mt-1">Taxes & concierge fees included</div></div>
              <button type="button" onClick={() => setStep(2)} className="w-full bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 cursor-pointer">Continue to Traveler Info <ChevronRight className="w-4 h-4" /></button>
            </div>}
            {step === 2 && <div className="space-y-4">
              <div><label className="block text-xs font-bold uppercase text-[#101C35] mb-1">Full Name *</label><input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Abhi Groups 1" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
              <div><label className="block text-xs font-bold uppercase text-[#101C35] mb-1">Email Address *</label><input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="jabhiram028@gmail.com" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
              <div><label className="block text-xs font-bold uppercase text-[#101C35] mb-1">Phone Number</label><input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+91 00000 00000" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
              <div><label className="block text-xs font-bold uppercase text-[#101C35] mb-1">Special Requests</label><textarea rows={2} value={specialRequests} onChange={e => setSpecialRequests(e.target.value)} placeholder="Dietary requirements, honeymoon setup, room preferences..." className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none" /></div>
              <div className="flex items-center gap-2 text-xs text-gray-500"><Lock className="w-4 h-4 text-emerald-500" /> No immediate payment required.</div>
              <div className="flex gap-3 pt-2"><button type="button" onClick={() => setStep(1)} className="w-1/3 py-3 border rounded-xl cursor-pointer">Back</button><button type="submit" disabled={isSubmitting} className="w-2/3 bg-[#1769E8] text-white font-semibold py-3 rounded-xl cursor-pointer disabled:opacity-50">{isSubmitting ? 'Sending Request...' : 'Confirm Reservation'}</button></div>
            </div>}
          </form>
        )}
      </div>
    </div>
  );
};
