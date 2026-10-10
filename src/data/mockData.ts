import type { Destination, TripPackage, Experience, TravelGuide, Testimonial } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Cyclades Islands',
    continent: 'Europe',
    category: 'Beaches',
    travelStyles: ['Honeymoon', 'Relax & Unwind', 'Cultural Experiences'],
    shortDescription: 'Iconic views and timeless beauty.',
    fullDescription: 'Famous for its dramatic views, stunning sunsets from Oia town, strange white aubergines, and its very own active volcano, Santorini is a bucket-list destination where traditional whitewashed cliffside villages gaze down onto the deep indigo Aegean sea.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
    reviewsCount: 342,
    bestTimeToVisit: 'April to October',
    averagePricePerDay: 280,
    popularAttractions: [
      {
        name: 'Oia Village',
        description: 'World-famous whitewashed alleyways, blue-domed churches, and golden hour sunset vistas.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Red Beach (Akrotiri)',
        description: 'Unique volcanic red sand beach bounded by soaring rust-colored cliffs.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Skaros Rock',
        description: 'A striking rocky headland featuring ruins of a medieval Venetian fortress.',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Sunset catamaran cruise around the Caldera',
      'Assyrtiko wine tasting at cliffside vineyards',
      'Hiking the scenic trail from Fira to Oia',
      'Exploring Akrotiri prehistoric ruins'
    ],
    accommodations: [
      {
        name: 'Canaves Oia Luxury Suites',
        type: 'Cave Resort & Spa',
        rating: 5.0,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Grace Hotel Santorini',
        type: 'Boutique Hotel',
        rating: 4.9,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Book sunset restaurants in Oia at least 2 weeks in advance during peak season.',
      'Wear sturdy walking shoes for the cobblestones and steep cliff stairways.',
      'Take local KTEL buses or rent a quad bike to explore inland villages easily.'
    ]
  },
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Lesser Sunda Islands',
    continent: 'Asia',
    category: 'Beaches',
    travelStyles: ['Relax & Unwind', 'Adventure', 'Cultural Experiences', 'Solo Travel'],
    shortDescription: 'Temples, beaches and beyond.',
    fullDescription: 'Known as the Island of the Gods, Bali appeals to travelers with its emerald rice terraces, sacred temples, world-class surf breaks, holistic wellness retreats, and warm spiritual culture.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
    reviewsCount: 512,
    bestTimeToVisit: 'April to October',
    averagePricePerDay: 130,
    popularAttractions: [
      {
        name: 'Tegallalang Rice Terraces',
        description: 'Cascading green rice fields carved into lush valleys in Ubud.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Uluwatu Temple',
        description: 'Perched high on a steep cliff soaring 70 meters above the roaring Indian Ocean.',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Sunrise hike to Mount Batur summit',
      'Traditional Balinese spa sanctuary treatment',
      'Surfing lesson on Seminyak beach',
      'Cooking class with an authentic local family'
    ],
    accommodations: [
      {
        name: 'Hanging Gardens of Bali',
        type: 'Jungle Eco Resort',
        rating: 4.9,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Dress respectfully with sarongs when visiting temple sacred grounds.',
      'Carry cash (IDR) for local artisanal markets and street food warungs.'
    ]
  },
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Kansai',
    continent: 'Asia',
    category: 'Cities',
    travelStyles: ['Cultural Experiences', 'Food & Drink', 'Family Travel'],
    shortDescription: 'Tradition meets modern life.',
    fullDescription: 'Kyoto was Japan’s imperial capital for over a millennium. Today, it remains the cultural heartland, renowned for thousands of classical Buddhist temples, gardens, imperial palaces, Shinto shrines and traditional wooden machiya houses.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.95,
    reviewsCount: 428,
    bestTimeToVisit: 'March to May & October to November',
    averagePricePerDay: 210,
    popularAttractions: [
      {
        name: 'Fushimi Inari Shrine',
        description: 'Famed trail lined with thousands of vermilion torii gates winding up Mount Inari.',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Arashiyama Bamboo Grove',
        description: 'Towering bamboo stalks creating a magical natural green canopy path.',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Private tea ceremony with a kimono master',
      'Evening walking tour through historical Gion district',
      'Sampling Kaiseki multi-course fine dining',
      'Renting bicycles to explore Philosopher’s Path'
    ],
    accommodations: [
      {
        name: 'Hoshinoya Kyoto',
        type: 'Riverside Luxury Ryokan',
        rating: 5.0,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Get an IC transport card (Suica/Pasmo/ICOCA) for effortless train & bus rides.',
      'Visit Fushimi Inari early at sunrise (6-7 AM) to escape large crowd surges.'
    ]
  },
  {
    id: 'banff-canada',
    name: 'Banff',
    country: 'Canada',
    region: 'Alberta',
    continent: 'North America',
    category: 'Mountains',
    travelStyles: ['Adventure', 'Family Travel', 'Sustainable'],
    shortDescription: 'Nature at its most breathtaking.',
    fullDescription: 'Set in the heart of the Canadian Rocky Mountains, Banff National Park is a wonderland of turquoise glacial lakes, majestic snow-capped summits, abundant wildlife, and crisp mountain pine air.',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511497584788-876761465586?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.92,
    reviewsCount: 298,
    bestTimeToVisit: 'June to September & December to March',
    averagePricePerDay: 240,
    popularAttractions: [
      {
        name: 'Moraine Lake & Valley of the Ten Peaks',
        description: 'Vibrant turquoise waters cradled by towering granite peaks.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Lake Louise',
        description: 'Iconic glacial lake offering canoeing in summer and ice skating in winter.',
        image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Canoeing on crystal clear Moraine Lake',
      'Riding the Banff Gondola to Sulphur Mountain summit',
      'Driving the Icefields Parkway toward Jasper',
      'Soaking in natural Banff Upper Hot Springs'
    ],
    accommodations: [
      {
        name: 'Fairmont Banff Springs Hotel',
        type: 'Heritage Castle Hotel',
        rating: 4.8,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Reserve Parks Canada shuttles for Moraine Lake early as parking sells out fast.',
      'Carry bear spray on all trail hikes and practice wildlife distance safety.'
    ]
  },
  {
    id: 'amalfi-coast-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    region: 'Campania',
    continent: 'Europe',
    category: 'Experiences',
    travelStyles: ['Honeymoon', 'Food & Drink', 'Relax & Unwind'],
    shortDescription: 'Colorful towns and coastal dreams.',
    fullDescription: 'A dramatic 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrento Peninsula, famous for cliffside pastel villages, terraced lemon groves, and azure Mediterranean waters.',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.88,
    reviewsCount: 389,
    bestTimeToVisit: 'May to October',
    averagePricePerDay: 310,
    popularAttractions: [
      {
        name: 'Positano',
        description: 'Steep cliffside village cascades down to pebble beaches and boutique cafes.',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Ravello Gardens',
        description: 'Tranquil clifftop village known for Villa Cimbrone’s Terrace of Infinity.',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Chartering a wooden Gozo boat to Capri island',
      'Hiking the Path of the Gods (Sentiero degli Dei)',
      'Limoncello craft tasting in Ravello',
      'Private Neapolitan pizza & pasta masterclass'
    ],
    accommodations: [
      {
        name: 'Le Sirenuse Positano',
        type: 'Luxury Boutique Resort',
        rating: 5.0,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Take ferry boats between coastal towns to enjoy breathtaking sea perspectives and avoid narrow winding traffic.'
    ]
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    continent: 'Asia',
    category: 'Sustainable Travel',
    travelStyles: ['Honeymoon', 'Relax & Unwind', 'Sustainable'],
    shortDescription: 'Pure paradise, always.',
    fullDescription: 'Tropical nation in the Indian Ocean composed of 26 ring-shaped atolls made up of more than 1,000 coral islands. Celebrated for overwater villas, luminous turquoise lagoons, and vibrant coral reefs.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.98,
    reviewsCount: 610,
    bestTimeToVisit: 'November to April',
    averagePricePerDay: 450,
    popularAttractions: [
      {
        name: 'Baa Atoll Biosphere Reserve',
        description: 'UNESCO marine reserve swimming with manta rays and whale sharks.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Bioluminescent Beach (Vaadhoo Island)',
        description: 'Magical glowing sea of stars caused by natural marine phytoplankton.',
        image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Snorkeling alongside gentle Manta Rays in Hanifaru Bay',
      'Overwater bungalow private sunset dinner',
      'Coral restoration reef planting workshop',
      'Deep sea diving in clear blue atoll channels'
    ],
    accommodations: [
      {
        name: 'Soneva Fushi Eco Resort',
        type: 'Private Atoll Sanctuary',
        rating: 5.0,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Seaplane transfers operate only during daylight hours; schedule international flights accordingly.'
    ]
  },
  {
    id: 'swiss-alps-switzerland',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Bernese Oberland',
    continent: 'Europe',
    category: 'Adventure',
    travelStyles: ['Adventure', 'Solo Travel'],
    shortDescription: 'Majestic peaks, alpine meadows, and serene lakes.',
    fullDescription: 'Home to the iconic Matterhorn, Jungfrau, and Zermatt, the Swiss Alps present towering snow-clad peaks, pristine mountain air, world-famous scenic railways, and charming timber chalets.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.91,
    reviewsCount: 275,
    bestTimeToVisit: 'Year round (Skiing Dec-Mar, Hiking Jun-Sep)',
    averagePricePerDay: 320,
    popularAttractions: [
      {
        name: 'Matterhorn Glacier Paradise',
        description: 'Europe’s highest mountain railway cable car station.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Glacier Express panaromic train journey',
      'Hike past five alpine lakes in Zermatt',
      'Authentic Swiss cheese fondue tasting'
    ],
    accommodations: [
      {
        name: 'The Chedi Andermatt',
        type: 'Alpine Luxury Resort',
        rating: 4.9,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Purchase a Swiss Travel Pass for unlimited train, boat, and cable car travel across the country.'
    ]
  },
  {
    id: 'cape-town-south-africa',
    name: 'Cape Town',
    country: 'South Africa',
    region: 'Western Cape',
    continent: 'Africa',
    category: 'Experiences',
    travelStyles: ['Adventure', 'Food & Drink', 'Cultural Experiences'],
    shortDescription: 'Where mountains meet ocean and cultures blend.',
    fullDescription: 'Framed by dramatic Table Mountain, white beaches, and fertile Winelands vineyards, Cape Town is a vibrant cosmopolitan metropolis teeming with rich heritage and natural wonders.',
    heroImage: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.86,
    reviewsCount: 215,
    bestTimeToVisit: 'November to March',
    averagePricePerDay: 160,
    popularAttractions: [
      {
        name: 'Table Mountain Aerial Cableway',
        description: '360-degree rotating cable car views over Cape Peninsula.',
        image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80'
      }
    ],
    suggestedActivities: [
      'Visiting African penguins at Boulders Beach',
      'Wine tasting in Stellenbosch and Franschhoek',
      'Cape Point national park scenic drive'
    ],
    accommodations: [
      {
        name: 'The Silo Hotel',
        type: 'Design Hotel',
        rating: 4.9,
        priceRange: '$$$$',
        image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
      }
    ],
    travelTips: [
      'Rent a car for self-drive coastal tours along Chapmans Peak Drive.'
    ]
  }
];

export const FEATURED_TRIPS: TripPackage[] = [
  {
    id: 'maldives-island-hopping',
    title: 'Island Hopping in the Maldives',
    destinationId: 'maldives',
    destinationName: 'Maldives',
    location: 'Baa Atoll & South Ari Atoll',
    country: 'Maldives',
    durationDays: 7,
    startingPrice: 1999,
    originalPrice: 2499,
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Crystal-clear waters, white-sand beaches, and total serenity.',
    overview: 'Experience ultimate island tranquility across private luxury resorts and authentic local fishing villages. Glide between pristine coral reefs, dine beneath marine sanctuaries, and unwind in your private overwater villa with direct ocean access.',
    category: 'Sustainable Travel',
    travelStyle: 'Honeymoon',
    rating: 4.98,
    reviewsCount: 142,
    departureDates: ['2026-11-05', '2026-11-18', '2026-12-02', '2027-01-10', '2027-02-14'],
    inclusions: [
      'Luxury overwater villa accommodation with infinity plunge pool',
      'Roundtrip scenic seaplane transfers from Malé International',
      'Daily gourmet breakfast & candlelit sunset beachfront dinners',
      'Guided marine biologist snorkeling excursion in Baa Atoll',
      'Sunset dolphin safari on a traditional wooden dhoni',
      'Complimentary non-motorized watersports gear (paddleboards, kayaks)'
    ],
    exclusions: [
      'International airfare flights to Malé',
      'Personal travel insurance',
      'Alcoholic beverages outside dinner package'
    ],
    maxGroupSize: 12,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Paradise & Seaplane Flight',
        description: 'Arrive at Velana International Airport in Malé. Take a breathtaking 30-minute seaplane flight over turquoise atolls. Welcome drinks and check-in to your luxury overwater villa.',
        mealsIncluded: ['Dinner'],
        highlights: ['Seaplane aerial views', 'Overwater villa check-in', 'Welcome cocktail party']
      },
      {
        day: 2,
        title: 'Coral Reef Snorkeling & Marine Sanctuary',
        description: 'Join our resident marine biologist for an educational reef briefing followed by a guided snorkeling session among sea turtles, reef sharks, and vibrant coral gardens.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        highlights: ['Marine biologist talk', 'Sea turtle snorkeling']
      },
      {
        day: 3,
        title: 'Local Island Cultural Experience',
        description: 'Visit a nearby inhabited island to experience authentic Maldivian culture, sample homemade coconut delights, and meet local handicraft artisans.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Local island tour', 'Handicraft shopping']
      },
      {
        day: 4,
        title: 'Private Sandbank Picnic',
        description: 'Be whisked away by speedboat to a deserted white sandbank in the middle of the Indian Ocean for a gourmet private lunch setup.',
        mealsIncluded: ['Breakfast', 'Lunch', 'Dinner'],
        highlights: ['Private sandbank lunch', 'Crystal turquoise waters']
      },
      {
        day: 5,
        title: 'Spa Sanctuary & Sunset Dolphin Cruise',
        description: 'Enjoy a 90-minute holistic Balinese massage at the overwater spa. In the late afternoon, embark on a sunset cruise with wild spinner dolphins leaping alongside the boat.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Overwater spa treatment', 'Dolphin cruise']
      },
      {
        day: 6,
        title: 'Leisure Day & Underwater Dining Experience',
        description: 'Spend your day relaxing on white beaches or paddleboarding. Tonight, savor a memorable multi-course farewell dinner inside an underwater glass restaurant.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Beach relaxation', 'Sub-aquatic dinner']
      },
      {
        day: 7,
        title: 'Farewell Maldives',
        description: 'Savor your final tropical sunrise breakfast on your private deck before taking the return seaplane flight to Malé for your onward journey home.',
        mealsIncluded: ['Breakfast'],
        highlights: ['Sunrise deck breakfast', 'Seaplane return']
      }
    ]
  },
  {
    id: 'italian-coastal-escape',
    title: 'Italian Coastal Escape',
    destinationId: 'amalfi-coast-italy',
    destinationName: 'Amalfi Coast',
    location: 'Positano, Amalfi & Ravello',
    country: 'Italy',
    durationDays: 8,
    startingPrice: 2499,
    originalPrice: 2899,
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555992336-fb0d29498b13?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Explore Amalfi, Positano, and Ravello’s timeless charm.',
    overview: 'Immerse yourself in La Dolce Vita along Italy’s iconic Amalfi Coast. From cliffside boutique hotels overlooking azure waves to private yacht tours to Capri, wine tastings in cliff orchards, and hand-rolled pasta lessons in Ravello.',
    category: 'Experiences',
    travelStyle: 'Food & Drink',
    rating: 4.94,
    reviewsCount: 186,
    departureDates: ['2026-10-20', '2026-11-10', '2027-04-15', '2027-05-02'],
    inclusions: [
      '7 nights in sea-view luxury boutique hotels',
      'Private Mercedes transfers across Rome / Naples & Amalfi Coast',
      'Private day yacht excursion around Capri island with Blue Grotto entry',
      'Daily authentic breakfast & 3 regional wine-paired gourmet dinners',
      'Hands-on pasta and Neapolitan pizza masterclass with a master chef',
      'Guided walk along the historic Path of the Gods trail'
    ],
    exclusions: [
      'International flights to Naples/Rome',
      'Personal shopping & city taxes (€4/night)'
    ],
    maxGroupSize: 10,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Naples & Transfer to Positano',
        description: 'Private driver transfer from Naples airport or train station along the stunning coastal roads to Positano. Check into your sea-view hotel terrace.',
        mealsIncluded: ['Dinner'],
        highlights: ['Scenic drive', 'Positano sea-view check-in']
      },
      {
        day: 2,
        title: 'Exploring Positano & Cliffside Boutiques',
        description: 'Guided morning stroll through Positano’s stairways, colorful linen shops, and artisan leather sandal workshops.',
        mealsIncluded: ['Breakfast', 'Lunch'],
        highlights: ['Artisan shops', 'Spiaggia Grande beach']
      },
      {
        day: 3,
        title: 'Private Yacht Day Tour to Capri',
        description: 'Board a private wooden Gozzo yacht. Swim in emerald sea coves, explore the Faraglioni rock formations, and visit the iconic Blue Grotto.',
        mealsIncluded: ['Breakfast', 'Lunch'],
        highlights: ['Private Capri yacht cruise', 'Blue Grotto visit']
      },
      {
        day: 4,
        title: 'Ravello Gardens & Limoncello Tasting',
        description: 'Travel uphill to Ravello. Tour Villa Rufolo and Villa Cimbrone’s breathtaking gardens, followed by a limoncello distillery visit.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Terrace of Infinity', 'Limoncello craft tasting']
      },
      {
        day: 5,
        title: 'Hiking the Path of the Gods',
        description: 'Embark on a breathtaking cliffside hike along Sentiero degli Dei with panoramic sea views across the entire peninsula.',
        mealsIncluded: ['Breakfast', 'Lunch'],
        highlights: ['Path of the Gods hike', 'Rustic mountain lunch']
      },
      {
        day: 6,
        title: 'Amalfi Cathedral & Authentic Culinary Class',
        description: 'Visit Amalfi town’s 9th-century Duomo. Later, join a hands-on culinary workshop at a traditional organic lemon farm.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Amalfi Duomo', 'Lemon farm cooking class']
      },
      {
        day: 7,
        title: 'Relaxation & Sunset Wine Tasting',
        description: 'Enjoy a leisurely morning on the beach. Conclude with a farewell multi-course dinner at a Michelin-starred cliffside restaurant.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Beach leisure', 'Michelin-starred farewell dinner']
      },
      {
        day: 8,
        title: 'Arrivederci Amalfi',
        description: 'Final espresso on the balcony before your private transfer back to Naples for your onward journey.',
        mealsIncluded: ['Breakfast'],
        highlights: ['Final espresso', 'Private transfer']
      }
    ]
  },
  {
    id: 'canadian-rockies-adventure',
    title: 'Canadian Rockies Adventure',
    destinationId: 'banff-canada',
    destinationName: 'Banff',
    location: 'Banff, Lake Louise & Jasper',
    country: 'Canada',
    durationDays: 6,
    startingPrice: 1799,
    originalPrice: 2099,
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Majestic mountains, turquoise lakes, and endless wonder.',
    overview: 'Embark on an invigorating journey through Banff and Jasper National Parks. Canoe across electric blue glacier lakes, walk onto ice fields aboard specialized ice explorers, and spot bears, elk, and eagles in their wild habitat.',
    category: 'Mountains',
    travelStyle: 'Adventure',
    rating: 4.91,
    reviewsCount: 114,
    departureDates: ['2026-11-12', '2026-12-05', '2027-06-10', '2027-07-20'],
    inclusions: [
      '5 nights luxury lodge accommodation (including Fairmont Banff Springs)',
      'Parks Canada discovery pass & guided wilderness safety expert',
      'Icefield Glacier Discovery Walk ticket & Columbia Icefield ride',
      'Canoe rental on Moraine Lake',
      'Banff Gondola admission tickets',
      'Daily breakfast & 2 mountain rustic dinners'
    ],
    exclusions: [
      'Flights to Calgary (YYC)',
      'Personal hiking gear & boots'
    ],
    maxGroupSize: 14,
    itinerary: [
      {
        day: 1,
        title: 'Calgary to Banff National Park',
        description: 'Meet your guide in Calgary and drive into the foothills of the Rockies. Check in to your Banff mountain resort.',
        mealsIncluded: ['Dinner'],
        highlights: ['Mountain drive', 'Banff lodge check-in']
      },
      {
        day: 2,
        title: 'Lake Louise & Moraine Lake Canoeing',
        description: 'Spend the morning paddling across Moraine Lake and hiking the Lake Agnes Tea House trail with spectacular alpine views.',
        mealsIncluded: ['Breakfast', 'Lunch'],
        highlights: ['Moraine Lake canoeing', 'Lake Agnes Tea House hike']
      },
      {
        day: 3,
        title: 'Icefields Parkway & Glacier Walk',
        description: 'Drive one of the world’s most scenic highways. Board an Ice Explorer all-terrain vehicle onto the Athabasca Glacier.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Icefields Parkway', 'Columbia Icefield walk']
      },
      {
        day: 4,
        title: 'Johnston Canyon & Banff Upper Hot Springs',
        description: 'Hike through Johnston Canyon along catwalks suspended over rushing waterfalls. Unwind in hot mineral springs.',
        mealsIncluded: ['Breakfast'],
        highlights: ['Johnston Canyon waterfalls', 'Hot springs soak']
      },
      {
        day: 5,
        title: 'Sulphur Mountain Gondola & Wildlife Safari',
        description: 'Ride the Banff Gondola for 360-degree views of six mountain ranges. Evening wildlife spotting tour for elk and grizzly bears.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Banff Gondola view', 'Wildlife spotting safari']
      },
      {
        day: 6,
        title: 'Return to Calgary',
        description: 'Enjoy a leisurely morning in Banff village for artisan shopping before returning to Calgary airport.',
        mealsIncluded: ['Breakfast'],
        highlights: ['Banff village shopping', 'Return drive']
      }
    ]
  },
  {
    id: 'kyoto-cultural-immersion',
    title: 'Kyoto Cultural & Culinary Journey',
    destinationId: 'kyoto-japan',
    destinationName: 'Kyoto',
    location: 'Kyoto, Nara & Arashiyama',
    country: 'Japan',
    durationDays: 7,
    startingPrice: 2299,
    originalPrice: 2599,
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=85',
    galleryImages: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80'
    ],
    shortDescription: 'Ancient zen temples, matcha rituals, and secret alleyways.',
    overview: 'Experience the quiet grandeur of Japan’s cultural capital. Sleep in traditional luxury ryokans with private hot spring baths, master tea ceremony etiquette, and sample multi-course Michelin kaiseki banquets.',
    category: 'Cities',
    travelStyle: 'Cultural Experiences',
    rating: 4.96,
    reviewsCount: 156,
    departureDates: ['2026-11-01', '2026-11-20', '2027-03-25', '2027-04-10'],
    inclusions: [
      '6 nights accommodation (3 nights luxury Japanese Ryokan + 3 nights boutique hotel)',
      'Private tea ceremony with a 15th-generation tea master',
      'Subscribed JR Rail Pass & local private transport',
      'Daily breakfast & 2 multi-course Kaiseki dinners',
      'Private Geisha cultural evening in Gion'
    ],
    exclusions: ['International flights to Kansai/Tokyo'],
    maxGroupSize: 8,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Kyoto & Ryokan Welcome',
        description: 'Arrive at Kyoto Station via Shinkansen. Private transfer to your luxury Ryokan. Onsen bath experience followed by welcome dinner.',
        mealsIncluded: ['Dinner'],
        highlights: ['Ryokan check-in', 'Private Onsen soak', 'Kaiseki dinner']
      },
      {
        day: 2,
        title: 'Fushimi Inari Sunrise & Gion Evening',
        description: 'Walk through thousands of vermilion torii gates at early sunrise. Evening stroll in Gion with private Maiko cultural performance.',
        mealsIncluded: ['Breakfast', 'Dinner'],
        highlights: ['Torii gates walk', 'Maiko performance']
      }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    title: 'Catamaran Sunset Cruise & Caldera Wine Tasting',
    category: 'Experiences',
    location: 'Santorini',
    country: 'Greece',
    durationHours: 5,
    price: 165,
    rating: 4.95,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Sail past volcanic hot springs, Red Beach, and watch the golden Oia sunset from the water.',
    description: 'Set sail on a luxury catamaran along Santorini’s flooded volcanic caldera. Stop to swim in thermal hot springs and white sand coves, enjoy a freshly prepared Greek BBQ lunch on deck, and sample crisp local Assyrtiko white wines as the sun sets into the sea.',
    highlights: [
      'Sailing past Akrotiri Lighthouse & Indian Rock',
      'Swimming & snorkeling in crystal turquoise waters',
      'Fresh Greek seafood & meat BBQ prepared onboard',
      'Complimentary open bar featuring local Santorini wines'
    ],
    included: ['Snorkeling equipment', 'Safety gear', 'Hotel pickup and drop-off', 'Greek BBQ meal']
  },
  {
    id: 'exp-2',
    title: 'Private Tea Ceremony & Kimono Workshop',
    category: 'Cultural Experiences',
    location: 'Kyoto',
    country: 'Japan',
    durationHours: 3,
    price: 120,
    rating: 4.98,
    reviewsCount: 185,
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Dress in authentic silk kimono and learn traditional Matcha whisking techniques.',
    description: 'Step into a 200-year-old traditional Machiya wooden house in historic Kyoto. Select your handcrafted silk kimono, learn proper wearing etiquette, and participate in a quiet, meditative tea ceremony led by a master teacher.',
    highlights: [
      'Professional silk kimono dressing session',
      'Guided explanation of Zen tea philosophy',
      'Whisking your own high-grade ceremonial matcha',
      'Tasting seasonal Japanese wagashi sweets'
    ],
    included: ['Kimono rental & dressing', 'Matcha tea & sweets', 'Souvenir photo']
  },
  {
    id: 'exp-3',
    title: 'Manta Ray & Whale Shark Snorkeling Safari',
    category: 'Sustainable Travel',
    location: 'Baa Atoll',
    country: 'Maldives',
    durationHours: 4,
    price: 210,
    rating: 4.99,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Swim side-by-side with majestic ocean giants in a UNESCO marine sanctuary.',
    description: 'Join marine biologists on a thrilling speedboat expedition inside UNESCO Baa Atoll. Snorkel in Hanifaru Bay where dozens of reef manta rays and gentle whale sharks filter-feed on plankton.',
    highlights: [
      'UNESCO Biosphere Reserve marine habitat access',
      'Guided by certified marine biologist researchers',
      'Underwater GoPro photos included'
    ],
    included: ['High-end snorkeling gear', 'Marine research donation fee', 'Refreshments & fruit']
  },
  {
    id: 'exp-4',
    title: 'Path of the Gods Guided Trek & Rustic Cliff Lunch',
    category: 'Adventure',
    location: 'Amalfi Coast',
    country: 'Italy',
    durationHours: 6,
    price: 140,
    rating: 4.91,
    reviewsCount: 140,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Hike ancient mountain paths high above Positano with an expert alpine guide.',
    description: 'Trek alongSentiero degli Dei, the breathtaking ancient mule path winding high above the Tyrrhenian Sea. Finish your trek at a rustic mountain farm with fresh mozzarella, homemade bread, and local red wine.',
    highlights: [
      'Unrivaled views of Positano & Capri island',
      'Learn about coastal geology and local folklore',
      'Farm-to-table lunch at a mountain shepherd house'
    ],
    included: ['Professional trekking guide', 'Rustic farm lunch & wine', 'Return bus transfer']
  }
];

export const TRAVEL_GUIDES: TravelGuide[] = [
  {
    id: 'santorini-ultimate-guide',
    title: 'The Ultimate Guide to Santorini: Beyond the Sunsets',
    subtitle: 'Everything you need to plan a dreamy escape to Greece’s famous volcanic island.',
    destination: 'Santorini',
    country: 'Greece',
    category: 'Destination Guide',
    readTimeMinutes: 7,
    publishedDate: 'October 2, 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Senior Travel Editor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
    summary: 'From quiet whitewashed alleyways in Pyrgos to volcanic vineyards and cliffside dining, discover how to experience Santorini like a seasoned global traveler.',
    sections: [
      {
        heading: '1. When is the best time to visit?',
        content: 'While July and August draw the biggest summer crowds, shoulder months like May, June, September, and October offer delightful 25°C weather, warm sea temperatures, lower hotel prices, and peaceful sunsets without the long queues.'
      },
      {
        heading: '2. Choosing where to stay',
        content: 'If you want iconic Caldera views, stay in Oia or Imerovigli. Imerovigli sits at the highest point of the cliff, offering quieter luxury resorts than Oia. For budget-conscious travelers or beach access, look toward Kamari and Perissa on the eastern coast.'
      },
      {
        heading: '3. Wine Tasting & Culinary Delights',
        content: 'Santorini’s volcanic soil produces world-renowned Assyrtiko grapes. Visit Santos Wines or Venetsanos Winery for sunset tastings paired with local fava dip, fried tomato keftedes, and fresh graviera cheese.'
      }
    ],
    packingList: [
      'Sturdy leather sandals or sneakers with good rubber grip',
      'Linen shirts and lightweight dresses for breezy afternoons',
      'High-SPF mineral sunscreen and wide-brim hat',
      'Rechargeable portable power bank for photo-heavy days'
    ],
    sustainableTips: [
      'Avoid riding donkeys up the steep stairs in Fira; choose the cable car or walk.',
      'Refill reusable water bottles at hotel purified dispensers to reduce plastic waste.'
    ]
  },
  {
    id: 'sustainable-travel-2026',
    title: '10 Essential Habits for Sustainable & Mindful Travel',
    subtitle: 'How to leave a positive footprint on every community and ecosystem you visit.',
    destination: 'Global',
    country: 'International',
    category: 'Sustainable Travel',
    readTimeMinutes: 5,
    publishedDate: 'September 18, 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Sustainability Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=85',
    summary: 'Travel is a privilege that brings us closer together. Learn actionable ways to protect fragile environments, support local economies, and respect indigenous traditions.',
    sections: [
      {
        heading: 'Support Small & Locally Owned Businesses',
        content: 'Instead of eating exclusively at international chains, dine at family-run trattorias, warungs, and izakayas. Hire local guides who know the land’s history and ensure your money directly supports resident families.'
      },
      {
        heading: 'Respect Wildlife Ethics',
        content: 'Never participate in activities that keep wild animals in captivity or force close interaction like elephant riding or tiger selfies. Choose ethical sanctuaries where animals roam free.'
      }
    ]
  },
  {
    id: 'kyoto-food-guide',
    title: 'The Foodie’s Secret Guide to Kyoto: Kaiseki, Ramen & Matcha',
    subtitle: 'Discover hidden alleyway eateries, ancient matcha tea houses, and Nishiki Market treats.',
    destination: 'Kyoto',
    country: 'Japan',
    category: 'Food & Drink',
    readTimeMinutes: 6,
    publishedDate: 'August 24, 2026',
    author: {
      name: 'Kenji Takahashi',
      role: 'Culinary Correspondent',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
    summary: 'Kyoto food is renowned for seasonality, delicate presentation, and subtle umami flavors. Here is where to eat like a local in Japan’s historic capital.',
    sections: [
      {
        heading: 'Nishiki Market: "Kyoto’s Kitchen"',
        content: 'Stroll down five narrow blocks lined with over one hundred food stalls. Try freshly grilled dango skewers, octopus stuffed with quail eggs, and pickled tsukemono vegetables.'
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sophia & Alexander Thorne',
    role: 'Honeymooners',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    destinationVisited: 'Santorini & Maldives',
    rating: 5,
    quote: 'Roamly crafted the most unforgettable honeymoon experience we could have ever dreamed of. Every detail — from private seaplane transfers to sunset catamarans — was executed with perfection.',
    date: 'September 2026'
  },
  {
    id: 'test-2',
    name: 'David Chen',
    role: 'Adventure Photographer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    destinationVisited: 'Canadian Rockies',
    rating: 5,
    quote: 'The trip itinerary brought us to secluded spots away from mass tour buses. Canoeing across Moraine Lake early in the morning with fog rising off the water was pure magic.',
    date: 'August 2026'
  },
  {
    id: 'test-3',
    name: 'Amara & Julian Sterling',
    role: 'Cultural Explorers',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    destinationVisited: 'Kyoto, Japan',
    rating: 5,
    quote: 'Roamly’s luxury Ryokan selection in Kyoto was world-class. The private tea ceremony and evening walk with our expert guide gave us a deep appreciation of Japanese culture.',
    date: 'July 2026'
  }
];
