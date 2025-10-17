# Yitkhee Wong - Portfolio Website 🚀

A modern, responsive portfolio website showcasing PhD research, publications, and technical expertise in Natural Language Processing and Machine Learning.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-success)
![React](https://img.shields.io/badge/React-19-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Premium Design
- **Neon Pink Cyber Aesthetic** with carefully crafted color palette
- **WebGL Galaxy Background** for an immersive experience
- **Glass Morphism Effects** for modern, elegant UI
- **Dark/Light Mode** with smooth transitions
- **Smooth Scrolling** powered by Lenis
- **Responsive Design** that works beautifully on all devices

### 📚 Comprehensive Sections

1. **Hero** - Animated introduction with rotating roles
2. **About** - Bio, stats, and language proficiencies
3. **Education & Experience** - Timeline visualization with tabs
4. **Projects** - Featured and other projects with technology stacks
5. **Research & Publications** - Academic publications with DOI links
6. **Skills** - Technical expertise with animated progress bars
7. **Awards** - Recognition and research grants (RM 150,000+)
8. **Contact** - Multiple contact methods and resume download

### 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Build Tool**: Vite (Rolldown)
- **Icons**: Lucide React
- **WebGL**: OGL
- **UI Components**: @aceternity, @reactbits, Skiper

## 📦 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Build for Production

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

## 📖 Documentation

- **[QUICKSTART.md](QUICKSTART.md)** - Get started in 5 minutes
- **[PORTFOLIO_BUILD_GUIDE.md](PORTFOLIO_BUILD_GUIDE.md)** - Complete technical documentation
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to Vercel, Netlify, or other platforms
- **[BUILD_SUMMARY.md](BUILD_SUMMARY.md)** - Implementation details and checklist

## 🎯 Key Highlights

### Academic Excellence
- 🎓 **PhD Candidate** in Computer Science (NLP/ML)
- 📊 **3.98 CGPA** from Universiti Teknologi Malaysia
- 📄 **4+ Publications** in Scopus-indexed conferences
- 🏆 **Dean's Award** for academic excellence

### Research Impact
- 💰 **RM 150,000+** in research grants
- 🥈 **1st Runner Up** - PayNet Cashless Campus 3.0 (RM 50,000)
- 🥈 **2nd Prize** - China International Innovation Competition
- 🥉 **3rd Prize** - TheGreatLab Grand Design Challenge

### Technical Expertise
- 🐍 Expert in Python, PyTorch, TensorFlow
- 🤖 Specialized in Neural Machine Translation
- 💻 Full-stack development experience
- 🔬 Bioinformatics and data science

## 🛠️ Customization

### Update Personal Information

Edit the data files in `src/data/`:

```javascript
// src/data/profile.js
export const profileData = {
  name: "Your Name",
  email: "your.email@example.com",
  // ... update all fields
}
```

### Change Theme Colors

Edit `tailwind.config.js`:

```javascript
'neon-pink': {
  500: '#FF0099',  // Change primary color
  // ... other shades
}
```

### Add New Sections

1. Create component in `src/components/sections/`
2. Import in `src/App.jsx`
3. Add navigation item in `src/config/navigation.js`

## 📱 Mobile Responsiveness

Fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push

# Deploy via Vercel dashboard or CLI
vercel
```

### Netlify

```bash
npm run build
# Drag 'dist' folder to netlify.com/drop
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

## 📊 Performance

- ⚡ **Fast Loading** with optimized bundles
- 🎯 **90+ Lighthouse Score** target
- 📦 **Code Splitting** for efficient loading
- 🔄 **Smooth 60fps** animations

## 🔍 SEO Optimized

- Complete meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy

## 🎨 Component Architecture

```
src/
├── components/
│   ├── sections/          # Page sections (8 sections)
│   ├── ui/                # Reusable UI components
│   ├── Galaxy.jsx         # WebGL background
│   ├── GlassSurface.jsx   # Glass morphism
│   ├── ThemeProvider.jsx  # Theme management
│   └── ThemeToggle.jsx    # Dark/light toggle
├── config/                # Navigation & config
├── data/                  # Content data
├── lib/                   # Utilities
└── App.jsx                # Main application
```

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact:

**Yitkhee Wong**
- 📧 Email: yitkhee0117@gmail.com
- 💼 LinkedIn: [wong-yit-khee](https://www.linkedin.com/in/wong-yit-khee)
- 🔬 ORCID: [0009-0002-6994-0132](https://orcid.org/0009-0002-6994-0132)
- 🐙 GitHub: [@yitkhee](https://github.com/yitkhee)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with amazing open-source projects:
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Aceternity UI](https://ui.aceternity.com)
- [Lenis](https://lenis.studiofreight.com)

## 🚀 Get Started

Ready to customize? Start here:

1. **Read** [QUICKSTART.md](QUICKSTART.md) for setup
2. **Edit** data files in `src/data/` with your information
3. **Add** your images to `public/images/`
4. **Test** with `npm run dev`
5. **Deploy** following [DEPLOYMENT.md](DEPLOYMENT.md)

---

**Built with ❤️ by Yitkhee Wong**

*Showcasing excellence in Natural Language Processing and Machine Learning*

![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?logo=react)
![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?logo=tailwind-css)
![Animated with Framer](https://img.shields.io/badge/Animated%20with-Framer%20Motion-FF0080)
