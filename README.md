# Dev-Stack

## Description
Dev-Stack is an interactive web application that allows developers to explore and curate their ideal technology stack. Users can browse various tools and frameworks, selecting one technology per category to build their perfect development environment.

## Technologies Used
- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**


## Features
1. **Interactive Selection:** Browse and select your favorite technologies across different categories to build a custom tech stack.
2. **Real-time Updates:** Instantly view your selected stack with dynamic UI updates.
3. **Manage Stack:** Easily remove individual technologies or clear the entire stack with a single click.

---

## React Questions & Answers

**i. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks very similar to HTML. It is used in React because it make it much easier to write and visualize UI components.

**ii. What is the difference between props and state?**
Props are read only data passed downwards from a parent component to a child component. State is local mutable data managed internally within a component that can change over time.

**iii. What does the `useState` hook do, and where did you use it in this project?**
The `useState` hook allows functional components to store, track, and update their own local state. In this project, it was used in `Data.tsx` to keep track of the technologies the user has currently added to their stack.

**iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
The `useEffect` hook is used to perform side effects in functional components such as fetching external data settin up subscriptions or manually changing the DOM. It is needed to load JSON data so that the data fetching happens after the initial render and doesn't block the UI or cause an infinite rendering loop.

**v. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to keep track of elements in a list. It helps React identify exactly which items have changed been added or been removed, allowing it to efficiently update the DOM without re-rendering the entire list.

**vi. What is conditional rendering? Show one place you used it.**
Conditional rendering is the practice of displaying different UI elements based on a specific condition or state. For example, in `SelectedTech.tsx`, it is used to display an empty stack message when no items are selected:
```tsx
{selectedTech.length === 0 ? (
    <div>No technologies selected</div>
) : (
    selectedTech.map(...)
)}
```

**vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
You pass data from a parent component to a child component using **props**. To send data from a child back to a parent, the parent must pass down a **callback function** as a prop. The child can then call that function, passing the data as arguments which updates the parent's state.
