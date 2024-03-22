import React from 'react'
import Footer from '../Components/Public/Footer'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Website</h1>
      <p className="text-lg text-gray-700 mb-4">Book BoatHouses to your dream destinations.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8">Get Started</button>
      <div className="flex">
        <div className="rounded-lg bg-white shadow-md p-6 mr-4">
          <h2 className="text-lg font-semibold mb-2">Feature 1</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="rounded-lg bg-white shadow-md p-6">
          <h2 className="text-lg font-semibold mb-2">Feature 2</h2>
          <p className="text-gray-700">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}

export default Home