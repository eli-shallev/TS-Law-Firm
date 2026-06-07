import React, { useState, useEffect } from 'react';
import { ContactSubmission } from '../types';
import { MapPin, Phone, Mail, Clock, Send, Landmark, History, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('אנא מלאו שם מלא ומספר טלפון לפחות');
      return;
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
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      subject: 'פנייה כללית',
      message: '',
    });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDshF9zqOsk_cf2I55c938x6YC6F4cjm2rqIjWVa-YcLCyixZq0qslUn-VFj4u5FLI5fJmFAwTvUy_T8P1obQdWo6oLykuOhV8lBorHZ0eiHxJfIwuiAncxtyIVAFKsIrR2GA22hKFhC0Ykj-uoU0fvtH49YLnMVBbfruytksYvxTrJLIqiPQKL1Tchv7KwVcxq0K_Mnt0CEE6_aNa_PVGqKMyodj1n_MB40Abd-w8jwi2qj5Stp6YA-Q9lU4Yw_7gdgt1JxRM-6AXh"
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
            <div className="lg:col-span-8 order-1 lg:order-2 space-y-10">
              <div className="bg-white border border-gray-200 p-8 md:p-12 shadow-lg rounded-sm text-right">
                <div className="mb-8">
                  <h2 className="font-serif text-3xl text-[#001F3F] font-bold mb-2">שלחו לנו פנייה מהירה</h2>
                  <p className="font-sans text-sm text-gray-500">
                    השאירו פרטים מדויקים ונציג מקצועי של המשרד יחזור אליכם תוך פחות מ-24 שעות.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">שם מלא *</label>
                      <input 
                        required
                        type="text" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="שירה כהן / משה סלומון"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">מספר טלפון *</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="050-0000000"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors text-right"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">כתובת אימייל</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">נושא הפנייה</label>
                      <select
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
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide">פירוט הפנייה</label>
                    <textarea 
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="אנא ספרו לנו בקצרה על המקרה המבוקש..."
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none resize-none transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#cca830] hover:bg-[#b39129] text-white font-sans font-bold py-4 px-10 shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>שלחו פנייה מאובטחת</span>
                  </button>

                  {isSubmitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center font-bold text-[#25D366] text-sm py-2"
                      id="contact-success-response"
                    >
                      הפנייה נשלחה ונקלטה בהצלחה! נציג מהצוות יחזור אליכם בהקדם.
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Local Storage Persistent Submissions Logs for Mockup Realism */}
              {submissions.length > 0 && (
                <div className="bg-[#f8f9fa] border border-gray-200 p-6 rounded-sm text-right" id="local-submission-history-box">
                  <div className="flex justify-between items-center flex-row-reverse mb-4">
                    <div className="flex items-center gap-2 flex-row-reverse text-[#001F3F]">
                      <History size={16} className="text-[#cca830]" />
                      <h3 className="font-serif font-bold text-[17px]">היסטוריית הפניות המקומיות שלך</h3>
                    </div>
                    <button 
                      onClick={clearSubmissions}
                      className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 font-bold transition-colors cursor-pointer"
                    >
                      <Trash2 size={13} />
                      <span>ניקוי היסטוריה</span>
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                    {submissions.map((sub) => (
                      <div key={sub.id} className="bg-white border border-gray-100 p-4 shadow-sm text-xs">
                        <div className="flex justify-between items-center mb-2 flex-row-reverse">
                          <span className="font-bold text-[#001F3F] text-sm">{sub.fullName} - {sub.subject}</span>
                          <span className="text-gray-400 font-sans">{sub.timestamp}</span>
                        </div>
                        <p className="text-gray-600 font-sans">
                          <strong>טלפון:</strong> {sub.phone} | <strong>אימייל:</strong> {sub.email || 'מידע לא סופק'}
                        </p>
                        {sub.message && (
                          <p className="text-gray-500 mt-2 italic bg-gray-50 p-2 border-r border-[#cca830] text-justify font-sans">
                            "{sub.message}"
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </main>
    </motion.div>
  );
}
