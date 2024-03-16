import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'

const Signup =lazy(()=> import('./Pages/Auth/Register')) 
const Contact =lazy(()=> import('./Pages/Contact'))
const Login =lazy(()=> import('./Pages/Auth/Login'))

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback='loading'>
    <Routes>
      <Route element={<WebLayout/>}>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App