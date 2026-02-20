import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon, WrenchIcon, PaletteIcon } from 'lucide-react';
interface SkillBadgeProps {
  name: string;
  accentColor: string;
  delay: number;
  isInView: boolean;
}
function SkillBadge({ name, accentColor, delay, isInView }: SkillBadgeProps) {
  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0,
        y: 10
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        scale: 1,
        y: 0
      } :
      {}
      }
      transition={{
        duration: 0.5,
        delay,
        type: 'spring',
        stiffness: 260,
        damping: 18
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: `0 0 20px ${accentColor}25`,
        transition: {
          duration: 0.2
        }
      }}
      className="inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-medium border cursor-default transition-colors"
      style={{
        backgroundColor: `${accentColor}08`,
        borderColor: `${accentColor}20`,
        color: accentColor
      }}>

      {name}
    </motion.span>);

}
const categoryVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 bg-white/60 backdrop-blur-sm"
      aria-label="Skills"
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
            Expertise
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mt-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>

            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Programming Languages */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={categoryVariants}>

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-2.5 rounded-xl bg-[#E07A5F]/10 text-[#E07A5F]"
                initial={{
                  scale: 0,
                  rotate: -45
                }}
                animate={
                isInView ?
                {
                  scale: 1,
                  rotate: 0
                } :
                {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.2
                }}>

                <CodeIcon className="w-5 h-5" />
              </motion.div>
              <h3
                className="text-lg text-[#1a1a2e]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Programming
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <SkillBadge
                name="C++"
                accentColor="#E07A5F"
                delay={0.2}
                isInView={isInView} />

              <SkillBadge
                name="Java"
                accentColor="#E07A5F"
                delay={0.25}
                isInView={isInView} />

              <SkillBadge
                name="HTML / CSS"
                accentColor="#E07A5F"
                delay={0.3}
                isInView={isInView} />

              <SkillBadge
                name="C#"
                accentColor="#E07A5F"
                delay={0.35}
                isInView={isInView} />

              <SkillBadge
                name="Visual Basic"
                accentColor="#E07A5F"
                delay={0.4}
                isInView={isInView} />

              <SkillBadge
                name="Python"
                accentColor="#E07A5F"
                delay={0.45}
                isInView={isInView} />

              <SkillBadge
                name="MySQL"
                accentColor="#E07A5F"
                delay={0.5}
                isInView={isInView} />

              <SkillBadge
                name="JavaScript"
                accentColor="#E07A5F"
                delay={0.55}
                isInView={isInView} />

              <SkillBadge
                name="PHP"
                accentColor="#E07A5F"
                delay={0.6}
                isInView={isInView} />

            </div>
          </motion.div>

          {/* Tools & Platforms */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={categoryVariants}>

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-2.5 rounded-xl bg-[#81B29A]/10 text-[#81B29A]"
                initial={{
                  scale: 0,
                  rotate: -45
                }}
                animate={
                isInView ?
                {
                  scale: 1,
                  rotate: 0
                } :
                {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.35
                }}>

                <WrenchIcon className="w-5 h-5" />
              </motion.div>
              <h3
                className="text-lg text-[#1a1a2e]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Tools & Platforms
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <SkillBadge
                name="Git"
                accentColor="#81B29A"
                delay={0.35}
                isInView={isInView} />

              <SkillBadge
                name="Jira"
                accentColor="#81B29A"
                delay={0.4}
                isInView={isInView} />

              <SkillBadge
                name="Cisco Packet Tracer"
                accentColor="#81B29A"
                delay={0.45}
                isInView={isInView} />

              <SkillBadge
                name="MS Office"
                accentColor="#81B29A"
                delay={0.5}
                isInView={isInView} />

              <SkillBadge
                name="Web Applications"
                accentColor="#81B29A"
                delay={0.55}
                isInView={isInView} />

            </div>
          </motion.div>

          {/* Design */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={categoryVariants}>

            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-2.5 rounded-xl bg-[#C9A96E]/10 text-[#C9A96E]"
                initial={{
                  scale: 0,
                  rotate: -45
                }}
                animate={
                isInView ?
                {
                  scale: 1,
                  rotate: 0
                } :
                {}
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                  delay: 0.5
                }}>

                <PaletteIcon className="w-5 h-5" />
              </motion.div>
              <h3
                className="text-lg text-[#1a1a2e]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif"
                }}>

                Design
              </h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <SkillBadge
                name="Figma"
                accentColor="#C9A96E"
                delay={0.5}
                isInView={isInView} />

              <SkillBadge
                name="UI/UX Design"
                accentColor="#C9A96E"
                delay={0.55}
                isInView={isInView} />

            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}