import React from 'react';
import { useApp } from '../../context/AppContext';
import type { TravelCategory } from '../../types';
import { Sun, Mountain, Building2, Sparkles, Leaf, Compass, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: TravelCategory;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'Beaches',
    label: 'Beaches',
    description: 'Turquoise waters & coastal paradises',
    icon: <Sun className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Mountains',
    label: 'Mountains',
    description: 'Alpine peaks & panoramic wilderness',
    icon: <Mountain className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Cities',
    label: 'Cities',
    description: 'Historic architecture & urban culture',
    icon: <Building2 className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Experiences',
    label: 'Experiences',
    description: 'Curated dining & local traditions',
    icon: <Sparkles className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Sustainable Travel',
    label: 'Sustainable Travel',
    description: 'Eco-resorts & conservation journeys',
    icon: <Leaf className="w-6 h-6 text-[#1769E8]" />
  },
  {
    id: 'Adventure',
    label: 'Adventure',
    description: 'Thrilling treks & active explorations',
    icon: <Compass className="w-6 h-6 text-[#1769E8]" />
  }
];

export const CategorySelector: React.FC = () => {
  const { setSelectedCategory, setActiveTab, selectedCategory } = useApp();

  const handleCategoryClick = (cat: TravelCategory) => {
    setSelectedCategory(cat);
    setActiveTab('destinations');
  };

  return (
    <div className="relative -mt-12 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-floating border border-gray-100">

        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#1769E8]">
              Browse By Category
            </h3>
            <p className="font-serif text-2xl font-bold text-[#101C35] mt-0.5">
              What kind of journey inspires you?
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCategory(null);
              setActiveTab('destinations');
            }}
            className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#1769E8] hover:text-[#1253BD] transition-colors cursor-pointer"
          >
            Explore All Categories <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Grid of 6 Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex flex-col items-start p-5 rounded-2xl transition-all duration-300 text-left border group cursor-pointer ${
                  isSelected
                    ? 'bg-[#EAF5FF] border-[#1769E8] shadow-sm transform -translate-y-1'
                    : 'bg-[#F8F8F5] hover:bg-white border-transparent hover:border-gray-200 hover:shadow-card hover:-translate-y-1'
                }`}
              >
                <div className={`p-3 rounded-xl mb-3 transition-colors ${
                  isSelected ? 'bg-[#1769E8] text-white' : 'bg-white group-hover:bg-[#EAF5FF] text-[#1769E8]'
                }`}>
                  {cat.icon}
                </div>
                <h4 className="font-bold text-[#101C35] text-base group-hover:text-[#1769E8] transition-colors">
                  {cat.label}
                </h4>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
