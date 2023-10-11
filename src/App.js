import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { JS } from "./components/main/JavaScript";
import { CSS } from "./components/main/CSS";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="pt-5 pb-3 col-12 d-flex offset-2 list-unstyled">
          <li className='JSHead'><Link to="/">JavaScript</Link></li>
          <li className='CSSHead offset-6'><Link to="/CSS">CSS</Link></li>
        </ul>
      </nav>
      <div class="space"></div>

      <Routes>
        <Route path='/' element={<JS/>} />
        <Route path='/CSS' element={<CSS/>} />
      </Routes>
    </>
  )
}

export default App;
