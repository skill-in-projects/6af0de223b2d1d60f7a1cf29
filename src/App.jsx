import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Jobs from './pages/Jobs.jsx'
import FlyingBear from './pages/FlyingBear.jsx'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="topbar">
          <span className="brand">Job Planner</span>
          <nav>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/bear">Flying bear</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bear" element={<FlyingBear />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
