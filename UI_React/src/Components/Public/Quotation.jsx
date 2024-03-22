import React, { useState } from 'react';

const Quotation = () => {
 
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: {
      city: "",
      state: "",
      country: "",
      zipCode: "",
      streetAddress: ""
    }
  });

  const [profileImage, setProfileImage] = useState("https://media1.thrillophilia.com/filestore/lus237nuqc3fj1zdtxhdk6j8skfz_profile_image.jpg");


  const [editMode, setEditMode] = useState(false);
  const [editPersonMode, setEditPersonMode] = useState(false);


  const [formData, setFormData] = useState({});

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPerson({
      ...person,
      ...formData
    });
    setEditMode(false);
    setEditPersonMode(false);
    setFormData({});
  };

  return (
    <div className="flex h-screen bg-gray-100">
 
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
          Welcome
        </div>
        <div className="flex flex-col flex-grow pt-6">
  
             <div className="flex items-center justify-center mb-4">
             
              <label htmlFor="profile-image">
                <img src={profileImage} alt="Profile" className="rounded-full w-24 h-24 cursor-pointer" />
              </label>
            
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          <a  href="/userDashboard" className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300">My Profile</a>
          <a href="MyBooking" className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">My Bookings</a>
          <a href="/quotation"className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300 bg-gray-200 rounded-md">My Quotation</a>
          <a href="/wallet" className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300">My Wallet</a>

        </div>
      </div>
      
   
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
        </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <p className="text-lg font-semibold text-gray-800">No quotations</p>
            </div>
            
      </div>
    </div>
  );
}

export default Quotation;