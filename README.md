# 🧱 Dev Stack Builder

A simple and user-friendly **Dev Stack Builder** website built with React. It helps developers create and manage their technology stack by selecting the technologies they want to use.

Users can explore available technologies, add them to their stack, reorder them using drag-and-drop, and get real-time feedback as they build their stack.

## 🚀 Live Demo

**Live Website:** Add your live demo link here

**GitHub Repository:** Add your GitHub repository link here

---

## 📌 Project Overview

The **Dev Stack Builder** is a tool that helps developers create their own technology stack.

The main idea is to make it easy for users to select technologies and organize them in the order they want. The interface gives immediate feedback whenever the stack changes.

---

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* HTML5
* CSS3
* JavaScript / TypeScript

---

## ✨ Core Features

### 1. User-Friendly Interface

A clean and simple interface that makes it easy to browse technologies and build a personal development stack.

### 2. Drag-and-Drop Functionality

Users can drag and reorder technologies in their stack to organize them according to their preference.

### 3. Real-Time Feedback

The interface updates immediately when technologies are added, removed, or reordered.

---

## 📂 Project Structure

```text
src/
├── components/
├── data/
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

The project is organized into reusable React components and separate data files to keep the code easier to maintain.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have Node.js installed on your computer.

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd YOUR_PROJECT_FOLDER
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The project will then be available on the local development server.

---

## 🧠 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child. State is used to store and manage data that can change inside a component.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` lets us create and update state in a functional component. I used it to manage the stack data and update the UI when items were added or removed.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders. I used it to load the JSON data when the page first loaded.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in the list. It helps React update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something based on a condition. For example, I showed an empty stack message when there were no items in the stack.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from a parent to a child using props. To send something back, the parent passes a function as a prop, and the child calls that function when needed.

---

## 📸 Project Preview

Add screenshots of your project here.

```text
Screenshot 1 — Main Interface
Screenshot 2 — Building the Stack
Screenshot 3 — Drag and Drop
```

---

## 👨‍💻 Author

**Faisal Ahmed**

Frontend Developer | React | TypeScript | WordPress

* GitHub: `@faaiisal`
* Portfolio: `https://mefaisal.com/`

---

## 📄 License

This project was created for educational and learning purposes.
