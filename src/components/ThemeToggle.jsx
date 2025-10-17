import { useTheme } from './ThemeProvider'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gradient-to-br from-neon-pink-500/10 to-neon-pink-600/10 border border-neon-pink-500/20 hover:border-neon-pink-500/40 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 w-6 h-6 text-neon-pink-500 transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
        }`} />
        <Moon className={`absolute inset-0 w-6 h-6 text-neon-pink-400 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
        }`} />
      </div>
      <div className="absolute inset-0 rounded-full bg-neon-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  )
}
