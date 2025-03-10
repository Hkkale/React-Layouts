import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Body from './components/Body.jsx';
import Capabilities from './components/Capabilities.jsx';
import Safety from './components/Safety.jsx';
import Research from './components/Research.jsx';
import Menu from './components/Menu.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} >
    <Route index element={<Body />} />
    <Route path="/capabilities" element={<Capabilities/>} />
    <Route path="/safety" element={<Safety/>} />
    <Route path="/research" element={<Research/>} />
    <Route path="/menu" element={<Menu/>} />
    </Route>

  </Routes>
</BrowserRouter>,
)
