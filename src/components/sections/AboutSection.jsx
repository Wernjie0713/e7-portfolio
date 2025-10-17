import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { InfiniteMovingCards } from '../ui/infinite-moving-cards'
import { profileData } from '@/data/profile'
import NumberFlow from '@number-flow/react'
import { GraduationCap, FileText, DollarSign, Clock, Languages } from 'lucide-react'
import profileImage from '@/assets/images/profile-picture.jpg'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Prepare stats cards for infinite scroll
  const statsCards = profileData.stats.map((stat) => {
    const icons = {
      CGPA: GraduationCap,
      Publications: FileText,
      'Research Grants': DollarSign,
      'Years Research': Clock,
    }
    const IconComponent = icons[stat.label]
    
    return {
      icon: IconComponent,
      value: stat.value,
      prefix: stat.prefix,
      suffix: stat.suffix,
      decimals: stat.decimals,
      label: stat.label,
      description: stat.label === 'CGPA' ? 'Academic Excellence' : 
                   stat.label === 'Publications' ? 'Research Output' :
                   stat.label === 'Research Grants' ? 'Funding Secured' :
                   'Experience'
    }
  })

  // Add languages as cards
  const languageCards = profileData.languages.map((lang) => ({
    icon: Languages,
    value: lang.name,
    label: lang.level,
    description: 'Language Proficiency'
  }))

  // Combine all cards
  const allCards = [...statsCards, ...languageCards]

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen bg-white dark:bg-black overflow-hidden"
    >
      {/* Desktop Diagonal Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-screen pl-20">
        {/* Left Triangle - Content Area */}
        <div 
          className="col-span-7 relative flex flex-col justify-center px-8 xl:px-16 py-20"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)'
          }}
        >
          <div className="max-w-3xl">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-5xl xl:text-6xl font-bold mb-4">
                About <span className="text-neon-pink-500">Me</span>
              </h2>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {profileData.bio}
              </p>
            </motion.div>

            {/* Infinite Scrolling Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full"
            >
              <InfiniteMovingCards
                items={allCards.map(card => ({
                  icon: card.icon,
                  value: card.value,
                  prefix: card.prefix,
                  suffix: card.suffix,
                  decimals: card.decimals,
                  label: card.label,
                  description: card.description
                }))}
                direction="left"
                speed="slow"
                pauseOnHover={true}
                className="py-8"
              />
            </motion.div>
          </div>
        </div>

        {/* Right Triangle - Profile Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-5 relative overflow-hidden"
          style={{
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          {/* Profile Image filling entire triangle */}
          <img 
            src={profileImage}
            alt="Profile"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Optional overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-pink-500/10 via-transparent to-purple-500/10"></div>
        </motion.div>
      </div>

      {/* Mobile/Tablet Stacked Layout */}
      <div className="lg:hidden py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image on Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile Image with rounded border */}
              <img 
                src={profileImage}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-neon-pink-500/30"
              />
              
              {/* Optional overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neon-pink-500/5 via-transparent to-purple-500/5"></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-neon-pink-500/20 blur-2xl opacity-50 -z-10"></div>
            </div>
          </motion.div>

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-neon-pink-500">Me</span>
            </h2>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              {profileData.bio}
            </p>
          </motion.div>

          {/* Infinite Scrolling Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InfiniteMovingCards
              items={allCards.map(card => ({
                icon: card.icon,
                value: card.value,
                prefix: card.prefix,
                suffix: card.suffix,
                decimals: card.decimals,
                label: card.label,
                description: card.description
              }))}
              direction="left"
              speed="slow"
              pauseOnHover={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

