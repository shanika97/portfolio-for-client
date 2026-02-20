import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
const navLinks = [
{
  label: 'Home',
  href: '#home'
},
{
  label: 'About',
  href: '#about'
},
{
  label: 'Experience',
  href: '#experience'
},
{
  label: 'Projects',
  href: '#projects'
},
{
  label: 'Skills',
  href: '#skills'
},
{
  label: 'Contact',
  href: '#contact'
}];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#EDF1F7]/80 backdrop-blur-xl nav-glow border-b border-[#E07A5F]/5' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Main navigation">

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick('#home');
          }}
          className="font-serif text-xl text-[#1a1a2e] tracking-tight relative"
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif"
          }}
          whileHover={{
            scale: 1.05
          }}
          whileTap={{
            scale: 0.95
          }}>

          S<span className="text-[#E07A5F]">.</span>M
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) =>
          <motion.li
            key={link.href}
            initial={{
              opacity: 0,
              y: -20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4,
              delay: 0.1 * i
            }}>

              <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-md ${activeSection === link.href.replace('#', '') ? 'text-[#E07A5F]' : 'text-[#1a1a2e]/70 hover:text-[#1a1a2e]'}`}>

                {link.label}
                {activeSection === link.href.replace('#', '') &&
              <motion.div
                layoutId="nav-indicator"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#E07A5F] to-[#C9A96E] rounded-full"
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30
                }} />

              }
              </a>
            </motion.li>
          )}
        </ul>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden p-2 text-[#1a1a2e] relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          whileTap={{
            scale: 0.9
          }}>

          <AnimatePresence mode="wait">
            {mobileOpen ?
            <motion.div
              key="close"
              initial={{
                rotate: -90,
                opacity: 0
              }}
              animate={{
                rotate: 0,
                opacity: 1
              }}
              exit={{
                rotate: 90,
                opacity: 0
              }}
              transition={{
                duration: 0.2
              }}>

                <XIcon className="w-5 h-5" />
              </motion.div> :

            <motion.div
              key="menu"
              initial={{
                rotate: 90,
                opacity: 0
              }}
              animate={{
                rotate: 0,
                opacity: 1
              }}
              exit={{
                rotate: -90,
                opacity: 0
              }}
              transition={{
                duration: 0.2
              }}>

                <MenuIcon className="w-5 h-5" />
              </motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu - slide from right */}
      <AnimatePresence>
        {mobileOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{
              duration: 0.3
            }}
            className="fixed inset-0 bg-[#1a1a2e]/20 backdrop-blur-sm md:hidden z-30"
            onClick={() => setMobileOpen(false)} />

            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-72 bg-[#EDF1F7] shadow-2xl md:hidden z-40 pt-20">

              <ul className="px-6 py-4 space-y-1">
                {navLinks.map((link, i) =>
              <motion.li
                key={link.href}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: 0.05 * i + 0.1
                }}>

                    <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === link.href.replace('#', '') ? 'text-[#E07A5F] bg-[#E07A5F]/5' : 'text-[#1a1a2e]/70'}`}>

                      {link.label}
                    </a>
                  </motion.li>
              )}
              </ul>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </motion.nav>);

}