import { useState, useEffect } from 'react';
import { ActiveView, ContactSubmission } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AccessibilityWidget from './components/AccessibilityWidget';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import InsolvencyView from './components/InsolvencyView';
import EpoaView from './components/EpoaView';
import LitigationView from './components/LitigationView';
import WillsView from './components/WillsView';
import RepossessionsView from './components/RepossessionsView';
import ContactView from './components/ContactView';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  // Dynamically synchronize HTML document title with premium titles based on active tab
  useEffect(() => {
    const titlesMap: Record<ActiveView, string> = {
      home: 'טננבאום שלו - משרד עורכי דין | דף הבית',
      about: 'אודות עו"ד שני טננבאום | טננבאום שלו',
      insolvency: 'חדלות פירעון ושיקום כלכלי | טננבאום שלו',
      epoa: 'ייפוי כוח מתמשך | טננבאום שלו',
      litigation: 'ליטיגציה וניהול סכסוכים | טננבאום שלו',
      wills: 'ירושות וצוואות | טננבאום שלו',
      repossessions: 'גבייה והוצאה לפועל | טננבאום שלו',
      contact: 'צור קשר | טננבאום שלו - משרד עורכי דין',
    };
    document.title = titlesMap[activeView] || 'טננבאום שלו - משרד עורכי דין';
  }, [activeView]);

  // Scroll to the top when the page (activeView) changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeView]);

  // Handle centralized state recording for contact forms (useful for immediate local storage debugging list)
  const handleContactSubmit = (submission: Omit<ContactSubmission, 'id' | 'timestamp'>) => {
    const stored = localStorage.getItem('shani_law_contact_logs');
    let logs: ContactSubmission[] = [];
    if (stored) {
      try {
        logs = JSON.parse(stored);
      } catch (e) {
        // ignore JSON parse errors
      }
    }
    const newDoc: ContactSubmission = {
      id: Math.random().toString(36).substring(2),
      ...submission,
      timestamp: new Date().toLocaleString('he-IL'),
    };
    logs = [newDoc, ...logs];
    localStorage.setItem('shani_law_contact_logs', JSON.stringify(logs));
  };

  const handleContactNavigation = () => {
    setActiveView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render proper sub-view with animations
  const renderViewContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavClick={setActiveView} onContactSubmit={handleContactSubmit} />;
      case 'about':
        return <AboutView />;
      case 'insolvency':
        return <InsolvencyView onContactClick={handleContactNavigation} />;
      case 'epoa':
        return <EpoaView onContactClick={handleContactNavigation} />;
      case 'litigation':
        return <LitigationView onContactClick={handleContactNavigation} />;
      case 'wills':
        return <WillsView onContactClick={handleContactNavigation} />;
      case 'repossessions':
        return <RepossessionsView onContactClick={handleContactNavigation} />;
      case 'contact':
        return <ContactView onContactSubmit={handleContactSubmit} />;
      default:
        return <HomeView onNavClick={setActiveView} onContactSubmit={handleContactSubmit} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans selection:bg-[#cca830]/30 selection:text-[#001F3F]">
      <div>
        {/* Responsive, high-fidelity Navigation Header */}
        <Header activeView={activeView} setActiveView={setActiveView} />

        {/* Smooth active tab canvas transition animators */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full flex-grow"
          >
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent global footer details */}
      <Footer onNavClick={setActiveView} />

      {/* Floating active action anchors (WhatsApp, Call support, floating tags) */}
      <WhatsAppButton />
      <AccessibilityWidget />
    </div>
  );
}
