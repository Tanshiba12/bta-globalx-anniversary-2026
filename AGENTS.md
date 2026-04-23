# AI Agent Instructions - BTA GlobalX Anniversary 2026

## Project Overview

**BTA GlobalX Anniversary 2026** is a premium celebration website showcasing an anniversary and awards event. It's a **single-page scrolling experience** with 9 sequential sections, featuring sophisticated animations, video content, and a countdown timer.

- **Event**: 25 JULY 2026, 2:30 PM - 10 PM at Sheraton Johor Bahru, Malaysia
- **Framework**: Next.js 14 + React 18 + TypeScript
- **Animation**: GSAP (primary), Three.js (prepared, not yet active), tsparticles (available)
- **Styling**: Tailwind CSS + inline component styles
- **Current Branch**: `version2` (default: `main`)

---

## Architecture

### Section-Based Design

All content is organized into 9 self-contained sections accessed via smooth scrolling:

```
Section1_Intro           → Countdown + Hero animation
Section2_AboutEvent      → Event overview + Timeline
Section3_NewsRoom        → Press release area
Section4_OfficialVideo   → Event video showcase
Section5_AnniversaryTimeline → Schedule details
Section6_RegisterNow     → Registration CTA
Section7_OurJourney      → Organization story
Section8_PreviousVideos  → Video archive
Section9_ExcellenceAwards → Awards showcase + Certificates
```

**Key Pattern**: Each section is a **client component** (`"use client"`) with its own:
- Local state and refs
- GSAP timeline or scroll-triggered animations
- Inline `<style>` tag for component-scoped CSS
- Dynamic import in `src/app/page.tsx`

**Example File**: [src/components/sections/Section1_Intro.tsx](src/components/sections/Section1_Intro.tsx)

### Component Organization

```
src/
├── app/                          # Next.js app router
│   ├── page.tsx                  # Main sections composition
│   ├── layout.tsx                # Root layout (providers, fonts)
│   └── api/                      # API routes (see section-specific endpoints below)
│
├── components/
│   ├── sections/                 # Section components (SectionN_Name.tsx)
│   ├── layout/                   # Header, Footer, etc.
│   ├── ui/                       # Reusable UI (Countdown, VideoBox, ScrollProgress, etc.)
│   └── svg/                      # SVG illustrations (TrophyIllustration, AchievementBadge, etc.)
│
├── scenes/                       # Three.js scene folders (mostly empty, planned for 3D)
│   ├── Scene1_Hero/
│   └── ...Scene9/
│
├── context/                      # Global state & providers
│   ├── GsapContext.tsx           # GSAP plugin registration
│   └── AudioContext.tsx          # Background music control
│
├── hooks/                        # Animation utilities
│   ├── useScrollAnimation.ts     # ScrollTrigger wrapper
│   ├── useParallax.ts            # Parallax effect hook
│   └── useFadeInOnScroll.ts      # Standard fade-in on scroll
│
└── global.d.ts                   # Global type definitions
```

---

## Common Development Workflows

### ✅ Adding a New Section

1. **Create section component:**
   ```typescript
   // src/components/sections/Section10_NewName.tsx
   "use client";
   import { useRef, useState } from "react";
   import gsap from "gsap";
   import { useGSAP } from "@gsap/react";
   
   export default function Section10_NewName() {
     const containerRef = useRef<HTMLDivElement>(null);
     
     useGSAP(() => {
       // Timeline animation setup
       const tl = gsap.timeline();
       tl.to(".element", { opacity: 1, duration: 1 });
     }, { scope: containerRef });
     
     return (
       <section ref={containerRef} className="min-h-screen w-full bg-black">
         <style>{`
           .element { opacity: 0; }
         `}</style>
         {/* Content */}
       </section>
     );
   }
   ```

2. **Register in [src/app/page.tsx](src/app/page.tsx):**
   ```typescript
   const Section10_NewName = dynamic(() => 
     import('@/components/sections/Section10_NewName'),
     { ssr: false }
   );
   
   // In JSX: <Section10_NewName />
   ```

3. **Create scene folder (optional for 3D):**
   ```
   src/scenes/Scene10_NewName/index.tsx
   ```

### ✅ Creating GSAP Animations

**Pattern 1 - Timeline-based (Immediate play on mount):**
```typescript
useGSAP(() => {
  const tl = gsap.timeline({ delay: 0.3 });
  tl.fromTo(".title", 
    { y: 100, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.2 }
  );
  tl.to(".icon", { rotation: 360 }, 0); // 0 = play at start of timeline
}, { scope: containerRef });
```

**Pattern 2 - ScrollTrigger animation (see [src/hooks/useScrollAnimation.ts](src/hooks/useScrollAnimation.ts)):**
```typescript
useScrollAnimation({
  trigger: ".my-section",
  start: "top center",
  scrub: 1,
  animation: (tl) => {
    tl.to(".element", { opacity: 1, y: 0, duration: 1 });
  }
});
```

**Pattern 3 - Parallax effect (see [src/hooks/useParallax.ts](src/hooks/useParallax.ts)):**
```typescript
const ref = useParallax(50); // 50px offset on scroll
<div ref={ref} className="element">Content</div>
```

### ✅ Adding UI Components

1. Create reusable component in `src/components/ui/`:
   ```typescript
   // src/components/ui/CustomButton.tsx
   export interface CustomButtonProps {
     onClick?: () => void;
     children: React.ReactNode;
     className?: string;
   }
   
   export default function CustomButton({ onClick, children, className }: CustomButtonProps) {
     return (
       <button onClick={onClick} className={`px-4 py-2 ${className}`}>
         {children}
       </button>
     );
   }
   ```

2. Import and use in sections:
   ```typescript
   import CustomButton from '@/components/ui/CustomButton';
   <CustomButton onClick={handleClick}>Click Me</CustomButton>
   ```

### ✅ Adding SVG Illustrations

**New SVG pattern** (see [src/components/svg/](src/components/svg/) examples):
```typescript
// src/components/svg/MyIllustration.tsx
export default function MyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <rect x="10" y="10" width="80" height="80" fill="currentColor" />
    </svg>
  );
}
```

Use with `AnimatedSVG` wrapper for animations: See [docs/CUSTOM_SVGS_GUIDE.md](docs/CUSTOM_SVGS_GUIDE.md) for animation types (fade, scale, rotate, float, etc.)

### ✅ Working with Videos

Use existing UI components:
- `VideoBox.tsx` - Single video display
- `VideoSliderUI.tsx` - Video carousel
- `react-player` for playback (already installed)

### ✅ Adding Fonts

Four Google Fonts already loaded in [src/app/layout.tsx](src/app/layout.tsx):
- `--font-inter` (sans-serif)
- `--font-cinzel` (serif, elegant)
- `--font-playfair` (serif, premium)
- `--font-outfit` (sans-serif, modern, weights 400-900)

Use via CSS variables:
```tsx
<h1 style={{ fontFamily: 'var(--font-playfair)' }}>Title</h1>
// OR
<h1 className="font-playfair">Title</h1> // via Tailwind config
```

### ✅ Audio Integration

Background music controlled via `AudioProvider` (already set up):
```typescript
import { useAudio } from '@/context/AudioContext';

function MyComponent() {
  const { isPlaying, toggleAudio } = useAudio();
  return <button onClick={toggleAudio}>{isPlaying ? 'Mute' : 'Play'}</button>;
}
```

Audio autoplay restricted by browsers—requires user interaction first.

---

## Key Technologies & Patterns

### GSAP (GreenSock Animation Platform)

**Installed Plugins** (registered in [src/context/GsapContext.tsx](src/context/GsapContext.tsx)):
- `ScrollTrigger` - Scroll-based animations
- `Draggable` - Interactive drag animations
- `MotionPathPlugin` - Path-based motion

**Configuration**:
```javascript
gsap.config({ force3D: true, nullTargetAction: "revert" })
```

**Required Hook** for all GSAP animations:
```typescript
import { useGSAP } from "@gsap/react";

useGSAP(() => {
  // Animation code here
}, { scope: containerRef });
```

### Three.js & React Three Fiber

**Status**: Prepared but not yet active (Scene folders are empty placeholders)

**Dependencies installed**:
- `three@0.164.0`
- `@react-three/fiber@8.16.2`
- `@react-three/drei@9.105.6`

**When needed**: 3D content should go in `src/scenes/Scene{N}/index.tsx` files. Examples to follow:
- `ClockModel.tsx` - Available but not yet integrated
- `TrophyModel.tsx` - Available but not yet integrated

### Tailwind CSS

**Custom color palette** (see [tailwind.config.ts](tailwind.config.ts)):
```
bta.gold: "#FFD41D"
bta.orange: "#FFA240"
bta.red: "#FF4646"
bta.red.dark: "#D73535"
```

Use: `className="text-bta-gold"` or `className="bg-bta-orange"`

### Other Notable Libraries

- `lottie-react` - Pre-built animation sequences
- `@tsparticles/react` - Particle effects (installed but unused—available for confetti, etc.)
- `clsx` - Conditional class names
- `dat.gui` - Debug/interactive controls (installed, not used)
- `next-auth` - Authentication (installed, not configured)
- `mongoose` - Database (installed, not configured)

---

## API Routes

**Current API endpoints referenced but not all implemented**:

```
GET /api/section1-bottom-left      → Section1 fetches images (implementation needed)
GET /api/section1-bottom-right     → Section1 fetches images (implementation needed)
```

**Pattern for new endpoints**:
```typescript
// src/app/api/section-data/route.ts
export async function GET(req: Request) {
  return Response.json({ 
    data: [...] 
  });
}
```

---

## Important Considerations

### 🔴 Known Gaps

1. **Three.js Not Active** - Scene folders exist but are empty. 3D rendering not yet implemented.
2. **tsparticles Available** - Particle library installed but unused. Ideal for celebratory effects.
3. **API Routes Incomplete** - Section1 API endpoints referenced but not implemented.
4. **No .env Setup Documented** - Hardcoded endpoints; environment config may be needed for production.
5. **Audio Autoplay Policy** - Browsers restrict autoplay without user interaction.

### 🟡 Browser Compatibility

- **Backdrop-filter** (glassmorphic UI) requires modern browser
- **ScrollTrigger** may need polyfills for older browsers
- **force3D: true** GSAP config assumes GPU capability

### 🟡 Performance Notes

- **Multiple inline `<style>` tags** in components - consider consolidation if performance issues arise
- **Dynamic imports** for sections help with initial load
- **Image loading** from API endpoints - monitor network latency

### 🟡 TypeScript

- Strict mode enabled
- Path alias: `@/*` → `./src/*`
- GSAP refs strongly typed (recommended pattern)

---

## Documentation Links

**Reference these before implementing**:

- [docs/SVG_AND_ASSETS_GUIDE.md](docs/SVG_AND_ASSETS_GUIDE.md) - Asset sourcing (don't build SVGs from scratch)
- [docs/CUSTOM_SVGS_GUIDE.md](docs/CUSTOM_SVGS_GUIDE.md) - SVG component patterns and animations
- [plan/plan.md](plan/plan.md) - Content specification for all 9 sections
- [public/ASSET_PATHS.txt](public/ASSET_PATHS.txt) - Asset organization directory structure

---

## Build & Run Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm start        # Run production server
npm run lint     # Run ESLint
```

**Current environment**: Node.js available, working directory set to project root

---

## Quick Reference: File You'll Edit Most Often

1. **[src/app/page.tsx](src/app/page.tsx)** - Section composition and routing
2. **[src/components/sections/Section*_*.tsx](src/components/sections/)** - Section content and animations
3. **[src/components/ui/](src/components/ui/)** - Reusable UI components
4. **[src/app/layout.tsx](src/app/layout.tsx)** - Global providers and fonts
5. **[tailwind.config.ts](tailwind.config.ts)** - Styling customization
6. **[src/app/api/](src/app/api/)** - API endpoints for section data

---

## Tips for Immediate Productivity

✅ Copy existing section pattern when adding new sections
✅ Always wrap GSAP code in `useGSAP` hook with `scope` parameter
✅ Use inline `<style>` tags in components for scoped CSS
✅ Reference existing animations (Section1, Section2) as templates
✅ Import UI components from `src/components/ui/` to avoid duplication
✅ Check [docs/SVG_AND_ASSETS_GUIDE.md](docs/SVG_AND_ASSETS_GUIDE.md) before creating custom SVGs
✅ Use dynamic imports for sections to enable code splitting
✅ All sections must be "use client" components for hooks and animations
✅ Font variables available globally—use `--font-*` CSS variables
✅ Test audio functionality in browser DevTools (autoplay restrictions vary)

---

**Last Updated**: April 2026 | Current Branch: `version2`
