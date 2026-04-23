# Header
**Status**: ✅ IMPLEMENTED

## 1st Row (Contact & Social) - Top Info Bar
- bg color: transparent (inherits from body)
- text color: white
- Layout: flex justify-between items-center
- Column 1 (left):
  - Mail icon + email: `btaglobalx@gmail.com` (with hover effect)
  - Phone icon + number: `+60143646786` (with hover effect)
- Column 2 (right):
  - "Stay Social" text (hidden on mobile)
  - Facebook icon (link)
  - Instagram icon (link)
  - Youtube icon (link)
  - Hover effect: text color changes to yellow-600
- Font: text-xs md:text-sm, tracking-wide, font-medium
- Height: h-10
- All icons from lucide-react

## 2nd Row (Main Navigation) - Logo & Controls
- bg color: transparent
- Layout: flex justify-between items-center
- Column 1 (extreme left):
  - BTA GlobalX logo: `/assets/BTA-Logo.gif` (animated GIF)
  - Responsive sizing: h-20, w-64
  - Logo has glitch animation class
- Column 2 (right side):
  - Audio toggle button (Volume2 / VolumeX icons)
  - Toggles background cinematic music on/off
  - Hover effect: text color changes to yellow-600
  - Controlled by AudioContext global state

## Footer
**Status**: ⏳ NOT YET IMPLEMENTED
- Reserved for future implementation
- Will contain company info, links, copyright



# Section 1: Intro
**Status**: ✅ FULLY IMPLEMENTED - Self-contained with all animations

## Section Layout
- bg: Festive gradient background (purple → pink → yellow) - fixed viewport
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- overflow-hidden

## Row 1: Geometric Decorative Elements
- SVG decorative shapes with float animations (6s ease-in-out infinite)
- Positioned absolutely with opacity control
- Two geometric patterns:
  - Concentric circles (top-left area)
  - Grid/rectangle pattern (top-right area, 100x100)
- Delay variations for staggered animation effect

## Row 2: Main Hero Content Container
- Max-width: max-w-6xl
- Centered content with flex flex-col items-center justify-center
- Space between sections: space-y-8
- Uses CSS custom fonts (Outfit)

### Sub-Row 2.1: Meta Text - Top Label
- Text: "BTA GlobalX Anniversary"
- Style: uppercase, tracking-[0.4em], text-sm md:text-base, font-bold
- Color: black with gradient effect (text-fill)
- Background: Linear gradient (90deg) for shiny animation effect
- Background-size: 200% center
- Animation: Slide in from left with rotation (elastic.out)

### Sub-Row 2.2: Main Title - 3 Lines
- Line 1: "3RD ANNIVERSARY"
  - Font: text-4xl sm:text-4xl md:text-5xl lg:text-6xl, font-black, Outfit
  - Text-shadow: 2px 2px 4px rgba(0,0,0,0.08), 4px 4px 8px rgba(0,0,0,0.06)
  - Characters individually wrapped in spans (.char class)
  - Animation: Vertical slide with unified element animation (y: 100 → 0, scale: 0.8 → 1, rotateX)

- Line 2: "&"
  - Font: text-3xl md:text-4xl, font-light, Outfit
  - Animation: Rotate and scale from center (scale 0 → 1, rotateZ 180 → 0)

- Line 3: "EXCELLENCE AWARDS 2026"
  - Font: text-3xl sm:text-3xl md:text-4xl lg:text-5xl, font-bold, tracking-wide, Outfit
  - Text-shadow: 2px 2px 4px rgba(0,0,0,0.08)
  - Characters individually wrapped in spans (.char class)
  - Animation: Horizontal slide with 3D effect (x: 80 → 0, rotateY: 70 → 0)

- Container gap: space-y-3 md:space-y-6

### Sub-Row 2.3: Subtitle
- Text: "Celebrating three years of transformative impact while honoring the most outstanding achievements across industries."
- Font: text-lg md:text-xl lg:text-2xl, font-playfair, italic, tracking-wide, font-light
- Max-width: max-w-3xl
- Padding: px-4 md:px-0
- Animation: Fade with blur reduction and slight scale (y: 60 → 0, blur: 15px → 0px, scale: 0.95 → 1)

### Sub-Row 2.4: CTA Button
- Text: "Step Into the Spotlight"
- Style: 
  - Border: border-2 border-black/40
  - Padding: px-8 md:px-10 py-4 md:py-5
  - Background: gradient from-black/5 to-black/10 → hover: from-black to-black
  - Text: black → hover: white
  - Font: font-cinzel, tracking-[0.15em], uppercase, text-sm md:text-base, font-bold
  - Shadow: shadow-lg → hover: shadow-2xl
  - Rounded: rounded-sm
  - Hover effects: -translate-y-1, shine gradient animation
- Contains right arrow icon (ArrowRight from lucide-react)
- Animation: Bounce with shadow grow (y: 80 → 0, scale: 0.6 → 1, back.out)

## Row 3: Side Accent Elements
- Two positioned accent elements:
  - Left side: "EST. 2026 – GLOBAL X" (rotated -90deg)
  - Right side: "HONORING EXCELLENCE" (rotated 90deg)
- Hidden on mobile (hidden lg:block)
- Uppercase, tracking-[0.25em], text-[10px], font-semibold, text-black
- Mix-blend-multiply for blending effect
- Continuous floating animation (y: 12, duration: 4, repeat: -1, yoyo)
- Z-index: z-40

## Continuous Animations (All Sections)
- Meta text: Shiny effect cycling every 3 seconds (backgroundPosition: 200% center)
- Title lines: Subtle scale pulse (1 → 1.02 → 1) starting after 2.5s
- Accent elements: Continuous float with staggered delays
- Character hover effects: Wobble animation on mouseenter/mouseleave for title lines

## Gap to Section 2
- Smooth transition using PaperCutTransition component (visual cut effect between sections)
# Section 2: About the Event
**Status**: ✅ FULLY IMPLEMENTED - Self-contained with Countdown inlined

## Section Layout
- bg color: transparent
- text color: white for titles, black for details
- min-h-screen, flex flex-col justify-center items-center
- py-20 md:py-28

## Row 1: Section Title
- Text: "Event Details"
- Font: text-4xl md:text-5xl, font-bold
- Subtitle: "1st August 2026 • Sheraton Johor Bahru, Malaysia"
- Color: text-black
- Animation: Fade in with slide up (opacity: 0 → 1, y: 30 → 0)
- Margin: mb-16

## Row 2: Info Cards Grid (3 columns)
- Layout: grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12
- Background: bg-white/8 with border border-white/30
- Padding: p-8 md:p-10
- Rounded: rounded-lg
- Shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
- Hover effect: bg-white/12, -translate-y-2 (smooth card lift)

### Card 1: Date
- Label: "Date" (text-black text-sm font-semibold uppercase tracking-wide mb-4)
- Main value: "August 1st" (text-white text-4xl font-bold mb-2)
- Sub value: "Friday, 2026" (text-black text-base)
- Animation: Slide in from left (x: -60 → 0, elastic.out)

### Card 2: Time
- Label: "Time" (text-black text-sm font-semibold uppercase tracking-wide mb-4)
- Main value: "2:30 PM" (text-white text-4xl font-bold mb-2)
- Sub value: "Onwards till 10 PM" (text-black text-base)
- Animation: Slide in from top (y: 40 → 0, elastic.out)

### Card 3: Location
- Label: "Location" (text-black text-sm font-semibold uppercase tracking-wide mb-4)
- Main value: "Sheraton" (text-white text-2xl font-bold mb-2)
- Sub value: "Johor Bahru, Malaysia" (text-black text-base)
- Animation: Slide in from right (x: 60 → 0, elastic.out)

## Row 3: Countdown Card (Full Width)
- Layout: Full width with max padding
- Background: bg-white/8 with border border-white/30
- Padding: p-8 md:p-12
- Rounded: rounded-lg
- Shadow: 0 8px 16px rgba(0, 0, 0, 0.2)
- Animation: Scale and fade in (scale: 0.9 → 1, opacity: 0 → 1, back.out)

### Countdown Component (INLINED)
**Target Date**: Dynamically calculated as 58 days + 14 hours + 30 minutes from current time

**Countdown Display Format**:
- Four time units: Days, Hours, Minutes, Seconds
- Layout: flex flex-row flex-wrap gap-15px 35px
- Each unit has a figure display + label

**Figure Animation** (Flip Effect):
- Size: height: 80px, width: 90px
- Background: #020210 (dark)
- Border: 1px solid rgba(255,215,0,0.15)
- Border-radius: 8px
- Color: #FFD700 (gold)
- Font-size: 2.5rem, font-weight: bold
- Box-shadow: 0 4px 20px rgba(139, 30, 139, 0.2)
- Flip animation on value change (duration: 800ms)
- Top and bottom display with backface-visibility: hidden

**Label Styling**:
- Font-size: 1.1rem
- Font-weight: 500
- Color: rgba(255, 255, 255, 0.5)
- Text-transform: uppercase
- Letter-spacing: 2px
- Margin-top: 15px

## GSAP Animations
- Timeline with ScrollTrigger: trigger on section visibility
- Title animation: fade in + slide up (0.8s, power2.out)
- Card animations: staggered entry (0.2s, 0.3s, 0.4s delays)
- Card hover effects: -8px lift with enhanced shadow (0.3s)
- Countdown animation: scale + fade (0.8s, back.out, 0.5s delay)

## Gap to Section 3
- Smooth transition with PaperCutTransition component
# Section 3: NewsRoom Section
**Status**: ✅ IMPLEMENTED - Masonry Layout with News Cards

## Section Layout
- bg color: transparent (rgba(255, 255, 255, 0.5) in original design)
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- py-24, px-6, overflow-hidden

## Row 1: Section Header
- Heading: "NewsRoom" (text-5xl md:text-6xl font-cinzel font-bold text-white drop-shadow-sm)
- Subheading: "Swipe for the latest posts and updates" (font-playfair text-lg text-black)
- Centered layout
- Margin bottom: mb-12

## Row 2: Masonry News Container
- Layout: CSS Column-based masonry
- Desktop (default): column-count: 3
- Tablet: column-count: 2
- Mobile: column-count: 1
- Column gap: 20px
- Margin: 30px auto

### Individual News Cards (8 boxes)
- Display: inline-block, width: 100%
- Padding: 30px
- Margin: mb-20 (between cards)
- Border-radius: 15px
- Box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1)
- Break-inside: avoid (prevent card splitting across columns)

#### Card 1: Featured News (box_one)
- Image: `/assets/news/dummy3.png` (drop-shadow-xl)
- Meta text (text__one): "LATEST UPDATE | BY ADMIN | 18 APR 2026" (uppercase text-sm font-semibold)
- Title (text__two): "BTA AWARDS 2026 NOMINATIONS OPEN!"

#### Card 2: Press Release (box_two)
- Static text: "PRESS RELEASE"

#### Card 3: Early Bird Promo (box_three)
- Text lines: "Early bird registrations end in 24H!" and "Secure your Elite Access"

#### Card 4: Guest Speakers (box_four)
- Main text (text__one): "NEW GUEST SPEAKERS ANNOUNCED" (text-xl leading-tight)
- Sub text (text__two): "POSTED 16 APR 2026" (text-sm text-gray-500 font-normal)

#### Card 5: Anticipation Meter (box_five)
- Label: "Anticipation Level"
- Input: range slider (min: 1, max: 100, defaultValue: 85)
- Labels: "Just Watching" to "Can't Wait!"

#### Card 6: Event Tracks (box_six)
- Label: "Event Tracks"
- Color indicators:
  - color_one: Wellness
  - color_two: Tech
  - color_three: Awards

#### Card 7: Highlights (box_seven)
- Heading: "Highlights"
- Two highlight items:
  1. "GALA DINNER" (text__one) → "An unforgettable evening of networking and dining" (text__two)
  2. "SEMINARS" (text__one) → "Accelerate your profits with AI and leadership tracks" (text__two)

#### Card 8: Call to Action (box_eight)
- Heading: "Join Us"
- Text: "BTA GlobalX"
- Circle element

## Card Styling Details
- Background: White or light color with transparency
- Text wrap: All text responsive and properly sized
- Spacing: Consistent padding and margins
- Visual hierarchy: Titles larger, descriptions smaller

## Responsive Behavior
- Desktop: 3 columns fill horizontally
- Tablet (max-width: 768px): 2 columns
- Mobile (max-width: 480px): 1 column (single vertical stack)

## Gap to Section 4
- Direct fade transition to next section


# Section 4: BTA Official Video
**Status**: ✅ FULLY IMPLEMENTED - Self-contained Video Slider with inlined VideoSliderUI

## Section Layout
- bg color: transparent
- text color: white
- min-h-screen, flex items-center justify-center
- overflow-hidden
- py-24

## Video Slider Component (INLINED)
**Purpose**: Display video content with navigation controls in a cinematic viewer

### Main Video Container
- Max-width: max-w-5xl
- Aspect-ratio: aspect-video
- Background: bg-black/60
- Border: border border-white/20
- Border-radius: 3xl
- Shadow: 0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(255,255,255,0.1)
- Display: flex items-center justify-center
- Hover effect: scale-[1.02] (smooth zoom on hover)
- Transform style: preserve-3d

### Media Content (Video/Image)
- Responsive: w-full h-full object-cover
- Opacity: 95% normal → 100% on hover
- Smooth fade-in animation
- Supports both MP4 videos and image files
- Auto-play, loop, muted, playsinline (for videos)
- Dynamic key management for React re-rendering on slide change

### Info Overlay
- Position: absolute bottom-0
- Background: Gradient from-black/90 via-black/40 to-transparent
- Padding: p-8
- Title: text-3xl md:text-5xl font-bold text-white drop-shadow-lg
- Description: text-gray-200 mt-3 text-lg drop-shadow-md (if available)

### Navigation Arrows
- Position: Left and right sides of video container
- Styling:
  - bg-black/30 → hover: bg-white/20
  - border border-white/20 → hover: border increased opacity
  - rounded-full, p-4
  - Text: white
  - Shadow: 0 0 20px rgba(0,0,0,0.5)
  - Hover effect: scale-110 (zoom on hover)
- SVG Icons: chevron-left and chevron-right
- Disabled state: opacity-0 cursor-default (at first/last slide)
- Smooth transition: all duration-500

### Videos Configuration
**Slide 1**:
- Title: "BTA Official Video"
- Description: "Experience the grand vision."
- Source: `/assets/videos/bg-dummy.mp4`

**Slide 2**:
- Title: "About Company"
- Description: "Discover our journey and impact."
- Source: `/assets/videos/bg-dummy2.mp4`

**Slide 3**:
- Title: "About Founder"
- Description: "Meet the visionary behind it all."
- Source: `/assets/videos/bg-dummy.mp4`

## State Management
- Active slide index: useState(0)
- handleNext: cycles forward through slides (wraps to 0 after last slide)
- handlePrev: cycles backward through slides (wraps to length-1)
- Navigation disabled at boundaries (opacity-0 when at first/last)

## Responsive Layout
- Desktop: Full horizontal layout with arrows visible on sides
- Mobile: Responsive scaling, arrows remain accessible
- Aspect ratio maintained across all breakpoints

## Animation Effects
- Slide transitions: Smooth fade-in/fade-out
- Hover effects: Container scales, arrows brighten
- Info overlay maintains readability with gradient background
- No parallax or complex scroll effects (fixed position)



# Section 5: Anniversary Timeline
**Status**: ✅ IMPLEMENTED - Keyboard-style Interactive Timeline

## Section Layout
- bg color: rgba(237, 237, 237, 0.88)
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- py-24, overflow-hidden

## Timeline Data Structure
8 main events throughout the day:

```
10:00 AM    Opening Ceremony
12:00 PM    Buffet Lunch
2:00 PM     Seminar
5:00 PM     KWC 2025 Final Competition
6:30 PM     Cake Cutting
7:00 PM     Buffet Dinner
8:00 PM     Anniversary Celebration & Awards
10:00 PM    Photoshoot & Closing
```

## Row 1: Timeline Keyboard Keys (Interactive Nodes)
- Layout: Horizontal scrollable/flex row
- Keyboard-style buttons (macOS-inspired design)
- Gap between keys: varies with responsive sizing

### Individual Key Node Styling
- Size:
  - Small: w-16 h-16 (mobile)
  - Medium: sm:w-24 sm:h-24 (tablet)
  - Large: md:w-32 md:h-32 (desktop)
- Background: bg-[#f0f0f2]
- Border-radius: rounded-xl md:rounded-2xl
- Padding: p-2 md:p-4
- Flex: flex-col items-end justify-between
- Overflow: hidden, select-none
- Cursor: pointer
- Transitions: all duration-300

### Key Appearance
- Inset shadow: `inset 0 1px 0 #fff` (top highlight)
- Inset shadow: `inset 0 -1px 0 #c0c0c4` (bottom shadow)
- Inset shadow: `inset 1px 0 0 #d8d8dc` (right edge)
- Inset shadow: `inset -1px 0 0 #d8d8dc` (left edge)
- Outer shadow (unpressed): `0 8px 0 #b2b2be, 0 9px 3px rgba(0,0,0,0.1), 0 14px 28px rgba(0,0,0,0.14)`

### Key Hover/Active States
- Normal: slight lift effect (hover:-translate-y-1)
- Pressed/Active (isActive = true):
  - Translate-y-2 (downward)
  - bg-[#e8e8ea] (darker shade)
  - Shadow: `inset 0 1px 0 #fff, inset 0 -1px 0 #c0c0c4, inset 1px 0 0 #d8d8dc, inset -1px 0 0 #d8d8dc, 0 1px 0 #b2b2be, 0 2px 3px rgba(0,0,0,0.1)`

### Key Content
- Icon (emoji): text-2xl sm:text-3xl md:text-5xl, text-[#a8a8b0] (gray)
  - Time label: text-[8px] sm:text-[10px] md:text-[13px]
  - Uppercase, tracking-wider, font-bold, text-right
  - Color: text-[#a8a8b0]
  - Overflow: hidden, text-clip, whitespace-nowrap

## Icons for Each Event
- 🏁 Opening Ceremony
- 🍽️ Buffet Lunch
- 💡 Seminar
- 🏅 KWC Competition
- 🎂 Cake Cutting
- 🥂 Buffet Dinner
- 🏆 Awards Ceremony
- 📸 Photoshoot & Closing

## Row 2: Detail Info Box (Cloud Style)
- Layout: Centered below or adjacent to timeline
- Background: Light cloud-like shape (rounded corners)
- Display details for selected/hovered node
- Content updates on node hover/click
- Default: First node automatically selected

### Detail Box Content Format
- Time: Bold, large text
- Title: Main event name
- Details list: Bullet points or stacked text
- Smooth fade/slide transitions on content change
- Connected to active node with a subtle line/arrow

## Interactive Behavior
- Hover activation: onMouseEnter triggers selection
- No click required (hover-based as per requirements)
- Smooth state transitions with CSS transitions
- Visual feedback via key appearance change (pressed state)
- Connection line animates to hovered node

## Responsive Behavior
- Desktop: All 8 keys visible in horizontal row
- Tablet: Keys scale down, may need horizontal scroll
- Mobile: Keys stack or scroll horizontally
- Touch-friendly sizing maintained

## Animation Framework
- Key press effect: smooth scale-down and shadow change (300ms)
- State transitions: fade in/out of detail box
- Line animation: smooth path to active node
- Hover states: instant visual feedback

## Note on Implementation
The current implementation provides a fully interactive timeline with:
- Keyboard-inspired visual design
- Hover-based activation (no clicks needed)
- Real-time detail display
- Smooth animations and transitions
- Full responsive support across all breakpoints



# Section 6: Register Now
**Status**: ✅ IMPLEMENTED - Sponsors Scrolling + Ticket Packages

## Section Layout
- bg color: rgba(237, 237, 237, 0.88)
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- py-24, overflow-hidden
- Z-index: z-10

## Row 1: Sponsors & Partners Ribbon
- Width: Full width
- Margin: mt-8 mb-20
- Layout: flex flex-col items-center

### Ribbon Header (Notch Label)
- Text: "Our Sponsors & Partners"
- Style:
  - Position: relative, z-20 (above ribbon)
  - -mb-px (slight overlap)
  - Padding: px-6 py-2
  - Font: text-xs md:text-sm, font-semibold, font-outfit, uppercase, tracking-widest
  - Color: text-gray-900
  - Background: white
  - Border: border-t-2 border-l-2 border-r-2 border-black/20
  - Border-radius: rounded-t-lg

### Ribbon Container
- Background: white
- Border-radius: rounded-xl (all sides)
- Shadow: shadow-lg
- Border: border border-black/20
- Overflow: hidden
- Padding: px-4 py-6

### Fade Edge Effects
- Left gradient: absolute left-0, w-16, bg-gradient-to-r from-white to-transparent
- Right gradient: absolute right-0, w-16, bg-gradient-to-l from-white to-transparent
- Both: z-10 pointer-events-none

### Scrolling Container
- Overflow: hidden
- Width: w-full
- Content: whitespace-nowrap flex items-center justify-center

### Animated Scroll (Marquee)
- Animation: scrollMarquee (30s linear infinite)
- Content repeats 3 times for seamless loop
- Gap between sponsors: gap-6 px-4
- Logos:
  1. `/assets/sponsors/dummy1.svg` - SVG format
  2. `/assets/sponsors/dummy2.svg` - SVG format
  3. `/assets/sponsors/dummy3.png` - PNG format
  4. `/assets/sponsors/dummy3 copy.png` - PNG format

### Logo Styling (each image)
- Height: h-12 md:h-14
- Width: w-auto
- Filter: grayscale (default) → hover: grayscale-0 (remove filter)
- Scale: hover:scale-110 (zoom on hover)
- Drop-shadow: filter drop-shadow-md
- Cursor: pointer
- Transitions: all duration-300

## Row 2: Ticket Registration CTA
- Layout: flex flex-col items-center px-4 md:px-8
- Z-index: z-10

### Main Heading
- Text: "Register Now"
- Font: text-4xl md:text-6xl font-cinzel font-bold
- Color: text-white
- Text-align: center
- Tracking: tracking-wide
- Margin: mb-4
- Span styling: text-white (for "Now" emphasis)

### Ticket Packages Display
- Layout: Responsive grid or flex (to be determined)
- Display packages:
  1. **General Admission** (Demo) - Basic ticket tier
  2. **VIP Admission** (Demo) - Premium tier
  3. **Elite Admission** (Demo) - Top tier

### Package Card Details (Each)
- Card styling: Consistent with design theme
- Information: Price, benefits, features
- CTA button: "Register" or similar call-to-action
- Hover effects: Lift, glow, or scale effect
- Link destination: `/register?package=general|vip|elite`

## Animation Effects
- Sponsors scroll: Continuous smooth marquee (30s loop)
- Hover effects: Smooth transitions on logos and CTA buttons
- Cards may have staggered animation on page load

## Responsive Behavior
- Desktop: Full ribbon visible, all logos shown
- Tablet: Scrolling still works, responsive logo sizing
- Mobile: Compact view, scrolling preserved

## Interactive Features
- Logo hover: Magnify and remove grayscale
- CTA buttons: Click to navigate to registration page
- Smooth scroll animation maintains visual interest

## Notes
- Seamless loop achieved by repeating sponsor list 3x
- Marquee animation defined in global CSS or Tailwind config
- All animations smooth and performance-optimized



# Section 7: Our Journey
**Status**: ✅ IMPLEMENTED - 3D Curved Gallery with Network Background

## Section Layout
- bg color: rgba(237, 237, 237, 0.88)
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- py-24, overflow-hidden

## Row 1: Visionary Statement
- Text (multi-line):
  ```
  A visionary idea
  that started 3 years
  ago now its ignited
  into a global
  transformation.
  ```
- Font: text-3xl md:text-5xl lg:text-7xl font-cinzel font-bold text-white
- Leading: leading-tight
- Layout: text-center
- Margin: mt-10 mb-20
- Z-index: relative z-20 (above network bg)

## Background: Network Threads (Between Row 1 & 2)
- Position: absolute top-1/3 left-0 w-full h-[60vh]
- Pointer-events: none (non-interactive)
- Opacity: 30%
- Z-index: 0 (behind content)
- SVG pattern with animated network

### SVG Network Elements
- Animated curved paths:
  - Path 1: `M-100,250 Q250,50 500,250 T1100,250` (smooth wave)
  - Path 2: `M0,350 Q250,450 500,250 T1000,100` (curved path)
  - Path 3: `M0,150 Q300,100 600,300 T1000,400` (diagonal curve)
  - Path 4: `M200,500 L500,250 L800,0` (straight lines)

- Network nodes (circles):
  - Circle at (250, 150): r=5, fill-black
  - Circle at (500, 250): r=8, fill-black, animate-pulse
  - Circle at (750, 175): r=5, fill-black
  - Circle at (600, 300): r=4, fill-black
  - Circle at (300, 320): r=3, fill-black

- Stroke styling:
  - Color: black with varying opacity (0.2 - 0.6)
  - strokeWidth: 1 to 2
  - Stroke-dasharray: 4,4 (dashed effect for some paths)

## Row 2: 3D Curved Gallery
- Layout: Horizontal scrollable container
- Classes: overflow-x-auto pb-20 pt-10 px-8
- Flex: flex gap-4 md:gap-8
- Snap: snap-x snap-mandatory (for touch/scroll snapping)
- Scrollbar: hidden (hide-scrollbars class)
- Justify: justify-start md:justify-center items-center
- Z-index: z-10 (above network background)
- Style: perspective 2000px (for 3D effect)

### Gallery Card Items
- Data: Array of journey images/milestones
  ```
  Year 2023: "The Beginning" (dummy1.svg)
  Year 2024: "Expansion & Growth" (dummy2.svg)
  Year 2025: "Global Reach" (dummy3.svg)
  Year 2025 (Late): "First Awards Ceremony" (dummy1.svg)
  Year 2026: "The 3rd Anniversary" (dummy2.svg)
  ```

### Individual Card Styling
- Display: flex-none
- Aspect-ratio: Custom clipped/non-square design
- Background: Image with object-cover
- Border-radius: Rounded corners
- Box-shadow: Drop shadow effect
- Cursor: pointer
- Snap-align: snap-center

### Card States
- Default: Standard size and opacity
- Hover: Scale up, brighten, add glow
- Active/Clicked: 3D animate to front
  - Transform: scale-up, z-index top
  - Animation duration: Smooth (400-600ms)
  - Effect: Glassy/frosted glass appearance

### 3D Animation (On Click)
- Clicked card animates to center/front:
  - Initial: offset position in curve
  - Final: Centered and enlarged
  - Translate3d effect for depth
  - Glassmorphism effect (backdrop-blur, transparency)
  - Smooth easing: ease-out or cubic-bezier

## Row 3: "Our Journey" Caption
- Text: "Our Journey"
- Position: Below gallery
- Font: text-2xl md:text-4xl font-cinzel font-bold text-black
- Styling: center-aligned, mt-12
- Z-index: z-20

## CSS Scrollbar Hiding
```css
.hide-scrollbars::-webkit-scrollbar { display: none; }
.hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }
```

## Responsive Behavior
- Desktop: Horizontal scroll with visible cards
- Tablet: Scrolling preserved, cards stack better
- Mobile: Vertical stack option with horizontal scroll
- Touch-friendly snap points on all devices

## Interactive Features
- Click to animate: Click any card to bring to front with 3D animation
- Smooth scrolling: Natural momentum scroll
- Visual feedback: Hover effects on all cards
- Glassmorphic design: Frosted glass effect on active card

## Performance Considerations
- Network SVG optimized with stroke-dasharray
- 3D transforms GPU-accelerated
- Scroll performance optimized with snap-scroll
- Images lazy-loaded or optimized for web 

# Section 8: Previous Years Event Video Previews
**Status**: ✅ FULLY IMPLEMENTED - Self-contained Video Slider (reuses VideoSliderUI logic)

## Section Layout
- bg color: transparent
- text color: white
- min-h-screen, flex flex-col items-center justify-center
- overflow-hidden
- py-24

## Row 1: Section Title (Overlay)
- Position: absolute top-10 left-0 w-full
- Z-index: z-20 pointer-events-none
- Layout: flex justify-center
- Text: "Previous Years" (text-3xl md:text-5xl font-cinzel font-bold text-white)
- Text-transform: uppercase
- Tracking: tracking-[0.2em]

## Row 2: Video Slider (Same as Section 4)
- Identical VideoSliderUI component structure
- Layout: Full viewport video player with navigation
- Identical styling, animations, and controls

### Video Contents (Different from Section 4)
**Slide 1**:
- Title: "2024 Highlight"
- Description: "The dawn of a new era in excellence."
- Source: `/assets/videos/bg-dummy.mp4`

**Slide 2**:
- Title: "2025 Gala Dinner"
- Description: "A night to remember."
- Source: `/assets/videos/bg-dummy2.mp4`

**Slide 3**:
- Title: "Previous Award Ceremony"
- Description: "Recognizing outstanding achievements."
- Source: `/assets/videos/bg-dummy.mp4`

## Component Reusability
- Uses the same VideoSliderUI component structure as Section 4
- Configuration: `sectionTheme="dark"` (dark video player)
- Navigation arrows: Same styling and functionality
- Info overlay: Same gradient and text styling

## Key Differences from Section 4
- Title placement: Overlay at top instead of separate container
- Video content: Historical/previous year videos instead of current event
- Visual hierarchy: Same but with context differentiation

## Interactive Controls
- Previous/Next buttons: Same functionality and styling
- Boundary conditions: Disabled at first and last slides
- Smooth transitions: Video fade-in on slide change
- Hover effects: Scale and brightness changes preserved

## Responsive Design
- Desktop: Full screen video player with side arrows
- Tablet: Responsive sizing maintained
- Mobile: Touch-friendly navigation

## Notes
- Section mirrors Section 4 structure for consistency
- Video player is fully contained within section
- No external dependencies required
- Animations and interactions identical to Section 4


# Section 9: BTA Globalx Excellence Awards 2026
**Status**: ✅ FULLY IMPLEMENTED - Self-contained with AwardsCarousel + TrophyModel inlined

## Section Layout
- bg color: rgba(237, 237, 237, 0.88)
- text color: black
- min-h-screen, flex flex-col items-center justify-center
- py-24, overflow-hidden
- Z-index: z-10

## Row 1: Decorative Trophy Corners
Four animated trophy elements positioned in corners with bounce animations:

### Trophy 1 (Top-Left)
- Position: absolute top-10 left-10
- Animation: animate-[bounce_4s_infinite] (delay: 0s)
- Opacity: 50%
- Size: w-24 h-24
- Background glow: bg-bta-gold/20 rounded-full blur-xl
- Emoji: 🏆 (text-6xl)

### Trophy 2 (Top-Right)
- Position: absolute top-10 right-10
- Animation: animate-[bounce_4s_infinite] (delay: 0.5s)
- Opacity: 50%
- Size: w-24 h-24
- Background glow: bg-bta-gold/20 rounded-full blur-xl
- Emoji: 🏆 (text-6xl)

### Trophy 3 (Bottom-Left)
- Position: absolute bottom-10 left-10
- Animation: animate-[bounce_4s_infinite] (delay: 1s)
- Opacity: 50%
- Size: w-24 h-24
- Background glow: bg-bta-gold/20 rounded-full blur-xl
- Emoji: 🏆 (text-6xl)

### Trophy 4 (Bottom-Right)
- Position: absolute bottom-10 right-10
- Animation: animate-[bounce_4s_infinite] (delay: 1.5s)
- Opacity: 50%
- Size: w-24 h-24
- Background glow: bg-bta-gold/20 rounded-full blur-xl
- Emoji: 🏆 (text-6xl)

## Row 2: Section Title & Badge
- Layout: flex flex-col items-center
- Z-index: z-20
- Margin: mt-10 mb-6

### Main Heading
- Text (multi-line):
  ```
  BTA Globalx
  Excellence Awards 2026
  ```
- Font: text-5xl md:text-7xl font-cinzel font-bold text-white
- Leading: leading-tight

### "Nominations Open" Badge
- Layout: inline-block text-center
- Padding: px-6 py-2
- Border: border border-bta-red
- Background: bg-bta-red/5
- Font: font-cinzel font-bold text-xl tracking-[0.2em] uppercase text-black
- Border-radius: rounded-sm
- Shadow: shadow-sm
- Margin: mb-12

## Row 3: Decorative Border (Cracked Line)
- Position: w-full max-w-4xl mx-auto
- Height: h-12
- Z-index: relative flex items-center justify-center mb-12
- Opacity: 40%

### SVG Path
- ViewBox: 0 0 1000 20
- preserveAspectRatio: none
- Path: Cracked/jagged line design
  - Pattern: `M0,10 L200,10 L220,2 L240,18 L260,10 L500,10 L520,3 L540,15 L560,10 L1000,10`
  - Stroke: black
  - StrokeWidth: 2
  - Fill: none

## Row 4: Nomination Categories
- Layout: flex flex-col items-center
- Max-width: max-w-4xl mx-auto

### Section Title
- Text: "NOMINATION CATEGORIES:"
- Font: text-3xl md:text-4xl font-cinzel font-bold text-black
- Text-transform: uppercase
- Letter-spacing: tracking-widest
- Text-align: center
- Margin: mb-10

### Horizontal Scrollable Cards List
- Layout: overflow-x-auto pb-12 pt-4 px-4
- Flex: flex gap-6
- Snap-scroll: snap-x snap-mandatory
- Scrollbar: hidden (hide-scrollbars class)

### Individual Category Cards (5 items)
**Card 1: Lifetime Visionary**
- Icon: 🌟
- Title: "Lifetime Visionary"
- Description: "Honoring lifelong dedication and impact."

**Card 2: Entrepreneur Achiever**
- Icon: 📈
- Title: "Entrepreneur Achiever"
- Description: "Recognizing rapid growth and innovation."

**Card 3: Social Transformation**
- Icon: 🤝
- Title: "Social Transformation"
- Description: "Awarded for outstanding community impact."

**Card 4: Tech Innovator**
- Icon: 💻
- Title: "Tech Innovator"
- Description: "Pioneering technological advancements."

**Card 5: Green Energy Leader**
- Icon: 🌱
- Title: "Green Energy Leader"
- Description: "Leading the charge in sustainability."

### Card Styling (Each)
- Flex-none: w-[80vw] md:w-[300px]
- Background: white
- Border-radius: rounded-xl
- Shadow: shadow-lg
- Border: border border-gray-200
- Padding: p-8
- Snap-align: snap-center
- Hover effect: -translate-y-2 (lift on hover)
- Transitions: all duration-300

### Card Content
- Icon: text-4xl, text-center, mb-4
- Title: text-xl font-cinzel font-bold text-gray-900 text-center mb-3
- Description: text-gray-600 font-playfair text-center

## Awards Carousel Component (INLINED)
**Status**: Defined but not actively used in current layout (included for future expansion)

### Carousel Features (if activated)
- 3D perspective carousel
- Active slide: Centered, full opacity, normal scale
- Adjacent slides: Offset (±100px), reduced opacity (0.6), scaled (0.8)
- 3D rotation: rotateY ±15deg for adjacent slides
- Navigation: Prev/Next buttons with custom styling
- Smooth transitions: duration-500 ease-out

### Awards Data (3 award types)
1. **Lifetime Visionary Excellence Award 2026**
   - Description: Honors lifelong dedication and leadership impact

2. **Entrepreneur Achiever Award 2026**
   - Description: Recognizes successful entrepreneurs with bold innovation

3. **Inspiring Social Transformation 2026**
   - Description: Celebrates individuals in social work with community impact

## Trophy Model Component (INLINED)
**Status**: Defined but not actively used in current layout (included for future expansion)

### 3D Trophy Specifications
- Framework: React Three Fiber (Canvas-based 3D)
- Lighting:
  - Ambient: intensity 0.5
  - Spot light 1: position (10, 10, 10), angle 0.15, intensity 2, color #FFD41D
  - Spot light 2: position (-10, -10, -10), angle 0.15, intensity 1, color #FFA240
- Environment: city preset
- Orbit controls: No zoom, no pan, no auto-rotate

### Trophy Geometry
- Sphere: Metallic gold (#FFD41D), position (0, 1, 0)
- Cylinder base: Dark color (#222), position (0, -0.5, 0)
- Float animation: speed 2, floatIntensity 0.5
- Rotation: Y-axis spin at delta * 0.8 per frame

### Glitch Effect Animation
- Cycles every 4 seconds with 4s repeatDelay
- Random shake: ±5px on X/Y axis, ±1deg rotation
- Duration: 0.05s per glitch, 5 repeats
- Timeline: gsap.timeline({ repeat: -1, repeatDelay: 4 })

## CSS Helper Classes
```css
.hide-scrollbars::-webkit-scrollbar { display: none; }
.hide-scrollbars { -ms-overflow-style: none; scrollbar-width: none; }
```

## Responsive Behavior
- Desktop: Full layout with all decorative elements visible
- Tablet: Responsive card sizing, scrolling preserved
- Mobile: Compact layout, scrollable categories
- All animations maintained across breakpoints

## Interactive Features
- Trophy bouncing: Continuous looping animations with staggered timing
- Category cards: Hover effect with lift animation
- Scrollable carousel: Touch-friendly snap points
- Nomination navigation: Smooth carousel transitions (when Carousel component activated)



####    ####    ####    ####    ####    ####    
####    CURRENT IMPLEMENTATION STATUS
####    ####    ####    ####    ####    ####    

## Architecture Overview
**Current State**: Individual sections fully implemented with self-contained components
**Transition Type**: Standard vertical scroll (normal DOM flow)
**Animation Framework**: GSAP for per-section animations + scroll-based transitions

## Current Structure
- Each section is dynamically imported in `page.tsx`
- Sections render in standard vertical scroll order
- Global providers: GsapProvider, AudioProvider
- Layout: Header → Sections 1-9 → Footer
- All section components are self-contained (no external UI dependencies)

## Implemented Features
- ✅ Per-section GSAP animations (scroll-triggered)
- ✅ Parallax effects within sections
- ✅ Character/element stagger animations
- ✅ Interactive hover effects
- ✅ Countdown timer (Section 2)
- ✅ Video slider carousel (Sections 4 & 8)
- ✅ Awards carousel (Section 9, inlined)
- ✅ 3D trophy model (Section 9, inlined)
- ✅ Timeline keyboard nodes (Section 5)
- ✅ 3D curved gallery (Section 7)
- ✅ Masonry news layout (Section 3)
- ✅ Sponsors marquee scroll (Section 6)
- ✅ Floating geometric decorations
- ✅ Cinematic audio toggle

## Global State Management
- **GsapContext**: Registers GSAP plugins (ScrollTrigger, Draggable, MotionPathPlugin)
- **AudioContext**: Manages background music toggle
- Providers wrap entire application in layout.tsx

## Per-Section Animations (Currently Implemented)
### Section 1 - Intro
- Character-by-character animation sequences
- Title wobble on hover
- Meta text shiny effect
- Accent element floating
- CTA button bounce

### Section 2 - About Event
- Card slide-in animations
- Card hover lift effects
- Countdown timer flip animations
- Staggered entrance

### Section 3 - NewsRoom
- Masonry layout (no GSAP animations currently)
- Static card display

### Section 4 - Official Video
- Video carousel with prev/next navigation
- Smooth fade transitions between slides
- Hover scale effect

### Section 5 - Anniversary Timeline
- Interactive keyboard-style nodes
- Hover activation without clicking
- Detail box content switching
- Connection line animation

### Section 6 - Register Now
- Marquee scroll animation (30s loop)
- Logo hover grayscale toggle
- Scale effect on hover

### Section 7 - Our Journey
- Network SVG with pulsing nodes
- 3D gallery with click-to-front animation
- Smooth scroll snap

### Section 8 - Previous Videos
- Same video carousel as Section 4
- Title overlay animation

### Section 9 - Excellence Awards
- Trophy bounce animations (4s cycle, staggered delays)
- Category card hover effects
- Carousel smooth transitions (if activated)

## ⏳ FUTURE: Master GSAP Scroll & Animation Plan (When Full-Page Scroll Implemented)

### Phase 1: Architecture Conversion
When transitioning to full-page scroll experience:
1. Wrap main content in `100vh`, `100vw`, `overflow-hidden` container
2. Position each section absolutely with `inset-0`
3. Layer sections on top of each other (z-index based on order)
4. Initialize with Section 1 visible, others hidden

### Phase 2: GSAP Observer Setup
1. Install GSAP Observer plugin (if not using full GSAP)
2. Create MasterScrollController component
3. Maintain state: currentIndex (0-8)
4. Animation lock: prevent rapid-fire transitions

### Phase 3: Cinematic Transitions
When each transition is implemented:
- **0 → 1**: Scale down + wipe effect
- **1 → 2**: Alpha fade + Y-lift
- **2 → 3**: Deep Z push + blur
- **3 → 4**: Drag transition (section exits left)
- **4 → 5**: Elegant fade + stagger
- **5 → 6**: Card sink + emergence from zoom
- **6 → 7**: Reverse drag (top exit)
- **7 → 8**: Dramatic glow fade + lights fade-in

### Phase 4: Internal Scrolling Protection
Sections with horizontal scroll (3, 5, 7, 9) must be configured with:
- `.internal-scroll` or `.hide-scrollbars` class
- GSAP Observer ignore list
- Prevents accidental full-page scroll during internal scrolling

### Current Limitations (vs Full-Page Scroll)
- No smooth section-to-section cinematic transitions
- Standard browser scrollbar behavior
- No animation sequencing between sections
- Scroll position managed by browser, not GSAP

### When to Implement Full-Page Scroll
- User explicitly requests it
- Performance benchmarking confirms capability
- All sections finalized and stable
- Animation timing requirements finalized

## Development Notes
- All animations currently use standard GSAP + ScrollTrigger
- No complex orchestration required (per-section isolation)
- Performance: Good (standard scrolling, optimized animations)
- Accessibility: Standard browser scroll (good for keyboard/screen readers)
- Mobile: Smooth scrolling with touch support

## Files to Modify When Implementing Full-Page Scroll
- `src/app/layout.tsx` - Wrap with MasterScrollController
- `src/app/page.tsx` - Change section layout from flex-col to absolute positioning
- `src/app/globals.css` - Update body/main container styles
- New: `src/components/MasterScrollController.tsx` - GSAP Observer logic
