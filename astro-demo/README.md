# NanoSights + Astro

This example shows how to use [NanoSights](https://www.nanosights.dev) in a content-optimized site built with Astro.

- 🔗 **Live Demo:** www.astro.nanosights.dev  
- 🎥 **YouTube Walkthrough:** [Watch](https://www.youtube.com/watch?v=ykyXX1HkMXU)
- 📚 **Docs Page:** [Docs](https://www.nanosights.dev/docs)

---

## 📄 Quick Start

```bash
npm install
npm run dev
```

## 📦 Usage in your own project

### NanoAnalytics

Works out of the box.

#### Install package

```bash
npm install nano-analytics
```

#### Import in your `src/layouts/Lauyout.astro`

```ts
import "nano-analytics"
```

#### Embed the element in your `src/layouts/Lauyout.astro`

```html
<nano-analytics
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```

### NanoInsights

Works out of the box.

#### Install package

```bash
npm install nano-insights
```

#### Import in your `src/layouts/Lauyout.astro`

```ts
import "nano-insights"
```

#### Embed the element in your `src/layouts/Lauyout.astro`

```html
<nano-insights
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```

### NanoCustom

Works out of the box.

#### Install package

```bash
npm install nano-custom
```

#### Import in your `src/layouts/Lauyout.astro`

```ts
import "nano-custom"
```

#### Embed the element in your `src/layouts/Lauyout.astro`

```html
<nano-custom
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```

#### Use the track function in `*.astro`

```html
<button onclick="track('Tracks')">Track</button>
```
