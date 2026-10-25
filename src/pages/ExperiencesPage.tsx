import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EXPERIENCES } from '../data/mockData';
import { Clock, Star, CheckCircle2 } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const { openBookingModal, showToast } = useApp();
  const [selectedCat, setSelectedCat] = useState<string>('All');
  const categories = ['All', 'Experiences', 'Cultural Experiences', 'Sustainable Travel', 'Adventure'];
  const filteredExperiences = selectedCat === 'All' ? EXPERIENCES : EXPERIENCES.filter((e) => e.category === selectedCat);

  return (
    <div className="pt-28 pb-20 font-sans bg-[#F8F8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">Curated Activities</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#101C35] mt-1">Travel Experiences</h1>
          <p className="text-base sm:text-lg text-[#4B5563] mt-3">Immerse yourself in authentic local traditions, thrilling adventures, and fine culinary journeys.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => <button key={cat} onClick={() => setSelectedCat(cat)} className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${selectedCat === cat ? 'bg-[#1769E8] text-white shadow-md' : 'bg-white border border-gray-200 text-[#101C35] hover:bg-gray-50'}`}>{cat}</button>)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="bg-white rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col justify-between group">
              <div className="relative h-64 overflow-hidden">
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#101C35] flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /><span>{exp.rating} ({exp.reviewsCount})</span></div>
                <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-white flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#1769E8]" /><span>{exp.durationHours} Hours</span></div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2"><span className="font-bold text-[#1769E8] uppercase">{exp.category}</span><span>{exp.location}, {exp.country}</span></div>
                  <h3 className="font-serif text-2xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors">{exp.title}</h3>
                  <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{exp.description}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-1.5"><span className="text-xs font-bold text-[#101C35] uppercase block mb-1">Highlights:</span>{exp.highlights.slice(0, 3).map((h, i) => <div key={i} className="flex items-center gap-2 text-xs text-gray-600"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" /><span>{h}</span></div>)}</div>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <div><span className="text-xs text-gray-400 block font-medium">Price per person</span><span className="text-2xl font-bold text-[#101C35]">₹{exp.price} INR</span></div>
                  <button onClick={() => { showToast(`Inquiry sent for ${exp.title}`, 'success'); openBookingModal(); }} className="bg-[#1769E8] hover:bg-[#1253BD] text-white font-semibold px-6 py-2.5 rounded-full text-xs transition-colors shadow-sm cursor-pointer">Reserve Experience</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
