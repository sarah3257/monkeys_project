import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Page1 from './page1'
import Page2 from './page2'
import Header from './header'

export default function AppRouts() {
  return (<>
   <Router>
    <Routes>
      <Route path='/' element={<Header/>}></Route>
        <Route path='/Page1' element={<Page1/>}></Route>
        <Route path='/Page2' element={<Page2/>}></Route>

    </Routes>
   </Router></>
  )
}
