import { useState, useEffect, useId, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useOutsideClick } from '@/hooks/use-outside-click'
import { education } from '@/data/education'
import { GraduationCap, Award, Calendar, X } from 'lucide-react'

export default function EducationSection() {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [active, setActive] = useState(null)
  const ref = useRef(null)
  const id = useId()

  // Extract year from period (e.g., "Oct 2022 - Present" -> "2022")
  const getYear = (period) => {
    const match = period.match(/\d{4}/)
    return match ? match[0] : ''
  }

  // Handle escape key and body scroll lock
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <section
      id="education"
      ref={sectionRef}
      className="relative min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-5 h-5 text-neon-pink-500" />
            <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
              Academic Journey
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Education
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            My academic path spans from foundational sciences to advanced computational research, building expertise in computer science, bioinformatics, and natural language processing.
          </p>
        </motion.div>

        {/* Expandable Modal */}
        <AnimatePresence>
          {active && typeof active === "object" && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
              />

              {/* Modal */}
              <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                <motion.button
                  key={`button-${active.id}-${id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="flex absolute top-4 right-4 items-center justify-center bg-white dark:bg-gray-800 rounded-full h-8 w-8 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors z-[110]"
                  onClick={() => setActive(null)}
                >
                  <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                </motion.button>

                <motion.div
                  layoutId={`education-card-${active.id}-${id}`}
                  ref={ref}
                  className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
                >
                  {/* Modal Content */}
                  <div className="overflow-auto p-8">
                    {/* Icon and Year */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        layoutId={`icon-${active.id}-${id}`}
                        className="p-4 rounded-full bg-gray-100 dark:bg-gray-800 text-neon-pink-500"
                      >
                        <GraduationCap className="w-8 h-8" />
                      </motion.div>
                      <motion.div
                        layoutId={`year-${active.id}-${id}`}
                        className="text-5xl font-bold text-gray-900 dark:text-white"
                      >
                        {getYear(active.period)}
                      </motion.div>
                    </div>

                    {/* Degree Title */}
                    <motion.h3
                      layoutId={`title-${active.id}-${id}`}
                      className="text-3xl font-bold mb-3 text-gray-900 dark:text-white"
                    >
                      {active.degree}
                    </motion.h3>

                    {/* Institution */}
                    <motion.p
                      layoutId={`institution-${active.id}-${id}`}
                      className="text-xl text-gray-600 dark:text-gray-400 mb-2"
                    >
                      {active.institution}
                    </motion.p>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-6">
                      <Calendar className="w-4 h-4" />
                      {active.period}
                    </div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                    >
                      {active.description}
                    </motion.p>

                    {/* CGPA Badge */}
                    {active.cgpa && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 mb-4 px-4 py-2 rounded-lg bg-neon-pink-50 dark:bg-neon-pink-500/10 border border-neon-pink-200 dark:border-neon-pink-500/20 w-fit"
                      >
                        <Award className="w-5 h-5 text-neon-pink-600 dark:text-neon-pink-400" />
                        <span className="font-semibold text-neon-pink-700 dark:text-neon-pink-300">
                          CGPA: {active.cgpa}
                        </span>
                      </motion.div>
                    )}

                    {/* Award Badge */}
                    {active.award && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="mb-6 p-3 rounded-lg bg-yellow-50 dark:bg-yellow-500/10 border border-yellow-200 dark:border-yellow-500/20"
                      >
                        <span className="text-yellow-700 dark:text-yellow-300 font-semibold">
                          🏆 {active.award}
                        </span>
                      </motion.div>
                    )}

                    {/* Highlights */}
                    {active.highlights && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                      >
                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                          Highlights
                        </h4>
                        <ul className="space-y-3">
                          {active.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                            >
                              <span className="text-neon-pink-500 flex-shrink-0 text-lg leading-6">•</span>
                              <span className="flex-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>

        {/* Education Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {education.map((edu, index) => (
            <motion.div
              layoutId={`education-card-${edu.id}-${id}`}
              key={edu.id}
              onClick={() => setActive(edu)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="cursor-pointer p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-neon-pink-500 hover:shadow-lg transition-all group"
            >
              {/* Icon */}
              <motion.div
                layoutId={`icon-${edu.id}-${id}`}
                className="p-4 rounded-full bg-gradient-to-br from-neon-pink-100 to-purple-100 dark:from-neon-pink-500/20 dark:to-purple-500/20 flex items-center justify-center text-neon-pink-600 dark:text-neon-pink-400 group-hover:scale-110 w-fit mb-4 group-hover:scale-110 transition-transform"
              >
                <GraduationCap className="w-6 h-6" />
              </motion.div>

              {/* Year Label */}
              <motion.div
                layoutId={`year-${edu.id}-${id}`}
                className="text-4xl font-bold text-gray-900 dark:text-white mb-3"
              >
                {getYear(edu.period)}
              </motion.div>

              {/* Degree Title */}
              <motion.h3
                layoutId={`title-${edu.id}-${id}`}
                className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 group-hover:text-neon-pink-500 transition-colors"
              >
                {edu.degree}
              </motion.h3>

              {/* Institution */}
              <motion.p
                layoutId={`institution-${edu.id}-${id}`}
                className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
              >
                {edu.institution}
              </motion.p>

              {/* Click hint */}
              <p className="text-xs text-neon-pink-500 dark:text-neon-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to learn more →
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

