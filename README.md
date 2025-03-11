This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Learn Material

- [React](https://chatgpt.com/share/679c5d73-f290-8012-92ef-fc9950bf40b3)
- [Interview Preparation](https://chatgpt.com/share/679c9700-f6bc-8011-a6de-e3dfe7794d0c)

# 🔹 React

React is a popular JavaScript library for building user interfaces, primarily for single-page applications (SPA). Created by Facebook, it allows developers to build reusable UI components and manage state efficiently.

- Functional Components: Simple, stateless components using functions.
- Class Components: Components with state and lifecycle methods (older approach).

# 🔹 DOM (Document Object Model) in JavaScript & React

📌 Definition: The Document Object Model (DOM) represents an HTML document as a structured tree of objects that JavaScript can manipulate dynamically.

## What is the DOM?

The DOM is a programming interface that allows JavaScript to interact with and modify an HTML document.
It represents HTML elements as a hierarchical tree structure.

```bash
HTML Document:
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Example</title>
  </head>
  <body>
    <h1 id="title">Hello, World!</h1>
    <button onclick="changeText()">Click Me</button>
  </body>
</html>


DOM:
Document
 ├── html
 │    ├── head
 │    │    ├── title
 │    ├── body
 │         ├── h1 (id="title")
 │         ├── button (onclick="changeText()")


✅ Using JavaScript to modify the DOM:
document.getElementById("title").textContent = "Hello, JavaScript!";
```

# 🔹 Building Blocks of React

- React Components
- JSX
- Props
- State
- Lifecycle Methods
- Conditional Rendering
- Lists and Keys
- Context API (State Management)
- React Router (Navigation)
- API Calls (Fetching Data)
- Hooks (Reusable Functions)
- React Suspense & Lazy Loading
- Error Boundaries
- React Testing

# 🔹 React hooks

React Hooks are functions that allow you to use state and other React features in functional components. Introduced in React 16.8, they offer a more functional approach to component design.

# 🔹 Custom Hooks in React

📌 Definition: A Custom Hook is a JavaScript function that uses built-in React hooks (useState, useEffect, etc.) to encapsulate reusable logic.

- ✅ Reusability → Share logic across multiple components.
- ✅ Encapsulation → Keeps components clean by abstracting logic.
- ✅ Composition → Combine multiple hooks inside one. 

```bash
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;

import useFetch from "./useFetch";

const App = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts/1");

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return <h2>{data.title}</h2>;
};

export default App;


```

# 🔹 SSR, SSG, ISR, ISG

- SSR: Server-Side Rendering
- SSG: Static Site Generation
- ISR: Incremental Static Regeneration
- ISG: Incremental Static Generation

## Server side rendering (SSR)

The HTML for a page is generated on the server and sent to the browser on request.

Server-Side Rendering (SSR) is a technique used to render server-side rendered HTML on the client-side. This is achieved by pre-rendering the HTML on the server and sending it to the client as a static file. The client then takes this HTML and dynamically inserts it into the DOM, allowing for dynamic content to be rendered on the client-side.

SSR is commonly used for SEO purposes, as search engines can crawl and index the content on the server-side. It is also used for improving the initial load time of a website, as the server can pre-render the HTML and send it to the client, reducing the time it takes for the page to load.

✅ Pros:

- SEO-friendly (HTML is available before JavaScript loads).
- Faster initial load (good for content-heavy websites).
- Better for dynamic content that updates frequently.
❌ Cons:

- Higher server load (each request generates a new page).
- Slower navigation between pages (compared to SPAs).

```bash
export async function getServerSideProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}

const Page = ({ data }) => <div>{data.message}</div>;
export default Page;

```

## Static Site Generation (SSG)

in SSG, Pages are pre-built at build time and served instantly. This is achieved by generating the HTML on the server and sending it to the client as a static file. The client then takes this HTML and dynamically inserts it into the DOM, allowing for dynamic content to be rendered on the client-side.

SSG is commonly used for improving the initial load time of a website, as the server can pre-render the HTML and send it to the client, reducing the time it takes for the page to load. It is also used for SEO purposes, as search engines can crawl and index the content on the server-side.

✅ Pros:

- Super fast (HTML is ready to serve from CDN).
- SEO-friendly (fully rendered HTML).
- Low server cost (no need for server processing per request).
❌ Cons:

- Not ideal for real-time dynamic content.
- Rebuilding the site is needed when content updates.

```bash
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data } };
}

const Page = ({ data }) => <div>{data.message}</div>;
export default Page;
```

## Client Side Rendering (CSR)

Client-Side Rendering (CSR) is a technique used to render HTML on the client-side.

The server sends a bare-bones HTML file, and JavaScript dynamically renders content in the browser.

✅ Pros:

- Faster navigation after the initial load (SPA-like experience).
- Reduces server load since rendering happens on the client.
❌ Cons:

- Slower first load (user sees a blank screen before React/JavaScript loads).
- Bad for SEO (unless you use hydration techniques).

```bash
import { useState, useEffect } from "react";

const Page = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>{data ? data.message : "Loading..."}</div>;
};

export default Page;

```


## Incremental Static Regeneration (ISR)

A hybrid of SSG and SSR—static pages are regenerated in the background at set intervals.

ISR allows static pages to be updated incrementally at specific intervals without rebuilding the entire site.

Incremental Static Regeneration (ISR) is a technique used to pre-render HTML on the server-side and send it to the client as a static file. This is achieved by generating the HTML on the server and sending it to the client as a static file. The client then takes this HTML and dynamically inserts it into the DOM, allowing for dynamic content to be rendered on the client-side.

ISR is commonly used for improving the initial load time of a website, as the server can pre-render the HTML and send it to the client, reducing the time it takes for the page to load. It is also used for SEO purposes, as search engines can crawl and index the content on the server-side.

✅ Pros:

- Fast like SSG, but supports real-time updates.
- Low server load (pages regenerate only when needed).
❌ Cons:

- Slight delay in updates (while pages regenerate).

```bash
export async function getStaticProps() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  return { props: { data }, revalidate: 60 }; // Regenerate every 60 seconds
}

const Page = ({ data }) => <div>{data.message}</div>;
export default Page;
```

## Single Page Application (SPA)

The entire application loads once, and subsequent navigation happens without reloading the page.

A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the application.

✅ Pros:

- Smooth user experience (no page reloads).
- Fast interactions after initial load.

❌ Cons:

- Slow initial load (loads all JavaScript upfront).
- SEO challenges (handled with SSR or prerendering).

## ISG

- ✅ Both ISR and ISG refer to the same concept!
- ✅ The correct term is ISR (Incremental Static Regeneration) as used in Next.js.
- ✅ ISG is an older, informal term sometimes used interchangeably with ISR.

# 🔹 Hydration

📌 Definition: Hydration is the process where React attaches event listeners and makes a pre-rendered static HTML page interactive.

## Why is Hydration Needed?
- In Server-Side Rendering (SSR) or Static Site Generation (SSG), the server sends a fully rendered HTML page to the browser.
- However, that HTML is non-interactive.
- Hydration allows React to reconstruct the Virtual DOM and attach event listeners, making the page interactive without reloading.

## How Hydration Works
- The server renders the page as static HTML.
- The browser loads and displays the HTML.
- React rehydrates the page by attaching JavaScript without re-rendering everything.
- The page becomes interactive (click events, state updates, etc.).

# 🔹 Lazy Component

📌 Definition: Lazy loading is a technique where React dynamically loads components only when needed, reducing the initial load time.

- ✅ Uses Code Splitting (loads only necessary code).
- ✅ Improves performance by reducing JavaScript bundle size.
- ✅ Works with Suspense to show fallback content while loading.

# 🔹 React Query

📌 Definition: React Query is a data-fetching and caching library for React applications. It simplifies API requests, caching, synchronization, and background updates.

- ✅ Automatic caching and updates.
- ✅ Background refetching for fresh data.
- ✅ Optimistic updates for better UX.
- ✅ Works with REST APIs, GraphQL, Firebase, etc.

```bash
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MyComponent />
    </QueryClientProvider>
  );
}


import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const MyComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error.message}</h2>;

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
```

# 🔹 React Design Patterns

React design patterns are best practices for writing scalable, maintainable, and efficient React applications. They help structure components and manage state effectively.

## Higher-Order Components (HOC)

📌 Definition: A function that takes a component and returns a new component with enhanced functionality.

## Render Props Pattern

📌 Definition: A component accepts a function as a prop and calls it to determine what to render.

## compound pattern 

📌 Definition: Children components communicate with the parent component to maintain state.

## Provider Pattern

📌 Definition: Centralized global state management using Context.Provider.

# 🔹 React Testing: Best Practices and Tools

Testing in React ensures that your application is reliable, bug-free, and maintainable. There are three main types of testing:

- Unit Testing → Testing individual components or functions.
- Integration Testing → Testing how components work together.
- End-to-End (E2E) Testing → Testing the full application as a user would.

## React Testing Libraries
- **Tool**	            **Purpose**  
- **Jest:**	Test runner for unit and integration tests
- **React Testing Library (RTL):**	UI testing with user-like interactions
- Enzyme (deprecated):	Component testing (not recommended for new projects)
- Cypress / Playwright: 	End-to-end (E2E) testing

✅ React Testing Library (RTL) + Jest is the recommended approach for React apps.

# 🔹 Cross-Site Scripting (XSS) in React

📌 Definition: Cross-Site Scripting (XSS) is a security vulnerability where attackers inject malicious scripts (JavaScript) into a web application, which is then executed in a user's browser.

## 🚨 Impact of XSS:

- Data Theft (steal cookies, session tokens, personal data)
- Malicious Redirects (sending users to phishing sites)
- Defacement (injecting harmful content)

# Lexical Scope

Lexical scope in JavaScript refers to the ability of a function to access variables from its own scope, parent scope, and global scope, based on where the function was declared, rather than where it was executed.

```bash
function outer() {
    let outerVar = "I am from outer";

    function inner() {
        let innerVar = "I am from inner";
        console.log(outerVar); // ✅ Can access outerVar due to lexical scope
    }

    inner();
    // console.log(innerVar); // ❌ Error: innerVar is not accessible here
}

outer();

```

# Closure

Closures leverage lexical scope by allowing a function to "remember" variables from its parent scope even after the parent function has finished execution.

```bash
function outerFunction() {
    let count = 0;
    
    return function innerFunction() {
        count++;
        console.log(count);
    };
}

const counter = outerFunction(); // outerFunction executes and returns innerFunction
counter(); // Output: 1
counter(); // Output: 2

```

Hoisting Differences
- Feature------	var	let	const
- Scope--------	Function-scoped	Block-scoped	Block-scoped
- Hoisted?-----	Yes, initialized with undefined	Yes, but not initialized (TDZ applies)	Yes, but not initialized (TDZ applies)
- Reassignable?	✅ Yes	✅ Yes	❌ No (constant)
- Redeclarable?	✅ Yes	❌ No	❌ No
- Global Attachment?	✅ Yes (if declared globally, becomes window.varName)	❌ No	❌ No
