export type TravelCategory =
  | 'Beaches'
  | 'Mountains'
  | 'Cities'
  | 'Experiences'
  | 'Sustainable Travel'
  | 'Adventure';

export type TravelStyle =
  | 'Relax & Unwind'
  | 'Adventure'
  | 'Family Travel'
  | 'Honeymoon'
  | 'Sustainable'
  | 'Cultural Experiences'
  | 'Food & Drink'
  | 'Solo Travel';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  continent: 'Asia' | 'Europe' | 'North America' | 'South America' | 'Africa' | 'Oceania';
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  galleryImages: string[];
  category: TravelCategory;
  travelStyles: TravelStyle[];
  rating: number;
  reviewsCount: number;
  bestTimeToVisit: string;
  averagePricePerDay: number;
  popularAttractions: { name: string; description: string; image: string }[];
  suggestedActivities: string[];
  accommodations: { name: string; type: string; rating: number; priceRange: string; image: string }[];
  travelTips: string[];
}

export interface TripItineraryDay {
  day: number;
  title: string;
  description: string;
  mealsIncluded: string[];
  highlights: string[];
  image?: string;
}

export interface TripPackage {
  id: string;
  title: string;
  destinationId: string;
  destinationName: string;
  location: string;
  country: string;
  durationDays: number;
  startingPrice: number;
  originalPrice?: number;
  heroImage: string;
  galleryImages: string[];
  shortDescription: string;
  overview: string;
  category: TravelCategory;
  travelStyle: TravelStyle;
  rating: number;
  reviewsCount: number;
  departureDates: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: TripItineraryDay[];
  maxGroupSize: number;
}

export interface Experience {
  id: string;
  title: string;
  category: TravelCategory | TravelStyle;
  location: string;
  country: string;
  durationHours: number;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  included: string[];
}

export interface TravelGuide {
  id: string;
  title: string;
  subtitle: string;
  destination: string;
  country: string;
  category: string;
  readTimeMinutes: number;
  publishedDate: string;
  author: { name: string; role: string; avatar: string };
  heroImage: string;
  summary: string;
  sections: { heading: string; content: string; image?: string }[];
  packingList?: string[];
  sustainableTips?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  destinationVisited: string;
  rating: number;
  quote: string;
  date: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'guest';
  avatar?: string;
  joinedDate: string;
}

export interface BookingRequest {
  tripId: string;
  tripTitle: string;
  startDate: string;
  guestsCount: number;
  totalPrice: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  specialRequests?: string;
}
