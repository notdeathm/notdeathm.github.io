# Changelog

All notable changes to the "notdeath" portfolio project.

## [3.0.0] - 2026-05-28

### Added
- **Design System:** Replaced fonts with: Space Grotesk (headings), Inter (body), and JetBrains Mono (monospaced metadata).
- **Background Effects:** Built a low-CPU Canvas-based floating particle engine to simulate atmospheric dust/stars in the Hero section.
- **Aviation Radar Component:** Fully redesigned the simulated ATC radar with actual radar tracks, degree rings (360°, 090°, 180°, 270°), real callsigns (RYR554, RAM404, DTH001) with altitude/speed labels, and a sector control information panel.
- **Micro-Animations:** Implemented cursor-tracking light glow coordinates for repository cards and smooth skill bar expansion on scroll.
- **PWA Capabilities:** Registered the Service Worker in `index.html` and configured cache rules in `sw.js` for offline PWA functionality.
- **Documentation:** Upgraded README with premium aesthetics, added desktop/mobile screenshots, and credited Gemini assistance. Added site favicon.

### Removed
- **Projects:** Removed all references to the NavData application as its development has been permanently halted.

### Changed
- **Branding:** Replaced remaining references to "Death" with "notdeath" in `manifest.json` and document metadata.

### Fixed
- **Service Worker:** Removed non-existent cache paths (`/styles.css`, `/script.js`, FontAwesome) that previously caused service worker installation to fail.

## [2.1.0] - 2026-01-18

### Changed
- **Header:** Replaced typing effect with a static subtitle: "Full Stack Developer • API Specialist".
- **About Me:** Updated bio to include age (16), location (Morocco), and refined professional description.
- **Skills:** Removed progress bars for a cleaner, more minimalist look.
- **Projects:** Removed screenshot images from all project cards to focus on content and typography.

### Fixed
- **Clean up:** Removed unused CSS styles for typing animation, progress bars, and project images.
- **Clean up:** Removed unused JavaScript logic for typing effect and skill animations.

## [2.0.0] - 2026-01-18

### Fixed
- **Critical:** Resolved CSS merge conflicts in `styles.css` that were breaking the layout.
- **Bug:** Fixed missing `.progress-bar` elements in `index.html` that prevented skill animations from working.
- **Bug:** Fixed horizontal scrolling issues on mobile devices caused by overflow.
- **Bug:** Fixed Timeline alignment issues on mobile screens.
- **Security:** Removed inline scripts and consolidated logic into `script.js`.

### Added
- **Feature:** Added a typing text effect in the header ("Full Stack Developer", "API Specialist", etc.).
- **Feature:** Added a "Scroll to Top" button that appears when scrolling down.
- **Accessibility:** Added `aria-label` to all buttons and links for better screen reader support.
- **Accessibility:** Added `width` and `height` attributes to images to prevent Cumulative Layout Shift (CLS).
- **Performance:** Implemented optimized `IntersectionObserver` for scroll animations to reduce main thread load.
- **Performance:** Updated Service Worker (`sw.js`) to cache version 2.

### Improved
- **Code Quality:** Refactored `script.js` into a clean, modular structure with a single entry point.
- **Code Quality:** Organized `styles.css` with proper CSS variables, resets, and grouping.
- **UI:** Enhanced glassmorphism effects and hover states for a more "premium" feel.
- **UI:** Standardized color palette using CSS variables for consistent Dark/Light mode theming.
- **UX:** Improved form validation with real-time feedback.

### Removed
- **Bloat:** Removed redundant inline styles and unused JavaScript functions.
- **Debug:** Removed `console.log` statements from production code.