import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Accessibility, 
  X, 
  Eye, 
  RefreshCw, 
  Type, 
  Underline, 
  Focus, 
  FileText, 
  Sparkles,
  Info
} from 'lucide-react';

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isStatementOpen, setIsStatementOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Accessibility States
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [highlightFocus, setHighlightFocus] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Load preferences on mount
  useEffect(() => {
    const pContrast = localStorage.getItem('acc_highContrast') === 'true';
    const pGrayscale = localStorage.getItem('acc_grayscale') === 'true';
    const pLargeText = localStorage.getItem('acc_largeText') === 'true';
    const pLinks = localStorage.getItem('acc_highlightLinks') === 'true';
    const pFocus = localStorage.getItem('acc_highlightFocus') === 'true';
    const pFont = localStorage.getItem('acc_readableFont') === 'true';

    setHighContrast(pContrast);
    setGrayscale(pGrayscale);
    setLargeText(pLargeText);
    setHighlightLinks(pLinks);
    setHighlightFocus(pFocus);
    setReadableFont(pFont);
  }, []);

  // Update body elements when state changes
  useEffect(() => {
    const body = document.body;
    
    // Toggle classes on document body
    if (highContrast) {
      body.classList.add('accessibility-high-contrast');
    } else {
      body.classList.remove('accessibility-high-contrast');
    }
    localStorage.setItem('acc_highContrast', String(highContrast));
  }, [highContrast]);

  useEffect(() => {
    const body = document.body;
    if (grayscale) {
      body.classList.add('accessibility-grayscale');
    } else {
      body.classList.remove('accessibility-grayscale');
    }
    localStorage.setItem('acc_grayscale', String(grayscale));
  }, [grayscale]);

  useEffect(() => {
    const body = document.body;
    if (largeText) {
      body.classList.add('accessibility-large-text');
    } else {
      body.classList.remove('accessibility-large-text');
    }
    localStorage.setItem('acc_largeText', String(largeText));
  }, [largeText]);

  useEffect(() => {
    const body = document.body;
    if (highlightLinks) {
      body.classList.add('accessibility-highlight-links');
    } else {
      body.classList.remove('accessibility-highlight-links');
    }
    localStorage.setItem('acc_highlightLinks', String(highlightLinks));
  }, [highlightLinks]);

  useEffect(() => {
    const body = document.body;
    if (highlightFocus) {
      body.classList.add('accessibility-highlight-focus');
    } else {
      body.classList.remove('accessibility-highlight-focus');
    }
    localStorage.setItem('acc_highlightFocus', String(highlightFocus));
  }, [highlightFocus]);

  useEffect(() => {
    const body = document.body;
    if (readableFont) {
      body.classList.add('accessibility-readable-font');
    } else {
      body.classList.remove('accessibility-readable-font');
    }
    localStorage.setItem('acc_readableFont', String(readableFont));
  }, [readableFont]);

  // Handle escape press to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setIsStatementOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset all options
  const handleReset = () => {
    setHighContrast(false);
    setGrayscale(false);
    setLargeText(false);
    setHighlightLinks(false);
    setHighlightFocus(false);
    setReadableFont(false);
  };

  return (
    <div className="accessibility-helper-el font-sans">
      {/* Floating Trigger Button - Bottom Left */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="תפריט נגישות"
        className="fixed bottom-8 left-8 z-[101] w-14 h-14 bg-[#001F3F] text-[#cca830] hover:bg-[#002f5f] hover:text-white rounded-full flex items-center justify-center shadow-lg transition-colors cursor-pointer border border-[#cca830]/40"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        id="accessibility-trigger-float"
      >
        <Accessibility size={28} />
      </motion.button>

      {/* Accessibility Control Panel Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            ref={panelRef}
            className="fixed bottom-24 left-8 z-[102] w-80 sm:w-96 bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 text-right text-gray-800"
            role="dialog"
            aria-label="סרגל כלי נגישות"
            id="accessibility-control-panel"
          >
            {/* Header */}
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-50 flex items-center justify-center cursor-pointer"
                aria-label="סגור תפריט נגישות"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg text-[#001F3F]">תפריט נגישות מקצועי</span>
                <Accessibility size={22} className="text-[#cca830]" />
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
              אתר זה מונגש ומותאם לתקן ת"י 5568 ברמת AA. באפשרותך להתאים את התצוגה והניווט באתר לצרכיך האישיים:
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* Contrast Option */}
              <button
                onClick={() => setHighContrast(!highContrast)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  highContrast 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={highContrast}
              >
                <Eye size={20} className="mb-1.5 text-[#003566]" />
                <span className="text-xs font-semibold">ניגודיות גבוהה</span>
              </button>

              {/* Monochrome Option */}
              <button
                onClick={() => setGrayscale(!grayscale)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  grayscale 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={grayscale}
              >
                <Eye size={20} className="mb-1.5 text-gray-400" />
                <span className="text-xs font-semibold">תצוגת גווני אפור</span>
              </button>

              {/* Font Size Option */}
              <button
                onClick={() => setLargeText(!largeText)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  largeText 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={largeText}
              >
                <Type size={20} className="mb-1.5 text-gray-600" />
                <span className="text-xs font-semibold">הגדלת הגופן</span>
              </button>

              {/* Underline Links Option */}
              <button
                onClick={() => setHighlightLinks(!highlightLinks)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  highlightLinks 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={highlightLinks}
              >
                <Underline size={20} className="mb-1.5" />
                <span className="text-xs font-semibold">הדגשת קישורים</span>
              </button>

              {/* Focus Ring Option */}
              <button
                onClick={() => setHighlightFocus(!highlightFocus)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  highlightFocus 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={highlightFocus}
              >
                <Focus size={20} className="mb-1.5 text-blue-600" />
                <span className="text-xs font-semibold">הדגשת פוקוס</span>
              </button>

              {/* Readable Font Option */}
              <button
                onClick={() => setReadableFont(!readableFont)}
                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  readableFont 
                    ? 'border-[#cca830] bg-[#cca830]/5 text-[#001F3F] font-bold' 
                    : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
                aria-pressed={readableFont}
              >
                <Sparkles size={20} className="mb-1.5 text-amber-500" />
                <span className="text-xs font-semibold">גופן קריא ופשוט</span>
              </button>
            </div>

            {/* Actions Footer */}
            <div className="flex gap-2 w-full pt-4 border-t border-gray-100">
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 px-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                id="acc-reset-btn"
              >
                <RefreshCw size={13} />
                <span>איפוס הגדרות</span>
              </button>
              <button
                onClick={() => setIsStatementOpen(true)}
                className="flex-1 py-2.5 px-3 bg-[#001F3F] hover:bg-[#002f5f] text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                id="acc-statement-btn"
              >
                <Info size={13} className="text-[#cca830]" />
                <span>הצהרת נגישות</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accessibility Statement Modal Dialog */}
      <AnimatePresence>
        {isStatementOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 text-right border border-gray-100 max-h-[85vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-labelledby="acc-statement-title"
              id="accessibility-statement-modal"
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100">
                <button
                  onClick={() => setIsStatementOpen(false)}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-50 flex items-center justify-center cursor-pointer"
                  aria-label="סגור הצהרת נגישות"
                >
                  <X size={20} />
                </button>
                <h2 id="acc-statement-title" className="font-serif font-bold text-xl text-[#001F3F]">
                  הצהרת נגישות - משרד עורכי דין טננבאום שלו
                </h2>
              </div>

              {/* Body Content */}
              <div className="space-y-4 font-sans text-sm text-gray-700 leading-relaxed text-justify">
                <p>
                  משרד עורכי הדין טננבאום שלו רואה חשיבות עליונה במתן שירות שוויוני, מכבד ונגיש לכלל חברי הקהילה. מתוך תפיסת עולם זו, השקענו מאמצים ומשאבים רבים בהנגשת האתר שלנו, במטרה לאפשר גם לאנשים עם מוגבלות חוויית גלישה נוחה, עצמאית וידידותית.
                </p>
                <h3 className="font-serif font-bold text-base text-[#001F3F] mt-6 mb-2">עמידה בתקנים</h3>
                <p>
                  אתר האינטרנט של משרדנו מותאם להוראות הנגישות המפורטות בחוק שוויון זכויות לאנשים עם מוגבלות, וכן להנחיות התקן הישראלי (ת"י 5568) ולהמלצות מסמך WCAG 2.0 הבינלאומי ברמת התאמה AA.
                </p>
                <h3 className="font-serif font-bold text-base text-[#001F3F] mt-6 mb-2">אמצעי הנגישות הקיימים באתר:</h3>
                <ul className="list-disc list-inside space-y-2 pr-2">
                  <li><strong>ניווט מקלדת מלא:</strong> תמיכה מלאה בניווט ללא שימוש בעכבר באמצעות שימוש במקשי Tab ו-Enter.</li>
                  <li><strong>תאימות לקוראי מסך:</strong> שימוש בקוד סמנטי תקני ותמיכה במבנה כותרות היררכי מסודר.</li>
                  <li><strong>סרגל נגישות צף:</strong> המאפשר העלאת ניגודיות, כוונון גווני אפור, הגדלת גופן, הדגשת פוקוס ועוד.</li>
                  <li><strong>תמונות וקוד:</strong> כל התמונות החיוניות באתר כוללות תיאור חלופי הולם (Alt text).</li>
                </ul>
                <h3 className="font-serif font-bold text-base text-[#001F3F] mt-6 mb-2">פרטי רכז הנגישות של המשרד</h3>
                <p>
                  אם במהלך הגלישה נתקלתם בקושי, בשגיאה או בנושא הדורש הנגשה נוספת, נשמח מאוד לקבל מכם משוב על מנת שנוכל לשפר את האתר בצורה מתמשכת:
                </p>
                <div className="p-4 bg-gray-50 rounded-xl space-y-1 text-xs border border-gray-100">
                  <p><strong>רכזת נגישות במשרד:</strong> עו"ד שני טננבאום</p>
                  <p><strong>טלפון ישיר:</strong> 052-4088886</p>
                  <p><strong>דואר אלקטרוני:</strong> shani@te-shlaw.co.il</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsStatementOpen(false)}
                className="w-full mt-6 py-2.5 bg-[#001F3F] hover:bg-[#002f5f] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
              >
                הבנתי, תודה
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
