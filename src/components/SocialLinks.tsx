import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Plus, X } from 'lucide-react';

export const SocialLinks = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { Icon: Github, href: "https://github.com/Sahidvv", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/sahidvilic/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:sahidvilic.wh@gmail.com", label: "Email" },
  ];

  const linkStyles = "p-4 rounded-full bg-purple-600 hover:bg-cyan-500 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-6 z-50";
  const mobileLinkStyles = "p-3 rounded-full bg-purple-600 hover:bg-cyan-500 text-white transition-all duration-300 transform hover:scale-110 z-50";

  return (
    <>
      {/* Hero section social links */}
      <div className={`flex justify-center gap-6 mt-8 transition-opacity duration-500 ${
        isScrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
            aria-label={label}
          >
            <Icon className="w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Desktop Fixed side social links */}
      <div className={`hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col gap-4 transition-all duration-500 z-50 ${
        isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}>
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyles}
            aria-label={label}
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Mobile Floating Action Button */}
      <div className={`md:hidden fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
      }`}>
        {/* Social Links Menu */}
        <div className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={mobileLinkStyles}
              aria-label={label}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-4 rounded-full bg-purple-600 hover:bg-cyan-500 text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Toggle social links"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Plus className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
};