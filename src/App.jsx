// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

function App() {
  // const [count, setCount] = useState(0)
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <Navbar />

        <Carousel />
      </div>
      <div className="flex flex-row justify-center items-center h-screen gap-4 text-4xl">
        <button
          onClick={() => setCount((count) => count - 1)}
          className="border-2 bg-rose-500 p-4 rounded-xl"
        >
          -
        </button>
        <span className="border-2 bg-slate-100 p-4 rounded-xl">{count}</span>
        <button
          onClick={() => setCount((count) => count * 2)}
          className="border-2 bg-rose-500 p-4 rounded-xl"
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
