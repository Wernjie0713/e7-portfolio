import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '@/data/projects'
import { experience } from '@/data/education'
import { Briefcase, Folder, Calendar, Award, Sparkles } from 'lucide-react'
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid'

export default function ProjectsExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedId, setExpandedId] = useState(null)
  const [showAll, setShowAll] = useState(false)

  // Parse date string to get a sortable value
  const parseDate = (period) => {
    // Handle "Present" as current date
    if (period.includes('Present')) {
      return new Date().getTime()
    }
    
    // Extract the start date (format: "Month Year" or "Year")
    const parts = period.split('-')
    const startDate = parts[0].trim()
    
    // Check if it's just a year (e.g., "2023")
    if (startDate.match(/^\d{4}$/)) {
      const year = parseInt(startDate)
      return new Date(year, 0).getTime() // January of that year
    }
    
    // Parse "Oct 2022" format (Month Year)
    const monthYear = startDate.split(' ')
    if (monthYear.length === 2) {
      const months = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      }
      const month = months[monthYear[0]] || 0
      const year = parseInt(monthYear[1]) || 2020
      return new Date(year, month).getTime()
    }
    
    // Fallback
    return new Date(2020, 0).getTime()
  }

  // Merge and sort data with unique IDs
  const mergedData = [
    ...projects.map(p => ({ ...p, type: 'project', uniqueId: `project-${p.id}` })),
    ...experience.map(e => ({ ...e, type: 'experience', uniqueId: `experience-${e.id}` }))
  ].sort((a, b) => parseDate(b.period) - parseDate(a.period))

  // Determine displayed items
  const displayedItems = showAll ? mergedData : mergedData.slice(0, 4)

  const toggleExpand = (id) => {
    // If clicking the same item, close it. Otherwise, open the new one
    setExpandedId(prev => prev === id ? null : id)
  }

  const getIcon = (item) => {
    return item.type === 'project' ? Folder : Briefcase
  }

  const getTitle = (item) => {
    return item.type === 'project' ? item.title : item.role
  }

  const getSubtitle = (item) => {
    return item.type === 'project' ? item.category : item.company
  }

  return (
    <section
      id="work"
      ref={ref}
      className="relative min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Title and Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-neon-pink-500" />
                <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
                  Work History
                </span>
              </div>
              
              <h2 className="text-5xl font-bold mb-6">
                Experience
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                From cutting-edge NLP research and award-winning fintech innovations to teaching the next generation of developers — a journey through academia, industry, and education.
              </p>
            </motion.div>
          </div>

          {/* Right: Items List */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
                {displayedItems.map((item, index) => {
                    const Icon = getIcon(item)
                    const isExpanded = expandedId === item.uniqueId
                    
                    return (
                      <motion.div
                        key={item.uniqueId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        {/* Collapsed Header */}
                        <button
                          onClick={() => toggleExpand(item.uniqueId)}
                            className="w-full p-6 flex items-center gap-4 text-left cursor-pointer group"
                          >
                            {/* Icon */}
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink-100 to-purple-100 dark:from-neon-pink-500/20 dark:to-purple-500/20 flex items-center justify-center text-neon-pink-600 dark:text-neon-pink-400 group-hover:scale-110 transition-transform">
                              <Icon className="w-6 h-6" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-md font-bold text-gray-900 dark:text-white mb-1 group-hover:text-neon-pink-500 transition-colors">
                                {getTitle(item)}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {getSubtitle(item)}
                              </p>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-4">
                              <span className="hidden md:block text-sm text-gray-500 dark:text-gray-500 font-medium">
                                {item.period}
                              </span>
                            </div>
                          </button>

                          {/* Expanded Content */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 pt-2 bg-gray-50/50 dark:bg-gray-900/50">
                                  {/* Mobile date */}
                                  <div className="md:hidden flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    {item.period}
                                  </div>

                                  {/* Description */}
                                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {item.description}
                                  </p>

                                  {/* Highlights/Responsibilities */}
                                  {(item.highlights || item.responsibilities) && (
                                    <div className="mb-4">
                                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        {item.type === 'project' ? 'Highlights' : 'Responsibilities'}
                                      </h4>
                                      <ul className="space-y-2">
                                        {(item.highlights || item.responsibilities).map((point, idx) => (
                                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                            <span className="text-neon-pink-500 mt-1 flex-shrink-0">•</span>
                                            <span>{point}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* Technologies (Projects only) */}
                                  {item.technologies && (
                                    <div className="mb-4">
                                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Technologies
                                      </h4>
                                      <div className="flex flex-wrap gap-2">
                                        {item.technologies.map((tech) => (
                                          <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                          >
                                            {tech}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Awards */}
                                  {item.awards && (
                                    <div className="space-y-2">
                                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Awards
                                      </h4>
                                      {item.awards.map((award, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-neon-pink-600 dark:text-neon-pink-400">
                                          <Award className="w-4 h-4" />
                                          <span className="font-medium">{award}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )
                    })}
              </div>

              {/* Show More Button */}
              {mergedData.length > 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex justify-center pt-6"
                >
                  <LiquidButton
                    onClick={() => setShowAll(!showAll)}
                    className="px-8 py-3 rounded-lg border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </LiquidButton>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-neon-pink-500" />
              <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
                Work History
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experience
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From cutting-edge NLP research and award-winning fintech innovations to teaching the next generation of developers — a journey through academia, industry, and education.
            </p>
          </motion.div>

          {/* Items List */}
          <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
            {displayedItems.map((item, index) => {
                    const Icon = getIcon(item)
                    const isExpanded = expandedId === item.uniqueId
                    
                    return (
                      <motion.div
                        key={item.uniqueId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        <button
                          onClick={() => toggleExpand(item.uniqueId)}
                          className="w-full p-4 flex items-center gap-3 text-left"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-neon-pink-100 to-purple-100 dark:from-neon-pink-500/20 dark:to-purple-500/20 flex items-center justify-center text-neon-pink-600 dark:text-neon-pink-400">
                            <Icon className="w-5 h-5" />
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                              {getTitle(item)}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {getSubtitle(item)}
                            </p>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 pt-2 bg-gray-50/50 dark:bg-gray-900/50">
                                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-3">
                                  <Calendar className="w-3 h-3" />
                                  {item.period}
                                </div>

                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                  {item.description}
                                </p>

                                {(item.highlights || item.responsibilities) && (
                                  <div className="mb-3">
                                    <ul className="space-y-1">
                                      {(item.highlights || item.responsibilities).map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                                          <span className="text-neon-pink-500 mt-1">•</span>
                                          <span>{point}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {item.technologies && (
                                  <div className="mb-3">
                                    <div className="flex flex-wrap gap-1">
                                      {item.technologies.map((tech) => (
                                        <span
                                          key={tech}
                                          className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {item.awards && (
                                  <div className="space-y-1">
                                    {item.awards.map((award, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-xs text-neon-pink-600 dark:text-neon-pink-400">
                                        <Award className="w-3 h-3" />
                                        <span>{award}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
          </div>

            {/* Show More Button */}
            {mergedData.length > 4 && (
              <div className="flex justify-center pt-6">
                <LiquidButton
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-2 rounded-lg border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
                >
                  {showAll ? 'Show Less' : 'Show More'}
                </LiquidButton>
              </div>
            )}
        </div>
      </div>
    </section>
  )
}

