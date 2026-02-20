import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
const eduItemVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
const dotPulse = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3 + i * 0.15,
      type: 'spring',
      stiffness: 300,
      damping: 15
    }
  })
};
export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 bg-white/60 backdrop-blur-sm"
      aria-label="Experience and Education"
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

          <span className="text-[#E07A5F] text-sm font-semibold tracking-widest uppercase">
            My Journey
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mt-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>

            Experience & Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Professional Experience */}
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
              delay: 0.15
            }}>

            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-2.5 rounded-xl bg-[#E07A5F]/10 text-[#E07A5F]"
                initial={{
                  scale: 0
                }}
                animate={
                isInView ?
                {
                  scale: 1
                } :
                {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.2
                }}>

                <BriefcaseIcon className="w-5 h-5" />
              </motion.div>
              <h3
                className="text-xl text-[#1a1a2e]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Professional Experience
              </h3>
            </div>

            <div className="relative pl-8">
              {/* Animated timeline line */}
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#E07A5F]/15 origin-top"
                initial={{
                  scaleY: 0
                }}
                animate={
                isInView ?
                {
                  scaleY: 1
                } :
                {}
                }
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  height: '100%'
                }} />


              {/* Timeline dot with pulse */}
              <motion.div
                className="absolute left-0 top-0 -translate-x-[5px]"
                custom={0}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={dotPulse}>

                <span className="block w-3 h-3 bg-[#E07A5F] rounded-full relative">
                  <span className="absolute inset-0 rounded-full bg-[#E07A5F] animate-ping opacity-20" />
                </span>
              </motion.div>

              <motion.div
                className="pb-2"
                initial={{
                  opacity: 0,
                  y: 20
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
                  duration: 0.6,
                  delay: 0.5
                }}>

                <span className="inline-block text-xs font-semibold text-[#E07A5F] bg-[#E07A5F]/5 px-3 py-1 rounded-full mb-3">
                  2024 – 2025
                </span>
                <h4 className="text-lg font-semibold text-[#1a1a2e] mb-1">
                  IT Assistant & Data Analyst
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 mb-4 italic">
                  Lilies Intimates Lanka PVT Ltd · Biyagama, Sri Lanka
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-sm text-[#1a1a2e]/65 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/40 mt-2 flex-shrink-0" />
                    Managed the ERP system and assisted with IT operations
                    across the company
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1a1a2e]/65 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/40 mt-2 flex-shrink-0" />
                    Resolved computer and network issues, ensuring smooth system
                    usage for staff
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1a1a2e]/65 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/40 mt-2 flex-shrink-0" />
                    Collected and analysed ERP data to create actionable reports
                    for management
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#1a1a2e]/65 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A5F]/40 mt-2 flex-shrink-0" />
                    Identified process improvements through data-driven insights
                    and technology adoption
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Education */}
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
              delay: 0.3
            }}>

            <div className="flex items-center gap-3 mb-8">
              <motion.div
                className="p-2.5 rounded-xl bg-[#81B29A]/10 text-[#81B29A]"
                initial={{
                  scale: 0
                }}
                animate={
                isInView ?
                {
                  scale: 1
                } :
                {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.35
                }}>

                <GraduationCapIcon className="w-5 h-5" />
              </motion.div>
              <h3
                className="text-xl text-[#1a1a2e]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Education
              </h3>
            </div>

            <div className="relative pl-8 space-y-8">
              {/* Animated timeline line */}
              <motion.div
                className="absolute left-0 top-0 w-0.5 bg-[#81B29A]/15 origin-top"
                initial={{
                  scaleY: 0
                }}
                animate={
                isInView ?
                {
                  scaleY: 1
                } :
                {}
                }
                transition={{
                  duration: 1.5,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1]
                }}
                style={{
                  height: '100%'
                }} />


              {/* BEng */}
              <motion.div
                className="relative"
                custom={0}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={eduItemVariants}>

                <motion.div
                  className="absolute left-0 top-1 -translate-x-[calc(2rem+5px)]"
                  custom={0}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={dotPulse}>

                  <span className="block w-3 h-3 bg-[#81B29A] rounded-full" />
                </motion.div>
                <span className="inline-block text-xs font-semibold text-[#81B29A] bg-[#81B29A]/5 px-3 py-1 rounded-full mb-2">
                  2025 – 2026
                </span>
                <h4 className="text-base font-semibold text-[#1a1a2e]">
                  BEng (Hons) in Software Engineering
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 italic">
                  Esoft Metro Campus · London Metropolitan University
                </p>
              </motion.div>

              {/* HND */}
              <motion.div
                className="relative"
                custom={1}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={eduItemVariants}>

                <motion.div
                  className="absolute left-0 top-1 -translate-x-[calc(2rem+5px)]"
                  custom={1}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={dotPulse}>

                  <span className="block w-3 h-3 bg-[#81B29A]/60 rounded-full" />
                </motion.div>
                <span className="inline-block text-xs font-semibold text-[#81B29A] bg-[#81B29A]/5 px-3 py-1 rounded-full mb-2">
                  2022 – 2024
                </span>
                <h4 className="text-base font-semibold text-[#1a1a2e]">
                  HND in Computing
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 italic">
                  Esoft Metro College · Kiribathgoda
                </p>
              </motion.div>

              {/* Diploma Tamil */}
              <motion.div
                className="relative"
                custom={2}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={eduItemVariants}>

                <motion.div
                  className="absolute left-0 top-1 -translate-x-[calc(2rem+5px)]"
                  custom={2}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={dotPulse}>

                  <span className="block w-3 h-3 bg-[#81B29A]/40 rounded-full" />
                </motion.div>
                <span className="inline-block text-xs font-semibold text-[#81B29A] bg-[#81B29A]/5 px-3 py-1 rounded-full mb-2">
                  2023 – 2024
                </span>
                <h4 className="text-base font-semibold text-[#1a1a2e]">
                  Diploma in Tamil
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 italic">
                  University of Kelaniya
                </p>
              </motion.div>

              {/* IT Diploma */}
              <motion.div
                className="relative"
                custom={3}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={eduItemVariants}>

                <motion.div
                  className="absolute left-0 top-1 -translate-x-[calc(2rem+5px)]"
                  custom={3}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={dotPulse}>

                  <span className="block w-3 h-3 bg-[#81B29A]/30 rounded-full" />
                </motion.div>
                <span className="inline-block text-xs font-semibold text-[#81B29A] bg-[#81B29A]/5 px-3 py-1 rounded-full mb-2">
                  2022 – 2023
                </span>
                <h4 className="text-base font-semibold text-[#1a1a2e]">
                  Information Technology (IT) Diploma
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 italic">
                  SITC Campus · Colombo
                </p>
              </motion.div>

              {/* HRM Diploma */}
              <motion.div
                className="relative"
                custom={4}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={eduItemVariants}>

                <motion.div
                  className="absolute left-0 top-1 -translate-x-[calc(2rem+5px)]"
                  custom={4}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                  variants={dotPulse}>

                  <span className="block w-3 h-3 bg-[#81B29A]/20 rounded-full" />
                </motion.div>
                <span className="inline-block text-xs font-semibold text-[#81B29A] bg-[#81B29A]/5 px-3 py-1 rounded-full mb-2">
                  2021 – 2022
                </span>
                <h4 className="text-base font-semibold text-[#1a1a2e]">
                  Human Resource Management (HRM) Diploma
                </h4>
                <p className="text-sm text-[#1a1a2e]/50 italic">
                  IMBS Green Campus · Colombo
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}