import { FileCheck, HeartHandshake, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import heroImg from '../assets/images/heroImg.webp';

interface PracticeViewProps {
  onContactClick: () => void;
}

export default function EpoaView({ onContactClick }: PracticeViewProps) {
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
            alt="Professional law office background" 
            className="w-full h-full object-cover" 
            src={heroImg}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6" id="epoa-hero-text">
            <span className="inline-block h-1.5 w-16 md:w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-2xl xs:text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              ייפוי כוח מתמשך
            </h1>
            <p className="font-sans text-sm md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              תכנון המחר מתוך שקט נפשי: החשיבות של ייפוי כוח מתמשך
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Introduction Card with top floating scales of justice */}
            <div className="relative bg-[#f8f9fa] p-6 xs:p-8 md:p-12 border border-gray-100 group hover:border-[#cca830]/40 transition-all duration-500 max-w-[950px] mx-auto rounded-sm shadow-sm" id="epoa-intro-card">
              <div className="absolute -top-5 right-6 xs:right-10 leading-none text-[#cca830]">
                <FileCheck size={40} />
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-loose text-justify mt-3" style={{ textJustify: 'inter-word' }}>
                ייפוי כוח מתמשך הוא כלי משפטי עוצמתי המעניק לכם את הזכות לקבוע כבר עכשיו מי יטפל בענייניכם האישיים, הרפואיים והרכושיים, וכיצד יתקבלו ההחלטות הנוגעות אליכם אם חלילה לא תוכלו לעשות זאת בעצמכם. במקום להשאיר את ההחלטות הגורליות הללו בידי מערכת משפטית זרה או להטיל נטל בירוקרטי כבד על המשפחה, המסמך מאפשר לכם להשמיע את קולכם בבירור, גם בעתיד.
              </p>
            </div>

            {/* Split Two Column Layout: Personal and Professional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-4 md:mt-8 text-right">
              
              {/* Personalization Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <HeartHandshake size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">התאמה אישית</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  אנו מבינים כי העיסוק בעתידנו האישי והבריאותי מעורר מורכבות רגשית רבה. לכן, התהליך כולו מותאם באופן אישי אליכם. מפגש בגובה העיניים, בקצב שלכם ומתוך הקשבה מלאה לחששות ולרצונות הייחודיים שלכם, עבורנו אתם לא "תיק משפטי", אלא עולם ומלואו.
                </p>
              </div>

              {/* Professionalism Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <ShieldCheck size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">מקצועיות ללא פשרות</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  אנו מקפידים על ניסוח משפטי מדויק, צופה פני עתיד ואשר נתפר כחליפה אישית למידותיכם, כדי להבטיח הגנה מלאה ביום פקודה. ייפוי כוח מתמשך הוא מתנה של שקט נפשי שאתם מעניקים לעצמכם ולמשפחתכם.
                </p>
              </div>

            </div>

            {/* CTA action trigger button */}
            <div className="mt-16 flex justify-center" id="epoa-cta">
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
