import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartIcon } from 'lucide-react';
export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-20px'
  });
  return (
    <motion.footer
      ref={ref}
      initial={{
        opacity: 0
      }}
      animate={
      isInView ?
      {
        opacity: 1
      } :
      {}
      }
      transition={{
        duration: 0.8
      }}
      className="py-8 px-6 bg-[#1a1a2e] text-white/50"
      role="contentinfo">

      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <motion.p
          className="text-sm"
          initial={{
            opacity: 0,
            y: 10
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
            delay: 0.2
          }}>

          © 2025 Surekha Madhuwanthi. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>);

}