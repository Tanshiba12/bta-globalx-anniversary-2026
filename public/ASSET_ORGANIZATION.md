# Asset Organization Guide

## Folder Structure

```
public/
├── section1/                    # Hero/Loading Scene
│   ├── svgs/                   # SVG illustrations (geometric, decorations)
│   ├── images/                 # PNG, JPG, WebP images
│   └── videos/                 # MP4, WebM video files
├── section2/                    # Event Details Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section3/                    # NewsRoom Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section4/                    # Official Video Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section5/                    # Anniversary Timeline Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section6/                    # Register Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section7/                    # Our Journey Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section8/                    # Previous Videos Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section9/                    # Excellence Awards Scene
│   ├── svgs/
│   ├── images/
│   └── videos/
└── shared/
    ├── logo/                   # Logo files (BTA-Logo.gif, alternatives)
    ├── audio/                  # Background music, sound effects
    └── models/                 # 3D models (GLTF, GLB for Three.js)
```

## Asset Guidelines by Section

### Section 1 - Hero/Loading
**Purpose**: Entry scene with logo + title animations
- **SVGs**: Geometric accents, decorative shapes, floating elements
- **Images**: Hero background (optional), accent images
- **Videos**: Hero entrance animation (optional)

### Section 2 - Event Details
**Purpose**: Event information + countdown
- **SVGs**: Accent dividers, icons for date/time/location
- **Images**: Event venue images, maps
- **Videos**: Event promo video (optional)

### Section 3 - NewsRoom
**Purpose**: News masonry cards display
- **SVGs**: News category icons, decorative elements
- **Images**: News card thumbnails, featured images
- **Videos**: News video clips (if applicable)

### Section 4 - Official Video
**Purpose**: Main video player with carousel
- **SVGs**: Play button icons, carousel indicators
- **Images**: Video thumbnails, poster frames
- **Videos**: Official BTA videos, company videos

### Section 5 - Anniversary Timeline
**Purpose**: Interactive timeline with events
- **SVGs**: Timeline nodes, connection lines, event icons
- **Images**: Timeline milestone images
- **Videos**: Timeline event videos (optional)

### Section 6 - Register
**Purpose**: Sponsors showcase + ticket packages
- **SVGs**: Sponsor logos (as SVGs), ticket icons
- **Images**: Sponsor logos (PNG), package images
- **Videos**: Registration call-to-action video (optional)

### Section 7 - Our Journey
**Purpose**: 3D curved gallery + network visualization
- **SVGs**: Network paths, decorative curves
- **Images**: Journey milestone images, gallery cards
- **Videos**: Company journey videos (optional)

### Section 8 - Previous Videos
**Purpose**: Previous years event videos
- **SVGs**: Year labels, decorative elements
- **Images**: Previous event thumbnails, posters
- **Videos**: 2024 & 2025 event highlight videos

### Section 9 - Excellence Awards
**Purpose**: Awards showcase with trophy & categories
- **SVGs**: Trophy illustrations, award icons, category badges
- **Images**: Award ceremony photos, winner photos
- **Videos**: Award ceremony highlight videos (optional)

### Shared Assets
**Logo**: `public/shared/logo/`
- BTA-Logo.gif (main logo)
- BTA-Logo-white.png (alternative)
- BTA-Logo-dark.png (alternative)

**Audio**: `public/shared/audio/`
- cinematic-bg.mp3 (background music, 320kbps, ~3-5MB)
- transition-sound.mp3 (optional transition SFX)
- hover-sound.mp3 (optional UI SFX)

**Models**: `public/shared/models/`
- trophy.gltf or trophy.glb (3D trophy model for Section 9)
- (Other 3D assets)

## Naming Conventions

### Images
```
Format: [section-name]_[element-name]_[variant].extension
Examples:
  section1_hero-bg.jpg
  section3_news-card-01.png
  section7_journey-milestone-2025.png
```

### SVGs
```
Format: [element-type]_[name]_[size].svg
Examples:
  geometric_accent_sm.svg
  timeline_node_lg.svg
  trophy_illustration.svg
```

### Videos
```
Format: [section-name]_[content-type]_[quality].mp4
Examples:
  section1_hero-entrance_1080p.mp4
  section4_official-video_720p.mp4
  section8_previous-2024_1080p.mp4
```

## File Size Recommendations

| File Type | Recommended Size | Max Size | Format |
|-----------|-----------------|----------|--------|
| **Images** | < 200KB | 500KB | JPEG, PNG, WebP |
| **SVGs** | < 50KB | 100KB | SVG |
| **Videos** | < 5MB | 10MB | MP4 (H.264), WebM |
| **Audio** | < 2MB | 5MB | MP3 (320kbps), WAV |
| **3D Models** | < 2MB | 5MB | GLTF, GLB |

## Import Path Examples

### Importing Assets in Components
```typescript
// SVG in Section 1
<Image src="/section1/svgs/geometric_accent.svg" alt="accent" width={100} height={100} />

// Image in Section 3
<Image src="/section3/images/news-card-01.png" alt="news" fill />

// Video in Section 4
<video src="/section4/videos/official-video_1080p.mp4" controls />

// Shared logo
<Image src="/shared/logo/BTA-Logo.gif" alt="BTA Logo" width={300} height={100} />

// Audio
<audio src="/shared/audio/cinematic-bg.mp3" autoPlay loop />
```

## Migration Guide (Old to New)

If you have existing assets in `/public/assets/`, move them like this:

```
/public/assets/BTA-Logo.gif          → /public/shared/logo/BTA-Logo.gif
/public/assets/gallery/dummy*.svg    → /public/section7/svgs/
/public/assets/sponsors/*            → /public/section6/images/
/public/assets/news/*                → /public/section3/images/
/public/assets/videos/*              → Move to appropriate section/videos/
/public/assets/awards/*              → /public/section9/images/
```

## Asset Checklist

- [ ] Create all SVGs (custom illustrations for each section)
- [ ] Organize existing images into section folders
- [ ] Convert/compress videos to appropriate format/size
- [ ] Add background music to `/shared/audio/`
- [ ] Add 3D models (if applicable) to `/shared/models/`
- [ ] Update component imports to use new paths
- [ ] Test all asset loads in browser DevTools
- [ ] Verify file sizes meet recommendations

## Notes

- Use relative paths from `/public/` (e.g., `/section1/svgs/file.svg`)
- Next.js Image component preferred for images (automatic optimization)
- SVGs can be inlined or imported as files (use as needed)
- Keep video quality at 1080p max for web (use H.264 codec)
- Use WebP format for images where possible (better compression)
