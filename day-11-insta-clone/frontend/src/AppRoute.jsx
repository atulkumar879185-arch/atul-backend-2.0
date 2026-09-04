import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './feature/auth/pages/Login'
import Register from './feature/auth/pages/Register'

const AppRoute = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default AppRoute
