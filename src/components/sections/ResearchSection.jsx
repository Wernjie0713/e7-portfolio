import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { featuredPublications, publications } from '@/data/publications'
import { FileText, ExternalLink, Award, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid'

export default function ResearchSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showAll, setShowAll] = useState(false)
  
  // Get non-featured publications
  const otherPublications = publications.filter(p => !p.featured)

  return (
    <section
      id="research"
      ref={ref}
      className="relative min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Top Left Aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-neon-pink-500" />
            <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
              Research Output
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Research & Publications
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            Published research in Natural Language Processing, Machine Learning, Bioinformatics, and Deep Learning — contributing to academic knowledge and practical applications.
          </p>
        </motion.div>

        {/* Featured Publications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Featured Publications</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/30 hover:border-neon-pink-500 dark:hover:border-neon-pink-400 transition-all group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-neon-pink-500 to-purple-500 text-white flex-shrink-0 shadow-lg">
                    <FileText className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-neon-pink-600 dark:group-hover:text-neon-pink-400 transition-colors leading-tight">
                        {pub.title}
                      </h4>
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-neon-pink-100 dark:bg-neon-pink-500/20 text-neon-pink-700 dark:text-neon-pink-300 whitespace-nowrap flex-shrink-0">
                        {pub.year}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium mb-3">
                      {pub.authors}
                    </p>
                  </div>
                </div>

                {/* Venue & Publisher */}
                <div className="mb-4 space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {pub.venue}
                    {pub.location && ` • ${pub.location}`}
                  </p>
                  {pub.publisher && (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {pub.publisher}
                    </p>
                  )}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-400">
                    {pub.type}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400">
                    {pub.category}
                  </span>
                  {pub.indexed && (
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {pub.indexed}
                    </span>
                  )}
                </div>

                {/* DOI */}
                {pub.doi && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mb-4 font-mono">
                    DOI: {pub.doi}
                  </p>
                )}

                {/* Link */}
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-neon-pink-600 dark:text-neon-pink-400 hover:border-neon-pink-500 hover:bg-neon-pink-50 dark:hover:bg-neon-pink-500/10 transition-all font-semibold text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Publication
                  </a>
                )}

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-neon-pink-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Show More Button */}
        {otherPublications.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <LiquidButton
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-lg border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
            >
              {showAll ? 'Show Less' : `Show All Publications (${otherPublications.length} more)`}
            </LiquidButton>
          </motion.div>
        )}

        {/* All Publications Grid */}
        <AnimatePresence>
          {showAll && otherPublications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">All Publications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherPublications.map((pub, index) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="relative p-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-neon-pink-500 hover:scale-105 transition-all group"
                  >
                    {/* Year Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {pub.year}
                      </span>
                      {pub.url && (
                        <a
                          href={pub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-pink-600 dark:text-neon-pink-400 hover:text-neon-pink-700 dark:hover:text-neon-pink-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    {/* Title */}
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight group-hover:text-neon-pink-600 dark:group-hover:text-neon-pink-400 transition-colors">
                      {pub.title}
                    </h4>

                    {/* Venue */}
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-1">
                      {pub.venue}
                    </p>

                    {/* Category Badge */}
                    <span className="inline-block px-2 py-1 rounded text-xs font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400">
                      {pub.category}
                    </span>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-lg bg-neon-pink-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

