import { Scroll, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface PracticeViewProps {
  onContactClick: () => void;
}

export default function WillsView({ onContactClick }: PracticeViewProps) {
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
            alt="Wills and inheritances background" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgTmDOJ67_jlnMaZ83xk8vbq8PzqS1zUWs3n2s038xUFn4nXIuNcLgyKHw6Ia2NkHS8JKtQqesdUPCx4clnmMQbZ22lJzTYUKR8zPXh-MtpDij8-wjiNq4XM2pTX3eHOrvCDrTpe4temFQqGARGkZI0qf0F7ELHfVv0iyXdsoq_gixkuryDQ4kKqeo7DDcTOzRgbYoMDag9Oi27lNoR8t1MW774mwGnHmpxrZTEz-cMbyLXr54uB3-bxhB2YE1lhZuACKjQ3LFm1pj"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6" id="wills-hero-text">
            <span className="inline-block h-1.5 w-16 md:w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-2xl xs:text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              ירושות וצוואות
            </h1>
            <p className="font-sans text-sm md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              הבטחת עתיד יקיריכם: עריכת צוואות וניהול עיזבונות ברגישות ובמקצועיות
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Introduction Card with top floating scales icon */}
            <div className="relative bg-[#f8f9fa] p-6 xs:p-8 md:p-12 border border-gray-100 group hover:border-[#cca830]/40 transition-all duration-500 max-w-[950px] mx-auto rounded-sm shadow-sm" id="wills-intro-card">
              <div className="absolute -top-5 right-6 xs:right-10 leading-none text-[#cca830]">
                <Scroll size={40} />
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-loose text-justify mt-3" style={{ textJustify: 'inter-word' }}>
                עיסוק בירושות וצוואות נוגע בנימים הרגישים ביותר של התא המשפחתי. אין מדובר רק בהחלטות רכושיות יבשות, אלא במורכבות רגשית, בדינמיקה משפחתית עדינה ובשאיפה להבטיח את עתיד יקיריכם ולמנוע סכסוכים עתידיים. משרדנו מעניק מעטפת משפטית וליווי רגיש ומקצועי בתחומי הירושה, עריכת צוואות מותאמות אישית וניהול עיזבונות.
              </p>
            </div>

            {/* Split Two Column Layout: Planning and Sensitivity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-4 md:mt-8 text-right">
              
              {/* Planning Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Scroll size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">עריכת צוואה בהתאמה מלאה</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  צוואה מקצועית היא כזו שנערכת מתוך צפיית פני עתיד ומונעת פרשנויות מוטעות או מחלוקות קשות בין היורשים ביום פקודה. אנו מקפידים על ניסוח משפטי מדויק, כזה אשר משקף נאמנה את רצונכם האחרון ומגן עליו באופן הרמטי, תוך התחשבות במגוון שיקולים משפטיים ומשפחתיים ומתן שקט נפשי מלא לכם ולמשפחתכם.
                </p>
              </div>

              {/* Sensitivity Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Heart size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">רגישות במצבים מורכבים</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  ניהול וחלוקת עיזבון, הגשת בקשות לצווי ירושה או צווי קיום צוואה, וכן התמודדות עם התנגדויות לצוואה בבתי המשפט לענייני משפחה – כל אלה דורשים ניסיון משפטי רב לצד רגישות אנושית עמוקה. עו"ד שני טננבאום מלווה אתכם בניהול ההליכים הללו בנחישות, תוך חתירה מתמדת לפתרון מוסכם שמקטין את החיכוך ומונע קרע משפחתי.
                </p>
              </div>

            </div>

            {/* CTA action trigger button */}
            <div className="mt-16 flex justify-center" id="wills-cta">
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
