# SVG & Premium Asset Sources Guide

## The Problem
You don't need to CREATE custom SVGs from scratch. You need to USE existing quality SVG assets from trusted libraries. Here are the best sources:

---

## 🎨 **Premium Illustration Libraries (FREE)**

### 1. **Unsplash Illustrations**
- **URL**: https://unsplash.com/
- **Type**: Photo + illustration mix
- **Quality**: ★★★★★ Premium
- **Best For**: Hero sections, backgrounds
- **How to Use**: Download SVG/PNG, convert to React component
- **Example**: Search "anniversary", "celebration", "award"

### 2. **Blush**
- **URL**: https://blush.design/
- **Type**: Customizable illustrations
- **Quality**: ★★★★★ Premium
- **Best For**: Branded, cohesive look
- **How to Use**: Customize colors, export as SVG
- **Example Packs**: Celebrations, Awards, Success, Growth

### 3. **OpenDoodles**
- **URL**: https://www.opendoodles.com/
- **Type**: Free hand-drawn style illustrations
- **Quality**: ★★★★ Good
- **Best For**: Friendly, approachable tone
- **How to Use**: Download SVG, use directly
- **Example**: People, celebrations, achievements

### 4. **Undraw**
- **URL**: https://undraw.co/
- **Type**: Open-source illustrations
- **Quality**: ★★★★★ Premium
- **Best For**: Modern, flat design
- **How to Use**: Customize color, export SVG
- **Example**: Search "award", "success", "celebrate"

### 5. **Drawkit**
- **URL**: https://www.drawkit.io/
- **Type**: Fully customizable vector illustrations
- **Quality**: ★★★★★ Premium
- **Best For**: Professional, scalable designs
- **How to Use**: Customize and export

### 6. **Humaaans**
- **URL**: https://www.humaaans.com/
- **Type**: Human figure illustrations
- **Quality**: ★★★★ Good
- **Best For**: People, team, achievement shots
- **How to Use**: Combine parts, export as SVG

---

## 🔄 **Icon Libraries**

### 1. **Heroicons** (Recommended)
- **URL**: https://heroicons.com/
- **Type**: Beautiful hand-crafted SVG icons
- **Quality**: ★★★★★
- **Usage**: `npm install heroicons`
- **Perfect For**: Awards, stars, trophies, checkmarks

### 2. **Phosphor Icons**
- **URL**: https://phosphoricons.com/
- **Type**: Flexible icon design system
- **Quality**: ★★★★★
- **Usage**: `npm install @phosphor-icons/react`

### 3. **Tabler Icons**
- **URL**: https://tabler-icons.io/
- **Type**: 3600+ SVG icons
- **Quality**: ★★★★

---

## 📦 **What You Should DO Instead**

### ❌ DON'T
- Create custom SVGs from scratch (unless you're a designer)
- Use generic placeholder SVGs
- Download random SVGs without checking licenses

### ✅ DO
- **Use Heroicons** for simple icons (trophy, star, award, checkmark)
- **Use Blush** for major illustration sections
- **Use Undraw** for infographics and data
- **Use OpenDoodles** for friendly, casual vibes
- **Combine premade illustrations** to tell your story

---

## 🏆 **Recommended Setup for Your Anniversary Site**

```
Section 1 (Hero):
  → Use bold typography + floating geometric shapes
  → Add subtle background pattern from Blush

Section 2 (About):
  → Use Undraw illustration (growth/teamwork theme)
  → Color-match to your brand

Section 3 (Achievements):
  → Use Heroicons (stars, trophies, checkmarks)
  → Combine with Blush badge illustration

Section 4 (Timeline):
  → Use Blush timeline/milestone pack
  → Add timeline line with CSS

Section 5+ (Videos/Gallery):
  → Use Blush people/celebration illustrations
  → Mix with your own content
```

---

## 📥 **How to Import Heroicons**

```bash
npm install heroicons
```

```tsx
import { TrophyIcon, StarIcon, CheckCircleIcon } from 'heroicons/24/solid';

export default function AwardsSection() {
  return (
    <div className="flex gap-4">
      <TrophyIcon className="w-12 h-12 text-black" />
      <StarIcon className="w-12 h-12 text-black" />
      <CheckCircleIcon className="w-12 h-12 text-black" />
    </div>
  );
}
```

---

## 🎯 **License Check (IMPORTANT)**

All sources above are:
- ✅ Free to use
- ✅ Free for commercial use
- ✅ No attribution required (optional but appreciated)

Always check the license before use.

---

## 💡 **Quick Decision Matrix**

| Need | Best Source |
|------|-------------|
| Trophy/Award icon | Heroicons |
| Growth/Success illustration | Undraw |
| Team/People celebration | Humaaans or OpenDoodles |
| Timeline/Progress visual | Blush |
| Success badge | Blush or Drawkit |
| Confetti/celebration element | OpenDoodles |
| Hand-drawn friendly feel | OpenDoodles |
| Modern flat design | Undraw |

---

## ⚡ **Next Steps**

1. **Go to Blush.design** → Download 2-3 illustrations that match your brand
2. **Export as SVG** → Save to `public/assets/illustrations/`
3. **Convert to React Component** (optional) or use directly as `<img src="/assets/illustrations/...">`
4. **Use Heroicons** for simple icon needs
5. **Combine in sections** with your text and animations

Stop creating custom SVGs. Use professional libraries instead!
