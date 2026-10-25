import React, { createContext, useContext, useState, useEffect } from 'react';
import { FEATURED_TRIPS } from '../data/mockData';
import type { TripPackage, UserProfile } from '../types';

export type TabType =
  | 'home'
  | 'destinations'
  | 'destination-detail'
  | 'experiences'
  | 'trips'
  | 'trip-detail'
  | 'guides'
  | 'guide-detail'
  | 'about'
  | 'wishlist'
  | 'profile';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface AppContextType {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  selectedDestinationId: string | null;
  selectedTripId: string | null;
  selectedGuideId: string | null;
  navigateToDestination: (id: string) => void;
  navigateToTrip: (id: string) => void;
  navigateToGuide: (id: string) => void;

  // Wishlist
  wishlistIds: string[];
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;

  // Search & Filter
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  selectedStyle: string | null;
  setSelectedStyle: (style: string | null) => void;

  // User & Auth
  user: UserProfile | null;
  login: (email: string, name: string) => void;
  signup: (email: string, name: string) => void;
  logout: () => void;
  isAuthModalOpen: boolean;
  authMode: 'login' | 'signup';
  openAuthModal: (mode?: 'login' | 'signup') => void;
  closeAuthModal: () => void;

  // Booking Modal
  isBookingModalOpen: boolean;
  selectedTripForBooking: TripPackage | null;
  openBookingModal: (trip?: TripPackage) => void;
  closeBookingModal: () => void;
  submitBooking: (bookingData: any) => Promise<boolean>;

  // Search Modal
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;

  // Toast
  toasts: Toast[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTabState] = useState<TabType>('home');
  const [selectedDestinationId, setSelectedDestinationId] = useState<string | null>(null);
  const [selectedTripId, setSelectedTripId] = useState<string | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);

  // Wishlist stored in local storage
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('roamly_wishlist');
      return saved ? JSON.parse(saved) : ['santorini-greece', 'maldives-island-hopping'];
    } catch {
      return ['santorini-greece', 'maldives-island-hopping'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('roamly_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  // Auth state
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('roamly_user');
      return saved ? JSON.parse(saved) : {
        id: 'usr-1',
        name: 'Abhi Groups 1',
        email: 'jabhiram028@gamail.com',
        joinedDate: 'October 2025'
      };
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  // Booking Modal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTripForBooking, setSelectedTripForBooking] = useState<TripPackage | null>(null);

  // Search Modal
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Toast System
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setActiveTab = (tab: TabType) => {
    setActiveTabState(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDestination = (id: string) => {
    setSelectedDestinationId(id);
    setActiveTab('destination-detail');
  };

  const navigateToTrip = (id: string) => {
    setSelectedTripId(id);
    setActiveTab('trip-detail');
  };

  const navigateToGuide = (id: string) => {
    setSelectedGuideId(id);
    setActiveTab('guide-detail');
  };

  const toggleWishlist = (id: string) => {
    if (wishlistIds.includes(id)) {
      setWishlistIds((prev) => prev.filter((item) => item !== id));
      showToast('Removed from your wishlist', 'info');
    } else {
      setWishlistIds((prev) => [...prev, id]);
      showToast('Added to your wishlist!', 'success');
    }
  };

  const isInWishlist = (id: string) => wishlistIds.includes(id);

  const login = (email: string, name: string) => {
    const newUser: UserProfile = {
      id: `usr-${Date.now()}`,
      name: name || email.split('@')[0],
      email,
      joinedDate: 'October 2026'
    };
    setUser(newUser);
    localStorage.setItem('roamly_user', JSON.stringify(newUser));
    showToast(`Welcome back, ${newUser.name}!`, 'success');
    closeAuthModal();
  };

  const signup = (email: string, name: string) => {
    login(email, name);
    showToast('Account created successfully!', 'success');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('roamly_user');
    showToast('Signed out successfully', 'info');
  };

  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const openBookingModal = (trip?: TripPackage) => {
    if (trip) {
      setSelectedTripForBooking(trip);
    } else if (!selectedTripForBooking) {
      setSelectedTripForBooking(FEATURED_TRIPS[0]);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const submitBooking = async (_bookingData: any): Promise<boolean> => {
    // Simulate server response
    await new Promise((resolve) => setTimeout(resolve, 800));
    showToast('Booking request submitted! Check your email for confirmation.', 'success');
    closeBookingModal();
    return true;
  };

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        selectedDestinationId,
        selectedTripId,
        selectedGuideId,
        navigateToDestination,
        navigateToTrip,
        navigateToGuide,
        wishlistIds,
        toggleWishlist,
        isInWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedStyle,
        setSelectedStyle,
        user,
        login,
        signup,
        logout,
        isAuthModalOpen,
        authMode,
        openAuthModal,
        closeAuthModal,
        isBookingModalOpen,
        selectedTripForBooking,
        openBookingModal,
        closeBookingModal,
        submitBooking,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal,
        toasts,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
