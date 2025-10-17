# Quick Start Guide

Get your portfolio up and running in minutes!

## ✅ Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## 🚀 Quick Setup (5 minutes)

### Step 1: Verify Installation

```bash
# Check Node version
node --version
# Should show v18 or higher

# Check npm version
npm --version
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React, Tailwind CSS, Framer Motion
- UI components (@aceternity, @reactbits, Skiper)
- Lenis smooth scrolling
- And more...

### Step 3: Start Development Server

```bash
npm run dev
```

Your portfolio will be available at: `http://localhost:5173`

**That's it! Your portfolio is now running!** 🎉

## 📝 Customizing Your Content

### Personal Information

Edit `src/data/profile.js`:

```javascript
export const profileData = {
  name: "Your Name",
  title: "Your Title",
  roles: ["Role 1", "Role 2", "Role 3"],
  tagline: "Your tagline",
  email: "your.email@example.com",
  // ... update all fields
}
```

### Education & Experience

Edit `src/data/education.js`:

```javascript
export const education = [
  {
    degree: "Your Degree",
    institution: "Your University",
    period: "Start - End",
    description: "Description",
    // ... add your education
  }
]
```

### Projects

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    featured: true,
    // ... add your projects
  }
]
```

### Publications

Edit `src/data/publications.js` with your research papers and publications.

### Skills

Edit `src/data/skills.js` with your technical skills and expertise areas.

### Awards

Edit `src/data/awards.js` with your achievements and research grants.

## 🎨 Theme Customization

### Change Primary Color

Edit `tailwind.config.js`:

```javascript
'neon-pink': {
  500: '#YOUR_COLOR',  // Change this
  // ... other shades
}
```

### Dark Mode Toggle

The theme toggle is in the top-right corner. Users can switch between light and dark modes.

## 📂 Adding Images

1. Place images in `public/images/` folder:
   ```
   public/
   ├── images/
   │   ├── projects/
   │   ├── awards/
   │   └── tech/
   ```

2. Reference in data files:
   ```javascript
   image: "/images/projects/your-image.jpg"
   ```

## 🔧 Common Tasks

### Add a New Section

1. Create `src/components/sections/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to the main component

### Modify Navigation

Edit `src/config/navigation.js`:

```javascript
export const navItems = [
  {
    name: 'Section Name',
    link: '#section-id',
    icon: <Icon />
  }
]
```

### Change Social Links

Edit `src/config/navigation.js`:

```javascript
export const socialLinks = [
  {
    title: 'Platform',
    icon: <Icon />,
    href: 'https://your-link.com'
  }
]
```

## 🌐 Deployment

### Option 1: Vercel (Easiest)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live.

### Option 2: Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

Done!

See `DEPLOYMENT.md` for more detailed deployment options.

## 🐛 Troubleshooting

### Port 5173 already in use

```bash
# Kill the process and restart
npm run dev -- --port 3000
```

### White screen / Nothing shows up

1. Check browser console for errors (F12)
2. Ensure all data files have valid data
3. Check component imports

### Components not showing

1. Verify component paths in imports
2. Check if component is exported correctly
3. Look for console errors

### Build fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📱 Testing

### Test on Different Devices

1. **Desktop**: Open in browser
2. **Mobile**: Use browser DevTools (F12) → Device toolbar
3. **Tablet**: Same as mobile, select tablet size

### Browser Testing

Test on:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)

### Performance Testing

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run audit
4. Aim for 90+ scores

## 💡 Tips for Best Results

### Content
- ✅ Use high-quality images
- ✅ Keep descriptions concise
- ✅ Highlight key achievements
- ✅ Update resume regularly

### Design
- ✅ Maintain consistent spacing
- ✅ Use pink accent sparingly (10-20%)
- ✅ Test dark mode thoroughly
- ✅ Ensure good color contrast

### Performance
- ✅ Optimize images before uploading
- ✅ Keep component count reasonable
- ✅ Test on slower connections
- ✅ Monitor bundle size

## 📚 Learning Resources

### Understanding the Stack

- **React**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion**: [framer.com/motion](https://www.framer.com/motion)

### Component Libraries

- **Aceternity UI**: Used for floating navbar, timeline, etc.
- **Skiper UI**: Additional components in `/skiper-ui`
- **ReactBits**: Galaxy and GlassSurface effects

## 🆘 Getting Help

### Common Questions

**Q: How do I change the color scheme?**
A: Edit `tailwind.config.js` and `src/index.css`

**Q: Can I add more sections?**
A: Yes! Create a new component in `src/components/sections/`

**Q: How do I update my resume?**
A: Replace `public/Resume2025_Yitkhee Wong.pdf` with your file

**Q: The Galaxy background is too heavy**
A: You can disable it in `HeroSection.jsx` or adjust opacity

**Q: How do I add a contact form?**
A: Check `ContactSection.jsx` - you can integrate EmailJS or similar

## 📊 Project Structure Overview

```
portfolio/
├── src/
│   ├── components/
│   │   ├── sections/      # All page sections
│   │   ├── ui/            # Reusable UI components
│   │   ├── Galaxy.jsx     # WebGL background
│   │   └── ThemeProvider.jsx
│   ├── data/              # Your content (EDIT THESE!)
│   ├── config/            # Navigation config
│   └── App.jsx            # Main app
├── public/                # Static assets
│   └── images/            # Your images here
├── tailwind.config.js     # Theme colors
└── package.json           # Dependencies
```

## ✨ Next Steps

1. ✅ Customize all data files with your information
2. ✅ Add your images to `public/images/`
3. ✅ Update resume PDF
4. ✅ Test all sections
5. ✅ Adjust colors if desired
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share your portfolio!

## 🎯 Quick Commands Reference

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Create production build
npm run preview      # Preview production build

# Linting
npm run lint         # Check code quality
```

---

**Ready to go?** Start by editing the files in `src/data/` with your information!

Need help? Check `PORTFOLIO_BUILD_GUIDE.md` for detailed documentation.

Happy building! 🚀

