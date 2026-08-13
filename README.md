# Kuntrapaku Mounish Kumar - Developer Portfolio Website

A modern, premium, responsive developer portfolio website built for **Kuntrapaku Mounish Kumar**, Information Science Engineering Student specializing in AI, Generative AI, RAG, Agentic AI, and Full-Stack Web Development.

---

## 🚀 Key Features & Highlights

- **Flagship Project Deep Dives**: Detailed breakdown cards and modals for **SehatCare** (Offline Gemma LLM Healthcare App) and **MedAI** (RAG Medical Assistant with Next.js, NestJS, FastAPI, and LangChain).
- **Interactive AI System Architecture**: Step-by-step visual diagram illustrating how AI applications are architected (User Query -> App UI -> Processing -> RAG Retrieval -> LLM -> Response).
- **Categorized Technology Matrix**: Organized skill categories (Programming Languages, AI & GenAI, Web & Backend, Databases, Tools) without artificial percentage bars.
- **Resume Download Integration**: Working PDF resume download button pointing to `/assets/resume/Kuntrapaku_Mounish_Kumar_Resume.pdf`.
- **Responsive & Dark Themed**: Tailored dark theme UI (`#0B0F19`) with glowing cyan/indigo AI accents, glassmorphic cards, and mobile-first responsive menus.
- **Centralized Data Store**: Single file configuration in `src/data/portfolioData.js` for quick link and text updates.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19 + Vite
- **Styling**: Vanilla CSS with custom design tokens, flexbox/grid, and glassmorphism
- **Iconography**: Lucide React
- **Deployment Target**: Vercel / Netlify / GitHub Pages (Static zero-backend frontend)

---

## ⚙️ Local Development Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This command compiles the optimized static assets into the `dist/` directory.

---

## 📝 Customization & Placeholders to Update

All portfolio content is centralized in **`src/data/portfolioData.js`**. Update the following placeholders with your real URLs:

| Location in `portfolioData.js` | Placeholder | What to Replace With |
| :--- | :--- | :--- |
| `personal.github` | `YOUR_GITHUB_USERNAME` | Your actual GitHub profile URL |
| `personal.linkedin` | `YOUR_LINKEDIN_USERNAME` | Your actual LinkedIn profile URL |
| `projects[].links.github` | `YOUR_GITHUB_USERNAME/...` | Your project repository URLs |
| `projects[].links.demo` | `YOUR_PLAYSTORE_APP_ID` / `YOUR_LIVE_DEMO_URL` | Your Play Store testing or live app link |
| `certifications[].link` | `YOUR_CERTIFICATE_URL_HERE` | Your NPTEL & Edureka certificate verification links |

### Replacing Resume PDF
To update your resume PDF:
Replace the file located at `public/assets/resume/Kuntrapaku_Mounish_Kumar_Resume.pdf` with your latest PDF resume.

---

## ☁️ Deployment Guide (Vercel)

This project is optimized for 1-click deployment on Vercel:

1. Push this repository to your **GitHub** account.
2. Log into [Vercel](https://vercel.com).
3. Click **"Add New Project"** -> **"Import Git Repository"**.
4. Select `mounish-portfolio`.
5. Keep default settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**.

Vercel will build and host your portfolio on a global CDN with free SSL HTTPS.
