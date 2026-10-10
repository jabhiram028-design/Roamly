import React from 'react';
import { useApp } from '../../context/AppContext';
import type { TravelStyle } from '../../types';
import { Waves, Compass, Users, Heart, Leaf, Landmark, Utensils, UserCheck, ArrowRight } from 'lucide-react';

interface StyleItem {
  id: TravelStyle;
  label: string;
  count: string;
  icon: React.ReactNode;
}

const TRAVEL_STYLES: StyleItem[] = [
  {
    id: 'Relax & Unwind',
    label: 'Relax & Unwind',
    count: '42 Destinations',
    icon: <Waves className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Adventure',
    label: 'Adventure',
    count: '38 Destinations',
    icon: <Compass className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Family Travel',
    label: 'Family Travel',
    count: '29 Destinations',
    icon: <Users className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Honeymoon',
    label: 'Honeymoon',
    count: '34 Destinations',
    icon: <Heart className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Sustainable',
    label: 'Sustainable',
    count: '25 Eco Resorts',
    icon: <Leaf className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Cultural Experiences',
    label: 'Cultural Experiences',
    count: '50 Heritage Sites',
    icon: <Landmark className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Food & Drink',
    label: 'Food & Drink',
    count: '31 Culinary Tours',
    icon: <Utensils className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Solo Travel',
    label: 'Solo Travel',
    count: '40 Safe Havens',
    icon: <UserCheck className="w-6 h-6 text-[#1769E8]" />
  }
];

export const TravelYourWay: React.FC = () => {
  const { setSelectedStyle, setActiveTab } = useApp();

  const handleStyleClick = (style: TravelStyle) => {
    setSelectedStyle(style);
    setActiveTab('destinations');
  };

  return (
    <section className="py-20 bg-[#EAF5FF] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#101C35] mt-1">
            Travel Your Way
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] mt-3 font-normal">
            Find experiences that match your travel style.
          </p>
        </div>

        {/* 8 Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {TRAVEL_STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => handleStyleClick(style.id)}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-card border border-white hover:border-[#1769E8]/30 transition-all duration-300 flex flex-col items-start group cursor-pointer text-left transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF5FF] group-hover:bg-[#1769E8] text-[#1769E8] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                {style.icon}
              </div>

              <h4 className="font-serif text-xl font-bold text-[#101C35] group-hover:text-[#1769E8] transition-colors">
                {style.label}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {style.count}
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100 w-full flex items-center justify-between text-xs font-bold text-[#1769E8] opacity-80 group-hover:opacity-100">
                <span>Explore Journeys</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
