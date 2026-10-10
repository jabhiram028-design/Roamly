import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Search, Heart, User, Menu, X, Compass, ChevronRight, LogOut } from 'lucide-react';

export const Navbar: React.FC = () => {
  const {
    activeTab,
    setActiveTab,
    wishlistIds,
    user,
    logout,
    openAuthModal,
    openSearchModal
  } = useApp();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const isHome = activeTab === 'home';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const useTransparentNav = isHome && !isScrolled;

  const navClass = useTransparentNav
    ? 'bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white border-transparent'
    : 'bg-white/95 backdrop-blur-md text-[#101C35] shadow-sm border-b border-gray-100';

  const navItemClass = (tabName: string) => {
    const isActive = activeTab === tabName;
    if (useTransparentNav) {
      return isActive
        ? 'text-white font-semibold after:w-full'
        : 'text-white/90 hover:text-white font-medium hover:opacity-100 transition-opacity';
    }
    return isActive
      ? 'text-[#1769E8] font-semibold'
      : 'text-[#4B5563] hover:text-[#1769E8] font-medium transition-colors';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              useTransparentNav
                ? 'bg-white/20 text-white backdrop-blur-sm group-hover:bg-white/30'
                : 'bg-[#1769E8] text-white shadow-sm'
            }`}>
              <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
            <div className="text-left">
              <span className={`font-serif text-2xl font-bold tracking-tight block leading-none ${
                useTransparentNav ? 'text-white' : 'text-[#101C35]'
              }`}>
                Roamly
              </span>
              <span className={`text-[10px] tracking-widest uppercase font-sans font-medium block mt-0.5 ${
                useTransparentNav ? 'text-white/80' : 'text-[#1769E8]'
              }`}>
                Explore
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setActiveTab('destinations')}
              className={`text-sm tracking-wide cursor-pointer focus:outline-none transition-colors ${navItemClass('destinations')}`}
            >
              Destinations
            </button>
            <button
              onClick={() => setActiveTab('experiences')}
              className={`text-sm tracking-wide cursor-pointer focus:outline-none transition-colors ${navItemClass('experiences')}`}
            >
              Experiences
            </button>
            <button
              onClick={() => setActiveTab('trips')}
              className={`text-sm tracking-wide cursor-pointer focus:outline-none transition-colors ${navItemClass('trips')}`}
            >
              Holiday Packages
            </button>
            <button
              onClick={() => setActiveTab('guides')}
              className={`text-sm tracking-wide cursor-pointer focus:outline-none transition-colors ${navItemClass('guides')}`}
            >
              Travel Guides
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`text-sm tracking-wide cursor-pointer focus:outline-none transition-colors ${navItemClass('about')}`}
            >
              About Us
            </button>
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-4">

            <button
              onClick={openSearchModal}
              title="Search destinations & trips"
              className={`p-2 rounded-full transition-colors cursor-pointer ${
                useTransparentNav
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-gray-100 text-[#101C35]'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              title="View saved wishlist"
              className={`p-2 rounded-full relative transition-colors cursor-pointer ${
                useTransparentNav
                  ? 'hover:bg-white/10 text-white'
                  : 'hover:bg-gray-100 text-[#101C35]'
              }`}
            >
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1769E8] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1769E8] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                    {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-card border border-gray-100 py-2 z-50 text-[#101C35] animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-semibold text-[#101C35] truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab('profile');
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 cursor-pointer"
                    >
                      <User className="w-4 h-4 text-[#1769E8]" /> Profile & Bookings
                    </button>
                    <button
                      onClick={() => {
                        logout();
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 cursor-pointer"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden sm:flex items-center gap-3">
                <button
                  onClick={() => openAuthModal('login')}
                  className={`text-sm font-semibold px-3 py-2 rounded-full cursor-pointer transition-colors ${
                    useTransparentNav
                      ? 'text-white hover:text-white/80'
                      : 'text-[#101C35] hover:text-[#1769E8]'
                  }`}
                >
                  Log In
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="bg-[#1769E8] hover:bg-[#1253BD] text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Sign Up
                </button>
              </div>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg cursor-pointer ${
                useTransparentNav ? 'text-white' : 'text-[#101C35]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 top-20 bg-white border-t border-gray-100 flex flex-col justify-between p-6 animate-in slide-in-from-right duration-200">
          <div className="space-y-4">
            <button
              onClick={() => {
                setActiveTab('destinations');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between text-left py-3 border-b border-gray-100 text-lg font-semibold text-[#101C35]"
            >
              Destinations <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => {
                setActiveTab('experiences');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between text-left py-3 border-b border-gray-100 text-lg font-semibold text-[#101C35]"
            >
              Experiences <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => {
                setActiveTab('trips');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between text-left py-3 border-b border-gray-100 text-lg font-semibold text-[#101C35]"
            >
              Holiday Packages <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => {
                setActiveTab('guides');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between text-left py-3 border-b border-gray-100 text-lg font-semibold text-[#101C35]"
            >
              Travel Guides <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => {
                setActiveTab('about');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between text-left py-3 border-b border-gray-100 text-lg font-semibold text-[#101C35]"
            >
              About Us <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="pt-6 border-t border-gray-100 space-y-3">
            {!user ? (
              <>
                <button
                  onClick={() => {
                    openAuthModal('login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 text-center font-semibold text-[#101C35] bg-gray-100 rounded-full"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    openAuthModal('signup');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3 text-center font-semibold text-white bg-[#1769E8] rounded-full shadow-md"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-center font-semibold text-red-600 bg-red-50 rounded-full"
              >
                Sign Out
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
