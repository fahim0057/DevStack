# 🧱 Dev Stack Builder

A responsive React website that allows users to explore different web development technologies and build their own personalized development stack.

## 🛠️ Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

---

## ✨ Features

### 1. Explore Technologies
Browse different frontend, backend, database, language, styling, DevOps, and tool technologies with their descriptions, ratings, badges, and difficulty levels.

### 2. Build Your Own Stack
Add technologies to the "Your Stack" section and remove individual technologies or clear the entire stack.

### 3. Responsive Design
The website is fully responsive and works across desktop, tablet, and mobile devices.

---

# ⚛️ React Questions & Answers

##. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or TypeScript. React uses JSX to describe what the UI should look like.

##. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

##. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it to store the technology data and the technologies selected in the user's stack.

##. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to fetch the technology data from the JSON file when the website loads.

##. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and efficiently update the UI when an item is added, removed, or changed.

##. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in the Your Stack section to show an empty message when no technology has been selected.

##. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send information back by calling a function that the parent passes to it as a prop.
