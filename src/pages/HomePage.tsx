import React from 'react';
import { Hero } from '../components/home/Hero';
import { CategorySelector } from '../components/home/CategorySelector';
import { PopularDestinations } from '../components/home/PopularDestinations';
import { TravelYourWay } from '../components/home/TravelYourWay';
import { FeaturedTrips } from '../components/home/FeaturedTrips';
import { Testimonials } from '../components/home/Testimonials';
import { Newsletter } from '../components/home/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      <Hero />
      <CategorySelector />
      <PopularDestinations />
      <TravelYourWay />
      <FeaturedTrips />
      <Testimonials />
      <Newsletter />
    </div>
  );
};
