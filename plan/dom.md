Color : 
#FFD41D 
#FFA240
#D73535
#FF4646
#ffffff
#000000

=================================================
Global fixed overlays (Top-Z Index) :
- Managed by: `src/components/layout/Navbar.tsx`, `CornerNav.tsx`, `Footer.tsx`

top left corner : BTA Globalx logo (image: `public/assets/logo.png`)
top right corner : Social media icons (Facebook, Instagram, Youtube) with "Stay Social" text
bottom left corner : Contact information (+60143646786 | +65 9336 2005 | Email: btaglobalx@gmail.com)
bottom right corner : Advertisements for event registration / nominations / elite membership

Loading screen : 
- Managed by: `src/components/ui/LoadingScreen.tsx` (using `public/assets/btaload-ezgif.gif` or `bta-loading.mp4`)

=================================================
Main Scene/Scroll Architecture:

** GLOBAL CONTROLLER **
- Controller: `src/components/layout/GlobalAnimationWrapper.tsx`
- Behavior: GSAP-based cinematic scene transition. Smooth dissolves/fades to the next section instead of hard vertical scroll.
- Reusable Element: `src/components/ui/Countdown.tsx`
  - Scene 1 (Intro): Spread fully in the center UI (scale 1.0, positioned middle).
  - Scenes 2-5: GSAP morphs it to the top acting as a tiny sticky fixed timer.

=================================================

Scene 1: Intro
# Background : Fullscreen video `public/assets/bta-bg-1.mp4` 
(managed by `src/components/ui/InteractiveBackground.tsx` with glassmorphism overlay mask)

# Files Involved : 
- `src/app/page.tsx` (Main Entry)
- `src/components/ui/HeroHeading.tsx` 
- `src/components/ui/CountdownHero.tsx` -> uses `src/components/ui/Countdown.tsx` (using `public/models/countdown_clock.glb` or `SplitFlap.glb`)

# Cinematic flow / Components : 
1. The countdown blocks scatter and assemble to create the timer.
2. Text layer fades in above the timer: "Event Starts In".
3. Button fades in below timer: "Register Now".
4. Background video plays dynamically.
5. On scroll trigger -> Background falls down, Timer shrinks and jumps to the top, Screen clears for Scene 2.

=================================================

Scene 2: Main Title & Details
# Background : Cinematic dark/elegant gradient or glassmorphism effect fading in from Scene 1
# Files Involved : 
- `src/components/ui/AboutSection.tsx` (Repurposed for Event Details)

# Components :
- Heading: "BTA Globalx 2026: 3rd Anniversary & EXcellence Awards"
- Subheading: "Featuring BTA Globalx Excellence Award 2026"
- Text Info: Mark your calendar: 25 JULY, 2026 | 2:30 PM - 10 PM
- Text Info: Location: @ Sheraton Johor Bahru, Malaysia

=================================================

Scene 3: Location & Event Timeline
# Background : Abstract event texture or dark venue gradient
# Files Involved : 
- `src/components/ui/ScheduleSection.tsx`

# Components : 
- Focus Visuals: Venue image `public/assets/venue.jpeg` alongside timeline.
- Timeline Component: Custom GSAP staggered scroll or revealing custom timeline UI (NOT a basic list).
  - 10:00 AM - 12:00 PM: Opening Ceremony | Wellness Fair 
    (Workshop: Sustainable Leadership / Panel: Next-Gen Entrepreneurs)
  - 12:00 PM - 01:30 PM: Buffet Lunch
  - 02:00 PM - 04:00 PM: Seminar (Branding w/ AI, Accelerate Profits w/ AI)
  - 05:00 PM - 06:30 PM: KWC 2025 Malaysia Final Competition
  - 06:30 PM - 07:00 PM: Anniversary Cake Cutting
  - 07:00 PM - 08:00 PM: Buffet Dinner
  - 08:00 PM - 10:00 PM: Anniversary Celebration | Awards | Lucky Draw
  - 10:00 PM - 10:30 PM: Photoshoot & Closing

=================================================

Scene 4: Awards Selection
# Background : Elite Gold/Dark accent colors (#FFD41D & #000000)
# Files Involved : 
- `src/components/ui/AwardsSection.tsx` (New/Replaces FeatureSection)
- `src/components/ui/TrophyModel.tsx` (New R3F isolated component)
- `src/components/ui/AwardsCarousel.tsx` (New isolated component)

# Components :
- Title: "BTA GLOBALx EXCELLENCE AWARDS 2026 - Nomination Categories"
- 3D Model: Glitching/zapping/shaking Trophy in R3F triggering every 4 seconds via GSAP.
- Carousel: Fully custom chained card shuffling layout.
  - Card 1: BTA Globalx Lifetime Visionary Excellence Award 2026 + info
  - Card 2: BTA Globalx Entrepreneur Achiever Award 2026 + info
  - Card 3: BTA Globalx Inspiring Social Transformation 2026 + info

=================================================

Scene 5: Founder's Message & Vision
# Background : Clean #ffffff or very light gray with minimal accents
# Files Involved : 
- `src/components/ui/FounderSection.tsx` (New/Replaces RegistrationSection)

# Components : 
- Main Quote text block wrapping the Founder's Message: "Two years ago, BTA Globalx began as a spark..."
- Sign-off block at the bottom right: 
  - "With gratitude,"
  - **H.E. Amb. Dr. Sangeeta Biswas. M.D.**
  - Founder of Ayu Herba™ & BTA Globalx