import { motion } from 'motion/react';

export default function AboutView() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full bg-[#f8f9fa] overflow-hidden"
    >
      {/* Editorial Profile Hero */}
      <section className="relative py-20 px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Column (Right in RTL layout) */}
          <div className="lg:col-span-7 z-10 order-2 lg:order-1 text-right">
            <div className="editorial-line mb-6" />
            <h1 className="font-serif text-4xl md:text-5.5xl text-[#001F3F] font-bold mb-8">
              אודות עו"ד שני טננבאום
            </h1>
            <div className="space-y-6 max-w-2xl text-justify font-sans text-gray-700 text-base md:text-lg leading-relaxed">
              <p>
                עו"ד שני טננבאום, מייסדת המשרד, מביאה עמה שילוב ייחודי של מומחיות משפטית מעמיקה, ראייה עסקית רחבה וגישה אנושית יוצאת דופן. שני היא בעלת תואר ראשון במשפטים (LL.B) ותואר ראשון במנהל עסקים (B.A), וחברה בלשכת עורכי הדין בישראל משנת 2016.
                <br />
                שני נשואה לאסף, ולהם שלושה ילדים.
              </p>

            </div>
          </div>

          {/* Portrait Column with Decorative Frames (Left in RTL layout) */}
          <div className="lg:col-span-5 relative order-1 lg:order-2 flex justify-center">
            <div className="relative z-10 border-[12px] border-white shadow-2xl overflow-hidden rounded-sm max-w-[380px] w-full">
              <img 
                alt="Portrait of Attorney Shani Tenenbaum" 
                className="w-full h-auto object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0xz3xT5eVHQznxt9LHCb1kVZDaswehRYgixFOnfT05y_UXBi3Ll_8WLOJ1Pqm5E-2dAtYXbMz-PCnhHbdNJBrw5ZsPytq2aNjtOUpD_wDEHwgB49-2z2I5tjwn3VyG_Ie1nppElHp6XpqBiBiUAT7Zg21JPvBCBvDYn9akmOdtGeFVvBjIxJfSoIsQfKIMpYqorfW8xU5_S4AJJPuIuPXllQowbjS6G_fDx3NTIBi0snAKvH2VtDz1Wo5y254EWSARoNc4VwLytTh"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decors mapped identically to the visual presentation */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#cca830]/10 -z-0" />
            <div className="absolute -bottom-6 -left-6 w-56 h-56 border border-gray-300/60 -z-0" />
          </div>
        </div>
      </section>

      {/* Detailed Content Deep Dive Section */}
      <section className="bg-white py-20 border-t border-gray-100 text-right">
        <div className="px-6 max-w-[900px] mx-auto space-y-20">
          
          {/* Professional Experience & Strategy */}
          <div className="space-y-6">
            <div className="editorial-line mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#001F3F] font-bold leading-tight">
              ניסיון מקצועי ויתרון אסטרטגי
            </h2>
            <div className="space-y-6 text-[#191c1d] leading-relaxed text-justify font-sans text-[16px] md:text-[18px]">
              <p>
                את דרכה המקצועית החלה שני בהתמחות ובעבודה רבת שנים בתחום חדלות הפירעון במשרדים מובילים. לאורך השנים, צברה ניסיון נדיר ורב-ערך כאשר ליוותה מאות הליכי פשיטת רגל וחדלות פירעון מטעם נאמן הממונה על ידי הכונס הרשמי ובית המשפט עצמו.
              </p>
              <p>
                העובדה ששני פעלה בתוך המערכת בשם הגופים המנהלים את ההליכים, מעניקה לה יתרון אסטרטגי מכריע עבור לקוחותינו כיום. היא מכירה את הליכי חדלות הפירעון "מבפנים" על כל דקויותיהם, את שיקולי המערכת ואת הדרכים היעילות ביותר לצלוח את ההליך בשלום.
              </p>
              <p className="font-bold">
                היכרות מעמיקה זו מאפשרת לה לבנות עבור כל לקוח אסטרטגיה מדויקת, המובילה לתוצאות אופטימליות ולמיצוי מקסימלי של זכויותיהם, מתוך מטרה לסיים את ההליך בצורה הקלה, הנוחה והמהירה ביותר.
              </p>
            </div>
          </div>

          {/* Litigation & Dispute Resolution */}
          <div className="space-y-6">
            <div className="editorial-line mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#001F3F] font-bold leading-tight">
              ליטיגציה וניהול סכסוכים: נחישות ויכולת לראות את הנולד
            </h2>
            <div className="space-y-6 text-[#191c1d] leading-relaxed text-justify font-sans text-[16px] md:text-[18px]">
              <p>
                ניהול הליך משפטי בבית המשפט – בין אם כצד התובע ובין אם כצד הנתבע – הוא זירה הדורשת הרבה מעבר לידע משפטי יבש. עו"ד שני טננבאום מלווה את לקוחותיה בניהול סכסוכים מורכבים בערכאות המשפטיות השונות בכל רחבי הארץ.
              </p>
              <p>
                הגישה המקצועית של שני מושתתת על ליטיגציה אקטיבית: חתירה מתמדת למגע, מקצועיות ללא פשרות ויכולת לצפות מראש את מהלכי הצד השני. שני מובילה את לקוחותיה בביטחון בתוך אולם בית המשפט, תוך ניתוח מעמיק של הסיכויים והסיכונים, במטרה להבטיח את מיקסום סיכויי ההצלחה בכל תיק ותיק.
              </p>
            </div>
          </div>

          {/* "I Believe" / Vision (Minimal Design with Gold Line) */}
          <div className="space-y-6">
            <div className="editorial-line mb-4" />
            <h2 className="font-serif text-3xl md:text-4xl text-[#001F3F] font-bold mb-10 leading-tight">
              ה"אני מאמין" שלי - מקצועיות בלתי מתפשרת, אתכם לאורך כל הדרך
            </h2>
            <div className="space-y-6 text-justify text-[#191c1d] font-sans text-[16px] md:text-[18px] leading-relaxed mb-10">
              <p>
                אני מאמינה כי עורך דין טוב הוא קודם כל <strong>שותף לדרך</strong>. עבורי, המשפט הוא לא רק עולם של תקנות וסעיפים, אלא כלי משמעותי לשינוי מציאות עבור אנשים הנמצאים בצמתים מורכבים בחייהם. הגישה המקצועית שלי מושתתת על ליטיגציה אקטיבית: חתירה מתמדת למגע, מקצועיות ללא פשרות ויכולת לצפות מראש את מהלכי הצד השני כדי להגן עליכם.
              </p>
              <p>
                אני מובילה את לקוחותיי בביטחון בתוך אולם בית המשפט, תוך ניתוח מעמיק של הסיכויים והסיכונים, במטרה להבטיח את מיקסום סיכויי ההצלחה בכל תיק ותיק. עבורי, כל מקרה הוא עולם ומלואו, ואני מחויבת להעניק את המעטפת המשפטית והאישית הטובה ביותר לאורך כל הדרך.
              </p>
            </div>
            
            {/* Elegant Quotation block with Gold border treatment */}
            <div className="relative pr-8 border-r-4 border-[#cca830] py-4 rounded-sm p-6">
              <p className="text-[#001F3F] italic leading-relaxed mb-4 text-xl md:text-2xl font-serif font-medium">
                "החזון שלי הוא להוות עבורכם עוגן של יציבות בתוך הסערה המשפטית, ולהוביל אתכם בבטחה אל עבר עתיד חדש ורגוע יותר."
              </p>
              <p className="font-sans text-[#001F3F] font-bold text-sm tracking-wider">
                ההצלחה שלכם היא המדד האמיתי להצלחה שלי.
              </p>
            </div>
          </div>

        </div>
      </section>
    </motion.div>
  );
}
