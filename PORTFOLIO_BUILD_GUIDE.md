# Yitkhee Wong Portfolio - Build Guide

A modern, neon-pink themed portfolio website built with React, Tailwind CSS, and premium UI components.

## 🚀 Features

### Design & Theme
- **Neon Pink Cyber Aesthetic**: Premium color scheme with pink accents (#FF0099)
- **Dark/Light Mode**: Full theme switching support with system preference detection
- **Smooth Animations**: Powered by Framer Motion and Lenis smooth scrolling
- **Responsive Design**: Mobile-first approach, works beautifully on all devices

### Sections Implemented
1. **Hero Section**
   - WebGL Galaxy background (using OGL)
   - Animated name with HeroHighlight
   - Rotating job titles with FlipWords
   - Smooth scroll indicator

2. **About Section**
   - Bio with glass morphism design
   - Animated statistics (CGPA, Publications, Grants, Research Years)
   - Language proficiency cards
   - NumberFlow animated counters

3. **Education & Experience**
   - Timeline visualization
   - Tab switching between Education and Experience
   - Detailed highlights for each entry
   - Awards and CGPA display

4. **Projects Section**
   - Featured projects with CardSpotlight
   - Technology tags
   - Awards and achievements
   - Status indicators (Ongoing/Completed)

5. **Research & Publications**
   - Featured publications with detailed metadata
   - Expandable publication list
   - DOI links and external resources
   - Category-based organization

6. **Skills Section**
   - Expertise areas with proficiency levels
   - Technical skills with animated progress bars
   - Categorized by: Programming, ML/NLP, Web, Tools
   - Skill level percentages

7. **Awards & Recognition**
   - Award showcase with CardSpotlight
   - Research grants display
   - Total funding counter
   - Prize amounts and categories

8. **Contact Section**
   - Contact methods with icons
   - Resume download button
   - ORCID integration
   - Availability status
   - Quick stats display

### UI Components Used

#### @aceternity Components
- FloatingNavbar
- FloatingDock
- HeroHighlight
- FlipWords
- Timeline
- Tabs
- BentoGrid
- 3D Cards
- CardSpotlight

#### @reactbits Components
- Galaxy (WebGL starfield)
- GlassSurface (glass morphism effects)

#### Skiper Components
Available in `src/components/ui/skiper-ui/` for future enhancements

### Technology Stack
- **Framework**: React 19
- **Build Tool**: Vite (Rolldown)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **WebGL**: OGL
- **Number Animations**: @number-flow/react

## 📦 Installation

All dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── ResearchSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── AwardsSection.jsx
│   │   └── ContactSection.jsx
│   ├── ui/                # UI components
│   │   ├── aceternity components
│   │   └── skiper-ui/     # Additional components
│   ├── Galaxy.jsx         # WebGL galaxy background
│   ├── GlassSurface.jsx   # Glass morphism component
│   ├── ThemeProvider.jsx  # Theme context
│   └── ThemeToggle.jsx    # Theme switcher
├── config/
│   └── navigation.js      # Nav items and social links
├── data/                  # Content data
│   ├── profile.js
│   ├── education.js
│   ├── projects.js
│   ├── publications.js
│   ├── skills.js
│   └── awards.js
├── lib/
│   └── utils.js          # Utility functions
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## 🎨 Customization

### Color Scheme
Edit `tailwind.config.js` to modify the neon pink palette:
```javascript
'neon-pink': {
  500: '#FF0099',  // Primary pink
  // ... other shades
}
```

### Content
Update data files in `src/data/`:
- `profile.js` - Personal info, bio, stats
- `education.js` - Education and experience
- `projects.js` - Project portfolio
- `publications.js` - Research publications
- `skills.js` - Technical skills and expertise
- `awards.js` - Awards and grants

### Navigation
Modify `src/config/navigation.js` to change menu items and social links

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Deploy the dist folder
```

## 📱 Mobile Responsiveness

All sections are fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading for heavy components
- Optimized animations
- Smooth scrolling with Lenis
- Efficient re-renders with React 19

## 🔍 SEO

- Complete meta tags in `index.html`
- Open Graph tags for social sharing
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy

## 📄 License

This portfolio is built for Yitkhee Wong. Feel free to use as a template with proper attribution.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact the owner.

## 📧 Contact

Yitkhee Wong
- Email: yitkhee0117@gmail.com
- LinkedIn: [wong-yit-khee](https://www.linkedin.com/in/wong-yit-khee)
- ORCID: [0009-0002-6994-0132](https://orcid.org/0009-0002-6994-0132)

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion

