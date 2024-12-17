# The Dog's Bone

A Vue 3 website for The Dog's Bone - a vibrant bar and live music venue in the heart of Nelson, NZ. This project serves as the main hub for The Dog's Bone while providing seamless navigation to our family of associated businesses.

## Main Venue Features
- 🍺 Full-service bar
- 🎸 Live music events
- 🎤 Weekly open mic nights
- 🍔 Gourmet burgers and bar snacks
- 📅 Events calendar

## Connected Businesses
This website serves as a central hub, connecting visitors to our family of independent businesses:

### Coming Soon
- 👕 **Vintage Clothing Store & Coffee Shop**
  - Curated vintage fashion
  - In-house coffee service
  - [Website under development]

- 🥬 **Ferments Wholesale**
  - Artisanal kimchi and sauerkraut
  - Wholesale ordering system
  - [Website under development]

- ☕ **Babayaga's Coffee Cart**
  - Mobile coffee service
  - Event bookings
  - [Website under development]

- 🚐 **Kaitangata Catering**
  - Food truck events
  - Catering services
  - [Website under development]

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup
# Clone repository
git clone https://github.com/DaniiBlack/joe-website.git
cd dogs-bone2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

### Project Structure
```
src/
├── components/
│   ├── gallery/    # Image gallery components
│   └── layout/     # Layout components (Header, Footer, etc.)
├── style.css       # Global styles
└── App.vue         # Root component
```

### Tech Stack
- Vue 3 with `<script setup>`
- Vite for build tooling
- Tailwind CSS for styling
- Font Awesome icons

### Dependencies
```json
{
  "dependencies": {
    "vue": "^3.5.12"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.1.4",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.14",
    "vite": "^5.4.10"
  }
}
```

### Color Scheme
```js
colors: {
  primary: '#EE1133',    "red"
  secondary: '#000000',   "black"
  accent: {
    yellow: '#FFD700',    "golden yellow for stars"
    green: '#39FF14'      "bright green"
  }
}
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Project Link: [https://github.com/DaniiBlack/dogs-bone2](https://github.com/DaniiBlack/dogs-bone2)

## Troubleshooting

### Node.js Version Issues
If you encounter errors like `UnhandledPromiseRejectionWarning` or `Unexpected token '??='`, your Node.js version is likely outdated. To fix:

1. Check your Node.js version:
```
node -v
```

2. Install fnm (Fast Node Manager):
// On macOS using Homebrew
```
brew install fnm  
```

// On Linux/WSL
```
curl -fsSL https://fnm.vercel.app/install | bash
```

3. Set up fnm and install Node.js 18:
// Initialize fnm
```
eval "$(fnm env --use-on-cd)"
```

// Install and use Node.js 18
```
fnm install 18
```
```
fnm use 18
```
// Verify the version
```
node -v
```

4. Clean install project dependencies:
```
rm -rf node_modules package-lock.json
```
```
npm install
```

### Benefits of fnm
- Faster performance
- Built with Rust
- Better cross-platform support
- Automatic version switching using `.node-version` or `.nvmrc` files
This should resolve the issues and allow you to run the project.