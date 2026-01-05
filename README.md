# Velox - SaaS Landing Page

A modern, production-ready landing page for Velox, an intelligent automation platform. Built with React 19 and Tailwind CSS v4, featuring glassmorphism design, smooth animations, interactive forms, and a fully responsive layout.

![Velox Landing Page](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![Production Ready](https://img.shields.io/badge/Status-Production_Ready-10b981)

## ✨ Features

### Design
- **Modern Glassmorphism** - Frosted glass effects with blur backdrop
- **Gradient Animations** - Beautiful animated background orbs
- **Dark Mode Optimized** - Carefully crafted color palette
- **Fully Responsive** - Desktop, tablet, and mobile optimized

### Functionality
- **Authentication Modals** - Sign In / Sign Up forms with validation
- **Demo Request Form** - Lead capture with form validation
- **Newsletter Signup** - Email subscription in footer
- **Toast Notifications** - Success, error, and info messages
- **Billing Toggle** - Monthly/Yearly with localStorage persistence
- **Smooth Scroll** - Anchor link navigation

### Production Ready
- **Error Boundary** - Graceful error handling
- **SEO Optimized** - Complete meta tags, OG, Twitter cards
- **Performance** - Preconnect hints, optimized bundle
- **Accessibility** - Semantic HTML, ARIA labels

## 🚀 Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS v4 with custom theme
- **Build Tool:** Vite 7
- **Font:** Inter (Google Fonts)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd landingPage-SaaS

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:5173` |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
landingPage-SaaS/
├── public/
│   └── velox.svg              # Favicon
├── src/
│   ├── components/
│   │   ├── CTA.jsx            # Call-to-action section
│   │   ├── ErrorBoundary.jsx  # Error handling
│   │   ├── Features.jsx       # Features grid
│   │   ├── Footer.jsx         # Footer with newsletter
│   │   ├── Hero.jsx           # Hero with dashboard preview
│   │   ├── HowItWorks.jsx     # 4-step process
│   │   ├── Modal.jsx          # Auth & Demo modals
│   │   ├── Navbar.jsx         # Responsive navigation
│   │   ├── Pricing.jsx        # Pricing cards
│   │   ├── Testimonials.jsx   # Customer reviews
│   │   └── Toast.jsx          # Notification system
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point with ErrorBoundary
├── index.html                 # HTML with meta tags
├── package.json
└── vite.config.js
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
# Or connect GitHub repo for auto-deploy
```

### Docker

```dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Static Hosting

After running `npm run build`, deploy the `dist/` folder to any static hosting:
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting

## 🎨 Customization

### Brand Colors

Edit `src/index.css` in the `@theme` block:

```css
@theme {
    --color-primary-500: #6366f1;  /* Your primary color */
    --color-primary-600: #4f46e5;  /* Darker shade */
    --color-accent-violet: #8b5cf6;
    /* ... */
}
```

### Content

Each section is a separate component. Edit:
- `Hero.jsx` - Main headline and stats
- `Features.jsx` - Feature cards
- `Pricing.jsx` - Plans and prices
- `Testimonials.jsx` - Customer quotes

### Connecting to Backend

Replace the simulated API calls in modals:

```javascript
// In Modal.jsx, replace:
await new Promise(resolve => setTimeout(resolve, 1500));

// With your actual API call:
await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

## 📊 Bundle Size

| File | Size | Gzipped |
|------|------|---------|
| JavaScript | 232 KB | 70 KB |
| CSS | 22 KB | 5 KB |
| **Total** | **254 KB** | **75 KB** |

## ✅ Production Checklist

- [x] Build compiles without errors
- [x] Responsive on all screen sizes
- [x] SEO meta tags configured
- [x] Error boundary implemented
- [x] Form validation working
- [x] Toast notifications functional
- [x] Favicon configured
- [x] Noscript fallback added
- [ ] Connect to real backend API
- [ ] Add analytics (Google Analytics, Mixpanel, etc.)
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Add social sharing images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Tailwind CSS
