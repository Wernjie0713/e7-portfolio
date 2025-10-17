# Skiper UI Components for Premium Portfolio

This document lists hand-picked Skiper UI components that create a "wow" factor with modern, high-standard aesthetics perfect for an academic/professional portfolio.

**Total Components Installed**: 23
**Recommended for Portfolio**: 18 premium components

---

## 🌟 Must-Have "Wow" Components

### 🎴 Premium Project Showcase (Gallery & Cards)
The most impressive components for displaying your work.

#### `skiper16.jsx` - StickyCard_001 ⭐⭐⭐⭐⭐
- **Description**: Cards that stick and scale down as you scroll, creating a sophisticated stacking effect
- **Technology**: Framer Motion + React Lenis
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Featured projects showcase, portfolio highlights, research papers
- **Best For**: Academic/Research portfolios showing multiple projects
- **Performance**: Medium (GPU-accelerated)

**Why It's Amazing**:
- Creates depth and hierarchy
- Smooth, butter-like scrolling experience
- Professional, modern aesthetic
- Perfect for showcasing 5-8 featured items

**Example Usage**:
```jsx
import { Skiper16, StickyCard_001 } from '@/components/ui/skiper-ui/skiper16';
import ReactLenis from 'lenis/react';

const projects = [
  { title: "PayNet Cashless Campus", src: "/projects/paynet.jpg" },
  { title: "Neural Machine Translation", src: "/projects/nmt.jpg" },
  { title: "Sentiment Analysis", src: "/projects/sentiment.jpg" },
];

<ReactLenis root>
  <main ref={container} className="relative">
    {projects.map((project, i) => (
      <StickyCard_001
        key={i}
        i={i}
        {...project}
        progress={scrollYProgress}
        range={[i * 0.25, 1]}
        targetScale={Math.max(0.5, 1 - (projects.length - i - 1) * 0.1)}
      />
    ))}
  </main>
</ReactLenis>
```

---

#### `skiper17.jsx` - StickyCard002 ⭐⭐⭐⭐⭐
- **Description**: GSAP-powered sticky cards with rotation and scale effects
- **Technology**: GSAP + ScrollTrigger + React Lenis
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Image galleries, project showcases, publication previews
- **Best For**: Visual-heavy portfolios
- **Performance**: Medium-High (GSAP optimized)

**Why It's Amazing**:
- Ultra-smooth GSAP animations
- Rotation adds dynamic movement
- More dramatic than skiper16
- Production-proven performance

**Example Usage**:
```jsx
import { StickyCard002 } from '@/components/ui/skiper-ui/skiper17';

<ReactLenis root>
  <div className="h-full w-full">
    <StickyCard002 
      cards={[
        { id: 1, image: "/awards/paynet.png", alt: "PayNet Award" },
        { id: 2, image: "/awards/china-comp.png", alt: "China Competition" },
        { id: 3, image: "/awards/dean.png", alt: "Dean's Award" },
      ]}
    />
  </div>
</ReactLenis>
```

---

#### `skiper52.jsx` - HoverExpand_001 ⭐⭐⭐⭐⭐
- **Description**: Horizontal gallery where cards elegantly expand on hover
- **Technology**: Framer Motion + AnimatePresence
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Project portfolio, tech stack, team members
- **Best For**: Interactive project galleries
- **Performance**: Low (CSS transforms only)

**Why It's Amazing**:
- Extremely smooth hover interactions
- Space-efficient design
- Feels premium and modern
- Great for hero sections

**Example Usage**:
```jsx
import { HoverExpand_001 } from '@/components/ui/skiper-ui/skiper52';

const projects = [
  { src: "/projects/1.jpg", alt: "Project 1", code: "#01" },
  { src: "/projects/2.jpg", alt: "Project 2", code: "#02" },
  { src: "/projects/3.jpg", alt: "Project 3", code: "#03" },
];

<HoverExpand_001 images={projects} />
```

---

#### `skiper53.jsx` - HoverExpand_002 ⭐⭐⭐⭐⭐
- **Description**: Vertical gallery with elegant vertical expansion on hover
- **Technology**: Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Timeline displays, experience journey, education path
- **Best For**: Vertical storytelling
- **Performance**: Low

**Why It's Amazing**:
- Perfect for timeline layouts
- Smooth vertical animations
- Great for mobile experiences
- Ideal for career/education journey

**Example Usage**:
```jsx
import { HoverExpand_002 } from '@/components/ui/skiper-ui/skiper53';

const timeline = [
  { src: "/timeline/phd.jpg", alt: "PhD UTM", code: "2022-Present" },
  { src: "/timeline/bachelor.jpg", alt: "Bachelor UTM", code: "2018-2022" },
  { src: "/timeline/stpm.jpg", alt: "STPM", code: "2016-2017" },
];

<HoverExpand_002 images={timeline} />
```

---

#### `skiper47.jsx` - Carousel_001 ⭐⭐⭐⭐⭐
- **Description**: 3D Coverflow carousel with depth and rotation
- **Technology**: Swiper.js + Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Project screenshots, publication covers, awards showcase
- **Best For**: Visual content that needs depth
- **Performance**: Medium

**Why It's Amazing**:
- Professional coverflow effect
- Touch/swipe support
- Auto-play capabilities
- Pagination & navigation built-in

**Example Usage**:
```jsx
import { Carousel_001 } from '@/components/ui/skiper-ui/skiper47';

<Carousel_001 
  images={projectScreenshots}
  showPagination
  loop
  autoplay
  spaceBetween={40}
/>
```

---

#### `skiper54.jsx` - Carousel_006 ⭐⭐⭐⭐⭐
- **Description**: Modern carousel with clip-path animations and smooth transitions
- **Technology**: Embla Carousel + Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Portfolio galleries, testimonials, awards
- **Best For**: Modern, clean presentations
- **Performance**: Medium

**Why It's Amazing**:
- Unique clip-path animation
- Centered active slide
- Title appears on active slide
- Very smooth transitions

**Example Usage**:
```jsx
import { Skiper54 } from '@/components/ui/skiper-ui/skiper54';

const images = [
  { src: "/img1.jpg", alt: "Project", title: "PayNet Platform" },
  { src: "/img2.jpg", alt: "Award", title: "1st Runner Up" },
];

<Carousel_006 
  images={images}
  loop
  showNavigation
  showPagination
/>
```

---

### ✨ Premium Text & Typography Effects

#### `skiper31.jsx` - Character Scroll Animations ⭐⭐⭐⭐⭐
- **Description**: Characters or images animate on scroll with multiple variants
- **Technology**: Framer Motion + React Lenis
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Hero text, tech stack logos, skill displays
- **Best For**: Technical portfolios showcasing tools/technologies
- **Performance**: Medium

**Variants**:
- **CharacterV1**: Text with rotation and spread
- **CharacterV2**: Images with scale and vertical movement
- **CharacterV3**: Images with rotation and combined effects

**Why It's Amazing**:
- Incredibly impressive scroll effect
- Perfect for tech stack display
- Multiple variants for variety
- Smooth, physics-based animations

**Example Usage**:
```jsx
import { CharacterV2 } from '@/components/ui/skiper-ui/skiper31';

// Display tech stack logos
const techStack = [
  "/tech/pytorch.png",
  "/tech/tensorflow.png",
  "/tech/python.png",
  "/tech/react.png",
];

<div ref={targetRef} className="h-[210vh]">
  {techStack.map((logo, index) => (
    <CharacterV2
      key={index}
      char={logo}
      index={index}
      centerIndex={Math.floor(techStack.length / 2)}
      scrollYProgress={scrollYProgress}
    />
  ))}
</div>
```

---

#### `skiper58.jsx` - TextRoll ⭐⭐⭐⭐⭐
- **Description**: Text characters roll up elegantly on hover with staggered animation
- **Technology**: Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Navigation menus, section headings, interactive titles
- **Best For**: Premium navigation, hero headings
- **Performance**: Low (very efficient)

**Why It's Amazing**:
- Sophisticated hover effect
- Staggered character animation
- Feels luxurious and premium
- Perfect for navigation links

**Example Usage**:
```jsx
import { TextRoll } from '@/components/ui/skiper-ui/skiper58';

<nav className="flex flex-col gap-4">
  <TextRoll center className="text-5xl font-bold cursor-pointer">
    Projects
  </TextRoll>
  <TextRoll center className="text-5xl font-bold cursor-pointer">
    Research
  </TextRoll>
  <TextRoll center className="text-5xl font-bold cursor-pointer">
    Experience
  </TextRoll>
</nav>
```

---

#### `skiper19.jsx` - Scroll Path Animation ⭐⭐⭐⭐
- **Description**: SVG path that draws based on scroll progress
- **Technology**: Framer Motion + useTransform
- **Wow Factor**: ⭐⭐⭐⭐
- **Use Case**: Decorative scroll indicators, hero backgrounds
- **Best For**: Unique visual flair
- **Performance**: Low

**Why It's Amazing**:
- Unique, artistic effect
- Responds to scroll
- Custom SVG paths possible
- Adds sophistication

---

### 🔢 Premium Stats & Counters

#### `skiper37.jsx` - Animated Numbers ⭐⭐⭐⭐⭐
- **Description**: Multiple animated number counter variants
- **Technology**: Number Flow + Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Statistics (publications, grants, awards), achievements
- **Best For**: Academic metrics, portfolio statistics
- **Performance**: Low

**Variants**:
- **AnimatedNumber_001**: Countdown timer with controls
- **AnimatedNumber_002**: Count up on viewport enter (spring physics)
- **AnimatedNumber_003**: Random number animation
- **AnimatedNumber_004**: Number Flow library (smoothest)

**Why It's Amazing**:
- Professional number animations
- Multiple animation styles
- Viewport-triggered animations
- Perfect for showcasing achievements

**Example Usage**:
```jsx
import { AnimatedNumber_004 } from '@/components/ui/skiper-ui/skiper37';

// Stats that count up when scrolled into view
<div className="stats-grid">
  <AnimatedNumber_004 
    from={0} 
    to={15} 
    suffix="+" 
    label="Publications"
  />
  <AnimatedNumber_004 
    from={0} 
    to={150000} 
    prefix="RM " 
    label="Research Grants"
  />
  <AnimatedNumber_004 
    from={0} 
    to={3.98} 
    decimals={2} 
    label="CGPA"
  />
</div>
```

---

### 🎬 Premium Interactive Elements

#### `skiper61.jsx` - Spring Mouse Follow ⭐⭐⭐⭐⭐
- **Description**: Smooth cursor follower with spring physics
- **Technology**: Framer Motion + useSpring
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Custom cursor effects, premium interaction feedback
- **Best For**: Adding premium feel site-wide
- **Performance**: Low (very efficient)

**Why It's Amazing**:
- Instantly makes portfolio feel premium
- Smooth spring physics
- Subtle but impactful
- Easy to implement

**Example Usage**:
```jsx
import { SpringMouseFollow } from '@/components/ui/skiper-ui/skiper61';

// Add to a section for custom cursor effect
<div className="relative">
  <SpringMouseFollow />
  {/* Your content */}
</div>
```

---

#### `skiper67.jsx` - Video Player ⭐⭐⭐⭐⭐
- **Description**: Professional video player with custom controls and modal popup
- **Technology**: Media Chrome + Framer Motion
- **Wow Factor**: ⭐⭐⭐⭐⭐
- **Use Case**: Project demos, showreels, presentation videos
- **Best For**: Showcasing video content professionally
- **Performance**: Medium

**Why It's Amazing**:
- Custom-styled video controls
- Fullscreen modal with clip-path animation
- Professional appearance
- Great for project demonstrations

**Example Usage**:
```jsx
import { Skiper67 } from '@/components/ui/skiper-ui/skiper67';

// Displays video with elegant modal popup
<Skiper67 />
// Video plays in fullscreen modal on click
```

---

### 🔘 Premium UI Details

#### `skiper40.jsx` - Animated Links ⭐⭐⭐⭐⭐
- **Description**: Six variants of elegant link hover animations
- **Technology**: CSS transforms + Tailwind
- **Wow Factor**: ⭐⭐⭐⭐
- **Use Case**: Navigation, footer links, CTAs, email links
- **Best For**: Polishing link interactions throughout portfolio
- **Performance**: Very Low (CSS only)

**Variants**:
- **Link001**: Underline left to right with arrow
- **Link002**: Underline right to left with arrow
- **Link003**: Underline from center with arrow
- **Link004**: Background fill from bottom
- **Link005**: Background fill from left

**Why It's Amazing**:
- Extremely polished details
- Multiple styles to choose from
- CSS-only (super performant)
- Professional micro-interactions

**Example Usage**:
```jsx
import { Link001, Link004 } from '@/components/ui/skiper-ui/skiper40';

// Contact email with underline animation
<Link001 href="mailto:yitkhee0117@gmail.com" className="text-2xl">
  yitkhee0117@gmail.com
</Link001>

// CTA button with fill animation
<Link004 href="/projects" className="text-xl">
  View All Projects
</Link004>
```

---

#### `skiper4.jsx` - Theme Toggle Buttons ⭐⭐⭐⭐⭐
- **Description**: Five beautifully animated theme toggle variants
- **Technology**: Framer Motion + SVG
- **Wow Factor**: ⭐⭐⭐⭐
- **Use Case**: Dark/light mode toggle
- **Best For**: Modern UI with theme switching
- **Performance**: Low

**Variants**:
- **ThemeToggleButton1**: Yin-yang rotation
- **ThemeToggleButton2**: Sun/moon clip path (most popular)
- **ThemeToggleButton3**: Sun with sparkles
- **ThemeToggleButton4**: Light bulb
- **ThemeToggleButton5**: Simple crescent

**Why It's Amazing**:
- Smooth, satisfying animations
- Multiple beautiful designs
- Production-ready
- Adds modern functionality

**Example Usage**:
```jsx
import { ThemeToggleButton2 } from '@/components/ui/skiper-ui/skiper4';

// In your header/navbar
<ThemeToggleButton2 className="size-10 p-2" />
```

---

### 🎨 Premium Visual Polish

#### `skiper41.jsx` - Progressive Blur ⭐⭐⭐⭐⭐
- **Description**: Elegant gradient blur fade for scroll containers
- **Technology**: CSS backdrop-filter + mask
- **Wow Factor**: ⭐⭐⭐⭐
- **Use Case**: Long content sections, scroll containers
- **Best For**: Adding elegance to scrollable content
- **Performance**: Low

**Why It's Amazing**:
- Extremely elegant effect
- iOS/macOS-like polish
- Subtle but noticeable
- Easy to implement

**Example Usage**:
```jsx
import { ProgressiveBlur } from '@/components/ui/skiper-ui/skiper41';

<div className="relative">
  <ProgressiveBlur position="top" backgroundColor="#ffffff" />
  <div className="h-screen overflow-scroll">
    {/* Long content */}
  </div>
  <ProgressiveBlur position="bottom" backgroundColor="#ffffff" />
</div>
```

---

### 🛠️ Development Utilities

#### `skiper65.jsx` - Breakpoint Indicator ⭐⭐⭐⭐
- **Description**: Shows current Tailwind breakpoint during development
- **Technology**: React + Tailwind breakpoints
- **Wow Factor**: N/A (utility)
- **Use Case**: Development, responsive testing
- **Best For**: Building responsive layouts
- **Performance**: Negligible

**Why It's Useful**:
- Essential during development
- Auto-hides in production
- Shows xs, sm, md, lg, xl, 2xl
- Helps with responsive design

---

## 🎁 Recommended Installation Packages

### Core "Wow" Package (Essential - 8 components)
The absolute must-haves for an impressive portfolio:

```bash
# Components to prioritize
- skiper16 or skiper17  # Sticky cards (pick one)
- skiper47 or skiper54  # Carousel (pick one)
- skiper52             # Hover expand gallery
- skiper37             # Animated numbers
- skiper58             # Text roll navigation
- skiper61             # Spring mouse follow
- skiper40             # Animated links
- skiper41             # Progressive blur
```

### Extended Package (Advanced - 6 components)
Additional components for enhanced portfolio:

```bash
- skiper31             # Character scroll animations
- skiper53             # Vertical hover expand
- skiper67             # Video player
- skiper19             # Scroll path decoration
- skiper4              # Theme toggle
- skiper65             # Breakpoint indicator (dev only)
```

### Complete Premium Package (All Recommended - 14 components)
For maximum impact:

```bash
# All core + extended components listed above
```

---

## 💡 Portfolio Layout Recommendations

### Hero Section (First Impression)
**Goal**: Immediate "wow" with smooth, elegant presentation

**Recommended Components**:
- **Background**: `skiper19` (Scroll path decoration)
- **Title**: `skiper58` (TextRoll for name/title)
- **Cursor**: `skiper61` (SpringMouseFollow site-wide)
- **CTA**: `skiper40` (Link004 or Link005 for "View Work")

```jsx
<section className="hero min-h-screen relative">
  {/* Decorative scroll path */}
  <Skiper19 />
  
  {/* Custom cursor */}
  <SpringMouseFollow />
  
  {/* Hero content */}
  <div className="hero-content">
    <TextRoll center className="text-7xl font-bold">
      Yitkhee Wong
    </TextRoll>
    <p className="text-xl">PhD Candidate | NLP Researcher</p>
    
    <Link004 href="#projects" className="text-lg mt-8">
      Explore My Work
    </Link004>
  </div>
</section>
```

---

### Projects Showcase Section
**Goal**: Stunning visual display of your work

**Recommended Components**:
- **Featured**: `skiper16` or `skiper17` (Sticky cards for 5-8 projects)
- **Grid View**: `skiper52` (HoverExpand_001 for all projects)
- **Screenshots**: `skiper47` (Carousel_001 for project details)
- **Video Demos**: `skiper67` (Video player for demos)

```jsx
<section className="projects">
  {/* Featured Projects - Sticky Cards */}
  <ReactLenis root>
    <div className="featured-projects">
      {featuredProjects.map((project, i) => (
        <StickyCard_001
          key={i}
          i={i}
          title={project.title}
          src={project.image}
          progress={scrollYProgress}
          range={[i * 0.25, 1]}
        />
      ))}
    </div>
  </ReactLenis>
  
  {/* All Projects - Hover Expand */}
  <HoverExpand_001 images={allProjects} />
  
  {/* Project Screenshots Carousel */}
  <Carousel_001 
    images={projectScreenshots}
    showPagination
    loop
  />
</section>
```

---

### Research & Publications Section
**Goal**: Academic credibility with elegant presentation

**Recommended Components**:
- **Stats**: `skiper37` (AnimatedNumber_004 for metrics)
- **Gallery**: `skiper54` (Carousel_006 for publications)
- **Cards**: `skiper17` (StickyCard002 for featured papers)

```jsx
<section className="research">
  {/* Research Stats */}
  <div className="stats-grid">
    <AnimatedNumber_004 from={0} to={15} suffix="+" label="Publications" />
    <AnimatedNumber_004 from={0} to={150000} prefix="RM " label="Grants" />
    <AnimatedNumber_004 from={0} to={3.98} decimals={2} label="CGPA" />
  </div>
  
  {/* Publication Showcaseskiper */}
  <Carousel_006 
    images={publications}
    loop
    showPagination
  />
</section>
```

---

### Skills & Tech Stack Section
**Goal**: Interactive display of technical expertise

**Recommended Components**:
- **Tech Stack**: `skiper31` (CharacterV2 with tech logos)
- **Skills**: `skiper52` (HoverExpand_001 for skill categories)
- **Scroll**: `skiper41` (ProgressiveBlur for long lists)

```jsx
<section className="skills relative">
  <ProgressiveBlur position="top" />
  
  {/* Tech Stack with Scroll Animation */}
  <div ref={techRef} className="tech-stack">
    {techLogos.map((logo, index) => (
      <CharacterV2
        key={index}
        char={logo}
        index={index}
        centerIndex={Math.floor(techLogos.length / 2)}
        scrollYProgress={scrollYProgress}
      />
    ))}
  </div>
  
  {/* Skill Categories */}
  <HoverExpand_001 images={skillCategories} />
  
  <ProgressiveBlur position="bottom" />
</section>
```

---

### Experience & Education Section
**Goal**: Clear timeline with smooth interactions

**Recommended Components**:
- **Timeline**: `skiper53` (HoverExpand_002 vertical)
- **Cards**: `skiper17` (StickyCard002 for experiences)
- **Links**: `skiper40` (Link001 for institution links)

```jsx
<section className="experience">
  {/* Vertical Timeline */}
  <HoverExpand_002 
    images={timeline}
    // Each image represents a period (PhD, Bachelor, etc.)
  />
  
  {/* Or Sticky Cards */}
  <ReactLenis root>
    <StickyCard002 cards={experiences} />
  </ReactLenis>
  
  {/* Institution Links */}
  <Link001 href="https://www.utm.my" className="text-lg">
    Universiti Teknologi Malaysia
  </Link001>
</section>
```

---

### Awards & Achievements Section
**Goal**: Celebrate accomplishments impressively

**Recommended Components**:
- **Gallery**: `skiper47` (Carousel_001 coverflow effect)
- **Featured**: `skiper16` (StickyCard_001 for major awards)
- **Stats**: `skiper37` (AnimatedNumber for prize money)

```jsx
<section className="awards">
  {/* Prize Money Counter */}
  <AnimatedNumber_004 
    from={0} 
    to={50000} 
    prefix="RM " 
    label="1st Runner Up Prize"
  />
  
  {/* Awards Carousel */}
  <Carousel_001 
    images={awardPhotos}
    showPagination
    autoplay
  />
</section>
```

---

### Contact Section
**Goal**: Professional, accessible, elegant

**Recommended Components**:
- **Email Link**: `skiper40` (Link001 with animation)
- **Social Links**: `skiper40` (Link002 for LinkedIn, GitHub)
- **Polish**: `skiper41` (ProgressiveBlur if needed)

```jsx
<section className="contact">
  <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
  
  {/* Email */}
  <Link001 
    href="mailto:yitkhee0117@gmail.com" 
    className="text-3xl mb-4"
  >
    yitkhee0117@gmail.com
  </Link001>
  
  {/* Social Links */}
  <div className="social-links flex gap-6">
    <Link002 href="https://linkedin.com/in/wong-yit-khee">
      LinkedIn
    </Link002>
    <Link002 href="https://github.com/yitkhee">
      GitHub
    </Link002>
  </div>
</section>
```

---

### Navigation
**Goal**: Smooth, modern, elegant navigation

**Recommended Components**:
- **Menu Items**: `skiper58` (TextRoll for nav links)
- **Theme Toggle**: `skiper4` (ThemeToggleButton2)
- **Cursor**: `skiper61` (SpringMouseFollow)

```jsx
<nav className="navigation">
  {/* Navigation Links */}
  <ul className="nav-links">
    <li><TextRoll>Home</TextRoll></li>
    <li><TextRoll>Projects</TextRoll></li>
    <li><TextRoll>Research</TextRoll></li>
    <li><TextRoll>Contact</TextRoll></li>
  </ul>
  
  {/* Theme Toggle */}
  <ThemeToggleButton2 className="size-10" />
</nav>
```

---

## 🎨 Suggested Component Combinations

### Ultra-Premium Portfolio (Maximum Impact)
```bash
skiper16 (Sticky cards)
+ skiper52 (Hover expand)
+ skiper37 (Animated numbers)
+ skiper58 (Text roll)
+ skiper61 (Spring cursor)
+ skiper67 (Video player)
+ skiper40 (Animated links)
+ skiper41 (Progressive blur)
= 💎 Award-winning portfolio
```

### Academic Research Portfolio
```bash
skiper17 (Sticky cards GSAP)
+ skiper54 (Carousel 006)
+ skiper37 (Animated numbers)
+ skiper31 (Character animations)
+ skiper58 (Text roll)
+ skiper41 (Progressive blur)
= 📚 Professional academic presence
```

### Modern Developer Portfolio
```bash
skiper16 (Sticky cards)
+ skiper47 (Carousel coverflow)
+ skiper31 (Tech stack animation)
+ skiper61 (Spring cursor)
+ skiper40 (Animated links)
+ skiper4 (Theme toggle)
= 💻 Cutting-edge developer showcase
```

### Minimalist Elegant Portfolio
```bash
skiper53 (Vertical hover expand)
+ skiper41 (Progressive blur)
+ skiper58 (Text roll)
+ skiper40 (Animated links)
+ skiper65 (Breakpoint indicator - dev)
= ✨ Clean, sophisticated presence
```

---

## 📦 Dependencies Required

### Essential Dependencies
```bash
# Core animation
npm install framer-motion

# Smooth scrolling
npm install lenis @studio-freight/react-lenis

# GSAP (for skiper17)
npm install gsap @gsap/react

# Swiper (for carousels)
npm install swiper

# Embla (for skiper54)
npm install embla-carousel-react embla-carousel-autoplay

# Number animations (for skiper37)
npm install @number-flow/react

# Video player (for skiper67)
npm install media-chrome

# Icons
npm install lucide-react

# Utilities
npm install clsx tailwind-merge class-variance-authority
```

### Optional Dependencies
```bash
# Audio (for skiper25 - if using)
npm install use-sound
```

---

## 📊 Component Priority Matrix

| Component | Priority | Impact | Effort | Performance |
|-----------|----------|--------|--------|-------------|
| skiper16 | ⭐⭐⭐⭐⭐ | Very High | Medium | Medium |
| skiper52 | ⭐⭐⭐⭐⭐ | Very High | Low | Low |
| skiper37 | ⭐⭐⭐⭐⭐ | High | Low | Low |
| skiper58 | ⭐⭐⭐⭐⭐ | High | Low | Low |
| skiper61 | ⭐⭐⭐⭐⭐ | High | Low | Low |
| skiper40 | ⭐⭐⭐⭐⭐ | Medium | Very Low | Very Low |
| skiper41 | ⭐⭐⭐⭐ | Medium | Very Low | Low |
| skiper17 | ⭐⭐⭐⭐⭐ | Very High | High | Medium |
| skiper47 | ⭐⭐⭐⭐ | High | Medium | Medium |
| skiper54 | ⭐⭐⭐⭐⭐ | High | Medium | Medium |
| skiper31 | ⭐⭐⭐⭐ | High | High | Medium |
| skiper67 | ⭐⭐⭐⭐ | High | High | Medium |
| skiper53 | ⭐⭐⭐⭐ | Medium | Low | Low |
| skiper4 | ⭐⭐⭐⭐ | Medium | Low | Low |

---

## 🎯 Your Recommended Starter Kit

Based on your profile as a PhD candidate in NLP/ML, here's my recommended setup:

### Phase 1: Foundation (Week 1)
```bash
✅ skiper61   # Spring cursor - instant premium feel
✅ skiper58   # Text roll navigation - sophisticated UI
✅ skiper40   # Animated links - polished details
✅ skiper4    # Theme toggle - modern functionality
✅ skiper65   # Breakpoint indicator - development aid
```

### Phase 2: Content Display (Week 2)
```bash
✅ skiper16   # Sticky cards - featured projects
✅ skiper37   # Animated numbers - statistics
✅ skiper52   # Hover expand - project grid
✅ skiper41   # Progressive blur - elegant scrolling
```

### Phase 3: Advanced Features (Week 3)
```bash
✅ skiper47   # Carousel - project screenshots
✅ skiper31   # Character animation - tech stack
✅ skiper53   # Vertical expand - timeline
✅ skiper67   # Video player - demos (if needed)
```

### Phase 4: Polish & Optimization (Week 4)
- Test all components on mobile
- Optimize images and assets
- Add lazy loading
- Test performance
- Fine-tune animations

---

## 🔧 Implementation Best Practices

### 1. Lazy Loading
```jsx
import dynamic from 'next/dynamic';

// Lazy load heavy components
const StickyCard = dynamic(() => 
  import('@/components/ui/skiper-ui/skiper16').then(mod => mod.StickyCard_001)
);

const VideoPlayer = dynamic(() => 
  import('@/components/ui/skiper-ui/skiper67').then(mod => mod.Skiper67)
);
```

### 2. Smooth Scrolling Setup
```jsx
// In your root layout
import ReactLenis from 'lenis/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
```

### 3. Performance Optimization
```jsx
// Use Intersection Observer for viewport animations
import { useInView } from 'react-intersection-observer';

const { ref, inView } = useInView({
  triggerOnce: true, // Animate only once
  threshold: 0.1,
});

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
>
  {/* Content */}
</motion.div>
```

### 4. Reduced Motion
```jsx
// Respect user preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  animate={prefersReducedMotion ? {} : { /* animations */ }}
>
  {/* Content */}
</motion.div>
```

---

## ✅ Pre-Launch Checklist

### Performance
- [ ] All images optimized (WebP format)
- [ ] Videos compressed and optimized
- [ ] Lazy loading implemented for heavy components
- [ ] Code splitting configured
- [ ] Bundle size analyzed

### Functionality
- [ ] All animations smooth on mobile
- [ ] Touch gestures work (carousels)
- [ ] Keyboard navigation functional
- [ ] Links working correctly
- [ ] Theme toggle persists

### Accessibility
- [ ] Alt text on all images
- [ ] ARIA labels on interactive elements
- [ ] Keyboard accessible
- [ ] Screen reader tested
- [ ] Color contrast sufficient

### Cross-Browser
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on Edge
- [ ] Tested on mobile browsers

### Responsive
- [ ] Mobile (320px+)
- [ ] Tablet (768px+)
- [ ] Desktop (1024px+)
- [ ] Large Desktop (1920px+)

---

## 💡 Pro Tips

1. **Don't Overuse**: Pick 8-10 components max. Quality over quantity.
2. **Consistency**: Stick to similar animation speeds and easing functions.
3. **Mobile First**: Test on mobile throughout development.
4. **Loading States**: Add skeleton loaders for async content.
5. **Progressive Enhancement**: Ensure site works without JavaScript.

---

## 🔗 Quick Reference

### Component Files
All located in: `src/components/ui/skiper-ui/`

### Import Patterns
```jsx
// Named exports
import { StickyCard_001 } from '@/components/ui/skiper-ui/skiper16';
import { HoverExpand_001 } from '@/components/ui/skiper-ui/skiper52';
import { TextRoll } from '@/components/ui/skiper-ui/skiper58';
import { Link001 } from '@/components/ui/skiper-ui/skiper40';

// Default exports
import { Skiper37 } from '@/components/ui/skiper-ui/skiper37';
import { Skiper67 } from '@/components/ui/skiper-ui/skiper67';
```

### Common Props Pattern
```jsx
// Most components accept
className    // Tailwind classes
images       // Array of image objects
showPagination // Boolean
loop         // Boolean
autoplay     // Boolean
```

---

## 📊 Statistics

- **Total Skiper Components**: 23
- **Recommended for Portfolio**: 18 (78%)
- **Core Essential**: 8 components
- **Extended Package**: 6 components  
- **High Impact (5★)**: 14 components
- **Low Effort Setup**: 10 components
- **Performance Optimized**: 18 components

---

*Last Updated: October 15, 2025*
*Curated Specifically for Yitkhee Wong's Premium Portfolio*
*Focus: Academic Excellence + Technical Sophistication + Visual "Wow"*

