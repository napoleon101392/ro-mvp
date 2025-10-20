[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/napoleon10i)

# 🎮 RO MVP Timer - Ragnarok Online Boss Tracker

A modern, installable Progressive Web App (PWA) for tracking Ragnarok Online MVP respawn times with precision. Features dark/light mode, custom spawn timers, Discord webhook notifications, and offline support.

[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=flat-square)](https://web.dev/progressive-web-apps/)
[![Offline](https://img.shields.io/badge/Offline-Supported-green?style=flat-square)](https://web.dev/offline/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

## ✨ Features

### Core Features
- ⏰ **Real-time MVP Tracking** - Track up to 44 different MVPs with precise countdown timers
- 🌓 **Dark/Light Theme** - Switch between themes with persistent preference
- � **Time Format Options** - Choose between 12-hour (AM/PM) or 24-hour format
- �📱 **Installable PWA** - Install on any device like a native app
- 🔔 **Multiple Notification Types** - Browser notifications, sound alerts, and Discord webhooks
- 💾 **Auto-Save Progress** - Timers persist across page refreshes
- ⚡ **Lightning Fast** - Optimized loading with skeleton screens and lazy loading
- 🌐 **Offline Support** - Works without internet connection
- 🎯 **Custom Spawn Times** - Override default respawn times for specific MVPs

### MVP List (44 Bosses)
Includes all major Ragnarok Online MVPs from classic to renewal servers:
- Bio Lab MVPs (Cecil Damon, Eremes Guile, Howard Alt-Eisen, etc.)
- Classic MVPs (Amon Ra, Baphomet, Dark Lord, Doppelganger, etc.)
- Field MVPs (Eddga, Phreeoni, Tao Gunka, etc.)
- High-tier Bosses (Beelzebub, Ifrit, Valkyrie Randgris, etc.)

## 🚀 Live Demo

Visit the live application: [https://napoleon101392.github.io/ro-mvp/](https://napoleon101392.github.io/ro-mvp/)

## 📱 Installation

### Desktop (Chrome/Edge/Brave)
1. Visit the website
2. Look for the install icon (⊕) in the address bar
3. Click "Install" or wait for the automatic prompt
4. App will launch as standalone application

### Mobile (Android)
1. Open in Chrome/Edge
2. Tap menu (⋮) → "Add to Home screen"
3. Confirm installation
4. App icon appears on home screen

### Mobile (iOS/Safari)
1. Open in Safari
2. Tap Share button (□↑)
3. Select "Add to Home Screen"
4. Name the app and tap "Add"

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with PWA support
- **CSS3** - Custom properties, animations, Bootstrap 5.3.3
- **JavaScript (ES6+)** - Class-based architecture, modern APIs
- **Bootstrap 5.3.3** - Responsive UI framework
- **Service Worker** - Offline functionality and caching
- **LocalStorage API** - Client-side data persistence
- **Notification API** - Browser notifications
- **Web Audio API** - Sound notifications

## 💻 Local Development

### Prerequisites
- Python 3.x (for development server)
- Git

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/napoleon101392/ro-mvp.git
    cd ro-mvp
    ```

2. Start local server:
    ```bash
    python3 -m http.server 8080
    ```

3. Open browser:
    ```
    http://localhost:8080
    ```

### Testing PWA Features

PWA features require HTTPS. For local testing:
- Use `localhost` (automatically trusted)
- Or deploy to GitHub Pages (automatic HTTPS)
- See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions

## 🌐 Deployment

### GitHub Pages (Recommended)

1. Push to your GitHub repository
2. Go to Settings → Pages
3. Select `main` branch as source
4. Your site will be live at: `https://YOUR_USERNAME.github.io/ro-mvp/`

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 📖 Usage

### Adding MVP Timer
1. Select an MVP from the dropdown
2. Enter kill time (or leave empty for current time)
3. Click "Add MVP"
4. Timer appears with countdown and respawn information

### Custom Spawn Times
1. Open Settings (⚙️)
2. Click "Add Custom Spawn Time"
3. Select MVP from dropdown
4. Enter custom spawn time in minutes
5. Custom time will be used for future timers

### Discord Webhook
1. Create a Discord webhook in your server
2. Open Settings (⚙️)
3. Paste webhook URL
4. Receive notifications when MVPs respawn

### Theme Toggle
- Click the moon/sun icon (🌙/☀️) to switch themes
- Preference is saved automatically

### Time Format
- Open Settings (⚙️)
- Choose between:
  - **24-hour format**: 23:45
  - **12-hour format**: 11:45 PM
- All times update immediately after saving

## 🎨 Customization

### Custom Icons
Replace the placeholder icons with your own:

```bash
./generate-icons.sh your-logo.png
```

Or use online tools:
- [RealFaviconGenerator](https://realfavicongenerator.net/)
- [PWA Builder Image Generator](https://www.pwabuilder.com/imageGenerator)

### Modify MVP List
Edit `main.js` and modify the `mvpData` array:

```javascript
{ 
  name: 'MVP Name', 
  location: 'Map Name', 
  respawn: 120, // minutes
  size: 'Large', 
  imageUrl: 'images/monster/MVPName.gif' 
}
```

## 🐛 Troubleshooting

### Service Worker Not Working
- Ensure you're using HTTPS or localhost
- Clear cache and hard reload (Ctrl+Shift+R)
- Check browser console for errors

### Timers Not Persisting
- Verify localStorage is enabled
- Check browser privacy settings
- Try incognito/private mode to test

### App Not Installing
- Must be served over HTTPS
- Check manifest.json is valid
- Verify icons exist and are correct size

See [DEPLOYMENT.md](DEPLOYMENT.md) for more troubleshooting tips.

## 📊 Performance

- ⚡ Lighthouse Score: 95+ (Performance)
- 🎯 First Contentful Paint: < 1.5s
- 📦 Bundle Size: < 100KB (including Bootstrap)
- 🔄 Offline: Fully functional
- 📱 Responsive: All device sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you find this project helpful, consider supporting me:

[![Buy Me a Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/napoleon10i)

## 🙏 Acknowledgments

- Bootstrap team for the excellent UI framework
- Ragnarok Online community for MVP data
- All contributors and users

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

Made with ❤️ for the Ragnarok Online community
