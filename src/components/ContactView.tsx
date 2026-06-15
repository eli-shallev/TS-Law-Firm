import React, { useState, useEffect } from 'react';
import { ContactSubmission } from '../types';
import { MapPin, Phone, Mail, Clock, Send, Landmark, History, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from '../assets/images/heroImg.webp';

interface ContactViewProps {
  onContactSubmit: (submission: Omit<ContactSubmission, 'id' | 'timestamp'>) => void;
}

export default function ContactView({ onContactSubmit }: ContactViewProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'פנייה כללית',
    message: '',
  });

  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Load and watch local contact logs
  useEffect(() => {
    const stored = localStorage.getItem('shani_law_contact_logs');
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored));
      } catch (e) {
        // ignore JSON parse errors
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('אנא מלאו שם מלא ומספר טלפון לפחות');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    setIsDemoMode(false);

    const web3formsKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (web3formsKey && web3formsKey.trim() !== "" && !web3formsKey.includes("YOUR") && !web3formsKey.includes("VITE_")) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            from_name: "אתר משרד עורכי דין טננבאום שלו",
            subject: `פנייה חדשה מהאתר בנושא: ${formData.subject}`,
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
            title: formData.subject,
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || "שגיאה בשליחת הטופס דרך Web3Forms");
        }
      } catch (error: any) {
        console.error("Web3Forms submission failed:", error);
        setSubmitError(error.message || "אירעה שגיאה בחיבור לשרת המשלוח. נסה שוב מאוחר יותר.");
        setIsSubmitting(false);
        return;
      }
    } else {
      setIsDemoMode(true);
    }

    onContactSubmit(formData);
    
    // Save locally
    const newDoc: ContactSubmission = {
      id: Math.random().toString(36).substring(2),
      ...formData,
      timestamp: new Date().toLocaleString('he-IL'),
    };
    const updated = [newDoc, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('shani_law_contact_logs', JSON.stringify(updated));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: 'פנייה כללית',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
      setIsDemoMode(false);
    }, 12000);
  };

  const clearSubmissions = () => {
    localStorage.removeItem('shani_law_contact_logs');
    setSubmissions([]);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-[#f8f9fa]"
    >
      {/* Page Hero Banner */}
      <section className="relative h-[450px] flex items-center justify-center text-center py-16">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            alt="Contact law office background image" 
            className="w-full h-full object-cover" 
            src={heroImg}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-6" id="contact-hero-text">
            <span className="inline-block h-1.5 w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              נשמח לסייע גם לכם
            </h1>
            <p className="font-sans text-base md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              משרדנו חורט על דגלו שירות מקצועי, אמין, שקוף ורגיש לאורך כל הדרך. פנו אלינו עוד היום.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <main className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column (Left side of the screen but Right aligned order due to RTL grid column switch) */}
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div 
                className="bg-[#001F3F] p-8 md:p-10 text-white border-r-[6px] border-[#cca830] shadow-xl space-y-10 rounded-sm text-right" 
                id="contact-info-dark-card"
              >
                {/* Header */}
                <div className="mb-4">
                  <h2 className="font-serif text-3xl text-[#cca830] font-bold leading-tight">
                    פרטי התקשרות
                  </h2>
                </div>

                {/* Items List */}
                <div className="space-y-12">
                  {/* Phone Item */}
                  <div className="flex flex-row-reverse items-start gap-5 text-right group">
                    <div className="text-[#cca830] pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Phone size={24} />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="block text-lg font-bold text-[#cca830] font-serif">טלפון</span>
                      <a 
                        href="tel:052-4088886" 
                        className="block font-sans text-base md:text-lg text-white hover:text-[#cca830] mt-1 transition-colors font-medium direction-ltr"
                      >
                        052-4088886
                      </a>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex flex-row-reverse items-start gap-5 text-right group">
                    <div className="text-[#cca830] pt-1.5 shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Mail size={24} />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="block text-lg font-bold text-[#cca830] font-serif">דואר אלקטרוני</span>
                      <a 
                        href="mailto:shani@te-shlaw.co.il" 
                        className="block font-sans text-base md:text-lg text-white hover:text-[#cca830] mt-1 transition-colors font-medium break-all"
                      >
                        shani@te-shlaw.co.il
                      </a>
                    </div>
                  </div>

                  {/* Service Areas Item */}
                  <div className="flex flex-row-reverse items-start gap-5 text-right">
                    <div className="text-[#cca830] pt-1.5 shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div className="flex-1 text-right">
                      <span className="block text-lg font-bold text-[#cca830] font-serif">אזורי שירות</span>
                      <span className="block font-sans text-base md:text-lg text-white mt-1 leading-relaxed">
                        שירות באזור ירושלים וכל הארץ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Interactive Submit Form Form (Right side is 8cols) */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-fullName" className="block text-xs font-bold text-gray-400 uppercase tracking-wide">שם מלא *</label>
                      <input 
                        required
                        id="contact-fullName"
                        type="text" 
                        aria-label="שם מלא"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wide">מספר טלפון *</label>
                      <input 
                        required
                        id="contact-phone"
                        type="tel" 
                        aria-label="מספר טלפון"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors text-right"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-gray-400 uppercase tracking-wide">כתובת אימייל</label>
                      <input 
                        id="contact-email"
                        type="email" 
                        aria-label="כתובת אימייל"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-gray-400 uppercase tracking-wide">נושא הפנייה</label>
                      <select
                        id="contact-subject"
                        aria-label="נושא הפנייה"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors text-right"
                      >
                        <option value="פנייה כללית">פנייה כללית</option>
                        <option value="חדלות פירעון ושיקום כלכלי">חדלות פירעון ושיקום כלכלי</option>
                        <option value="ייפוי כוח מתמשך">ייפוי כוח מתמשך</option>
                        <option value="ליטיגציה וניהול סכסוכים">ליטיגציה וניהול סכסוכים</option>
                        <option value="ירושות וצוואות">ירושות וצוואות</option>
                        <option value="גבייה והוצאה לפועל">גבייה והוצאה לפועל</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-400 uppercase tracking-wide">פירוט הפנייה</label>
                    <textarea 
                      id="contact-message"
                      rows={5}
                      aria-label="פירוט הפנייה"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="אנא ספרו לנו בקצרה על המקרה המבוקש..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none resize-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#cca830] hover:bg-[#b39129] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-sans font-bold py-4 px-10 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'שולח פנייה באופן מאובטח...' : 'שלחו פנייה מאובטחת'}</span>
                  </button>

                  {submitError && (
                    <div className="text-center font-sans font-bold text-red-600 text-sm py-2">
                      {submitError}
                    </div>
                  )}

                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center space-y-2 py-4 px-4 bg-green-50 border border-green-200 rounded-sm"
                      id="contact-success-response"
                    >
                      <p className="font-sans font-bold text-[#20b855] text-base">
                        ✓ הפנייה נשלחה ונקלטה בהצלחה!
                      </p>
                      <p className="font-sans text-xs text-gray-600">
                        נציג מקצועי של המשרד יחזור אליכם בהקדם האפשרי.
                      </p>
                      {isDemoMode && (
                        <div className="mt-3 text-right bg-amber-50 border border-amber-200 p-3 rounded text-xs text-amber-800 space-y-1">
                          <p className="font-bold">💡 מצב סימולציה מקומית (פנייה נשמרה בלוג):</p>
                          <p>על מנת לקבל את פניות המיילים לתיבת הדואר האלקטרוני האמיתית שלך, עליך להגדיר את מפתח הגישה של Web3Forms בקובץ ה-<code>.env</code> שלך (עם שם המפתח: <code>VITE_WEB3FORMS_ACCESS_KEY</code>).</p>
                        </div>
                      )}
                    </motion.div>
                  )}
                </form>
              </div>



            </div>

          </div>
        </main>
      </motion.div>
    );
}
