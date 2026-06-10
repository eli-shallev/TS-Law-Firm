import React, { useState } from 'react';
import { ActiveView, ContactSubmission } from '../types';
import { 
  Scale, 
  Wallet, 
  Banknote, 
  Scroll, 
  FileCheck, 
  Eye, 
  Gavel, 
  Brain, 
  Phone, 
  Send,
  HeartHandshake,
  ArrowLeft
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavClick: (view: ActiveView) => void;
  onContactSubmit: (submission: Omit<ContactSubmission, 'id' | 'timestamp'>) => void;
}

export default function HomeView({ onNavClick, onContactSubmit }: HomeViewProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: 'פנייה כללית',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isDemoMode, setIsDemoMode] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('אנא מלאו שם ומספר טלפון ליצירת קשר');
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
            from_name: "אתר משרד עורכי דין טננבאום שלו (טופס מהיר)",
            subject: `פנייה חדשה (מהירה) מהאתר בנושא: ${formData.subject}`,
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            title: formData.subject,
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || "שגיאה בשליחת הטופס המהיר דרך Web3Forms");
        }
      } catch (error: any) {
        console.error("Web3Forms home page submission failed:", error);
        setSubmitError(error.message || "אירעה שגיאה בחיבור לשרת המשלוח. נסה שוב מאוחר יותר.");
        setIsSubmitting(false);
        return;
      }
    } else {
      setIsDemoMode(true);
    }

    onContactSubmit(formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ fullName: '', phone: '', email: '', subject: 'פנייה כללית' });
    setTimeout(() => {
      setIsSubmitted(false);
      setIsDemoMode(false);
    }, 12000);
  };

  const handleConsultationClick = () => {
    onNavClick('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center overflow-hidden min-h-[600px] py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Sophisticated and prestigious law firm interior" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTX0hmCR5VHLpI6A53Eku4tvD3rXzkO_paYHdLjfg54a1Z09RMiMQ5bj_m0VB56tmluJDLb7H5gixg7Y8AgiZj6VsL9DK0Zy1YB4OcUCkZ4bT6ko_nZLRehoYMmilgcwxA2cb8n5hQ5-VnlqUIJM5oZ_jkW8Ur7YC0XFvSuiyvQOObkC7MH_fq1nYRATuXpGuKLXt7PZdSTqUs0VgKA4DqMRqOKfnNvJaIDhNDYlCC55TSiAhpL_-SG-iFH8GpmA40PtgwW1aWLLpk"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/55 backdrop-blur-[1px]" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-right">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#e9c349] font-newsreader italic text-xl md:text-2xl font-medium block">ברוכים הבאים</span>
            <h1 className="font-serif text-4xl md:text-6xl text-white font-extrabold max-w-[850px] leading-tight md:leading-none">
              טננבאום שלו – משרד עורכי דין
            </h1>
            <p className="font-sans text-[17px] md:text-[20px] text-white/90 max-w-[950px] leading-relaxed font-normal text-justify" style={{ textJustify: 'inter-word' }}>
              בניהולה של עו"ד שני טננבאום, משרדנו פועל בכל הארץ ומעניק מעטפת משפטית מקצועית ובלתי מתפשרת בתחומי הליטיגציה, חדלות הפרעון ודיני הירושות והצוואות. אנו מאמינים כי מאחורי כל תיק משפטי עומד אדם, ולכן חרטנו על דגלנו שילוב ייחודי בין מצוינות משפטית לגישה אנושית ורגישה. במציאות משפטית ואישית מורכבת, אנו משמשים כעוגן איתן עבור לקוחותינו, תוך מתן ליווי צמוד ואישי שמטרתו אחת: מקסום זכויותיכם והשגת התוצאה הטובה ביותר עבורכם.
            </p>
            <div className="flex gap-4 mt-8 flex-row-reverse justify-start">
              <button 
                onClick={handleConsultationClick}
                className="bg-[#cca830] hover:bg-[#b08e24] text-white font-semibold py-4 px-10 rounded-sm text-sm md:text-base shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                id="hero-primary-cta"
              >
                תיאום פגישת ייעוץ
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section (Practice Areas Grid) */}
      <section className="py-20 bg-[#f3f4f5]" id="home-practice-areas">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="mb-14 text-right">
            <h2 className="font-serif text-3xl md:text-4.5xl text-[#001F3F] font-bold mb-3">תחומי התמחות</h2>
            <div className="editorial-line" />
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Box 1: Litigation */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#001F3F] border border-white/5 p-8 flex flex-col justify-between hover:border-[#cca830] transition-colors duration-300 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/5">
                  <Scale className="text-[#e9c349]" size={26} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold mb-4">ליטיגציה</h3>
                <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed text-justify">
                  ניהול סכסוכים מורכבים בערכאות המשפטיות השונות. ליטיגציה אקטיבית וחתירה למגע להבטחת מיקסום סיכויי ההצלחה.
                </p>
              </div>
              <button 
                onClick={() => onNavClick('litigation')}
                className="flex items-center gap-2 text-[#e9c349] font-bold text-[15px] cursor-pointer hover:text-white transition-colors mt-8 self-start flex-row"
              >
                <span>למידע נוסף</span>
                <ArrowLeft size={19} />
              </button>
            </div>

            {/* Box 2: Insolvency */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#001F3F] border border-white/5 p-8 flex flex-col justify-between hover:border-[#cca830] transition-colors duration-300 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/5">
                  <Wallet className="text-[#e9c349]" size={26} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold mb-4">חדלות פירעון</h3>
                <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed text-justify">
                  ליווי חייבים ונושים, שיקום כלכלי והסדרי חוב. טיפול מקצועי ורשת בטחון עד לקבלת ההפטר המיוחל.
                </p>
              </div>
              <button 
                onClick={() => onNavClick('insolvency')}
                className="flex items-center gap-2 text-[#e9c349] font-bold text-[15px] cursor-pointer hover:text-white transition-colors mt-8 self-start flex-row"
              >
                <span>למידע נוסף</span>
                <ArrowLeft size={19} />
              </button>
            </div>

            {/* Box 3: Repossession */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#001F3F] border border-white/5 p-8 flex flex-col justify-between hover:border-[#cca830] transition-colors duration-300 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/5">
                  <Banknote className="text-[#e9c349]" size={26} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold mb-4">גבייה והוצאה לפועל</h3>
                <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed text-justify">
                  גביית חובות, המחאות חוזרות ומימוש פסקי דין בנחישות וביעילות מול לשכות ההוצאה לפועל ברחבי הארץ.
                </p>
              </div>
              <button 
                onClick={() => onNavClick('repossessions')}
                className="flex items-center gap-2 text-[#e9c349] font-bold text-[15px] cursor-pointer hover:text-white transition-colors mt-8 self-start flex-row"
              >
                <span>למידע נוסף</span>
                <ArrowLeft size={19} />
              </button>
            </div>

            {/* Box 4: Wills / Inheritances */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#001F3F] border border-white/5 p-8 flex flex-col justify-between hover:border-[#cca830] transition-colors duration-300 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/5">
                  <Scroll className="text-[#e9c349]" size={26} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold mb-4">ירושות וצוואות</h3>
                <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed text-justify">
                  עריכת צוואות, בקשות לקבלת צווי ירושה וניהול עיזבונות וסכסוכים משפטיים ברגישות ובמקצועיות עילאית.
                </p>
              </div>
              <button 
                onClick={() => onNavClick('wills')}
                className="flex items-center gap-2 text-[#e9c349] font-bold text-[15px] cursor-pointer hover:text-white transition-colors mt-8 self-start flex-row"
              >
                <span>למידע נוסף</span>
                <ArrowLeft size={19} />
              </button>
            </div>

            {/* Box 5: Epoa */}
            <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#001F3F] border border-white/5 p-8 flex flex-col justify-between hover:border-[#cca830] transition-colors duration-300 shadow-md">
              <div>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-white/5">
                  <FileCheck className="text-[#e9c349]" size={26} />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-white font-semibold mb-4">ייפוי כוח מתמשך</h3>
                <p className="text-white/80 font-sans text-xs md:text-sm leading-relaxed text-justify">
                  עריכת מסמך משפטי המאפשר לכם לקבוע מראש מי יטפל בענייניכם, תוך הבטחת רצונכם ושמירה על כבודכם.
                </p>
              </div>
              <button 
                onClick={() => onNavClick('epoa')}
                className="flex items-center gap-2 text-[#e9c349] font-bold text-[15px] cursor-pointer hover:text-white transition-colors mt-8 self-start flex-row"
              >
                <span>למידע נוסף</span>
                <ArrowLeft size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* "I Believe" Visionary Section */}
      <section className="py-24 bg-white" id="home-i-believe">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Biography & Vision Texts (Right) */}
            <div className="w-full lg:w-1/2 text-right flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-[#001F3F] font-bold mb-2">
                  ה"אני מאמין" שלי - מקצועיות בלתי מתפשרת, אתכם לאורך כל הדרך
                </h2>
                <div className="editorial-line mb-8" />
                <p className="font-sans text-[17px] text-gray-700 leading-relaxed mb-6 text-justify">
                  אני מאמינה כי עורך דין טוב הוא קודם כל <strong>שותף לדרך</strong>. עבורי, המשפט הוא לא רק עולם של תקנות וסעיפים, אלא כלי משמעותי לשינוי מציאות עבור אנשים הנמצאים בצמתים מורכבים בחייהם.
                </p>
                <p className="font-sans text-[17px] text-gray-700 leading-relaxed text-justify mb-8">
                  טובת הלקוח היא המצפן המנחה את כל פעולות המשרד. לכן, הליווי שלי מבוסס על שלושה עמודי תווך:
                </p>
              </div>

              {/* Real 3 Pillars */}
              <div className="flex flex-col gap-6 mb-10">
                {/* Pillar 1 */}
                <div className="flex gap-4 items-start flex-row text-right">
                  <div className="shrink-0 pt-1 text-[#cca830]">
                    <Eye size={24} className="stroke-[2.5]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-serif text-xl text-[#001F3F] font-normal mb-1">שקיפות מלאה</h4>
                    <p className="font-sans text-[17px] text-gray-600 leading-relaxed">בניית אסטרטגיה בגובה העיניים, כך שהלקוח תמיד יודע היכן הוא עומד ומהם הצעדים הבאים.</p>
                  </div>
                </div>
                {/* Pillar 2 */}
                <div className="flex gap-4 items-start flex-row text-right">
                  <div className="shrink-0 pt-1 text-[#cca830]">
                    <Gavel size={24} className="stroke-[2.5]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-serif text-xl text-[#001F3F] font-normal mb-1">נחישות</h4>
                    <p className="font-sans text-[17px] text-gray-600 leading-relaxed">לחימה בלתי מתפשרת על מיצוי כל זכות וזכות, תוך שימוש בניסיון שצברתי משני צדי המתרס המשפטי.</p>
                  </div>
                </div>
                {/* Pillar 3 */}
                <div className="flex gap-4 items-start flex-row text-right">
                  <div className="shrink-0 pt-1 text-[#cca830]">
                    <Brain size={24} className="stroke-[2.5]" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-serif text-xl text-[#001F3F] font-normal mb-1">רגישות</h4>
                    <p className="font-sans text-[17px] text-gray-600 leading-relaxed">הבנה עמוקה של המטען הרגשי הנלווה לסכסוכים משפטיים, במיוחד בתחומי הירושות וחדלות הפירעון.</p>
                  </div>
                </div>
              </div>

              {/* Citation quote footer element inside design */}
              <div className="border-r-4 border-[#cca830] pr-5 py-2 mt-auto" id="visionary-quote-pulled">
                <p className="font-serif text-lg text-gray-800 italic leading-relaxed text-justify">
                  "החזון שלי הוא להוות עבורכם עוגן של יציבות בתוך הסערה, להקל עליכם את הבירוקרטיה ככל הניתן, ולהוביל אתכם בבטחה אל עבר עתיד חדש ורגוע יותר. <strong className="text-[#001F3F] font-semibold">ההצלחה שלכם היא המדד האמיתי להצלחה שלי.</strong>"
                </p>
                <div className="flex items-center gap-2 mt-3 flex-row text-xs text-gray-500 font-bold tracking-wider">
                  <HeartHandshake size={14} className="text-[#cca830]" />
                  <span>עו"ד שני טננבאום, מייסדת</span>
                </div>
              </div>
            </div>

            {/* High Quality Portrait Column (Left) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="relative group overflow-hidden shadow-2xl rounded-sm border-[8px] border-gray-50 w-full" id="attorney-portrait-image-holder">
                <img 
                  alt="עו&quot;ד שני טננבאום | מנהלת ומייסדת המשרד" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvJwZCuBR_TzfFSOevi7aCUucUu7HWu0jXBCJNLDUM_1FeDAyv4z1ACn8a5vtqLVLykQUs2GaRf3iFe34Czr6uz4JzbVBzYjYuyeDwWCtF4xR0LcgdcZdCJYvvBFpwBZFToY1uMdU5y-65zXKq5OjtGD1SwF3U1jAusBEaxDilQD_IxNzjLUspPq2HYaVC9IbiaSV2QC9e9IFozH0MdtViZjHA1_B9Yw6eeev98H7xRWAam-jlUmgdZA23F8DYmvr8Ax-3thgZ4-9j"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Fast Contact Form Section */}
      <section className="py-14 bg-[#f3f4f5] border-y border-gray-200" id="home-fast-contact">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <div className="mb-8">
            <h2 className="font-serif text-2xl md:text-3xl text-[#001F3F] font-bold">צריכים ייעוץ משפטי דחוף?</h2>
            <p className="font-sans text-sm text-gray-600 mt-2">
              לכל שאלה משפטית – חייגו: <a className="font-bold text-[#cca830] hover:underline" href="tel:052-4088886">052-4088886</a> או השאירו פרטים ונחזור אליכם בהקדם.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center max-w-[1100px] mx-auto">
            <input 
              required
              disabled={isSubmitting}
              type="text" 
              placeholder="שם מלא *"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors disabled:bg-gray-100 disabled:text-gray-500"
            />
            <input 
              required
              disabled={isSubmitting}
              type="tel" 
              placeholder="טלפון ליצירת קשר *"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-all text-right disabled:bg-gray-100 disabled:text-gray-500"
              dir="ltr"
            />
            <input 
              disabled={isSubmitting}
              type="email" 
              placeholder="כתובת אימייל"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors disabled:bg-gray-100 disabled:text-gray-500"
            />
            <select
              disabled={isSubmitting}
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-[#cca830] focus:ring-1 focus:ring-[#cca830] text-base md:text-sm outline-none transition-colors text-right disabled:bg-gray-100 disabled:text-gray-500"
            >
              <option value="פנייה כללית">פנייה כללית</option>
              <option value="חדלות פירעון ושיקום">חדלות פירעון ושיקום</option>
              <option value="ייפוי כוח מתמשך">ייפוי כוח מתמשך</option>
              <option value="ליטיגציה וסכסוכים">ליטיגציה וסכסוכים</option>
              <option value="ירושות וצוואות">ירושות וצוואות</option>
              <option value="גבייה והוצאה לפועל">גבייה והוצאה לפועל</option>
            </select>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#cca830] hover:bg-[#b39129] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold text-sm py-3.5 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send size={15} />
              <span>{isSubmitting ? 'שולח...' : 'שלח פנייה'}</span>
            </button>
          </form>

          {submitError && (
            <div className="mt-4 text-red-600 font-bold text-sm">
              {submitError}
            </div>
          )}

          {isSubmitted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 max-w-2xl mx-auto space-y-2 py-4 px-4 bg-green-50 border border-green-200 rounded-sm"
              id="home-contact-success-notification"
            >
              <p className="text-[#20b855] font-bold text-sm">
                ✓ הפנייה נשלחה ונקלטה בהצלחה! נציג מהמשרד יחזור אליכם בהקדם.
              </p>
              {isDemoMode && (
                <div className="mt-2 text-right bg-amber-50 border border-amber-200 p-3 rounded text-xs text-amber-800 space-y-1">
                  <p className="font-bold">💡 מצב סימולציה מקומית (פנייה נשמרה בלוג):</p>
                  <p>על מנת לקבל את פניות המיילים לתיבת הדואר האלקטרוני האמיתית שלך, עליך להגדיר את מפתח הגישה של Web3Forms בקובץ ה-<code>.env</code> עם מפתח הגישה שקיבלת: <code>VITE_WEB3FORMS_ACCESS_KEY</code>.</p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
