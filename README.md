# 📱 use-mobile

A powerful and flexible React hook for detecting device types and capabilities. Perfect for creating responsive experiences that adapt to phones, tablets, and desktops.

[![npm version](https://badge.fury.io/js/use-mobile.svg)](https://badge.fury.io/js/use-mobile)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

* 🔍 **Smart Device Detection** - Accurately identifies phones, tablets, and desktops
* 👆 **Touch Capability Detection** - Knows when touch interactions are available
* 📏 **Responsive Breakpoints** - Customizable screen size thresholds
* 🔄 **Orientation Change Support** - Handles device rotation seamlessly
* 🧠 **Multiple Detection Strategies** - Uses screen size, touch, and pointer media queries
* 🚀 **SSR Compatible** - Works with server-side rendering out of the box
* 🎯 **TypeScript Ready** - Full type definitions included
* 🌲 **Tree Shakeable** - Only imports what you need
* ⚡ **Lightweight** - Minimal bundle size impact

## 📦 Installation

```bash
npm install use-mobile
```

```bash
yarn add use-mobile
```

```bash
pnpm add use-mobile
```

## 🚀 Quick Start

```tsx
import { useMobile } from 'use-mobile';

function MyComponent() {
  const { isMobile, isPhone, isTablet, deviceType } = useMobile();

  return (
    <div>
      <h1>Device: {deviceType}</h1>
      {isMobile ? (
        <p>Mobile-optimized content</p>
      ) : (
        <p>Desktop content</p>
      )}
    </div>
  );
}
```

## 🎛️ Advanced Usage

### Custom Breakpoints

```tsx
const { isMobile, isPhone, isTablet } = useMobile({
  phoneBreakpoint: 600,    // Phones below 600px
  tabletBreakpoint: 900,   // Tablets between 600-900px
  debounceDelay: 200,      // Delay resize detection by 200ms
});
```

### SSR Support

```tsx
const { isMobile } = useMobile({
  initialDevice: 'desktop', // Assume desktop during SSR
});
```

### Touch Detection

```tsx
const { hasTouch, deviceType } = useMobile({
  detectTouch: true, // Enable touch capability detection
});

if (hasTouch) {
  // Show touch-friendly interface
}
```

## 📚 API Reference

### `useMobile(options?)`

#### Options

| Option               | Type        | Default       | Description                             |
| -------------------- | ----------- | ------------- | --------------------------------------- |
| `phoneBreakpoint`  | `number`  | `768`       | Screen width threshold for phones (px)  |
| `tabletBreakpoint` | `number`  | `1024`      | Screen width threshold for tablets (px) |
| `debounceDelay`    | `number`  | `150`       | Delay for resize event debouncing (ms)  |
| `detectTouch`      | `boolean` | `true`      | Enable touch capability detection       |
| `initialDevice`    | `string`  | `'desktop'` | Initial device type for SSR             |

#### Return Value

| Property       | Type              | Description                                  |
| -------------- | ----------------- | -------------------------------------------- |
| `isMobile`   | `boolean`       | True if device is phone or tablet            |
| `isPhone`    | `boolean`       | True if device is identified as phone        |
| `isTablet`   | `boolean`       | True if device is identified as tablet       |
| `deviceType` | `string`        | Device type: 'phone', 'tablet', or 'desktop' |
| `hasTouch`   | `boolean`       | True if device supports touch                |
| `width`      | `number \| null` | Current screen width in pixels               |

## 🎯 Use Cases

### Conditional Rendering

```tsx
function Navigation() {
  const { isPhone, isTablet } = useMobile();

  if (isPhone) {
    return <MobileMenu />;
  }
  
  if (isTablet) {
    return <TabletMenu />;
  }
  
  return <DesktopMenu />;
}
```

### Dynamic Styling

```tsx
function Card() {
  const { isMobile, width } = useMobile();
  
  const cardStyle = {
    padding: isMobile ? '16px' : '32px',
    fontSize: width < 400 ? '14px' : '16px',
  };

  return <div style={cardStyle}>Content</div>;
}
```

### Touch Interactions

```tsx
function InteractiveElement() {
  const { hasTouch } = useMobile();
  
  return (
    <button
      className={hasTouch ? 'touch-friendly' : 'mouse-optimized'}
      style={{
        minHeight: hasTouch ? '44px' : '32px', // Touch targets should be 44px+
        padding: hasTouch ? '12px' : '8px',
      }}
    >
      Click me
    </button>
  );
}
```

## 🔧 Detection Strategy

The hook uses multiple detection methods for accuracy:

1. **Screen Size Analysis** - Primary detection based on viewport width
2. **Touch Capability** - Checks for touch event support
3. **Pointer Media Queries** - Detects coarse vs fine pointer devices
4. **Hover Support** - Identifies devices without hover capability
5. **Orientation Handling** - Manages landscape/portrait changes

### Edge Cases Handled

* Large tablets (iPad Pro) with desktop-sized screens
* Phones in landscape orientation
* Mobile browsers in "desktop mode"
* Devices with both touch and mouse input
* Browser zoom levels

## 🌐 Browser Support

* Modern browsers (ES2015+)
* React 16.8+ (hooks support)
* Server-side rendering environments
* Mobile Safari, Chrome, Firefox
* Internet Explorer 11+ (with polyfills)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](https://claude.ai/chat/CONTRIBUTING.md) for details.

### Development Setup

```bash
git clone https://github.com/yourusername/use-mobile.git
cd use-mobile
npm install
npm run dev
```

### Running Tests

```bash
npm test
```

## 📄 License

MIT © [Your Name](https://github.com/yourusername)

## 🙏 Acknowledgments

* Inspired by the need for better responsive design tools
* Built with modern React patterns and TypeScript
* Thanks to the community for feedback and contributions

---

**Made with ❤️ for the React community**
