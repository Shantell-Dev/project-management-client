import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";     
import HomePage from "./pages/HomePage"; 
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; 
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
      </p>
      <div className="App">
      <Navbar />
 
 <Routes>
   <Route path="/" element={ <HomePage /> } />   
   <Route path="/projects" element={<ProjectListPage />} />
   <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />   
    {/*   ADD   */}
    <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />
 </Routes>
    </div>
    </>
  );
}

export default App
