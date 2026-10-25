import React from 'react';
import { useApp } from '../context/AppContext';
import { Mail, Calendar, Heart, ShieldCheck, LogOut, Compass, Crown } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, logout, wishlistIds, setActiveTab } = useApp();

  if (!user) {
    return (
      <div className="pt-32 pb-20 font-sans text-center max-w-md mx-auto px-4">
        <h2 className="font-serif text-3xl font-bold text-[#101C35]">Not Signed In</h2>
        <p className="text-gray-500 mt-2">Please log in to view your profile and reservation history.</p>
        <button onClick={() => setActiveTab('home')} className="mt-6 bg-[#1769E8] text-white px-6 py-2.5 rounded-full font-semibold text-sm cursor-pointer">Return Home</button>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-card border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-[#1769E8] text-white font-serif text-3xl font-bold flex items-center justify-center shadow-md">{user.name.charAt(0).toUpperCase()}</div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="font-serif text-3xl font-bold text-[#101C35]">{user.name}</h1>
                {user.role === 'owner' && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 border border-amber-200 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-700"><Crown className="w-3 h-3" /> Prime Owner</span>
                )}
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-1"><Mail className="w-4 h-4 text-gray-400" /> {user.email}</p>
              <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Member since {user.joinedDate}</p>
              <p className="text-xs font-semibold text-[#1769E8] mt-2">Owner of Roamly / Abhi Groups 1</p>
            </div>
          </div>
          <button onClick={logout} className="px-5 py-2.5 rounded-full border border-red-200 text-red-600 hover:bg-red-50 text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"><LogOut className="w-4 h-4" /> Sign Out</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div onClick={() => setActiveTab('wishlist')} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-card transition-all cursor-pointer flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Saved Wishlist</span><h3 className="font-serif text-3xl font-bold text-[#101C35] mt-1">{wishlistIds.length} Items</h3></div>
            <Heart className="w-8 h-8 text-red-500 fill-red-500/20" />
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Upcoming Trips</span><h3 className="font-serif text-3xl font-bold text-[#1769E8] mt-1">1 Confirmed</h3></div>
            <Compass className="w-8 h-8 text-[#1769E8]" />
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div><span className="text-xs font-bold text-gray-400 uppercase">Rewards Status</span><h3 className="font-serif text-3xl font-bold text-amber-500 mt-1">Gold Member</h3></div>
            <ShieldCheck className="w-8 h-8 text-amber-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
