import { ActiveView } from '../types';
import logoImg from '../assets/images/logo.webp';

const FacebookGoldIcon = () => (
  <div 
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#001F3F]/40 text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 select-none"
    aria-hidden="true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="fb-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9F6EA" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B38728" />
          <stop offset="100%" stopColor="#F9F6EA" />
        </linearGradient>
      </defs>
      <path 
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" 
        stroke="url(#fb-gold)" 
        fill="none" 
      />
    </svg>
  </div>
);

const InstagramGoldIcon = () => (
  <div 
    className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37]/40 bg-[#001F3F]/40 text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37]/15 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:scale-110 active:scale-95 select-none"
    aria-hidden="true"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 transition-transform duration-300 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="insta-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9F6EA" />
          <stop offset="35%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#B38728" />
          <stop offset="100%" stopColor="#F9F6EA" />
        </linearGradient>
      </defs>
      <rect 
        x="2" y="2" width="20" height="20" rx="5" ry="5" 
        stroke="url(#insta-gold)" 
        fill="none" 
      />
      <path 
        d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
        stroke="url(#insta-gold)" 
        fill="none" 
      />
      <line 
        x1="17.5" y1="6.5" x2="17.51" y2="6.5" 
        stroke="url(#insta-gold)" 
        fill="none" 
      />
    </svg>
  </div>
);

interface FooterProps {
  onNavClick: (view: ActiveView) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const handleLogoClick = () => {
    onNavClick('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#001F3F] text-white/90 border-t border-white/10 relative z-30 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8 text-center text-right md:text-right w-full">
          {/* Logo Brand Treatment (RTL Right, LTR Left) */}
          <div className="flex items-center justify-center md:items-end md:w-1/3 order-1 md:order-1">
            <img 
              alt="טננבאום שלו - משרד עורכי דין" 
              className="h-16 md:h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-[1.02]" 
              src={logoImg}
              onClick={handleLogoClick}
              referrerPolicy="no-referrer"
              id="footer-brand-logo"
            />
          </div>

          {/* Centered Copyright with elegant font sizing */}
          <div className="text-white/60 font-sans text-sm md:w-1/3 text-center order-3 md:order-2" id="footer-copyright-text">
            © טננבאום שלו - משרד עורכי דין. כל הזכויות שמורות.
          </div>

          {/* Social Network gold-themed badge buttons centered with high-end luxury styling */}
          <div className="flex items-center justify-center gap-6 md:w-1/3 order-2 md:order-3" id="footer-socials-container">
            <a 
              href="https://www.facebook.com/share/1GCD7XEPss/" 
              aria-label="Facebook Page Link"
              target="_blank"
              rel="no-referrer"
              className="block"
            >
              <FacebookGoldIcon />
            </a>
            <a 
              href="https://www.instagram.com/shanitenenbaum.adv?igsh=MTloNXpxY3FjdWt2cA==" 
              aria-label="Instagram Profile Link"
              target="_blank"
              rel="no-referrer"
              className="block"
            >
              <InstagramGoldIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
