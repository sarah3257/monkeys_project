import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from './home'
import Counter from '../counter';

export default function AppRoutes2() {
    return (
        <BrowserRouter>
          <header className='container-fluid'>
            <nav className='container'>
              <Link to="/">Home</Link>
              <Link to="/counter">counter</Link>

            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home/>}>Home</Route>
            <Route path="/counter" element={<Counter/>}>Home</Route>

          </Routes>
    
        </BrowserRouter>
      )
}
