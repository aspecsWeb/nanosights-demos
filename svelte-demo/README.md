# NanoSights + Svelte

This Svelte example demonstrates how to plug [NanoSights](https://www.nanosights.dev) into a reactive, component-driven UI.

- 🔗 **Live Demo:** www.svelte.nanosights.dev  
- 🎥 **YouTube Walkthrough:**  
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

#### Import in your `main.ts`

```ts
import "nano-analytics"
```

#### Embed the element in your `index.html`

```html
<nano-analytics
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```
