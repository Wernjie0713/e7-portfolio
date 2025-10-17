import { useEffect } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'

// Section imports
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import SkillsLoopSection from './components/sections/SkillsLoopSection'
import ProjectsExperienceSection from './components/sections/ProjectsExperienceSection'
import EducationSection from './components/sections/EducationSection'
import ResearchSection from './components/sections/ResearchSection'
import AwardsSection from './components/sections/AwardsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="relative min-h-screen bg-white dark:bg-black overflow-x-hidden">
        {/* Header Navigation */}
        <Header />
        
        {/* Main Content */}
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsLoopSection />
          <ProjectsExperienceSection />
          <EducationSection />
          <ResearchSection />
          <AwardsSection />
          <ContactSection />
        </main> 
      </div>
    </ThemeProvider>
  )
}

export default App

