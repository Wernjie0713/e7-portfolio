import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { profileData } from '@/data/profile'
import { Linkedin, Github, Mail } from 'lucide-react'
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid'

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const OrcidIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947a.95.95 0 0 1-.947.947.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.228-1.369 4.228-3.722 0-2.144-1.869-3.722-4.228-3.722h-2.297z"/>
    </svg>
  )

  const socialLinks = [
    {
      icon: Linkedin,
      href: profileData.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: profileData.github,
      label: 'GitHub',
    },
    {
      icon: OrcidIcon,
      href: profileData.orcid,
      label: 'ORCID',
    },
    {
      icon: Mail,
      href: `mailto:${profileData.email}`,
      label: 'Email',
    },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="relative pt-20 pb-10 px-4 md:px-8 lg:px-16 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto">
        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center py-20 px-8 md:px-16 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 mb-4"
        >
          {/* Available Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-12 leading-tight">
            Let's create your next big idea.
          </h2>

          {/* Contact Button */}
          <LiquidButton 
            asChild
            className="px-8 py-4 rounded-full border-2 border-neon-pink-500 text-neon-pink-600 dark:text-neon-pink-400 font-medium text-lg h-auto [--liquid-button-background-color:transparent] [--liquid-button-color:#FF0099] hover:text-white dark:hover:text-white"
          >
            <a href={`mailto:${profileData.email}`}>
              Contact Me
            </a>
          </LiquidButton>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Yitkhee Wong. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  aria-label={social.label}
                >
                  <IconComponent className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

