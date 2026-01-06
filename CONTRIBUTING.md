# Contributing to Apprentice Bingo

Thank you for your interest in contributing to Apprentice Bingo! This document provides guidelines and information about contributing to this project.

## 🤝 How to Contribute

We welcome contributions from the community! Here are some ways you can help:

### Report Bugs 🐛

If you find a bug, please open an issue with:
- A clear title and description
- Steps to reproduce the bug
- Expected vs actual behavior
- Screenshots (if applicable)
- Your browser and device information

### Suggest Features 💡

Have an idea for improving the game? Please open an issue with:
- A clear feature description
- Use cases/benefits
- Examples of similar features (if applicable)
- Any implementation ideas you have

### Submit Code ✨

We accept pull requests for:
- Bug fixes
- New features
- Documentation improvements
- Performance enhancements
- Accessibility improvements

## 📋 Development Setup

### Prerequisites
- Node.js 18+
- npm/yarn/pnpm
- Git

### Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/theapprenticebingo.git
   cd theapprenticebingo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Make your changes and test:
   ```bash
   npm run dev
   ```

6. Commit your changes:
   ```bash
   git commit -m "Add some amazing feature"
   ```

7. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a Pull Request

## 📝 Coding Standards

### Code Style
- Use **TypeScript** for all new code
- Follow the existing code formatting (use Prettier)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

### File Organization
- Place components in appropriate directories
- Keep similar functionality together
- Use clear file names

### Example Code Structure

```typescript
'use client'; // Add for client components

import * as React from 'react';
import { useGameStore } from '@/lib/store/game-store';

interface MyComponentProps {
  // Define props here
}

export function MyComponent({ prop1, prop2 }: MyComponentProps) {
  // Component logic here

  return (
    <div>
      {/* JSX here */}
    </div>
  );
}
```

## 🧪 Testing

Before submitting a PR, please:
1. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile and desktop
3. Test all game modes (Line, Full House, Number)
4. Check for console errors
5. Verify responsive design

## 📸 Documentation

If you add a new feature:
1. Update the README if needed
2. Add comments to complex code
3. Update relevant documentation files
4. Add examples if helpful

## 🎨 UI/UX Guidelines

### Design Principles
- Keep the UI clean and intuitive
- Maintain consistency with existing design
- Ensure mobile responsiveness
- Test on different screen sizes
- Consider accessibility (ARIA labels, keyboard navigation)

### Color Guidelines
- Primary: Amber/gold tones
- Secondary: Gray tones
- Background: Dark gradient
- Use Tailwind classes

## 🐛 Bug Report Template

```markdown
**Description**
A clear description of the bug

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What should happen

**Screenshots**
If applicable, add screenshots

**Environment:**
 - OS: [e.g. Windows, macOS]
 - Browser: [e.g. Chrome, Firefox]
 - Device: [e.g. Mobile, Desktop]

**Additional Context**
Add any other context about the problem
```

## 💡 Feature Request Template

```markdown
**Is your feature request related to a problem? Please describe.**
A clear description of what the problem is

**Describe the solution you'd like**
A clear description of what you want to happen

**Describe alternatives you've considered**
Any alternative solutions or features you've considered

**Additional context**
Any other context or screenshots about the feature request
```

## ✅ Pull Request Checklist

Before submitting your PR, please check:
- [ ] Code follows the project's coding standards
- [ ] Tested on multiple browsers
- [ ] Tested on mobile and desktop
- [ ] Documentation updated (if needed)
- [ ] Commit messages are clear and descriptive
- [ ] No console errors or warnings
- [ ] Responsive design maintained

## 🎯 Priority Areas

We're particularly interested in contributions for:
- Accessibility improvements
- Performance optimizations
- Mobile experience enhancements
- New game modes
- Bug fixes
- Documentation

## 💬 Getting Help

If you need help:
- Open an issue with the "question" label
- Check existing issues and discussions
- Read the documentation

## 📜 Code of Conduct

Please be respectful and constructive in all interactions:
- Be welcoming to newcomers
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## 🎉 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Credited in the application

---

**Thank you for contributing to Apprentice Bingo!** 🎮

Made with ❤️ by fans of The Apprentice (UK)
