import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { ThemeToggle } from './ThemeToggle'
import { navItems } from '@/config/navigation.jsx'
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from './ui/resizable-navbar'

export default function Header() {
  const { theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSmoothScroll = (e, link) => {
    e.preventDefault()
    const targetId = link.replace('#', '')
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 100 // Offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    
    // Close mobile menu after clicking
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink-500 to-purple-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">Y</span>
          </div>
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            Yitkhee
          </span>
        </div>

        {/* Nav Items */}
        <NavItems 
          items={navItems} 
          onItemClick={(e) => {
            const href = e.currentTarget.getAttribute('href')
            if (href) {
              handleSmoothScroll(e, href)
            }
          }}
        />

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-pink-500 to-purple-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white">
              Yitkhee
            </span>
          </div>

          {/* Right Side - Theme Toggle and Menu Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <MobileNavToggle 
              isOpen={isMobileMenuOpen} 
              onClick={toggleMobileMenu} 
            />
          </div>
        </MobileNavHeader>

        {/* Mobile Menu */}
        <MobileNavMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => handleSmoothScroll(e, item.link)}
              className="flex items-center gap-3 text-base font-medium text-gray-900 dark:text-gray-100 hover:text-neon-pink-500 dark:hover:text-neon-pink-400 transition-colors"
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

