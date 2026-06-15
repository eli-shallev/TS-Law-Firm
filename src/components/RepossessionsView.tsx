import { Banknote, Milestone, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

interface PracticeViewProps {
  onContactClick: () => void;
}

export default function RepossessionsView({ onContactClick }: PracticeViewProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-[#f8f9fa]"
    >
      {/* Page Hero Banner */}
      <section className="relative h-[280px] xs:h-[360px] md:h-[550px] flex items-center justify-center text-center py-10 md:py-16">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            alt="Collections and Repossessions background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB0_5sj408mG2QFbiMib_HT02s2JSXb0C_7QrMa-fZG8Yz8h8pDPQzs9W-8fHtqsPBX5c2GcREhqtcOH50Q054Mnur2cHvIDyaWN5afy-x5EQWJtRtrcQoz3PR71yLMx4Qu-dZxHL_xCR5vgDx8-2YT-OL6IXOsLQTqM0sn01ECvOQMyMH3QpWMX4q_h-bP3pqYPTr1UmE7fAKE-p0_j6xl8wMP-SXeJz-smhIbzeY1KIiR_iUgTsY5d6Odw-x8CxObrKc6-sbZMi4"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6" id="repossessions-hero-text">
            <span className="inline-block h-1.5 w-16 md:w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-2xl xs:text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              גבייה והוצאה לפועל
            </h1>
            <p className="font-sans text-sm md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              פעולה נחושה ויעילה: החזרת חובות וניהול הליכי הוצאה לפועל
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Introduction Card with top floating scales icon */}
            <div className="relative bg-[#f8f9fa] p-6 xs:p-8 md:p-12 border border-gray-100 group hover:border-[#cca830]/40 transition-all duration-500 max-w-[950px] mx-auto rounded-sm shadow-sm" id="repossessions-intro-card">
              <div className="absolute -top-5 right-6 xs:right-10 leading-none text-[#cca830]">
                <Banknote size={40} />
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-loose text-justify mt-3" style={{ textJustify: 'inter-word' }}>
                גביית חובות וניהול הליכי הוצאה לפועל דורשים מהירות, יעילות והבנה מעמיקה של רכיבי המערכת. אנו מייצגים זוכים וחייבים כאחד, מתוך מטרה להשיג את הפתרונות המהירים ביותר תוך שמירה על האינטרסים הכלכליים והביטחון המשפטי של לקוחותינו.
              </p>
            </div>

            {/* Split Two Column Layout: Planning and Sensitivity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-4 md:mt-8 text-right">
              
              {/* Creditors/Collection Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Milestone size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">ייצוג זוכים וגבייה מהירה</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  אנו פועלים בנחישות לגביית חובות, המחאות חוזרות, ומימוש פסקי דין בערכאות ההוצאה לפועל השונות. שימוש בכלים אסטרטגיים ומשפטיים מאפשר לנו למקסם את פעולות הגבייה במינימום עיכובים והעברה בטוחה של המידע והנכסים המגיעים לכם.
                </p>
              </div>

              {/* Debtors/Defense Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <ShieldAlert size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">הגנה על חייבים ובניית הסדרים</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  במצבים בהם לקוח נקלע לחובות, אנו מעניקים הגנה משפטית מקיפה, פועלים להסרת עיקולים והגבלות במהירות האפשרית, ומנהלים משא ומתן נחוש להשגת הסדר חובות נוח ואופטימלי שמאפשר לחזור למסלול חיים תקין.
                </p>
              </div>

            </div>

            {/* CTA action trigger button */}
            <div className="mt-16 flex justify-center" id="repossessions-cta">
              <button 
                onClick={onContactClick}
                className="inline-flex items-center justify-center bg-[#cca830] text-white font-sans font-semibold px-12 py-4 rounded-[0px_5px_0px_5px] hover:rounded-[5px_0px_5px_0px] transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base cursor-pointer"
              >
                ליצירת קשר עם המשרד
              </button>
            </div>

          </div>
        </div>
      </main>
    </motion.div>
  );
}
