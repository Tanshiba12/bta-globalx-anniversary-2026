# Asset Migration Guide - PNG Files

## PNG Files to Move Manually

The following PNG files need to be moved from `/public/assets/` to their new section folders:

### From `public/assets/news/` → `public/section3/images/`
```
public/assets/news/dummy3.png
    ↓
public/section3/images/dummy-news-03.png
```

### From `public/assets/sponsors/` → `public/section6/images/`
```
public/assets/sponsors/dummy3.png
    ↓
public/section6/images/dummy-sponsor-03.png

public/assets/sponsors/dummy3 copy.png
    ↓
public/section6/images/dummy-sponsor-03-copy.png
```

## Status

### ✅ Already Moved (SVG files)
- [x] `public/assets/awards/` (3 SVGs) → `public/section9/svgs/`
- [x] `public/assets/gallery/` (3 SVGs) → `public/section7/svgs/`
- [x] `public/assets/news/` (2 SVGs) → `public/section3/svgs/`
- [x] `public/assets/sponsors/` (2 SVGs) → `public/section6/svgs/`

### 🔲 To Move (PNG files)
- [ ] `public/assets/news/dummy3.png` → `public/section3/images/dummy-news-03.png`
- [ ] `public/assets/sponsors/dummy3.png` → `public/section6/images/dummy-sponsor-03.png`
- [ ] `public/assets/sponsors/dummy3 copy.png` → `public/section6/images/dummy-sponsor-03-copy.png`

## New Asset Structure

```
public/
├── section1/
│   ├── svgs/
│   ├── images/
│   └── videos/
├── section2/
├── section3/  ← 2 SVGs + 1 PNG image
│   ├── svgs/
│   │   ├── dummy-news-01.svg
│   │   └── dummy-news-02.svg
│   ├── images/
│   │   └── dummy-news-03.png (MOVE HERE)
│   └── videos/
├── section4-6/
├── section7/  ← 3 SVGs
│   ├── svgs/
│   │   ├── dummy-gallery-01.svg
│   │   ├── dummy-gallery-02.svg
│   │   └── dummy-gallery-03.svg
│   ├── images/
│   └── videos/
├── section9/  ← 3 SVGs
│   ├── svgs/
│   │   ├── dummy-award-01.svg
│   │   ├── dummy-award-02.svg
│   │   └── dummy-award-03.svg
│   ├── images/
│   └── videos/
└── shared/
    ├── logo/
    ├── audio/
    └── models/

Old Assets (to delete after migration):
public/assets/  ← DELETE ENTIRE FOLDER AFTER MOVING PNGs
```

## After completing PNG migration:
Delete `/public/assets/` folder entirely.
