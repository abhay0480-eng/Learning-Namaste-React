# Namaste React – Project Setup Guide

## Package Management

- **Package Manager:** Tools like npm help you install and manage packages (e.g., bundlers).
- **Initialize npm:**  
  ```bash
  npm init
  ```
- **Install Packages:**  
  - Dev dependencies (used only during development):  
    ```bash
    npm install -D parcel
    ```
  - Regular dependencies (needed in production):  
    ```bash
    npm install package_name
    ```

## Key Files

- **package.json:** Lists all packages and their generic versions.
- **package-lock.json:** Records the exact versions installed.
- **node_modules:** Contains all installed packages.  
  - **Do not** commit this folder to git; add it to `.gitignore`.
- **.gitignore:** Prevents unwanted files (like `node_modules`) from being tracked by git.

## Versioning

- `^2.15.4` (caret): Updates minor versions automatically.
- `~2.15.4` (tilde): Updates patch versions automatically.

## Bundlers

- **Purpose:** Bundle HTML, CSS, JS for production.
- **Popular Bundlers:** webpack, parcel, vite.
- **Create React App:** Uses webpack by default.

## Running Your App

- **Using Parcel:**  
  ```bash
  npx parcel index.html
  ```
- **npx:** Runs a package without installing it globally.

## Script Tags in HTML

- `<script src="App.js"></script>`  
  - Error: Browser scripts don’t support imports/exports.
- `<script type="module" src="App.js"></script>`  
  - Use `type="module"` for import/export support.

## Parcel Features

- Dev Build & Local Server
- Hot Module Replacement (HMR)
- Fast file watching (C++)
- Caching for faster builds
- Image optimization
- Bundling & compression
- Consistent hashing
- Code splitting
- Differential bundling (old browser support)
- Diagnostics & error handling
- HTTPS
- Tree shaking (removes unused code)
- Separate dev and prod bundles

## Browser Support

- **BrowserList:**  
  Specify supported browsers in `package.json`:
  ```json
  "browserslist": [
    "last 2 Chrome versions",
    "last 2 Firefox versions"
  ]
  ```