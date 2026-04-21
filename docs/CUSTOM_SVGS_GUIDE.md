# Custom SVG & Scroll Animation System

## Overview

This system provides custom, unique SVG illustrations and sophisticated scroll-based animations to create a premium website experience similar to Sowieso.wero-wallet.eu.

## Components Created

### Custom SVG Illustrations

1. **TrophyIllustration** (`src/components/svg/TrophyIllustration.tsx`)
   - Premium trophy/award illustration
   - Features elegant curves and star accent
   - Perfect for awards and recognition sections

2. **StarburstIllustration** (`src/components/svg/StarburstIllustration.tsx`)
   - Dynamic starburst pattern with multiple layers
   - Symbolizes celebration and excitement
   - Great for highlights and key moments

3. **AchievementBadge** (`src/components/svg/AchievementBadge.tsx`)
   - Detailed medal/badge with ribbon
   - Central star design
   - Represents excellence and achievement

4. **GrowthCurve** (`src/components/svg/GrowthCurve.tsx`)
   - Graph-style illustration showing growth trajectory
   - Includes grid, axis, and data points
   - Visualizes progress and success metrics

5. **TimelineMarker** (`src/components/svg/TimelineMarker.tsx`)
   - Circular timeline indicator with connection points
   - Centers year or milestone number
   - Perfect for timeline sections

### Animation Components

1. **AnimatedSVG** (`src/components/ui/AnimatedSVG.tsx`)
   - Wrapper component for SVG animations
   - Supports multiple animation types
   - Optional scroll trigger integration
   - Animation types: `fade`, `scale`, `rotate`, `float`, `slideUp`, `slideDown`

2. **ScrollSection** (`src/components/ui/ScrollSection.tsx`)
   - Container for scroll-triggered sections
   - Automatically animates on scroll
   - Reusable for consistent page flow

### Hooks

**useScrollAnimation** (`src/hooks/useScrollAnimation.ts`)
- Custom hook for GSAP ScrollTrigger integration
- Simplifies complex scroll animations

## Usage Examples

### Basic SVG with Animation

```tsx
import AnimatedSVG from "@/components/ui/AnimatedSVG";
import TrophyIllustration from "@/components/svg/TrophyIllustration";

export default function MySection() {
  return (
    <AnimatedSVG animationType="scale" className="w-48 h-48 text-black">
      <TrophyIllustration className="w-full h-full" />
    </AnimatedSVG>
  );
}
```

### Scroll Section with Content

```tsx
import ScrollSection from "@/components/ui/ScrollSection";
import AchievementBadge from "@/components/svg/AchievementBadge";
import AnimatedSVG from "@/components/ui/AnimatedSVG";

export default function AchievementSection() {
  return (
    <ScrollSection className="flex items-center gap-12 py-24">
      <AnimatedSVG animationType="fade" className="w-56 h-72">
        <AchievementBadge className="w-full h-full text-black" />
      </AnimatedSVG>
      <div>
        <h2>Our Achievements</h2>
        <p>Description of achievements...</p>
      </div>
    </ScrollSection>
  );
}
```

### Complete Showcase

```tsx
import CustomSVGShowcase from "@/components/sections/CustomSVGShowcase";

export default function Page() {
  return <CustomSVGShowcase />;
}
```

## Animation Types

- **fade**: Simple opacity transition
- **scale**: Grows from 0 to full size
- **rotate**: Spins 180 degrees while fading in
- **float**: Continuous floating motion (infinite)
- **slideUp**: Slides up from bottom
- **slideDown**: Slides down from top

## Customization

All SVGs use `currentColor` which respects the parent's text color. Examples:

```tsx
// Black SVG
<TrophyIllustration className="text-black" />

// Colored SVG
<TrophyIllustration className="text-purple-600" />

// Inherited color
<div className="text-blue-500">
  <TrophyIllustration /> {/* Will be blue */}
</div>
```

## Next Steps

1. Integrate CustomSVGShowcase into main page layout
2. Create additional custom SVGs as needed
3. Add more sections between Section 1 and subsequent sections
4. Implement parallax scrolling for deeper effect
5. Create section-specific animations

## Performance Notes

- SVGs are scalable vector graphics (no rasterization)
- GSAP ScrollTrigger is optimized for performance
- Animations use `transform` and `opacity` for 60fps performance
- All animations are GPU-accelerated where possible
