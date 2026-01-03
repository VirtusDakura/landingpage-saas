# Velox - SaaS Landing Page

A modern, responsive landing page for Velox, an intelligent automation platform. Built with React 19 and Tailwind CSS v4, featuring glassmorphism design, smooth animations, and a fully responsive layout.

![Velox Landing Page](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.13-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)

## ✨ Features

- **Modern Design** - Glassmorphism effects, gradient backgrounds, and animated orbs
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Dark Mode Optimized** - Beautiful dark theme with carefully chosen color palette
- **Smooth Animations** - Fade-in effects, hover transitions, and micro-interactions
- **SEO Ready** - Proper meta tags, semantic HTML, and optimized structure
- **Fast Performance** - Built with Vite for lightning-fast development and builds

## 🚀 Tech Stack

- **Framework:** React 19
- **Styling:** Tailwind CSS v4 with custom theme
- **Build Tool:** Vite 7
- **Font:** Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd landingPage-SaaS
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
landingPage-SaaS/
├── public/
│   └── velox.svg          # Favicon
├── src/
│   ├── components/
│   │   ├── CTA.jsx        # Call-to-action section
│   │   ├── Features.jsx   # Features grid section
│   │   ├── Footer.jsx     # Footer with links
│   │   ├── Hero.jsx       # Hero section with dashboard preview
│   │   ├── HowItWorks.jsx # 4-step process section
│   │   ├── Navbar.jsx     # Responsive navigation
│   │   ├── Pricing.jsx    # Pricing cards section
│   │   └── Testimonials.jsx # Customer testimonials
│   ├── App.jsx            # Main app component
│   ├── index.css          # Global styles & Tailwind config
│   └── main.jsx           # App entry point
├── index.html             # HTML template with meta tags
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary 500 | `#6366f1` | Primary actions, accents |
| Primary 600 | `#4f46e5` | Hover states |
| Accent Violet | `#8b5cf6` | Gradients |
| Accent Cyan | `#06b6d4` | Secondary accents |
| Accent Pink | `#ec4899` | Highlights |
| Accent Emerald | `#10b981` | Success states |
| Surface 900 | `#0f172a` | Background |

### Typography

- **Font Family:** Inter
- **Weights:** 300, 400, 500, 600, 700, 800, 900

### Components

- **Glass Cards** - Frosted glass effect with blur backdrop
- **Gradient Text** - Multi-color gradient text effects
- **Animated Orbs** - Floating background decorations
- **Interactive Buttons** - Primary and secondary variants with hover effects

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 640px | Single column layouts |
| Tablet | 640px - 1023px | 2-column grids |
| Desktop | ≥ 1024px | Full multi-column layouts |

## 🔧 Customization

### Changing Brand Colors

Edit the `@theme` block in `src/index.css`:

```css
@theme {
    --color-primary-500: #6366f1;
    --color-primary-600: #4f46e5;
    /* Add more colors as needed */
}
```

### Modifying Content

Each section is a separate component in `src/components/`. Edit the respective file to change:
- Text content
- Feature lists
- Pricing plans
- Testimonials

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using React and Tailwind CSS
