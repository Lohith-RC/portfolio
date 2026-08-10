# Lohith R C — Full-Stack & Agentic AI Software Engineer Portfolio

> Single-Page Scroll Architecture featuring a Persistent Video Background Engine, 3D Spatial Project Carousel, R3F Interactive Skills Constellation, iOS Liquid Glass Achievement Drawers, and Vercel Serverless API Routes.

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-8.2-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38BDF8?style=flat&logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat&logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-FF0055?style=flat&logo=framer)
![Groq AI](https://img.shields.io/badge/Groq_API-Llama_3.3_70B-f50537?style=flat)
![Vercel Serverless](https://img.shields.io/badge/Vercel-Serverless_API-000000?style=flat&logo=vercel)

---

## 🌟 Key Architecture & UI Features

### 1. Persistent Scroll-Driven Background Video Engine (`ScrollDrivenVideoBg.jsx`)
- A continuous, full-screen high-definition background video that persists across the entire single-page layout.
- Utilizes Framer Motion `useScroll()` & `useTransform()` to dynamically alter scale ($1.05\times \to 1.20\times$), y-parallax shift, and contrast.
- Fully respects `prefers-reduced-motion: reduce` and features a high-contrast dark overlay floor ($0.65\to 0.92$) for WCAG AA text compliance.

### 2. Interactive 3D Spatial Carousel Flow (`Carousel3D.jsx`)
- Custom 3D cylindrical card ring allowing drag/swipe rotation and keyboard navigation (`←` / `→`).
- Interactive modal deep dives for system architecture diagrams, live interactive project simulators (e.g., LinkFlow Boomerang canvas, AI CRM agent logger, DisasterLens triage), and technical case studies.

### 3. R3F Skills Constellation Shader (`SkillsMatrix.jsx` & `SkillsNetworkBackground.jsx`)
- Built with React Three Fiber, custom GLSL shaders, and instanced mesh particles.
- Dynamic domain-matching pulse wave highlights connecting technology nodes when hovered over.
- Includes `IntersectionObserver` pause-when-offscreen logic to eliminate unnecessary WebGL render loops when out of view.

### 4. iOS Liquid Glass Accordions & 3D Emerging Drawer (`AchievementAccordion.jsx` & `LiquidGlassAchievementDrawer.jsx`)
- Collapsed-by-default primary headers (*Hackathons & State Competitions* & *Verified Industry Certifications*).
- Cascading vertical flow lines connecting cards sequentially.
- 3D physical emerging motion drawer (`scale: 0.82, rotateX: 15deg` $\to$ `scale: 1, rotateX: 0deg`) displaying verified Cisco Cert IDs, Credly badges, and deep-dive technical reviews.

### 5. Secure Serverless AI Assistant & Contact Route (`api/chat.js` & `api/contact.js`)
- Server-side Groq Llama-3.3-70B API route (`/api/chat.js`) ensuring zero client-side API key exposure.
- Serverless contact transmission route (`/api/contact.js`) with complete request state management (`idle → submitting → success/error`) and mailto fallback.

---

## ⚡ Performance & Accessibility Optimizations

- **Dynamic Code-Splitting**: All heavy modals and 3D scenes are lazy-loaded using `React.lazy()` and `<Suspense>`, reducing initial JS bundle size from **1.36 MB** down to **395 kB**.
- **WCAG Accessibility**: Full `aria-label` coverage, screen-reader skip-to-content link (`#main-content`), keyboard focus trapping on modals, and `role="dialog"` attributes.
- **Reduced Motion Support**: Integrated `useReducedMotion()` hooks across background transforms and spatial motion effects.

---

## 🚀 Environment Setup & Deployment

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/Lohith-RC/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=gsk_your_groq_api_key_here
```

### Running Locally
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### Production Build
```bash
npm run build
```

---

## 🏆 Verified Industry Credentials & Achievements

- **Cisco CyberOps Associate** (Cert ID: `54bf4b26-468c-485c-9db9-7293d78ed793`)
- **CCNA: Enterprise Networking, Security, & Automation** (Cert ID: `3dd98841-11ea-4bf5-bb25-cf16407f1430`)
- **CCNA: Switching, Routing, and Wireless Essentials** (Cert ID: `6ab69555-95d0-43f7-b216-9a6fa2c2e924`)
- **CCNA: Introduction to Networks** (Cert ID: `8ae200f5-4018-41b9-bb6e-ca4fec65ace6`)
- **IBM SkillsBuild Artificial Intelligence Badge** ([Credly Verification](https://www.credly.com/badges/df457100-fc07-4c9d-ac06-39a8782794c6))
- **AlgoUniversity Graph Theory Programming Camp** (Mentored by Codeforces Master Manas Kumar Verma)
- **Cisco Cybersecurity Essentials** (Cert ID: `c6ea8224-84e2-4fbe-8068-de054e150bd1`)
- **Python Essentials 1 & 2** (Cert IDs: `95225433-c3ee-4d74-95a8-e9ec964dbc91`, `cefdddc5-937d-4ecd-aa0a-cf6f5ed66012`)
- **Apply AI: Analyze Customer Reviews** (Cert ID: `ee0ca1d0-24bf-4589-ae20-b78ecf4b204b`)
- **Introduction to Data Science** (Cert ID: `07ef8584-7b82-43a1-8d96-a13bceefa750`)

---

## ⚡ Deployment Options

### Vercel (One-Click)
1. Import `Lohith-RC/portfolio` on [Vercel](https://vercel.com/new).
2. Set Environment Variable `GROQ_API_KEY`.
3. Click **Deploy**.

---

## 📄 License

MIT License © 2026 [Lohith R C](https://github.com/Lohith-RC).
