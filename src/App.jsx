import { Routes, Route } from "react-router-dom";

import './App.css'
import Header from "./components/Header";

import Home from "./pages/Home";
import Profile from './pages/Profile';
import Settings from "./pages/Settings"
import About from "./pages/About"

function App() {

  return (
    <div className='app'>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/settings" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;