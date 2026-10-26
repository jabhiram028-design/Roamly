import React, { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { formatVisitorPrice } from './utils/currency';
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
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { Moon, Sun } from 'lucide-react';

const VisitorCurrencyLayer: React.FC = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const processedNodes = new WeakSet<Text>();
    const pricePattern = /₹\s*([\d,]+(?:\.\d+)?)\s*INR/g;

    const formatPriceText = (node: Text) => {
      if (processedNodes.has(node)) return;
      const original = node.nodeValue || '';
      if (!pricePattern.test(original)) return;

      pricePattern.lastIndex = 0;
      const updated = original.replace(pricePattern, (_match, amount: string) => {
        const usdAmount = Number(amount.replace(/,/g, ''));
        return Number.isFinite(usdAmount) ? formatVisitorPrice(usdAmount) : _match;
      });

      if (updated !== original) {
        processedNodes.add(node);
        node.nodeValue = updated;
      }
    };

    const scan = (root: Node) => {
      if (root.nodeType === Node.TEXT_NODE) {
        formatPriceText(root as Text);
        return;
      }
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let current: Node | null;
      while ((current = walker.nextNode())) formatPriceText(current as Text);
    };

    scan(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'characterData') {
          formatPriceText(mutation.target as Text);
        } else {
          mutation.addedNodes.forEach(scan);
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  return null;
};

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('roamly-theme');
    const shouldUseDark = saved === 'dark';
    setIsDark(shouldUseDark);
    document.documentElement.dataset.theme = shouldUseDark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    window.localStorage.setItem('roamly-theme', next ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle fixed right-5 top-[88px] sm:right-7 sm:top-[94px] z-[60]"
      aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
      title={isDark ? 'Day mode' : 'Night mode'}
    >
      <span className="theme-toggle__scene" aria-hidden="true">
        <span className="theme-toggle__day"><Sun className="w-3.5 h-3.5" /></span>
        <span className="theme-toggle__night"><Moon className="w-3.5 h-3.5" /></span>
      </span>
      <span className={`theme-toggle__thumb ${isDark ? 'is-night' : ''}`} aria-hidden="true">
        {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </span>
    </button>
  );
};

const AppContent: React.FC = () => {
  const { activeTab } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F5] text-[#4B5563] font-sans selection:bg-[#1769E8] selection:text-white">
      <VisitorCurrencyLayer />
      <Navbar />
      <ThemeToggle />

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
      <WhatsAppButton />
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
