import { Home, User, Briefcase, FileText, Award, Mail, Github, Linkedin } from 'lucide-react'

export const navItems = [
  {
    name: 'Home',
    link: '#hero',
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: 'About',
    link: '#about',
    icon: <User className="h-4 w-4" />,
  },
  {
    name: 'Work',
    link: '#work',
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: 'Research',
    link: '#research',
    icon: <FileText className="h-4 w-4" />,
  },
  {
    name: 'Awards',
    link: '#awards',
    icon: <Award className="h-4 w-4" />,
  },
]

export const socialLinks = [
  {
    title: 'GitHub',
    icon: <Github className="h-5 w-5" />,
    href: 'https://github.com/yitkhee',
  },
  {
    title: 'LinkedIn',
    icon: <Linkedin className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/wong-yit-khee',
  },
  {
    title: 'ORCID',
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947a.95.95 0 0 1-.947.947.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.228-1.369 4.228-3.722 0-2.144-1.869-3.722-4.228-3.722h-2.297z"/>
      </svg>
    ),
    href: 'https://orcid.org/0009-0002-6994-0132',
  },
  {
    title: 'Email',
    icon: <Mail className="h-5 w-5" />,
    href: 'mailto:yitkhee0117@gmail.com',
  },
]
