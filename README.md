# Apprentice Bingo (2026 Edition) 🇬🇧

> **A fan-made interactive bingo game for watching The Apprentice (UK)**

**Live Site:** [apprentice-bingo.tylerbuilds.com](https://apprentice-bingo.tylerbuilds.com)

![Apprentice Bingo](https://img.shields.io/badge/version-2026-orange)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ⚠️ Important Disclaimer

**This is a UNOFFICIAL fan-created project.**

Apprentice Bingo is **not affiliated with, endorsed by, or connected to**:
- The BBC (British Broadcasting Corporation)
- The Apprentice TV show
- Any producers, distributors, or rights holders of The Apprentice
- Lord Sugar Alan Sugar or any of the advisors from the show

This is a **parody/fan work** created for entertainment purposes only. All references to The Apprentice TV show, including character names, quotes, scenarios, and imagery, are used under the principles of **fair use** for:
- Commentary and criticism
- Parody and satire
- Fan appreciation

**The Apprentice** and all related trademarks, copyrights, and intellectual property belong to their respective owners.

---

## 🎮 What is Apprentice Bingo?

Apprentice Bingo is an interactive companion game designed to enhance your viewing experience of *The Apprentice (UK)*. Mark off classic Apprentice moments as they happen during the episode and compete to get bingo first!

### How to Play

1. **Watch** an episode of *The Apprentice (UK)* on TV/BBC iPlayer
2. **Generate** your random bingo card (each card has 9 unique events)
3. **Mark** squares when you see those events happen on screen
4. **Win** by completing:
   - **Line Mode**: Any row, column, or diagonal (3 squares)
   - **Full House Mode**: All 9 squares
   - **Number Mode**: Get as many squares as you set as target
5. **Share** your victory with friends!

---

## ✨ 2026 Edition Features

### Visual Upgrades
- 🎨 **Futuristic Glassmorphism UI** - Modern frosted glass aesthetic
- 🌃 **Dynamic London Skyline Background** - Immersive atmosphere
- ✨ **Neon Glow Effects** - Interactive squares with ambient lighting
- 🎬 **3D Celebration Animations** - Dramatic win sequences with confetti
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop

### Gameplay Features
- 🎲 **Seeded Card Generation** - Share specific cards with friends using seeds
- 🎭 **Animated Advisor Reactions** - Lord Sugar, Karren Brady, Tim Campbell, Claude Littner, Nick Hewer, and Margaret Mountford
- 🔊 **Immersive Sound Effects** - Clicks, wins, and boardroom drama sounds
- 🏆 **Multiple Game Modes** - Line, Full House, and Number modes
- 🔄 **Reset Marks** - Clear your marks without generating a new card
- 🆕 **New Card** - Generate a fresh random card anytime

### Technical Features
- ⚡ **Lightning Fast** - Built on Next.js 14 with App Router
- 🎯 **Type-Safe** - Full TypeScript implementation
- 🎨 **Beautiful UI** - Tailwind CSS + Shadcn UI components
- 🎭 **Smooth Animations** - Framer Motion for fluid interactions
- 💾 **Reliable State** - Zustand for predictable state management

---

## 🛠️ Technology Stack

### Frontend Framework
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS
- **[Shadcn UI](https://ui.shadcn.com/)** - Beautiful component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### State Management
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

### Sound & Effects
- **[Canvas Confetti](https://github.com/catdad/canvas-confetti)** - Celebration effects
- Custom sound effects (professionally designed)

### Deployment
- **[PM2](https://pm2.keymetrics.io/)** - Process manager
- **[Nginx](https://www.nginx.com/)** - Reverse proxy
- **[Let's Encrypt](https://letsencrypt.org/)** - SSL certificates

---

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Clone the Repository

```bash
git clone https://github.com/tylerbuilds/theapprenticebingo.git
cd theapprenticebingo
```

### Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development Mode

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
# Runs on http://localhost:3000
```

### Docker (Optional)

```bash
docker build -t apprentice-bingo .
docker run -p 3000:3000 apprentice-bingo
```

---

## 🎯 Bingo Events

The game includes **79 classic Apprentice moments**, including:

- "Candidate treated unfairly - no vindication"
- "Disastrous pitch"
- "Epic negotiation fail"
- "Lord Sugar makes a pun"
- "PM is a pushover"
- "Taxi gets icy"
- "Double fire!"
- "Casual sexism"
- "Nobody wants to be PM"
- And 70+ more!

*View all events in [`src/lib/data.ts`](src/lib/data.ts)*

---

## 📁 Project Structure

```
theapprenticebingo/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   │   ├── bingo/          # Bingo-specific components
│   │   └── ui/             # Shadcn UI components
│   ├── lib/                # Utility functions
│   │   ├── data.ts         # Bingo events data
│   │   ├── sounds.ts       # Sound effects management
│   │   ├── store/          # Zustand state management
│   │   └── types.ts        # TypeScript types
│   └── public/             # Static assets
│       ├── images/         # Images and animations
│       └── sounds/         # Sound effect files
├── public/                  # Next.js static folder
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🎨 Customization

### Add Your Own Bingo Events

Edit [`src/lib/data.ts`](src/lib/data.ts):

```typescript
export const bingoEvents = [
  "Your custom event here",
  "Another custom event",
  // ... add more
];
```

### Change Color Theme

Edit [`tailwind.config.ts`](tailwind.config.ts) to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### Modify Advisors

Edit [`src/lib/store/game-store.ts`](src/lib/store/game-store.ts) line ~90:

```typescript
const advisors: Advisor[] = ['karen', 'tim', 'claude', 'nick', 'margaret'];
// Add or remove advisors here
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Reporting Bugs
- Open an issue with the bug template
- Include steps to reproduce
- Add screenshots if applicable

### Suggesting Features
- Open an issue with the feature request template
- Explain the use case
- Consider if it fits the game's theme

### Submitting Pull Requests
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Add TypeScript types for all new code
- Test on mobile and desktop
- Document new features in README

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### Summary

You are free to:
- ✅ Use this code for personal or commercial projects
- ✅ Modify the code
- ✅ Distribute the code
- ✅ Sublicense the code

Under the following conditions:
- ⚠️ Include the MIT License notice
- ⚠️ Keep the disclaimer about The Apprentice TV show

---

## 🙏 Credits & Acknowledgments

### Development
- **TylerBuilds** - Original concept and development
- **Claude (Anthropic)** - AI assistance with development

### Assets
- **Gemini 2.5 Flash** - AI-generated 2026 asset pack
- **BBC/The Apprentice** - Source material (used under fair use)

### Technologies
- Built with amazing open-source tools:
  - [Next.js](https://nextjs.org/)
  - [React](https://react.dev/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Zustand](https://zustand-demo.pmnd.rs/)
  - And many more!

---

## 📞 Support & Community

### Get Help
- 🐛 [Report a Bug](https://github.com/tylerbuilds/theapprenticebingo/issues/new?template=bug_report.md)
- 💡 [Request a Feature](https://github.com/tylerbuilds/theapprenticebingo/issues/new?template=feature_request.md)
- 💬 [General Discussion](https://github.com/tylerbuilds/theapprenticebingo/discussions)

### Social Media
- 🌐 **Live Site:** [apprentice-bingo.tylerbuilds.com](https://apprentice-bingo.tylerbuilds.com)
- 📧 **Contact:** Via GitHub issues

---

## 🗺️ Roadmap

### Completed ✅
- [x] 2026 Edition UI overhaul
- [x] 3D celebration animations
- [x] Sound effects system
- [x] Seeded card generation
- [x] Multi-mode gameplay
- [x] Mobile responsive design
- [x] Social sharing buttons

### Future Ideas 💭
- [ ] Multiplayer real-time sync
- [ ] Custom card themes
- [ ] Season-specific event packs
- [ ] Leaderboards
- [ ] Stats tracking
- [ ] Dark/light mode toggle
- [ ] Accessibility improvements

---

## ⭐ Show Your Support

If you enjoy this project:
- ⭐ **Star it on GitHub!**
- 🔄 **Fork it and customize it**
- 📢 **Share it with friends**

---

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/tylerbuilds/theapprenticebingo?style=social)
![GitHub forks](https://img.shields.io/github/forks/tylerbuilds/theapprenticebingo?style=social)
![GitHub issues](https://img.shields.io/github/issues/tylerbuilds/theapprenticebingo)

---

**Made with ❤️ by fans of The Apprentice (UK)**

*Remember: You're fired! 📉*
