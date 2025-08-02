# ReactJS Basics

## 1. What are Props?

**Props** (short for properties) are used to pass dynamic data from one component to another in React. You can think of props as arguments passed to a JavaScript function.

**Example:**

```jsx
<DynamicCard name="xyz" age="23" />
```

Here, `name` and `age` are props. React collects these props into an object and passes them to the component:

```jsx
const DynamicCard = (props) => {
  // Access props.name and props.age
};
```

## 2. Fetching Data from Backend

In most React apps, data is fetched from a backend (usually in JSON format) and used to dynamically render UI components.

## 3. Config-Driven UI

A **config-driven UI** adapts based on configuration data, allowing different user experiences without changing the core code. For example, a food delivery app might show different discounts or banners depending on the user's location or time of day. This is achieved by passing configuration data (from backend or config files) to control which components appear, what text or colors are used, etc.

**Example:**

- In Mumbai, the app shows a discount carousel.
- In Delhi, no carousel is shown.

## 4. The `join` Method

To display an array as a comma-separated string:

```js
const food = ["burger", "pizza", "chinese", "indian"];
food.join(", "); // "burger, pizza, chinese, indian"
```

## 5. The `key` Property in Lists

When rendering lists with `.map()`, always provide a unique `key` prop for each item. This helps React identify which items have changed, added, or removed, and optimize the re-rendering process.

**Why is `key` important?**

- Without `key`, React will re-render all items when a list changes.
- With `key`, React only re-renders the new, updated, or deleted items.

**Example:**

```jsx
{
  restaurants.map((res) => <RestaurantCard key={res.id} {...res} />);
}
```

## 6. Why Use React?

While you can build web apps with plain HTML, CSS, and JavaScript, React provides:

- Easier developer experience
- Less code, more functionality
- Powerful tools for large-scale, production-ready, high-performance apps
- Built-in optimizations for fast rendering

## 7. Export Types in JavaScript/React

- **Default Export**: Used when you export a single value or component per file.
- **Named Export**: Used to export multiple values or components from one file.

**Example:**

```js
// Named export
export const MyComponent = () => { ... }

// Default export
export default App;
```

## 8. React Hooks

**Hooks** are special functions that let you "hook into" React features.

**Most common hooks:**

- `useState()`: Adds state variables to functional components. Updating state causes the component to re-render.
- `useEffect()`: Runs side effects (e.g., fetching data, subscriptions) in your components.

**Example:**

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  // code here runs after every render
}, [count]); // dependency array
```

## 9. React Algorithms

React uses clever algorithms to keep your UI fast and efficient:

- **Reconciliation (React Fiber)**: Efficiently determines what changed in the UI to update only what's necessary.
- **Virtual DOM**: An in-memory representation of the real DOM. React computes changes here before touching the actual DOM, which is slower.
- **Diff Algorithm**: Compares the old Virtual DOM with the new one to find differences, and updates only the changed parts of the real DOM.

---

Feel free to add more details or examples as needed. If you need this in a specific format (Markdown with code blocks, bullet points, etc.) or for a certain audience, let me know!


