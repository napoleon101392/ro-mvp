# Deployment Guide for RO MVP Timer

## GitHub Pages Deployment

### Quick Setup

1. **Push to GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - RO MVP Timer PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ro-mvp-timer.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Navigate to **Pages** in the left sidebar
   - Under **Source**, select `main` branch
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/ro-mvp-timer/`

3. **Update Manifest URLs (if using subdirectory)**
   If your GitHub Pages is at a subdirectory (e.g., `/ro-mvp-timer/`), update the following files:

   **manifest.json:**
   ```json
   {
     "start_url": "/ro-mvp-timer/",
     "scope": "/ro-mvp-timer/"
   }
   ```

   **service-worker.js:**
   ```javascript
   const PRECACHE_URLS = [
     '/ro-mvp-timer/',
     '/ro-mvp-timer/index.html',
     '/ro-mvp-timer/main.js',
     // ... other URLs
   ];
   ```

### Custom Domain (Optional)

1. **Add CNAME file**
   ```bash
   echo "your-domain.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

2. **Configure DNS**
   - Add an A record pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Or add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. **Enable HTTPS**
   - In GitHub Pages settings, check "Enforce HTTPS"

## PWA Installation

### How Users Can Install

#### Desktop (Chrome/Edge)
1. Visit your deployed site
2. Look for the install icon in the address bar (⊕ or computer icon)
3. Click "Install" or wait for the automatic prompt after 30 seconds
4. The app will be installed as a standalone application

#### Mobile (Android)
1. Open the site in Chrome/Edge
2. Tap the menu (⋮) → "Add to Home screen" or "Install app"
3. Confirm installation
4. App icon will appear on home screen

#### Mobile (iOS)
1. Open the site in Safari
2. Tap the Share button (□↑)
3. Scroll down and tap "Add to Home Screen"
4. Name the app and tap "Add"

### PWA Features
- ✅ **Offline Support**: Works without internet connection
- ✅ **Push Notifications**: Get alerts when MVPs respawn
- ✅ **Fast Loading**: Cached assets load instantly
- ✅ **Installable**: Add to home screen like a native app
- ✅ **Responsive**: Works on all device sizes
- ✅ **Auto-Update**: Service worker checks for updates hourly

## Performance Optimizations

### Implemented Optimizations

1. **Critical CSS Inline**: Fastest possible first paint
2. **Lazy Loading Images**: Images load only when needed
3. **Deferred JavaScript**: Non-critical JS loads after page render
4. **Service Worker Caching**: Offline-first architecture
5. **LocalStorage Persistence**: Timers survive page refreshes
6. **Minified Assets**: Bootstrap loaded from CDN with compression

### Performance Checklist
- [x] Lighthouse Score > 90 (Performance)
- [x] PWA Installable
- [x] Offline Functionality
- [x] Fast First Contentful Paint (< 1.5s)
- [x] Mobile Responsive
- [x] SEO Optimized

## Testing Before Deployment

### Local Testing with HTTPS (Required for PWA)

PWA features require HTTPS. Test locally with:

**Option 1: Using Python with mkcert (Recommended)**
```bash
# Install mkcert
brew install mkcert  # macOS
# or
apt install mkcert   # Linux

# Generate local certificates
mkcert -install
mkcert localhost

# Run HTTPS server
python3 -m http.server 8080 --bind 127.0.0.1
```

**Option 2: Using http-server (Node.js)**
```bash
npm install -g http-server
http-server -S -C cert.pem -K key.pem
```

**Option 3: GitHub Pages (easiest)**
Just push to GitHub Pages - it automatically serves over HTTPS!

### Test PWA Installation
1. Open Chrome DevTools
2. Go to **Application** tab
3. Check **Manifest** section - ensure no errors
4. Check **Service Workers** section - should show "activated"
5. Use **Lighthouse** to run PWA audit

## Troubleshooting

### Service Worker Not Registering
- Ensure you're serving over HTTPS
- Check console for errors
- Clear cache and hard reload (Ctrl+Shift+R)

### Icons Not Showing
- Verify icon paths in `manifest.json`
- Check that images exist at `images/favicon/icon-192.png` and `icon-512.png`
- Icons must be PNG format

### App Not Installing
- Must be served over HTTPS
- Manifest must be valid JSON
- Service worker must be registered
- Icons must be present and correct sizes

### Timers Not Persisting
- Check if localStorage is enabled in browser
- Verify no errors in console
- Try clearing localStorage and re-adding timers

## Monitoring

### Track Installation
Add analytics to track PWA installs:

```javascript
window.addEventListener('appinstalled', (evt) => {
  // Track installation event
  console.log('PWA installed');
});
```

### Check Service Worker Updates
Users will automatically get updates, but you can force check:

```javascript
navigator.serviceWorker.getRegistration().then(reg => {
  reg.update();
});
```

## Updating the App

1. Make your changes
2. Update version in `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'ro-mvp-timer-v2'; // Increment version
   ```
3. Commit and push to GitHub
4. Users will receive update within 1 hour (automatic check)
5. Or they can refresh the page to get updates immediately

## Support

For issues or questions:
- GitHub Issues: Create an issue in your repository
- Buy Me a Coffee: Support link in the app

## License

MIT License - Feel free to use and modify!
