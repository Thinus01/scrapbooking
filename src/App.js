import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { JS } from "./components/main/JavaScript";
import { CSS } from "./components/main/CSS";

function App() {
  return (
  <>
    <nav>
      <ul className="navbar">
        <li><Link to="/">JavaScript</Link></li>
        <li><Link to="/CSS">CSS</Link></li>
      </ul>
    </nav>
  
    <Routes>
      <Route path='/' element={<JS/>} />
      <Route path='/CSS' element={<CSS/>} />
    </Routes>
  </>
  )
}

export default App;
