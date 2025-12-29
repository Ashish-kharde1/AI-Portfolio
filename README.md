# AI Engineer Portfolio

A premium, high-performance portfolio website built for a AI Engineer.
**Stack**: Next.js 14, Tailwind CSS, Framer Motion, TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

### Vercel (Recommended)
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and deploy.

### GitHub Pages
To deploy to GitHub Pages, updates `next.config.mjs` to include:
```js
output: 'export',
images: { unoptimized: true }
```
Then run:
```bash
npm run build
```
The static assets will be in `out/`.

## 🎨 Customization
- **Content**: Edit files in `components/` (e.g., `About.tsx`, `Projects.tsx`).
- **Styles**: Modify `tailwind.config.ts` or `app/globals.css`.
- **Colors**: Update the `colors` object in `tailwind.config.ts`.
