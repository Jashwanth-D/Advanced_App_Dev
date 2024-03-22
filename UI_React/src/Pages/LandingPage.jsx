import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Public/Navbar';
import Footer from '../Components/Public/Footer';


const LandingPage = () => {
  const [modalContent, setModalContent] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [filteredContents, setFilteredContents] = useState([]);


  const handleReadMore = (content) => {
    setModalContent(content);
   
  };
  const handleSearchInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    filterContents(inputValue);
  };

  const filterContents = (inputValue) => {
    const filtered = YOUR_CONTENTS_ARRAY.filter((content) =>
      content.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredContents(filtered);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        
        <div className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images6.alphacoders.com/109/1090265.jpg')", minHeight: "80vh"}}>
        
          <div className="py-16">
            <h1 className="text-4xl font-bold text-fuchsia-700 text-center">Welcome to HarborHut</h1>
            <p className="text-lg text-white text-center mt-4">Your premier destination for boathouse bookings</p>
            <div className="flex justify-center mt-8">
              <Link to="/Explore" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">Explore Booking</Link>
            </div>
          </div>
        </div>
         
     
      </div>

      <Footer/>
    </div>
  );
}

export default LandingPage;