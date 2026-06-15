import { useState } from 'react';
import { ActiveView } from '../types';
import { Menu, X,Phone, Mail, ChevronDown, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/logo.webp';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export default function Header({ activeView, setActiveView }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const practiceAreas: { id: ActiveView; label: string }[] = [
    { id: 'insolvency', label: 'חדלות פירעון ושיקום כלכלי' },
    { id: 'epoa', label: 'ייפוי כוח מתמשך' },
    { id: 'litigation', label: 'ליטיגציה וניהול סכסוכים' },
    { id: 'wills', label: 'ירושות וצוואות' },
    { id: 'repossessions', label: 'גבייה והוצאה לפועל' },
  ];

  const handleNavClick = (view: ActiveView) => {
    setActiveView(view);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPracticeActive = practiceAreas.some(area => area.id === activeView);

  return (
    <header className="relative w-full z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#001F3F] text-white/90 py-2.5 border-b border-white/10 w-full font-sans text-xs">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-row items-center">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 flex-row w-full justify-end">
            <a 
              href="tel:052-4088886" 
              className="flex items-center gap-2 hover:text-[#e9c349] transition-colors"
              id="top-phone-link"
            >
              <Phone size={13} className="text-[#e9c349]" />
              <span className="font-semibold tracking-wider">052-4088886</span>
            </a>
            <a 
              href="mailto:shani@te-shlaw.co.il" 
              className="flex items-center gap-2 hover:text-[#e9c349] transition-colors"
              id="top-email-link"
            >
              <Mail size={13} className="text-[#e9c349]" />
              <span className="font-semibold tracking-wider">shani@te-shlaw.co.il</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 top-0 sticky z-40">
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex flex-row-reverse justify-between items-center">
          {/* Logo element */}
          <div 
            className="flex items-center cursor-pointer select-none" 
            onClick={() => handleNavClick('home')}
            id="navbar-logo-container"
          >
            <img 
              alt="טננבאום שלו - משרד עורכי דין" 
              className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]" 
              src={logoImg}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Link Items (RTL format, starting with דף הבית on rich end) */}
          <div className="hidden md:flex items-center gap-8 flex-row pl-8 pr-0">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-sans text-[15px] cursor-pointer font-medium transition-all relative pb-2 pt-1 border-b-2 ${
                activeView === 'home' 
                  ? 'text-[#001F3F] border-[#cca830] font-semibold' 
                  : 'text-gray-600 border-transparent hover:text-[#cca830]'
              }`}
              id="nav-home-btn"
            >
              דף הבית
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`font-sans text-[15px] cursor-pointer font-medium transition-all relative pb-2 pt-1 border-b-2 ${
                activeView === 'about' 
                  ? 'text-[#001F3F] border-[#cca830] font-semibold' 
                  : 'text-gray-600 border-transparent hover:text-[#cca830]'
              }`}
              id="nav-about-btn"
            >
              אודות המשרד
            </button>

            {/* Sub-menu Practice dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              id="nav-dropdown-wrapper"
            >
              <button 
                className={`font-sans text-[15px] cursor-pointer font-medium transition-all flex items-center gap-1.5 pb-2 pt-1 border-b-2 ${
                  isPracticeActive 
                    ? 'text-[#001F3F] border-[#cca830] font-semibold' 
                    : 'text-gray-600 border-transparent hover:text-[#cca830]'
                }`}
                id="nav-dropdown-trigger"
              >
                <span>תחומי התמחות</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-0 w-64 bg-white border border-gray-100 shadow-xl rounded-b-md py-2 text-right z-50"
                    id="nav-practice-dropdown-content"
                  >
                    {practiceAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleNavClick(area.id)}
                        className={`w-full text-right px-5 py-2.5 text-sm cursor-pointer transition-colors block ${
                          activeView === area.id 
                            ? 'bg-[#001F3F]/5 text-[#cca830] font-medium' 
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#001F3F]'
                        }`}
                      >
                        {area.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => handleNavClick('contact')}
              className={`font-sans text-[15px] cursor-pointer font-medium transition-all relative pb-2 pt-1 border-b-2 ${
                activeView === 'contact' 
                  ? 'text-[#001F3F] border-[#cca830] font-semibold' 
                  : 'text-gray-600 border-transparent hover:text-[#cca830]'
              }`}
              id="nav-contact-btn"
            >
              צור קשר
            </button>
          </div>

          {/* Hamburger Mobile Menu Trigger Toggle */}
          <button 
            className="md:hidden text-[#001F3F] hover:bg-gray-50 p-2 rounded-md transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-hamburger"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Canvas Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden w-full bg-white border-t border-gray-100 overflow-hidden shadow-inner font-sans"
              id="mobile-menu-drawer"
            >
              <div className="px-6 py-4 flex flex-col gap-1 text-right divide-y divide-gray-50">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-right py-3 font-semibold cursor-pointer ${activeView === 'home' ? 'text-[#cca830]' : 'text-gray-800'}`}
                >
                  דף הבית
                </button>
                <button 
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-right py-3 font-semibold cursor-pointer ${activeView === 'about' ? 'text-[#cca830]' : 'text-gray-800'}`}
                >
                  אודות המשרד
                </button>
                
                {/* Practice areas in mobile list format */}
                <div className="py-2">
                  <span className="block text-right text-xs font-bold text-gray-400 py-1 uppercase tracking-wider">תחומי התמחות:</span>
                  <div className="flex flex-col gap-1 pr-3 border-r-2 border-gray-100 mt-1">
                    {practiceAreas.map((area) => (
                      <button
                        key={area.id}
                        onClick={() => handleNavClick(area.id)}
                        className={`w-full text-right py-2 text-[14px] cursor-pointer ${activeView === area.id ? 'text-[#cca830] font-semibold' : 'text-gray-600'}`}
                      >
                        {area.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-right py-3 font-semibold cursor-pointer ${activeView === 'contact' ? 'text-[#cca830]' : 'text-gray-800'}`}
                >
                  צור קשר
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
