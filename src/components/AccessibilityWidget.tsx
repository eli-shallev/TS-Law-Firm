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
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-100" dir="rtl">
              <div className="flex items-center gap-2">
                <Accessibility size={22} className="text-[#cca830]" />
                <span className="font-serif font-bold text-lg text-[#001F3F]">תפריט נגישות</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-50 flex items-center justify-center cursor-pointer"
                aria-label="סגור תפריט נגישות"
              >
                <X size={20} />
              </button>
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110] flex items-center justify-center p-4 sm:p-6" dir="rtl">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl max-w-xl w-full text-right border border-[#cca830]/20 max-h-[85vh] flex flex-col overflow-hidden relative"
              role="dialog"
              aria-modal="true"
              aria-labelledby="acc-statement-title"
              id="accessibility-statement-modal"
            >
              {/* Top Premium Accent Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#001F3F] via-[#cca830] to-[#001F3F]" />

              {/* Header - Fixed */}
              <div className="flex justify-between items-center px-6 sm:px-8 pt-6 pb-4 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#001F3F]/5 flex items-center justify-center border border-[#cca830]/10">
                    <Accessibility size={20} className="text-[#cca830]" />
                  </div>
                  <div>
                    <h2 id="acc-statement-title" className="font-serif font-black text-xl text-[#001F3F] leading-tight">
                      הצהרת נגישות
                    </h2>
                    <p className="text-[11px] text-[#cca830] font-medium font-mono uppercase tracking-wider">
                      טננבאום שלו • משרד עורכי דין
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsStatementOpen(false)}
                  className="text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                  aria-label="סגור הצהרת נגישות"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body Content - Scrollable on right */}
              <div 
                className="px-6 sm:px-8 py-6 overflow-y-auto flex-1 text-gray-700 text-sm leading-relaxed text-justify [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-thumb]:bg-[#cca830]/35 hover:[&::-webkit-scrollbar-thumb]:bg-[#cca830]/55 [&::-webkit-scrollbar-thumb]:rounded-full"
                dir="ltr"
              >
                <div dir="rtl" className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    משרד עורכי הדין <strong className="text-[#001F3F]">טננבאום שלו</strong> רואה חשיבות עליונה במתן שירות שוויוני, מכבד ונגיש לכלל חברי הקהילה. מתוך תפיסת עולם זו, השקענו מאמצים ומשאבים רבים בהנגשת האתר שלנו, במטרה לאפשר גם לאנשים עם מוגבלות חוויית גלישה נוחה, עצמאית וידידותית ביותר.
                  </p>

                  <div className="border-r-2 border-[#cca830] pr-4 py-1 bg-amber-50/10">
                    <h3 className="font-serif font-bold text-base text-[#001F3F] mb-1">עמידה בתקנים</h3>
                    <p className="text-gray-600">
                      אתר האינטרנט של משרדנו מותאם להוראות הנגישות המפורטות בחוק שוויון זכויות לאנשים עם מוגבלות, וכן להנחיות התקן הישראלי (ת"י 5568) ולהמלצות מסמך WCAG 2.0 הבינלאומי ברמת התאמה AA.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base text-[#001F3F] mb-3 flex items-center gap-2">
                      <Sparkles size={16} className="text-[#cca830]" />
                      <span>אמצעי הנגישות הקיימים באתר</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-2.5">
                      {[
                        { title: "ניווט מקלדת מלא:", desc: "תמיכה מלאה בניווט ללא שימוש בעכבר באמצעות שימוש במקשי Tab ו-Enter." },
                        { title: "תאימות לקוראי מסך:", desc: "שימוש בקוד סמנטי תקני ותמיכה במבנה כותרות היררכי מסודר ומדויק." },
                        { title: "סרגל נגישות צף:", desc: "סרגל ייעודי המאפשר העלאת ניגודיות, כוונון גווני אפור, הגדלת גופן, הדגשת פוקוס ועוד." },
                        { title: "תמונות וחלופות:", desc: "כל התמונות החיוניות באתר כוללות תיאור חלופי הולם ומפורט (Alt text)." },
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 bg-gray-50/50 p-3 rounded-xl border border-gray-100/80 hover:border-[#cca830]/20 transition-all">
                          <div className="w-5 h-5 rounded-full bg-[#cca830]/15 flex items-center justify-center text-[#cca830] flex-shrink-0 mt-0.5 font-bold text-xs">
                            ✓
                          </div>
                          <div className="text-xs sm:text-sm">
                            <strong className="text-[#001F3F] font-semibold">{item.title} </strong>
                            <span className="text-gray-600">{item.desc}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-amber-50/20 rounded-2xl p-5 border border-gray-100">
                    <h3 className="font-serif font-bold text-md text-[#001F3F] mb-3 flex items-center gap-2">
                      <Info size={16} className="text-[#cca830]" />
                      <span>פרטי רכז הנגישות של המשרד</span>
                    </h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                      אם במהלך הגלישה באתר נתקלתם בקושי, בשגיאה או בנושא הדורש הנגשה נוספת, נשמח מאוד לקבל מכם משוב על מנת שנוכל לשפר ולתקן בצורה מהירה ומקצועית:
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2 border-t border-gray-100">
                      <div className="space-y-1">
                        <p className="text-gray-400 text-[11px] uppercase tracking-wider">רכזת נגישות במשרד:</p>
                        <p className="text-[#001F3F] font-bold">עו"ד שני טננבאום</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-gray-400 text-[11px] uppercase tracking-wider font-medium">טלפון ישיר:</p>
                        <a href="tel:0524088886" className="text-[#cca830] hover:text-[#002f5f] font-bold hover:underline transition-all">
                          052-4088886
                        </a>
                      </div>
                      <div className="space-y-1 sm:col-span-2 mt-2">
                        <p className="text-gray-400 text-[11px] uppercase tracking-wider font-medium">דואר אלקטרוני לפניות:</p>
                        <a href="mailto:shani@te-shlaw.co.il" className="text-[#001F3F] hover:text-[#cca830] font-semibold hover:underline transition-all break-all">
                          shani@te-shlaw.co.il
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Footer - Fixed */}
              <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/40 text-left">
                <button
                  onClick={() => setIsStatementOpen(false)}
                  className="w-full sm:w-auto px-8 py-3 bg-[#001F3F] hover:bg-[#002f5f] text-white hover:text-white font-bold text-sm rounded-xl transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-[#cca830]/20 hover:border-[#cca830]/40 text-center"
                >
                  הבנתי, תודה
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
