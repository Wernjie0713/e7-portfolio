import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { awards, researchGrants } from '@/data/awards'
import { DollarSign, TrendingUp, Sparkles, Trophy  } from 'lucide-react'
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid'

export default function AwardsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [expandedId, setExpandedId] = useState(null)
  const [showAllAwards, setShowAllAwards] = useState(false)

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id)
  }

  // Sort awards by year (descending - most recent first)
  const sortedAwards = [...awards].sort((a, b) => b.year - a.year)
  const displayedAwards = showAllAwards ? sortedAwards : sortedAwards.slice(0, 4)

  // Sort research grants by year (descending - most recent first)
  const sortedGrants = [...researchGrants].sort((a, b) => b.year - a.year)

  return (
    <section
      id="awards"
      ref={ref}
      className="relative min-h-screen py-10 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Title and Description */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-5 h-5 text-neon-pink-500" />
                <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
                  Achievements
                </span>
              </div>
              
              <h2 className="text-5xl font-bold mb-6">
                Awards & Recognition
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Recognition for excellence in innovation, research, and academic achievement — from national competitions to international challenges.
              </p>
            </motion.div>
          </div>

          {/* Right: Lists */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Awards List */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Awards</h3>
                <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
                  {displayedAwards.map((award, index) => {
                    const isExpanded = expandedId === `award-${award.id}`
                    
                    return (
                      <motion.div
                        key={`award-${award.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        {/* Collapsed Header */}
                        <button
                          onClick={() => toggleExpand(`award-${award.id}`)}
                          className="w-full p-6 flex items-center gap-4 text-left cursor-pointer group"
                        >
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1 group-hover:text-neon-pink-500 transition-colors">
                              {award.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {award.organization}
                            </p>
                          </div>

                          {/* Year Badge */}
                          <span className="px-3 py-1 rounded-full text-xs bg-neon-pink-100 dark:bg-neon-pink-500/10 text-neon-pink-700 dark:text-neon-pink-400 whitespace-nowrap">
                            {award.year}
                          </span>
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
                              <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50">
                                {/* Badges */}
                                <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                                  <span className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                                    {award.category}
                                  </span>
                                  {award.prize && (
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-500/20 dark:to-green-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                                      <DollarSign className="w-4 h-4" />
                                      <span className="text-sm font-bold">
                                        {award.prize}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                {/* Description */}
                                <div className="space-y-3">
                                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                                    Achievement Details
                                  </h5>
                                  <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                    {award.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Show More Button */}
                {awards.length > 4 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex justify-center pt-6"
                  >
                    <LiquidButton
                      onClick={() => setShowAllAwards(!showAllAwards)}
                      className="px-8 py-3 rounded-lg border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
                    >
                      {showAllAwards ? 'Show Less' : 'Show More'}
                    </LiquidButton>
                  </motion.div>
                )}
              </div>

              {/* Research Grants List */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Research Grants</h3>
                <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
                  {sortedGrants.map((grant, index) => {
                    const isExpanded = expandedId === `grant-${grant.id}`
                    
                    return (
                      <motion.div
                        key={`grant-${grant.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                      >
                        {/* Collapsed Header */}
                        <button
                          onClick={() => toggleExpand(`grant-${grant.id}`)}
                          className="w-full p-6 flex items-center gap-4 text-left cursor-pointer group"
                        >
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1 group-hover:text-neon-pink-500 transition-colors">
                              {grant.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {grant.organization}
                            </p>
                          </div>

                          {/* Amount Badge */}
                          <span className="text-lg font-bold text-neon-pink-600 dark:text-neon-pink-400 whitespace-nowrap">
                            {grant.amount}
                          </span>
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
                              <div className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50">
                                {/* Header Section */}
                                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-800">
                                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">
                                    <DollarSign className="w-8 h-8" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400">
                                        {grant.status}
                                      </span>
                                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                        {grant.year}
                                      </span>
                                    </div>
                                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-neon-pink-50 to-purple-50 dark:from-neon-pink-500/10 dark:to-purple-500/10 border-2 border-neon-pink-200 dark:border-neon-pink-500/20">
                                      <span className="text-3xl font-bold text-neon-pink-600 dark:text-neon-pink-400">
                                        {grant.amount}
                                      </span>
                                      <span className="text-xs text-neon-pink-600 dark:text-neon-pink-400 font-semibold">Funding</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Details */}
                                <div className="space-y-3">
                                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                                    Grant Information
                                  </h5>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Role</p>
                                      <p className="font-semibold text-gray-900 dark:text-white">{grant.role}</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                      <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Year</p>
                                      <p className="font-semibold text-gray-900 dark:text-white">{grant.year}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Total Funding Banner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 p-6 rounded-xl border-2 border-neon-pink-500/20 bg-gray-50 dark:bg-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase text-gray-600 dark:text-gray-400 mb-1">Total Research Funding</p>
                      <p className="text-4xl font-bold text-neon-pink-500">RM 150,000</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{researchGrants.length} active grants</p>
                    </div>
                    <TrendingUp className="w-12 h-12 text-neon-pink-500/30" />
                  </div>
                </motion.div>
              </div>
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
              <Trophy className="w-5 h-5 text-neon-pink-500" />
              <span className="text-sm font-semibold text-neon-pink-500 uppercase tracking-wider">
                Achievements
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & Recognition
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Recognition for excellence in innovation, research, and academic achievement — from national competitions to international challenges.
            </p>
          </motion.div>

          {/* Awards List */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Awards</h3>
            <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
              {displayedAwards.map((award, index) => {
                const isExpanded = expandedId === `award-${award.id}`
                
                return (
                  <motion.div
                    key={`award-${award.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleExpand(`award-${award.id}`)}
                      className="w-full p-4 flex items-center gap-3 text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                          {award.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {award.organization}
                        </p>
                      </div>
                      <span className="px-2 py-1 rounded-full text-xs bg-neon-pink-100 dark:bg-neon-pink-500/10 text-neon-pink-700 dark:text-neon-pink-400">
                        {award.year}
                      </span>
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
                          <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50">
                            {/* Badges */}
                            <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                              <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-500/20 dark:to-pink-500/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30">
                                {award.category}
                              </span>
                              {award.prize && (
                                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-100 to-green-100 dark:from-emerald-500/20 dark:to-green-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">
                                  <DollarSign className="w-3.5 h-3.5" />
                                  <span className="text-xs font-bold">
                                    {award.prize}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                              <h5 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                                Achievement Details
                              </h5>
                              <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                                {award.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {awards.length > 4 && (
              <div className="flex justify-center pt-6">
                <LiquidButton
                  onClick={() => setShowAllAwards(!showAllAwards)}
                  className="px-6 py-2 rounded-lg border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
                >
                  {showAllAwards ? 'Show Less' : 'Show More'}
                </LiquidButton>
              </div>
            )}
          </div>

          {/* Research Grants List */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Research Grants</h3>
            <div className="divide-y divide-gray-200 dark:divide-gray-800 rounded-lg bg-white/30 dark:bg-gray-900/30 overflow-hidden">
              {sortedGrants.map((grant, index) => {
                const isExpanded = expandedId === `grant-${grant.id}`
                
                return (
                  <motion.div
                    key={`grant-${grant.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <button
                      onClick={() => toggleExpand(`grant-${grant.id}`)}
                      className="w-full p-4 flex items-center gap-3 text-left"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-md font-bold text-gray-900 dark:text-white mb-1">
                          {grant.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {grant.organization}
                        </p>
                      </div>
                      <span className="text-sm font-bold text-neon-pink-600 dark:text-neon-pink-400">
                        {grant.amount}
                      </span>
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
                          <div className="p-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900/80 dark:to-gray-900/50">
                            {/* Header Section */}
                            <div className="flex items-start gap-3 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
                              <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg flex-shrink-0">
                                <DollarSign className="w-6 h-6" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400">
                                    {grant.status}
                                  </span>
                                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                    {grant.year}
                                  </span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-neon-pink-50 to-purple-50 dark:from-neon-pink-500/10 dark:to-purple-500/10 border-2 border-neon-pink-200 dark:border-neon-pink-500/20">
                                  <span className="text-2xl font-bold text-neon-pink-600 dark:text-neon-pink-400">
                                    {grant.amount}
                                  </span>
                                  <span className="text-xs text-neon-pink-600 dark:text-neon-pink-400 font-semibold">Funding</span>
                                </div>
                              </div>
                            </div>

                            {/* Details */}
                            <div className="space-y-2">
                              <h5 className="text-xs font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                                Grant Information
                              </h5>
                              <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Role</p>
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{grant.role}</p>
                                </div>
                                <div className="p-2 rounded-lg bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-0.5">Year</p>
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white">{grant.year}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* Total Funding Banner */}
            <div className="mt-8 p-4 rounded-xl border-2 border-neon-pink-500/20 bg-gray-50 dark:bg-gray-900">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase text-gray-600 dark:text-gray-400 mb-1">Total Research Funding</p>
                  <p className="text-3xl font-bold text-neon-pink-500">RM 150,000</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{researchGrants.length} active grants</p>
                </div>
                <TrendingUp className="w-10 h-10 text-neon-pink-500/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

