# Skiper UI Components Overview

This document provides a comprehensive overview of all manually installed Skiper UI components in your project.

**Total Components Installed**: 23 components

---

## 📊 Components by Category

### 🎴 Card & Gallery Components (7 components)

#### `skiper16.jsx` - StickyCard_001
- **Type**: Scroll-based sticky cards
- **Technology**: Framer Motion + React Lenis
- **Animation**: Cards scale down as you scroll, creating a stacking effect
- **Use Case**: Project showcases, feature highlights, testimonials
- **Key Props**: `i`, `title`, `src`, `progress`, `range`, `targetScale`
- **Export**: `Skiper16`, `StickyCard_001`

```jsx
// Example Usage
<ReactLenis root>
  <main ref={container}>
    {projects.map((project, i) => (
      <StickyCard_001
        key={i}
        i={i}
        {...project}
        progress={scrollYProgress}
        range={[i * 0.25, 1]}
        targetScale={targetScale}
      />
    ))}
  </main>
</ReactLenis>
```

#### `skiper17.jsx` - StickyCard002
- **Type**: GSAP-powered sticky cards
- **Technology**: GSAP + ScrollTrigger + React Lenis
- **Animation**: Cards rotate and scale as they stack
- **Use Case**: Portfolio galleries, image showcases
- **Key Props**: `cards`, `className`, `containerClassName`, `imageClassName`
- **Export**: `Skiper17`, `StickyCard002`

```jsx
// Example Usage
<ReactLenis root>
  <StickyCard002 
    cards={[
      { id: 1, image: "/img1.png", alt: "Image 1" },
      { id: 2, image: "/img2.png", alt: "Image 2" }
    ]}
  />
</ReactLenis>
```

#### `skiper52.jsx` - HoverExpand_001
- **Type**: Horizontal hover-expand gallery
- **Technology**: Framer Motion
- **Animation**: Cards expand horizontally on hover
- **Use Case**: Image galleries, portfolio showcases
- **Key Props**: `images`, `className`
- **Export**: `Skiper52`, `HoverExpand_001`

```jsx
// Example Usage
<HoverExpand_001 
  images={[
    { src: "/img1.jpg", alt: "Project 1", code: "#01" }
  ]}
/>
```

#### `skiper53.jsx` - HoverExpand_002
- **Type**: Vertical hover-expand gallery
- **Technology**: Framer Motion
- **Animation**: Cards expand vertically on hover
- **Use Case**: Timeline displays, vertical galleries
- **Key Props**: `images`, `className`
- **Export**: `Skiper53`, `HoverExpand_002`

#### `skiper47.jsx` - Carousel_001
- **Type**: Coverflow carousel
- **Technology**: Swiper.js + Framer Motion
- **Animation**: 3D coverflow effect with rotation
- **Use Case**: Project showcases, image galleries
- **Key Props**: `images`, `showPagination`, `showNavigation`, `loop`, `autoplay`, `spaceBetween`
- **Export**: `Skiper47`, `Carousel_001`

```jsx
// Example Usage
<Carousel_001 
  images={images}
  showPagination
  loop
  spaceBetween={40}
/>
```

#### `skiper48.jsx` - Carousel_002
- **Type**: Card stack carousel
- **Technology**: Swiper.js (EffectCards)
- **Animation**: Cards stack and slide like a deck
- **Use Case**: Mobile-friendly galleries, testimonials
- **Key Props**: `images`, `showPagination`, `loop`, `autoplay`
- **Export**: `Skiper48`, `Carousel_002`

#### `skiper49.jsx` - Carousel_003
- **Type**: Coverflow carousel (variant)
- **Technology**: Swiper.js + Framer Motion
- **Animation**: Coverflow with deeper rotation (40°)
- **Use Case**: Featured projects, hero carousels
- **Key Props**: `images`, `showPagination`, `loop`, `spaceBetween`
- **Export**: `Skiper49`, `Carousel_003`

#### `skiper54.jsx` - Carousel_006
- **Type**: ClipPath animated carousel
- **Technology**: Embla Carousel + Framer Motion
- **Animation**: Cards clip/expand with rounded corners
- **Use Case**: Modern galleries with smooth transitions
- **Key Props**: `images`, `loop`, `showNavigation`, `showPagination`, `autoplay`
- **Export**: `Skiper54`

```jsx
// Example Usage
<Carousel_006 
  images={images}
  loop
  showNavigation
  showPagination
/>
```

---

### ✨ Text & Typography Animations (3 components)

#### `skiper19.jsx` - Scroll Path Animation
- **Type**: SVG path animation following scroll
- **Technology**: Framer Motion + useScroll
- **Animation**: Animated stroke follows scroll progress
- **Use Case**: Hero sections, decorative scroll indicators
- **Key Features**: Custom SVG path with scroll-based drawing
- **Export**: `Skiper19`

```jsx
// Key animation
const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
```

#### `skiper31.jsx` - Character Scroll Animations
- **Type**: Character-based scroll animations (3 variants)
- **Technology**: Framer Motion + React Lenis
- **Variants**:
  - `CharacterV1`: Text characters with rotation and x-axis movement
  - `CharacterV2`: Images with scale and y-axis movement
  - `CharacterV3`: Images with rotation and combined movements
- **Use Case**: Hero text reveals, logo animations, tech stack displays
- **Export**: `Skiper31`, `CharacterV1`, `CharacterV2`, `CharacterV3`

```jsx
// Example Usage
<Skiper31 /> // Shows all 3 variants in sequence
```

#### `skiper58.jsx` - TextRoll
- **Type**: Text roll animation on hover
- **Technology**: Framer Motion
- **Animation**: Characters roll up on hover with staggered delay
- **Use Case**: Navigation menus, interactive headings
- **Key Props**: `children`, `className`, `center`
- **Export**: `Skiper58`, `TextRoll`

```jsx
// Example Usage
<TextRoll center className="text-4xl font-bold">
  Projects
</TextRoll>
```

---

### 🔢 Number & Counter Components (2 components)

#### `skiper37.jsx` - Animated Numbers
- **Type**: Multiple animated number variants
- **Technology**: Number Flow + Framer Motion + Intersection Observer
- **Variants**:
  - `AnimatedNumber_001`: Countdown timer with play/pause
  - `AnimatedNumber_002`: Count up on viewport enter (useSpring)
  - `AnimatedNumber_003`: Random number animation
  - `AnimatedNumber_004`: Count up with Number Flow library
- **Use Case**: Statistics, metrics, timers, achievements
- **Export**: `Skiper37`, `AnimatedNumber_001`, `AnimatedNumber_002`, `AnimatedNumber_003`, `AnimatedNumber_004`

```jsx
// Example Usage - Countdown
<AnimatedNumber_001 />

// Example Usage - Stats on scroll
<AnimatedNumber_004 /> // 3 → 100 on view
```

#### `skiper62.jsx` - useLoop Hook
- **Type**: Custom hook for looping animations
- **Technology**: React hooks + Framer Motion
- **Use Case**: Auto-rotating content, cycling testimonials
- **Export**: `Skiper62`, `useLoop`

```jsx
// Example Usage
const { key } = useLoop(1000); // Loop every 1 second
const currentItem = array[key % array.length];
```

---

### 🔘 Button & Toggle Components (4 components)

#### `skiper3.jsx` - Dynamic Toggle Button
- **Type**: Expandable music player toggle
- **Technology**: Framer Motion
- **Animation**: Expands from circle to full player
- **Use Case**: Music players, media controls
- **Key Features**: Smooth width transition, play/pause icon
- **Export**: `Skiper3`

#### `skiper4.jsx` - Theme Toggle Buttons (5 variants)
- **Type**: Animated theme switchers
- **Technology**: Framer Motion + SVG animations
- **Variants**:
  - `ThemeToggleButton1`: Yin-yang rotation
  - `ThemeToggleButton2`: Sun/moon with clip path
  - `ThemeToggleButton3`: Sun with sparkles
  - `ThemeToggleButton4`: Light bulb
  - `ThemeToggleButton5`: Simple moon crescent
- **Use Case**: Dark/light mode toggle, theme switchers
- **Key Props**: `className` for each variant
- **Export**: `Skiper4`, `ThemeToggleButton1-5`
- **Bonus**: Interactive options panel to adjust scale, gap, and flex direction

```jsx
// Example Usage
<ThemeToggleButton2 className="size-12 p-2" />
```

#### `skiper25.jsx` - Music Toggle Button
- **Type**: Music player with waveform visualization
- **Technology**: Framer Motion + use-sound library
- **Animation**: Animated waveform bars
- **Use Case**: Audio players, music controls
- **Key Features**: Real-time waveform animation, play/pause state
- **Export**: `Skiper25`, `MusicToggleButton`

```jsx
// Example Usage
<MusicToggleButton />
// Requires audio file at /audio/audio.m4a
```

#### `skiper40.jsx` - Animated Links (6 variants)
- **Type**: Link hover animations
- **Technology**: CSS + Tailwind utilities
- **Variants**:
  - `Link000`: Basic underline left to right
  - `Link001`: Underline with arrow (left to right)
  - `Link002`: Underline right to left with arrow
  - `Link003`: Underline from center with arrow
  - `Link004`: Background fill from bottom
  - `Link005`: Background fill from left
- **Use Case**: Navigation links, CTAs, footer links
- **Export**: `Skiper40`, `Link000-005`

```jsx
// Example Usage
<Link001 href="mailto:hi@example.com">
  Contact Us
</Link001>
```

---

### 🎬 Interactive & Animation Components (4 components)

#### `skiper39.jsx` - Crowd Canvas
- **Type**: Walking characters animation
- **Technology**: GSAP + Canvas API
- **Animation**: Animated characters walking across screen
- **Use Case**: Playful backgrounds, interactive landing pages
- **Key Props**: `src`, `rows`, `cols`
- **Export**: `Skiper39`, `CrowdCanvas`

```jsx
// Example Usage
<CrowdCanvas 
  src="/images/peeps/all-peeps.png" 
  rows={15} 
  cols={7} 
/>
// Requires spritesheet image
```

#### `skiper61.jsx` - Mouse Follow Components
- **Type**: Cursor followers (2 variants)
- **Technology**: Framer Motion + useMotionValue/useSpring
- **Variants**:
  - `SimpleMouseFollow`: Direct position tracking
  - `SpringMouseFollow`: Smooth spring-based following
- **Use Case**: Custom cursors, interactive elements
- **Export**: `Skiper61`, `SimpleMouseFollow`, `SpringMouseFollow`

```jsx
// Example Usage
<SpringMouseFollow />
// Creates smooth following cursor effect
```

#### `skiper67.jsx` - Video Player
- **Type**: Custom video player with controls
- **Technology**: Media Chrome + Framer Motion
- **Animation**: Modal popup with clip-path animation
- **Components**:
  - `VideoPlayer`
  - `VideoPlayerControlBar`
  - `VideoPlayerTimeRange`
  - `VideoPlayerPlayButton`
  - `VideoPlayerMuteButton`
  - `VideoPlayerContent`
- **Use Case**: Video showcases, showreels, demo videos
- **Key Features**: Custom styled controls, fullscreen modal
- **Export**: `Skiper67` + all sub-components

```jsx
// Example Usage
<VideoPlayer style={{ width: "100%", height: "100%" }}>
  <VideoPlayerContent
    src="/video.mp4"
    autoPlay
    slot="media"
  />
  <VideoPlayerControlBar>
    <VideoPlayerPlayButton />
    <VideoPlayerTimeRange />
    <VideoPlayerMuteButton />
  </VideoPlayerControlBar>
</VideoPlayer>
```

---

### 🎨 Visual Effects & Utilities (3 components)

#### `skiper41.jsx` - Progressive Blur
- **Type**: Fade/blur effect for scroll containers
- **Technology**: CSS backdrop-filter + masks
- **Animation**: Gradient blur fade at top/bottom
- **Use Case**: Scroll containers, content fades
- **Key Props**: `backgroundColor`, `position`, `height`, `blurAmount`
- **Export**: `Skiper41`, `ProgressiveBlur`

```jsx
// Example Usage
<div className="relative">
  <ProgressiveBlur position="top" backgroundColor="#f5f4f3" />
  <ProgressiveBlur position="bottom" backgroundColor="#f5f4f3" />
  <div className="overflow-scroll">
    {/* Content */}
  </div>
</div>
```

#### `skiper65.jsx` - Breakpoint Indicator
- **Type**: Development utility
- **Technology**: Tailwind breakpoints
- **Animation**: None (static indicator)
- **Use Case**: Development, responsive testing
- **Key Features**: Shows current breakpoint (xs, sm, md, lg, xl, 2xl)
- **Export**: `Skiper65`, `BreakpointIndicator`

```jsx
// Example Usage
<BreakpointIndicator />
// Only shows in development (process.env.NODE_ENV !== "production")
```

#### `skiper66.jsx` - ClipDiv
- **Type**: SVG clip-path masked container
- **Technology**: SVG clip-path
- **Animation**: Scale on hover
- **Use Case**: Unique shaped image containers, masked sections
- **Key Props**: `children`, `imgSrc`, `className`
- **Export**: `Skiper66`, `ClipDiv`

```jsx
// Example Usage
<ClipDiv imgSrc="/image.png">
  <h1>Hover Me</h1>
</ClipDiv>
```

---

## 📦 Dependencies Required

Based on the components, here are the required dependencies:

### Core Dependencies
```json
{
  "framer-motion": "^11.x.x",
  "react": "^18.x.x"
}
```

### Component-Specific Dependencies

#### Scroll & Animation
- **Lenis**: `lenis` + `@studio-freight/react-lenis` or `@studio-freight/lenis`
  - Used in: skiper16, skiper17, skiper31
  
- **GSAP**: `gsap` + `@gsap/react`
  - Used in: skiper17, skiper39

#### Carousel Components
- **Swiper**: `swiper`
  - Used in: skiper47, skiper48, skiper49
  
- **Embla Carousel**: `embla-carousel-react` + `embla-carousel-autoplay`
  - Used in: skiper54
  - Also requires: `@/components/ui/carousel` (shadcn/ui)

#### Media & Audio
- **use-sound**: `use-sound`
  - Used in: skiper25
  
- **media-chrome**: `media-chrome`
  - Used in: skiper67

#### Number Animations
- **@number-flow/react**: `@number-flow/react`
  - Used in: skiper37

#### UI Components
- **Lucide Icons**: `lucide-react`
  - Used in: Most components for icons

### Utility Dependencies
- **class-variance-authority**: `class-variance-authority`
- **clsx**: `clsx`
- **tailwind-merge**: `tailwind-merge`

---

## 🎯 Installation Commands

If you need to install missing dependencies:

```bash
# Core animation libraries
npm install framer-motion lenis gsap @gsap/react

# Carousel libraries
npm install swiper embla-carousel-react embla-carousel-autoplay

# Media & audio
npm install use-sound media-chrome

# Number animations
npm install @number-flow/react

# Icons
npm install lucide-react

# Utilities
npm install clsx tailwind-merge class-variance-authority
```

---

## 🎨 Component Usage Recommendations for Your Portfolio

### Hero Section
- **Background**: `skiper19` (Scroll path animation)
- **Text**: `skiper31` (CharacterV1 or V2 for dynamic text reveal)
- **Interactive**: `skiper61` (SpringMouseFollow for custom cursor)

### Projects Showcase
- **Gallery**: `skiper52` (HoverExpand_001) or `skiper47` (Carousel_001)
- **Featured**: `skiper16` or `skiper17` (Sticky cards)
- **Video Demo**: `skiper67` (Video player)

### Skills & Stats Section
- **Counters**: `skiper37` (AnimatedNumber_004 for counting stats on scroll)
- **Tech Stack**: `skiper31` (CharacterV2/V3 with tech logos)

### Experience Timeline
- **Layout**: `skiper53` (HoverExpand_002 vertical expansion)
- **Cards**: `skiper16` (Sticky cards for timeline items)

### Navigation
- **Menu Links**: `skiper58` (TextRoll animation)
- **Footer Links**: `skiper40` (Animated links)
- **Theme Toggle**: `skiper4` (ThemeToggleButton2 or 3)

### Special Effects
- **Scroll Containers**: `skiper41` (ProgressiveBlur for elegant fades)
- **Playful Element**: `skiper39` (CrowdCanvas for unique touch)
- **Development**: `skiper65` (BreakpointIndicator while building)

---

## 🔧 Common Patterns & Best Practices

### 1. Smooth Scrolling with Lenis
Many components use React Lenis for smooth scrolling:

```jsx
import ReactLenis from 'lenis/react';

<ReactLenis root>
  <YourComponent />
</ReactLenis>
```

### 2. Scroll Progress Tracking
Components like skiper16, skiper19, skiper31 use `useScroll`:

```jsx
import { useScroll } from 'framer-motion';

const { scrollYProgress } = useScroll({
  target: targetRef,
  offset: ["start start", "end end"]
});
```

### 3. Viewport-Based Animations
Use `onViewportEnter` for triggering animations:

```jsx
<motion.div
  onViewportEnter={() => animate()}
  onViewportLeave={() => reset()}
>
  {/* Content */}
</motion.div>
```

### 4. Spring Physics
For smooth, natural animations:

```jsx
const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131
};

const x = useSpring(0, SPRING);
```

---

## 📊 Component Complexity Matrix

| Component | Complexity | Setup Time | Performance Impact |
|-----------|------------|------------|-------------------|
| skiper3 | Low | 5 min | Low |
| skiper4 | Low | 5 min | Low |
| skiper16 | Medium | 15 min | Medium |
| skiper17 | High | 20 min | Medium-High |
| skiper19 | Medium | 10 min | Low |
| skiper25 | Medium | 15 min | Low |
| skiper31 | High | 20 min | Medium |
| skiper37 | Medium | 10 min | Low |
| skiper39 | Very High | 30 min | High |
| skiper40 | Low | 5 min | Low |
| skiper41 | Low | 5 min | Low |
| skiper47-49 | Medium | 15 min | Medium |
| skiper52-53 | Medium | 10 min | Low-Medium |
| skiper54 | Medium | 15 min | Medium |
| skiper58 | Low | 5 min | Low |
| skiper61 | Low | 10 min | Low |
| skiper62 | Low | 5 min | Low |
| skiper65 | Very Low | 2 min | Negligible |
| skiper66 | Medium | 10 min | Low |
| skiper67 | High | 25 min | Medium |

---

## 🎯 Quick Start Checklist

- [ ] Install all required dependencies
- [ ] Set up Tailwind CSS configuration
- [ ] Add Lenis smooth scrolling wrapper
- [ ] Test components individually
- [ ] Prepare assets (images, videos, audio)
- [ ] Configure `@/lib/utils` with cn() function
- [ ] Add required shadcn/ui components (carousel for skiper54)
- [ ] Test on multiple devices/browsers
- [ ] Optimize performance (lazy loading, code splitting)

---

## 💡 Tips & Tricks

1. **Lazy Load Heavy Components**: Components like `skiper39` (CrowdCanvas) and `skiper67` (VideoPlayer) should be lazy loaded
2. **Reduce Motion**: Consider adding `prefers-reduced-motion` support
3. **Asset Optimization**: Compress images and videos before using in carousels
4. **Mobile Performance**: Test animations on real mobile devices
5. **Development Mode**: Use `skiper65` (BreakpointIndicator) during development

---

## 🔗 File Structure

All Skiper UI components are located at:
```
src/components/ui/skiper-ui/
  ├── skiper3.jsx
  ├── skiper4.jsx
  ├── skiper16.jsx
  ├── skiper17.jsx
  ├── skiper19.jsx
  ├── skiper25.jsx
  ├── skiper31.jsx
  ├── skiper37.jsx
  ├── skiper39.jsx
  ├── skiper40.jsx
  ├── skiper41.jsx
  ├── skiper47.jsx
  ├── skiper48.jsx
  ├── skiper49.jsx
  ├── skiper52.jsx
  ├── skiper53.jsx
  ├── skiper54.jsx
  ├── skiper58.jsx
  ├── skiper61.jsx
  ├── skiper62.jsx
  ├── skiper65.jsx
  ├── skiper66.jsx
  └── skiper67.jsx
```

---

*Last Updated: October 15, 2025*
*Total Components: 23*
*Ready for Integration into Yitkhee Wong's Portfolio*

