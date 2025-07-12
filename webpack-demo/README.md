# NanoSights + Webpack

This webpack setup shows how to use [NanoSights](https://www.nanosights.dev) in a fully type-safe TypeScript environment.

- 🔗 **Live Demo:** www.webpack.nanosights.dev  
- 🎥 **YouTube Walkthrough:**  
- 📚 **Docs Page:** [Docs](https://www.nanosights.dev/docs)

---

## 📄 Quick Start

```bash
npm install
npm start
```

## 📦 Usage in your own project

### NanoAnalytics

Works out of the box.

#### Install package

```bash
npm install nano-analytics
```

#### Import in your `index.ts`

```ts
import "nano-insights"
```

#### Embed the element in your `index.html`

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

#### Import in your `index.ts`

```ts
import "nano-insights"
```

#### Embed the element in your `index.html`

```html
<nano-insights
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```

### NanoCustom

Requires an extra step for TypeScript to recognize the module.

#### Install package

```bash
npm install nano-custom
```

#### Import in your `index.ts`

```ts
import "nano-custom"
```

#### Embed the element in your `index.html`

```html
<nano-custom
  projectKey="YOUR_PROJECT_KEY"
  userId="USER_ID"
/>
```

#### Configure `tsconfig.json`

Add the following inside your `tsconfig.json`

```json
{
  "compilerOptions": {
    // ...
    "moduleResolution": "nodenext",
    "paths": {
      "nano-custom": ["node_modules/nano-custom"]
    }
  }
}
```