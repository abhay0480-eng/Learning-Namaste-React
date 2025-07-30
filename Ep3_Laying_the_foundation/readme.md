# Namaste React – Foundation Concepts

## npm Scripts in `package.json`

Add scripts to automate tasks:
```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "watch": "parcel watch index.html",
  "format": "prettier --write .",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "prettier": "prettier --check .",
  "prettier:write": "prettier --write ."
}
```

- **Run a script:**  
  ```bash
  npm run <script_name>
  ```
  Example: `npm run start` or `npm run build`

### Common Scripts Explained

| Script           | What it does                                                                 | Why it’s useful / Example                                  |
|------------------|------------------------------------------------------------------------------|------------------------------------------------------------|
| `start`          | Runs Parcel dev server (`parcel index.html`)                                 | Local development (manual browser open)                    |
| `dev`            | Like `start`, but auto-opens browser (if configured)                         | Local development (auto browser open)                      |
| `watch`          | Parcel in watch mode; rebuilds on file changes                               | See live updates as you code                               |
| `build`          | Creates optimized production build                                           | Prepare files for deployment                               |
| `format`         | Formats code with Prettier                                                   | Consistent code style; run before commits                  |
| `lint`           | Checks code for errors/style issues with ESLint                              | Prevents bugs and enforces standards                       |
| `lint:fix`       | Fixes fixable lint errors automatically                                      | Saves time on simple mistakes                              |
| `prettier`       | Checks if code is formatted (does not change files)                          | Useful for CI checks                                       |
| `prettier:write` | Formats code (same as `format`)                                              | Instantly reformat messy code                              |

---

## React Elements & Rendering

- **React Element:**  
  A JavaScript object representing a DOM node.  
  When rendered, it becomes an actual HTML element.

- **Rendering:**  
  `root.render(heading)` replaces all content inside the root `<div>` in your HTML.

---

## JSX (JavaScript XML)

- **What is JSX?**  
  A syntax extension that lets you write HTML-like code in JavaScript.  
  It is NOT HTML, but looks similar.

- **Example:**
  ```js
  // Using React.createElement
  const heading = React.createElement("h1", { id: "heading" }, "Hello India!");

  // Using JSX (easier)
  const heading = <h1 id="heading">Hello India!</h1>;
  ```

- **How it works:**  
  JSX is transpiled (converted) by Babel into `React.createElement` calls, which produce React element objects.

- **Why transpile?**  
  Browsers don’t understand JSX directly. Tools like Babel convert it to JavaScript.

---

## Babel & Parcel

- **Babel:**  
  Transpiles JSX into JavaScript that browsers understand.

- **Parcel:**  
  Bundles your code and uses Babel to transpile JSX before running in the browser.

- **JSX Flow:**  
  JSX → (Babel) → React.createElement → JS Object → (ReactDOM) → HTML Element

---

## React Components

- **Types:**
  - **Class Components:** Older way, uses ES6 classes.
  - **Functional Components:** Modern, uses functions.

- **Functional Component Example:**
  ```js
  function MyComponent() {
    return <h2>Hello from a component!</h2>;
  }
  // or using arrow function
  const MyComponent = () => <h2>Hello from a component!</h2>;
  ```
  > **Note:** Component names should start with a capital letter.

- **What is a Component?**  
  A function that returns a React element (JSX).

---

## Component Composition

- **Definition:**  
  Combining multiple components together.

- **Example:**
  ```js
  const Header = () => (
    <div>
      <Title />
      <HeadingComponent />
    </div>
  );
  ```

---

## Script Comparison Table

| Script | Dev Server | Watches for Changes | Opens Browser | Production Build | Use Case                          |
| ------ | :--------: | :-----------------: | :-----------: | :--------------: | --------------------------------- |
| start  |      ✔     |          ✔          |       ✖       |         ✖        | Local development (manual open)   |
| dev    |      ✔     |          ✔          |       ✔       |         ✖        | Local development (auto open)     |
| watch  |      ✖     |          ✔          |       ✖       |         ✖        | Build/watch files (no server)     |
| build  |      ✖     |          ✖          |       ✖       |         ✔        | Create optimized production files |

---

## Quick Notes

- **reactElement:** An object; becomes an HTML element when rendered.
- **JSX:** Easier way to write UI; needs to be transpiled.
- **Babel:** Converts JSX to JavaScript.
- **Component:** Function returning JSX; building block of React apps.
- **Composition:** Nesting components for modular code.

---


