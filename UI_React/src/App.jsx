import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loader from './Components/Public/Loader'
import React, { Suspense, lazy } from 'react'
import Home from './Pages/Home'
import WebLayout from './Layout/WebLayout'
import Aboutus from './Pages/aboutus'
import UserDashboard from './Components/Public/userDashboard'
import Booking from './Components/Public/Booking'
import PrivacyCookies from './Pages/PrivacyCookies'
import LandingPage from './Pages/LandingPage'
import Explore from './Pages/Explore'
import Admindash from './Components/Admin/Admindash'
import UserList from './Components/Admin/Userlist'
import FAQPage from './Pages/FAQPage'
import MyBooking from './Components/Public/MyBooking'
import Wallet from './Components/Public/Wallet'
import Quotation from './Components/Public/Quotation'

const Register = lazy(() => import('./Pages/Auth/Register'))
const Contact = lazy(() => import('./Pages/Contact'))
const Login = lazy(() => import('./Pages/Auth/Login'))

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>

          <Routes>
            <Route element={<WebLayout />}>
              <Route exact path="/" element={<LandingPage />}></Route>
              <Route exact path="/Home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/Register" element={<Register />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/Aboutus" element={<Aboutus />}></Route>
              <Route path="/Booking" element={<Booking />}></Route>
              <Route path="/UserList" element={<UserList />}></Route>
              <Route path="/userDashboard" element={<UserDashboard />}></Route>
              <Route path="/Explore" element={<Explore />}></Route>
              <Route path="/Admindash" element={<Admindash />}></Route>
              <Route path="/MyBooking" element={<MyBooking />}></Route>
              <Route path="/PrivacyCookies" element={<PrivacyCookies />}></Route>
              <Route path="/FAQPage" element={<FAQPage />}></Route>
              <Route path="/Quotation" element={<Quotation />}></Route>
              <Route path="/wallet" element={<Wallet />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
     
    </>
  )
}

export default App