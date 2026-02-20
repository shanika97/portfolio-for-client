import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  SendIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  CheckCircleIcon } from
'lucide-react';
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const infoItemVariants = {
  hidden: {
    opacity: 0,
    x: 30
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.4 + i * 0.1,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px'
  });
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  const inputClasses =
  'w-full px-4 py-3 rounded-xl bg-white border border-[#1a1a2e]/10 text-[#1a1a2e] placeholder:text-[#1a1a2e]/25 focus:outline-none focus:border-[#E07A5F] focus:ring-2 focus:ring-[#E07A5F]/10 input-glow transition-all duration-300 text-sm';
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6"
      aria-label="Contact"
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
            Let's Connect
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mt-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif"
            }}>

            Get In Touch
          </h2>
          <p className="text-[#1a1a2e]/50 text-lg mt-4 max-w-2xl">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 md:gap-16">
          {/* Contact Form */}
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
            }}
            className="md:col-span-3">

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <motion.div
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
                    delay: 0.2
                  }}>

                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1a1a2e]/70 mb-2">

                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={inputClasses} />

                </motion.div>
                <motion.div
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
                    delay: 0.25
                  }}>

                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a1a2e]/70 mb-2">

                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={inputClasses} />

                </motion.div>
              </div>

              <motion.div
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
                  delay: 0.3
                }}>

                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#1a1a2e]/70 mb-2">

                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className={inputClasses} />

              </motion.div>

              <motion.div
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
                  delay: 0.35
                }}>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1a1a2e]/70 mb-2">

                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={`${inputClasses} resize-none`} />

              </motion.div>

              <motion.button
                type="submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E07A5F] text-white text-sm font-semibold rounded-full hover:bg-[#C4603F] transition-all focus-visible:ring-2 focus-visible:ring-[#E07A5F] focus-visible:ring-offset-2 shadow-lg shadow-[#E07A5F]/20 hover:shadow-xl hover:shadow-[#E07A5F]/30"
                whileHover={{
                  scale: 1.03,
                  y: -1
                }}
                whileTap={{
                  scale: 0.97
                }}>

                <SendIcon className="w-4 h-4" />
                Send Message
              </motion.button>

              <AnimatePresence>
                {submitted &&
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                    scale: 0.95
                  }}
                  className="flex items-center gap-2 text-sm text-[#81B29A] font-medium mt-3 bg-[#81B29A]/5 px-4 py-3 rounded-xl border border-[#81B29A]/15">

                    <motion.div
                    initial={{
                      scale: 0
                    }}
                    animate={{
                      scale: 1
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                      delay: 0.1
                    }}>

                      <CheckCircleIcon className="w-5 h-5" />
                    </motion.div>
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                }
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
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
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="md:col-span-2">

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#1a1a2e]/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E07A5F] via-[#C9A96E] to-[#81B29A]" />

              <motion.div
                custom={0}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={infoItemVariants}
                className="flex items-start gap-3 pt-2">

                <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                  <MailIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:surekagamage2001@gmail.com"
                    className="text-sm text-[#1a1a2e]/80 hover:text-[#E07A5F] transition-colors break-all">

                    surekagamage2001@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                custom={1}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={infoItemVariants}
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
                    className="text-sm text-[#1a1a2e]/80 hover:text-[#E07A5F] transition-colors">

                    075 155 0919
                  </a>
                </div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={infoItemVariants}
                className="flex items-start gap-3">

                <div className="p-2 rounded-lg bg-[#E07A5F]/5 text-[#E07A5F] flex-shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium">
                    Location
                  </p>
                  <p className="text-sm text-[#1a1a2e]/80">
                    Kadawatha, Sri Lanka
                  </p>
                </div>
              </motion.div>

              <hr className="border-[#1a1a2e]/5" />

              <motion.div
                custom={3}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={infoItemVariants}>

                <p className="text-xs text-[#1a1a2e]/40 uppercase tracking-wider font-medium mb-3">
                  Find me online
                </p>
                <div className="flex items-center gap-3">
                  <motion.a
                    href="https://github.com/sureka01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1a1a2e]/5 text-[#1a1a2e]/60 hover:bg-[#E07A5F]/10 hover:text-[#E07A5F] transition-colors"
                    aria-label="GitHub profile"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.9
                    }}>

                    <GithubIcon className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/surekha-gamage-5644223a7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-[#1a1a2e]/5 text-[#1a1a2e]/60 hover:bg-[#E07A5F]/10 hover:text-[#E07A5F] transition-colors"
                    aria-label="LinkedIn profile"
                    whileHover={{
                      scale: 1.1
                    }}
                    whileTap={{
                      scale: 0.9
                    }}>

                    <LinkedinIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}