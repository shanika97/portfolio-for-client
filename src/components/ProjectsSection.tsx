import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BotIcon, LeafIcon, CameraIcon, FilmIcon, BoxIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  techStack: string[];
  icon: React.ReactNode;
  accentColor: string;
  index: number;
  isInView: boolean;
}
function ProjectCard({
  title,
  year,
  description,
  techStack,
  icon,
  accentColor,
  index,
  isInView
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50
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
        delay: 0.12 * index,
        ease: [0.22, 1, 0.36, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-white rounded-2xl border border-[#1a1a2e]/5 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 shimmer-effect"
      style={{
        transform: isHovered ?
        'perspective(800px) rotateY(-2deg) rotateX(1deg) translateY(-4px)' :
        'perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0px)',
        transition:
        'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease'
      }}>

      {/* Top accent bar with shimmer */}
      <div
        className="h-1.5 relative overflow-hidden"
        style={{
          backgroundColor: accentColor
        }}>

        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          animate={
          isHovered ?
          {
            x: ['-100%', '200%']
          } :
          {}
          }
          transition={{
            duration: 0.7,
            ease: 'easeInOut'
          }} />

      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <motion.div
            className="p-3 rounded-xl"
            style={{
              backgroundColor: `${accentColor}10`
            }}
            animate={
            isHovered ?
            {
              scale: 1.1,
              rotate: 5
            } :
            {
              scale: 1,
              rotate: 0
            }
            }
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15
            }}>

            <div
              style={{
                color: accentColor
              }}>

              {icon}
            </div>
          </motion.div>
          <span className="text-xs font-semibold text-[#1a1a2e]/40 bg-[#1a1a2e]/5 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2 group-hover:text-[#E07A5F] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-[#1a1a2e]/55 leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, i) =>
          <motion.span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#EDF1F7] text-[#1a1a2e]/60 border border-[#1a1a2e]/5"
            initial={{
              opacity: 0,
              scale: 0.7
            }}
            animate={
            isInView ?
            {
              opacity: 1,
              scale: 1
            } :
            {}
            }
            transition={{
              duration: 0.3,
              delay: 0.12 * index + 0.3 + i * 0.05,
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}>

              {tech}
            </motion.span>
          )}
        </div>
      </div>
    </motion.article>);

}
export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6"
      aria-label="Projects"
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
            Portfolio
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mt-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>

            Featured Projects
          </h2>
          <p className="text-[#1a1a2e]/50 text-lg mt-4 max-w-2xl">
            A collection of projects showcasing my skills in web development, AI
            integration, and application design.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="MediWise Hub Healthcare System"
            year="2025"
            description="An intelligent healthcare chatbot system designed to assist patients with medical queries, appointment scheduling, and health information management."
            techStack={['HTML', 'C#', 'MySQL', 'JavaScript']}
            icon={<BotIcon className="w-5 h-5" />}
            accentColor="#E07A5F"
            index={0}
            isInView={isInView} />

          <ProjectCard
            title="AI Plant Disease Detection"
            year="2025"
            description="AI-powered system that identifies plant diseases from images and provides management recommendations for farmers and agricultural professionals."
            techStack={['PHP', 'HTML', 'CSS', 'JavaScript']}
            icon={<LeafIcon className="w-5 h-5" />}
            accentColor="#81B29A"
            index={1}
            isInView={isInView} />

          <ProjectCard
            title="Photography Website"
            year="2024"
            description="A comprehensive wedding photography website featuring various packages, portfolio galleries, booking functionality, and client management features."
            techStack={['PHP', 'HTML', 'CSS', 'JavaScript']}
            icon={<CameraIcon className="w-5 h-5" />}
            accentColor="#C9A96E"
            index={2}
            isInView={isInView} />

          <ProjectCard
            title="Film Company Project"
            year="2024"
            description="A desktop application for managing film company operations including project tracking, resource allocation, and database management."
            techStack={['C#', 'MySQL']}
            icon={<FilmIcon className="w-5 h-5" />}
            accentColor="#7B8CDE"
            index={3}
            isInView={isInView} />

          <ProjectCard
            title="Toy Application"
            year="2024"
            description="A management application built with C# for organizing and tracking toy inventory, categories, and related business operations."
            techStack={['C#']}
            icon={<BoxIcon className="w-5 h-5" />}
            accentColor="#C4A1D4"
            index={4}
            isInView={isInView} />

        </div>
      </div>
    </section>);

}