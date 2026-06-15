import { Scale, TrendingUp, Anchor, Briefcase, Gavel, Handshake, FileSymlink } from 'lucide-react';
import { motion } from 'motion/react';

interface PracticeViewProps {
  onContactClick: () => void;
}

export default function LitigationView({ onContactClick }: PracticeViewProps) {
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
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6dsVpRXBC4ONKKRVtxY_zmaH5lG4nCaosWZlebWrjmQ2NJJfpbloOTcOUmpd5XF7qjMkuI09Y1kswi4eXWsClI95E-55KMAwk_YHniFKBqm7s6bEpl3UEClqnjoBQNizTKWa8ZUEQ7N3_654N70weYCZu5QgonlPxxRNduIr5lDNj7sJAmptQze8C41RQ28g9z_lcis-lIuHnqnHOTJ7b4c16O4BtMvdoZx9OZz2rlYIelkkMcu_g_sjdZGg89iIzrJaCWh8jhhR_"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#001F3F]/80" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 text-center select-none">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6" id="litigation-hero-text">
            <span className="inline-block h-1.5 w-16 md:w-24 bg-[#cca830] rounded-full" />
            <h1 className="font-serif text-2xl xs:text-3xl md:text-5xl text-white font-bold leading-tight md:leading-none">
              ליטיגציה וניהול סכסוכים: ייצוג נחוש בכל ערכאות המשפט
            </h1>
            <p className="font-sans text-sm md:text-xl text-white/95 leading-relaxed max-w-2xl text-center">
              אסטרטגיה משפטית מקיפה וניהול הליכים מורכבים במקצועיות ללא פשרות.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Deep Dive */}
      <main className="py-12 md:py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 md:gap-16">
            
            {/* Introduction Card with top floating scales icon */}
            <div className="relative bg-[#f8f9fa] p-6 xs:p-8 md:p-12 border border-gray-100 group hover:border-[#cca830]/40 transition-all duration-500 max-w-[950px] mx-auto rounded-sm shadow-sm" id="litigation-intro-card">
              <div className="absolute -top-5 right-6 xs:right-10 leading-none text-[#cca830]">
                <Scale size={40} />
              </div>
              <p className="font-sans text-base md:text-lg text-gray-700 leading-loose text-justify mt-3" style={{ textJustify: 'inter-word' }}>
                ניהול הליך משפטי הוא הרבה מעבר להגשת מסמכים; זוהי מערכה אסטרטגית שבה לכל החלטה יש השפעה מכרעת על התוצאה הסופית. משרדנו מתמחה בייצוג וניהול סכסוכים אזרחיים ומסחריים בבתי המשפט בכל רחבי הארץ, תוך הענקת מעטפת מקצועית שלמה ללקוח – בין אם הוא ניצב בעמדת התובע ובין אם בעמדת הנתבע.
              </p>
            </div>

            {/* Split Two Column Layout: Strategy and Empathy */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start mt-4 md:mt-8 text-right">
              
              {/* Strategy Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <TrendingUp size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">אסטרטגיה מנצחת וראייה צופה פני עתיד</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  עו"ד שני טננבאום דוגלת בליטיגציה אקטיבית ויוזמת. אנו לא רק מגיבים למהלכי הצד השני, אלא "קוראים את המגרש" וצופים את הנולד. הגישה שלנו משלבת ניתוח משפטי מעמיק עם הבנה טקטית של זירת בית המשפט, מה שמאפשר לנו למקסם את סיכויי ההצלחה ולייצר יתרון משמעותי עבור לקוחותינו כבר מהשלבים הראשונים של ההליך.
                </p>
              </div>

              {/* Support Column */}
              <div className="space-y-4 md:space-y-6 flex flex-col items-start">
                <div className="flex items-center gap-4 flex-row">
                  <span className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#001F3F] border border-[#cca830]/30 flex items-center justify-center text-[#cca830] shrink-0">
                    <Anchor size={20} />
                  </span>
                  <h2 className="font-serif text-lg md:text-2xl text-[#001F3F] font-bold">העוגן שלכם באולם הדיונים</h2>
                </div>
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                  אנו מבינים שהליך משפטי עשוי להיות מורט עצבים ומלווה בחוסר ודאות. לכן, הליווי של שני הוא צמוד ואישי, מתוך מחויבות למקצועיות ללא פשרות ושקיפות מלאה מול הלקוח. המטרה שלנו היא אחת: להוות עבורכם עוגן איתן, להילחם על זכויותיכם בנחישות, ולהוביל אתכם לפתרון המשפטי הטוב ביותר במינימום סיכונים ובמקסימום תוצאות.
                </p>
              </div>

            </div>

            {/* Bottom Accent Grid showing Litigation specializations */}
            <div className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center" id="litigation-bento-grid">
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Briefcase className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">סכסוכים מסחריים</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Gavel className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">ייצוג בערכאות</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <Handshake className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">ניהול מו"מ</div>
              </div>
              <div className="bg-[#f8f9fa] p-4 xs:p-6 md:p-8 border-b-2 border-transparent hover:border-[#cca830] rounded-sm shadow-sm transition-all flex flex-col items-center">
                <FileSymlink className="text-[#001F3F] mb-3 md:mb-4 shrink-0" size={24} />
                <div className="font-sans font-bold text-[#001F3F] text-xs md:text-base">ליטיגציה אזרחית</div>
              </div>
            </div>

            {/* CTA action trigger button */}
            <div className="mt-16 flex justify-center" id="litigation-cta">
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
