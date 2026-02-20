import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
const PROFILE_IMAGE = "/WhatsApp_Image_2026-02-20_at_10.58.10_AM.jpg";

const wordReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: 40
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: 0.3 + i * 0.12,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-gradient-to-br from-[#EDF1F7] via-[#F0F2F8] to-[#E8ECF4]"
      aria-label="Introduction">

      {/* Animated decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-20 right-[10%] w-80 h-80 bg-[#E07A5F]/[0.07] rounded-full blur-3xl" />

        <motion.div
          animate={{
            x: [0, -15, 20, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.95, 1.08, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-32 left-[5%] w-96 h-96 bg-[#81B29A]/[0.07] rounded-full blur-3xl" />

        <motion.div
          animate={{
            x: [0, 10, -20, 0],
            y: [0, -20, 5, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/3 left-1/2 w-56 h-56 bg-[#C9A96E]/[0.06] rounded-full blur-2xl" />

      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div
            className="order-2 md:order-1"
            style={{
              perspective: '800px'
            }}>

            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}>

              <span className="inline-block text-[#E07A5F] text-sm font-semibold tracking-widest uppercase mb-4 relative">
                UI/UX Engineer - Intern
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-[#E07A5F]/30"
                  initial={{
                    width: 0
                  }}
                  animate={{
                    width: '100%'
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6
                  }} />

              </span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-6 overflow-hidden"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif"
              }}>

              <div className="overflow-hidden">
                <motion.span
                  className="inline-block"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={wordReveal}>

                  Hi, I'm{' '}
                </motion.span>
                <motion.span
                  className="inline-block text-[#E07A5F]"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={wordReveal}>

                  Surekha
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span
                  className="inline-block"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={wordReveal}>

                  Madhuwanthi
                </motion.span>
              </div>
            </h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="text-[#1a1a2e]/60 text-lg md:text-xl max-w-xl leading-relaxed mb-8">

              A motivated software engineering student with a passion for
              creating intuitive, user-centered digital experiences and eager to
              grow as a UI/UX professional.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.85
              }}
              className="flex flex-wrap items-center gap-4 mb-10">

              <motion.button
                onClick={() => handleScroll('#projects')}
                className="px-7 py-3.5 bg-[#E07A5F] text-white text-sm font-semibold rounded-full hover:bg-[#C4603F] transition-all focus-visible:ring-2 focus-visible:ring-[#E07A5F] focus-visible:ring-offset-2 shadow-lg shadow-[#E07A5F]/20 hover:shadow-xl hover:shadow-[#E07A5F]/30"
                whileHover={{
                  scale: 1.03,
                  y: -1
                }}
                whileTap={{
                  scale: 0.97
                }}>

                View My Work
              </motion.button>
              <motion.button
                onClick={() => handleScroll('#contact')}
                className="px-7 py-3.5 border-2 border-[#1a1a2e]/15 text-[#1a1a2e] text-sm font-semibold rounded-full hover:border-[#E07A5F] hover:text-[#E07A5F] transition-all"
                whileHover={{
                  scale: 1.03,
                  y: -1
                }}
                whileTap={{
                  scale: 0.97
                }}>

                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.7,
                delay: 1.0
              }}
              className="flex items-center gap-4">

              <motion.a
                href="https://github.com/sureka01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1a1a2e]/5 text-[#1a1a2e]/60 hover:bg-[#E07A5F]/10 hover:text-[#E07A5F] transition-colors"
                aria-label="GitHub profile"
                whileHover={{
                  scale: 1.15,
                  rotate: 5
                }}
                whileTap={{
                  scale: 0.9
                }}>

                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/surekha-gamage-5644223a7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#1a1a2e]/5 text-[#1a1a2e]/60 hover:bg-[#E07A5F]/10 hover:text-[#E07A5F] transition-colors"
                aria-label="LinkedIn profile"
                whileHover={{
                  scale: 1.15,
                  rotate: -5
                }}
                whileTap={{
                  scale: 0.9
                }}>

                <LinkedinIcon className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:surekagamage2001@gmail.com"
                className="p-2.5 rounded-full bg-[#1a1a2e]/5 text-[#1a1a2e]/60 hover:bg-[#E07A5F]/10 hover:text-[#E07A5F] transition-colors"
                aria-label="Send email"
                whileHover={{
                  scale: 1.15,
                  rotate: 5
                }}
                whileTap={{
                  scale: 0.9
                }}>

                <MailIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 30
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="order-1 md:order-2 flex justify-center">

            <div className="relative">
              {/* Outer decorative ring - animated */}
              <motion.div
                className="absolute -inset-5 rounded-2xl border-2 border-dashed border-[#C9A96E]/25"
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: 'linear'
                }} />


              {/* Glow behind photo */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#E07A5F]/20 via-[#C9A96E]/15 to-[#81B29A]/20 blur-xl animate-pulse-ring" />

              {/* Gradient border frame */}
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-[#E07A5F] via-[#C9A96E] to-[#81B29A] animate-gradient shadow-2xl shadow-[#E07A5F]/15">
                <div className="rounded-[0.85rem] overflow-hidden bg-[#FDF8F4]">
                  <motion.img
                    src={PROFILE_IMAGE}
                    alt="A.G. Surekha Madhuwanthi - UI/UX Engineer Intern"
                    className="w-52 h-64 sm:w-60 sm:h-72 lg:w-68 lg:h-80 object-cover object-top"
                    style={{
                      width: '272px'
                    }}
                    whileHover={{
                      scale: 1.03
                    }}
                    transition={{
                      duration: 0.4
                    }} />

                </div>
              </div>

              {/* Floating accent dots */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#E07A5F]"
                animate={{
                  y: [0, -8, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }} />

              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#81B29A]"
                animate={{
                  y: [0, 6, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }} />

              <motion.div
                className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-[#C9A96E]"
                animate={{
                  y: [0, -5, 0],
                  x: [0, 3, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }} />

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.8
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">

        <motion.button
          onClick={() => handleScroll('#about')}
          animate={{
            y: [0, 8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="p-2 text-[#1a1a2e]/30 hover:text-[#E07A5F] transition-colors"
          aria-label="Scroll to about section">

          <ArrowDownIcon className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>);

}