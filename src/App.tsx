import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { TripsPage } from './pages/TripsPage';
import { TripDetailPage } from './pages/TripDetailPage';
import { TravelGuidesPage } from './pages/TravelGuidesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { WishlistPage } from './pages/WishlistPage';
import { ProfilePage } from './pages/ProfilePage';
import { BookingModal } from './components/common/BookingModal';
import { SearchModal } from './components/common/SearchModal';
import { AuthModal } from './components/common/AuthModal';
import { ToastContainer } from './components/common/Toast';

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#4B5563] font-sans selection:bg-[#1769E8] selection:text-white">
      <Navbar />

      <main className="flex-1">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'destinations' && <DestinationsPage />}
        {activeTab === 'destination-detail' && <DestinationDetailPage />}
        {activeTab === 'experiences' && <ExperiencesPage />}
        {activeTab === 'trips' && <TripsPage />}
        {activeTab === 'trip-detail' && <TripDetailPage />}
        {activeTab === 'guides' && <TravelGuidesPage />}
        {activeTab === 'guide-detail' && <TravelGuidesPage />}
        {activeTab === 'about' && <AboutUsPage />}
        {activeTab === 'wishlist' && <WishlistPage />}
        {activeTab === 'profile' && <ProfilePage />}
      </main>

      <Footer />

      {/* Global Modals & Notifications */}
      <BookingModal />
      <SearchModal />
      <AuthModal />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
