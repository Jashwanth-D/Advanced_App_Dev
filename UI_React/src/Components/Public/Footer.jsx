import React from 'react'
import { Link } from "react-router-dom";
import PrivacyCookies from '../../Pages/PrivacyCookies'
import FAQPage from '../../Pages/FAQPage';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-6 text-center absolute bottom-7 w-full">
    <div className="px-8">
      <p>&copy; 2024 HarbourHut. All rights reserved.</p>
      <div className="flex justify-center mt-4">
        <a href="#" className="text-blue-500 hover:underline mx-2">X</a>
        <a href="#" className="text-blue-500 hover:underline mx-2">Facebook</a>
        <a href="#" className="text-blue-500 hover:underline mx-2">Instagram</a>
        <a href="#" className="text-blue-500 hover:underline mx-2"><Link to='/FAQPage'>FAQ</Link></a>
      </div>
      <p className="mt-4 text-sm">
        By using this website, you agree to our <a href="#" className="text-blue-500 hover:underline"><Link to='/PrivacyCookies'>Terms And Policy</Link></a>.
      </p>
    </div>
  </footer>
  )
}

export default Footer