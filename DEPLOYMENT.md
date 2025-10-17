# Deployment Guide

This guide covers deploying your Yitkhee Wong Portfolio to various hosting platforms.

## Prerequisites

- Node.js 18+ installed
- Git repository set up
- Production build tested locally

## Build for Production

```bash
# Install dependencies (if needed)
npm install

# Create production build
npm run build

# Test production build locally
npm run preview
```

The build will create a `dist` folder with all optimized assets.

## Deployment Options

### 1. Vercel (Recommended) ⚡

**Why Vercel?**
- Zero-config deployment
- Automatic HTTPS
- Edge network (fast globally)
- Free for personal projects
- Automatic deployments on git push

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite config
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

**Environment Variables:**
If needed, add in Vercel dashboard:
- Settings → Environment Variables
- Add variables from `.env.example`

### 2. Netlify 🎯

**Steps:**

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Custom Domain:**
   - Site settings → Domain management
   - Add custom domain

**Netlify Configuration File:**
Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### 3. GitHub Pages 📄

**Steps:**

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://<username>.github.io/<repo-name>",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: gh-pages branch
   - Save

**Note:** Update base path in `vite.config.js` for GitHub Pages:
```javascript
export default defineConfig({
  base: '/<repo-name>/',
  // ... rest of config
})
```

### 4. Cloudflare Pages ☁️

**Steps:**

1. **Push to GitHub/GitLab**

2. **Deploy on Cloudflare**
   - Visit [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect Git repository
   - Build settings:
     - Framework preset: Vite
     - Build command: `npm run build`
     - Build output: `dist`

3. **Deploy**
   - Click "Save and Deploy"

### 5. Custom Server (VPS/Dedicated)

**Using Nginx:**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist` folder to server**
   ```bash
   scp -r dist/* user@server:/var/www/portfolio
   ```

3. **Nginx Configuration**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/css application/javascript image/svg+xml;
   }
   ```

4. **HTTPS with Let's Encrypt**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Post-Deployment Checklist

- [ ] Test all sections and navigation
- [ ] Verify mobile responsiveness
- [ ] Check theme toggle (dark/light mode)
- [ ] Test smooth scrolling
- [ ] Verify all external links work
- [ ] Check resume download
- [ ] Test contact information links
- [ ] Verify animations work smoothly
- [ ] Run Lighthouse audit
- [ ] Check loading performance
- [ ] Verify SEO meta tags
- [ ] Test social sharing (Open Graph)

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress all images
   - Use WebP format when possible
   - Implement lazy loading

2. **Code Splitting**
   - Already handled by Vite
   - Check bundle size: `npm run build -- --stats`

3. **Remove Unused Code**
   - Check for unused imports
   - Remove console.logs in production

### After Deployment

1. **Run Lighthouse Audit**
   - Open DevTools → Lighthouse
   - Run audit on deployed site
   - Aim for 90+ scores

2. **Monitor Performance**
   - Use Google Analytics (optional)
   - Monitor Core Web Vitals
   - Track loading times

## Domain Configuration

### DNS Settings (for custom domain)

**A Record:**
```
Type: A
Name: @
Value: <hosting-provider-ip>
TTL: Auto
```

**CNAME Record (www):**
```
Type: CNAME
Name: www
Value: <your-domain>.com
TTL: Auto
```

## Troubleshooting

### Build Errors

1. **Clear node_modules and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version**
   ```bash
   node --version  # Should be 18+
   ```

### Routing Issues on Deployment

If you get 404 on refresh:
- Add redirect rules (see Netlify config above)
- Configure server to always serve index.html

### Environment Variables Not Working

- Prefix with `VITE_` for Vite to expose them
- Rebuild after adding new env vars
- Check hosting platform's env var settings

## Rolling Back

### Vercel
- Go to Deployments
- Find previous deployment
- Click "..." → Promote to Production

### Netlify
- Go to Deploys
- Find previous deploy
- Click "Publish deploy"

### GitHub Pages
```bash
git revert HEAD
npm run deploy
```

## Continuous Deployment

### Automatic Deployments

**Vercel/Netlify:**
- Automatic on every git push to main
- Preview deployments for branches
- Production deployment on merge to main

**GitHub Actions (optional):**
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Support

For deployment issues:
- Check hosting provider docs
- Review build logs
- Test locally first
- Ensure all dependencies are in package.json

## Estimated Deployment Times

- Vercel: ~2-3 minutes
- Netlify: ~2-4 minutes
- GitHub Pages: ~5-10 minutes
- Cloudflare Pages: ~3-5 minutes

---

Choose the platform that best fits your needs. For this portfolio, **Vercel** or **Netlify** are recommended for their ease of use and excellent performance.

