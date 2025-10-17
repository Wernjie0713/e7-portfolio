import { motion } from 'framer-motion'
import { HeroHighlight } from '../ui/hero-highlight'
import { FlipWords } from '../ui/flip-words'
import { StarsBackground } from '../animate-ui/components/backgrounds/stars'
import Lanyard from '../Lanyard'
import CircularText from '../CircularText'
import { useTheme } from '../ThemeProvider'
import { profileData } from '@/data/profile'
import { socialLinks } from '@/config/navigation.jsx'
import { ArrowDown } from 'lucide-react'
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid'
import { cn } from '@/lib/utils'

export default function HeroSection() {
  const { theme } = useTheme()
  
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Stars Background Effect */}
      <div className="absolute inset-0 z-0">
        <StarsBackground
          starColor={theme === 'dark' ? '#FFF' : '#000'}
          className={cn(
            'absolute inset-0 min-h-screen',
            theme === 'dark' 
              ? 'bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]'
              : 'bg-[radial-gradient(ellipse_at_bottom,_#fef3f9_0%,_#fff_100%)]'
          )}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          {/* Left: Lanyard 3D Component */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1"
          >
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} fov={18} />
          </motion.div>

          {/* Right: Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            {/* Name with Circular Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-neon-pink-600 to-gray-900 dark:from-white dark:via-neon-pink-400 dark:to-white mb-0 pb-4"
            >
              Wong{' '}Yitkhee
              <span className="relative inline-block">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute -top-6 -right-6 md:-top-8 md:-right-8 lg:-top-48 lg:-right-36"
                >
                  <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    {/* Outer border ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-transparent"></div>
                    
                    {/* Circular Text - Outer Ring */}
                    <div className="absolute inset-0">
                      <CircularText
                        text="LETS•TALK•LETS•TALK•LETS•TALK•"
                        onHover="normal"
                        spinDuration={20}
                        className="w-full h-full !text-[0.5rem] md:!text-xs text-gray-700 dark:text-gray-300"
                      />
                    </div>
                    
                    {/* Inner Circle with Arrow Icon */}
                    <a
                      href="#contact"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 flex items-center justify-center group hover:bg-neon-pink-500 dark:hover:bg-neon-pink-500 hover:border-neon-pink-500 transition-all duration-300 cursor-pointer shadow-lg"
                    >
                      <ArrowDown 
                        className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-gray-700 dark:text-gray-300 group-hover:text-white rotate-[-135deg] group-hover:rotate-[-90deg] transition-all duration-300" 
                      />
                    </a>
                  </div>
                </motion.div>
              </span>
            </motion.h1>  

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
            >
              <FlipWords 
                words={profileData.roles}
                className="text-neon-pink-500 dark:text-neon-pink-400"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto lg:mx-0"
            >
              {profileData.tagline}
            </motion.p>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-3 justify-center lg:justify-start mb-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-neon-pink-500 hover:text-neon-pink-500 dark:hover:text-neon-pink-400 transition-all duration-300 shadow-lg hover:shadow-neon-pink-500/50"
                  aria-label={link.title}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start flex-wrap"
            >
              <LiquidButton
                asChild
                className="px-8 py-3 rounded-md border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-semibold h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
              >
                <a href="/Resume2025_Yitkhee Wong.pdf" target="_blank" rel="noopener noreferrer">
                  My Resume
                </a>
              </LiquidButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-neon-pink-500 dark:hover:text-neon-pink-400 transition-colors cursor-pointer z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}
