import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, GlobeIcon } from 'lucide-react';
function AnimatedCounter({
  target,
  suffix = '',
  isInView




}: {target: number;suffix?: string;isInView: boolean;}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * target);
      setCount(start);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target]);
  return (
    <>
      {count}
      {suffix}
    </>);

}
const statCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.12,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
const contactItemVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6"
      aria-label="About me"
      ref={ref}>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40
          }}
          animate={
          isInView ?
          {
            opacity: 1,
            y: 0
          } :
          {}
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mb-16">

          <motion.span
            className="text-[#E07A5F] text-sm font-semibold tracking-widest uppercase inline-block"
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.5
            }}>

            About Me
          </motion.span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mt-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>

            Getting to know me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Main content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              y: 0
            } :
            {}
            }
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:col-span-3">

            <p className="text-[#1a1a2e]/70 text-lg leading-relaxed mb-6">
              A motivated and well-rounded individual with a positive
              personality, strong self-discipline, and excellent teamwork
              skills. I am seeking a suitable and challenging position in a
              progressive, organization-oriented company where I can contribute
              effectively and grow professionally.
            </p>
            <p className="text-[#1a1a2e]/70 text-lg leading-relaxed mb-8">
              As a fresh graduate eager to learn, I bring strong academic
              foundations in software engineering and front-end development,
              enabling me to support both technical and collaborative tasks
              within a team environment. I'm passionate about creating intuitive
              user interfaces and solving complex problems through design
              thinking.
            </p>

            {/* Quick facts - staggered */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                custom={0}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={statCardVariants}
                className="p-4 rounded-xl bg-[#E07A5F]/5 border border-[#E07A5F]/10">

                <span
                  className="text-2xl font-bold text-[#E07A5F]"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif"
                  }}>

                  <AnimatedCounter target={5} suffix="+" isInView={isInView} />
                </span>
                <p className="text-sm text-[#1a1a2e]/60 mt-1">
                  Projects Completed
                </p>
              </motion.div>
              <motion.div
                custom={1}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={statCardVariants}
                className="p-4 rounded-xl bg-[#81B29A]/5 border border-[#81B29A]/10">

                <span
                  className="text-2xl font-bold text-[#81B29A]"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif"
                  }}>

                  <AnimatedCounter target={3} isInView={isInView} />
                </span>
                <p className="text-sm text-[#1a1a2e]/60 mt-1">
                  Languages Spoken
                </p>
              </motion.div>
              <motion.div
                custom={2}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={statCardVariants}
                className="p-4 rounded-xl bg-[#C9A96E]/5 border border-[#C9A96E]/10">

                <span
                  className="text-2xl font-bold text-[#C9A96E]"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif"
                  }}>

                  <AnimatedCounter target={10} suffix="+" isInView={isInView} />
                </span>
                <p className="text-sm text-[#1a1a2e]/60 mt-1">
                  Technical Skills
                </p>
              </motion.div>
              <motion.div
                custom={3}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={statCardVariants}
                className="p-4 rounded-xl bg-[#E07A5F]/5 border border-[#E07A5F]/10">

                <span
                  className="text-2xl font-bold text-[#E07A5F]"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif"
                  }}>

                  ✦
                </span>
                <p className="text-sm text-[#1a1a2e]/60 mt-1">Eager to Learn</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact details card - slide from right */}
          <motion.div
            initial={{
              opacity: 0,
              x: 60
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              x: 0
            } :
            {}
            }
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:col-span-2">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#1a1a2e]/5 relative overflow-hidden">
              {/* Subtle gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07A5F] via-[#C9A96E] to-[#81B29A]" />

              <h3
                className="text-lg mb-5 text-[#1a1a2e] pt-2"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Contact Details
              </h3>

              <div className="space-y-4">
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={contactItemVariants}
                  className="flex items-start gap-3">

                  <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                    <MapPinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                      Location
                    </p>
                    <p className="text-sm text-[#1a1a2e]/80 mt-0.5">
                      330/2, Gonahena, Kadawatha, Sri Lanka
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={contactItemVariants}
                  className="flex items-start gap-3">

                  <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                      Email
                    </p>
                    <a
                      href="mailto:surekagamage2001@gmail.com"
                      className="text-sm text-[#1a1a2e]/80 mt-0.5 hover:text-[#E07A5F] transition-colors block break-all">

                      surekagamage2001@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={contactItemVariants}
                  className="flex items-start gap-3">

                  <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                      Phone
                    </p>
                    <a
                      href="tel:0751550919"
                      className="text-sm text-[#1a1a2e]/80 mt-0.5 hover:text-[#E07A5F] transition-colors block">

                      075 155 0919
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  custom={3}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={contactItemVariants}
                  className="flex items-start gap-3">

                  <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                    <GlobeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                      Languages
                    </p>
                    <p className="text-sm text-[#1a1a2e]/80 mt-0.5">
                      Sinhala · English · Tamil
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}