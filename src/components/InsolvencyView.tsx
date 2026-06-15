import { Wallet, Users, Gauge, Shield, Zap, Gavel, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { ActiveView } from '../types';
import heroImg from '../assets/images/heroImg.webp';

interface PracticeViewProps {
  onContactClick: () => void;
}

export default function InsolvencyView({ onContactClick }: PracticeViewProps) {
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
            alt="Professional law office meeting room background" 
            className="w-full h-full object-cover" 
            src={heroImg}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6">
            <span className="inline-block h-1.5 w-16 md:w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-2xl xs:text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              חדלות פירעון ושיקום כלכלי: הדרך המהירה והבטוחה לדף חדש
            </h1>
            <p className="font-sans text-sm md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              אנו מלווים אתכם בתהליך המורכב בנחישות וברגישות, עד לקבלת ההפטר והיציאה לדרך כלכלית חדשה.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Introduction Card (Replicates floating Scales of justice card) */}
            <div className="relative bg-[#f8f9fa] p-6 xs:p-8 md:p-12 border border-gray-100 group hover:border-[#cca830]/40 transition-all duration-500 max-w-[950px] mx-auto rounded-sm shadow-sm">
              <div className="absolute -top-5 right-6 xs:right-10 leading-none text-[#cca830]">
                <Wallet size={40} />
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-loose text-justify mt-3" style={{ textJustify: 'inter-word' }}>
                היקלעות לחובות שאינם ניתנים לפירעון היא הרבה מעבר לאתגר פיננסי; מדובר בטלטלה רגשית המקיפה את התא המשפחתי כולו. אנו מבינים את המשקל הכבד שחשים בני הזוג, את הדאגה לילדים ואת החשש מהסטיגמה החברתית הנלווית לעיתים להליך. הפחד מהלא-נודע הוא טבעי, אך חשוב לזכור כי החוק כיום רואה בחדלות פירעון כלי לשיקום, ולא כעונש.
              </p>
            </div>

            {/* Split Two Column Layout: Empathy vs Strategic Speed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-4 md:mt-8 text-right">
              
              {/* Empathy Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Users size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">ליווי אישי ורגישות למשפחה</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  המומחיות הייחודית של עו"ד שני טננבאום מאפשרת לה לנווט את ההליך במיומנות רבה, תוך ראייה כוללת של צרכי משק הבית. הליווי שלנו מתמקד לא רק במספרים, אלא באנשים שמאחוריהם: אנו פועלים לצמצם ככל הניתן את הפגיעה בסביבה הקרובה ובמשפחה, מתוך מטרה להוביל אתכם לדרך חדשה במינימום זמן ובמקסימום ביטחון.
                </p>
              </div>

              {/* Speed / Strategy Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Gauge size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">אסטרטגיה לשיקום מהיר</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  הניסיון המעמיק של שני בייצוג גופי האכיפה והנאמנים מאפשר לה לבנות אסטרטגיה חכמה שחותרת לסיום ההליך בצורה המהירה ביותר, כדי שתוכלו להשאיר את המועקה מאחור ולחזור לנהל חיי משפחה שקטים ויציבים. אנו יודעים כיצד לפעול מול כל הגורמים הרלוונטיים כדי להבטיח את האינטרסים שלכם ואת עתידכם הכלכלי.
                </p>
              </div>

            </div>

            {/* Bottom Accent Grid showing Insolvency core advantages */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Shield className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">הגנה על התא המשפחתי</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Zap className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">הליך מואץ לשיקום</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Gavel className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">ניסיון מול הנאמנים</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <FileText className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">ייצוג מול גופי אכיפה</div>
              </div>
            </div>

            {/* CTA action trigger button */}
            <div className="mt-16 flex justify-center">
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
