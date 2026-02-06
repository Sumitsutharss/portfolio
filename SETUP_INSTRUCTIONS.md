# Setup Instructions

## Quick Start (Windows)

1. **Double-click `START.bat`** - This will automatically:
   - Install all dependencies
   - Start the development server
   - Open the website in your browser

## Manual Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Step-by-Step Instructions

1. **Navigate to the project folder**
   ```bash
   cd sumit-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   This will install:
   - React & React DOM
   - Three.js & @react-three/fiber
   - GSAP
   - Framer Motion
   - Tailwind CSS
   - React Icons
   - Vite (build tool)

3. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The website will be available at: `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```
   
   Production files will be in the `dist` folder

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Customization

### Update Personal Information

1. **Contact Details** - Edit `src/components/Contact.jsx`
   - Email: Line 26
   - Phone: Line 32
   - Social links: Lines 40-59

2. **Projects** - Edit `src/components/Projects.jsx`
   - Update project details starting at Line 9
   - Add/remove projects from the `projects` array

3. **Skills** - Edit `src/components/Skills.jsx`
   - Modify skill categories starting at Line 10
   - Adjust skill levels (percentage)

4. **Experience** - Edit `src/components/Experience.jsx`
   - Update work experience starting at Line 9

5. **About Section** - Edit `src/components/About.jsx`
   - Modify bio text and stats

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  'neon-cyan': '#00FFD1',    // Change this
  'neon-lime': '#D2FF00',    // Change this
  'dark-bg': '#0a0a0a',      // Change this
}
```

### Add Resume PDF

Place your `resume.pdf` file in the `public` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Port Already in Use
If port 3000 is occupied, Vite will automatically use the next available port.

### Dependencies Not Installing
Try:
```bash
npm cache clean --force
npm install
```

### Build Errors
Make sure you have Node.js v18 or higher:
```bash
node --version
```

## Support

For issues or questions:
- Email: sumitsutharmain@gmail.com
- GitHub: github.com/sumitsuthar

---

**Enjoy your new portfolio website! 🚀**
