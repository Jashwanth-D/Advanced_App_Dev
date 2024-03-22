import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // Mock data for a person
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

  // State for controlling edit mode
  const [editMode, setEditMode] = useState(false);
  const [editPersonMode, setEditPersonMode] = useState(false);

  // State for form input fields
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

  // Function to handle form input changes
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
      {/* Sidebar */}
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
          Welcome
        </div>
        <div className="flex flex-col flex-grow pt-6">
        {/* <div className="flex items-center justify-center mb-4">
              <img src="https://media1.thrillophilia.com/filestore/lus237nuqc3fj1zdtxhdk6j8skfz_profile_image.jpg" alt="Profile" className="rounded-full w-24 h-24" />
            </div> */}
             <div className="flex items-center justify-center mb-4">
              {/* Profile image */}
              <label htmlFor="profile-image">
                <img src={profileImage} alt="Profile" className="rounded-full w-24 h-24 cursor-pointer" />
              </label>
              {/* Hidden file input */}
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          <a  className="px-4 py-2 mt-2 text-sm text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300">My Profile</a>
          <a href="/MyBooking" className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300"><Link to='/MyBooking'>Mybooking</Link></a>
          <a href="/quotation"className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300"><Link to='/MyBooking'>My Quotation</Link></a>
          <a  href="/wallet" className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300">My Wallet</a>
          
        

        </div>
      </div>
      
  
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
          {!editPersonMode && (
            <button onClick={() => setEditPersonMode(true)} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit Person</button>
          )}
        </div>
        <div className="flex flex-col items-center justify-center flex-grow">
          {/* Display person's image */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              {/* Profile image */}
              <label htmlFor="profile-image">
                <img src={profileImage} alt="Profile" className="rounded-full w-24 h-24 cursor-pointer" />
              </label>
              {/* Hidden file input */}
              <input
                type="file"
                id="profile-image"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            {/* Display person's details */}
            <h2 className="text-lg font-semibold text-gray-800">Person Details</h2>
            <div className="mt-4">
              {editPersonMode ? (
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" value={formData.name || person.name} onChange={handleInputChange} placeholder="Name" className="border border-gray-300 p-2 mb-2 rounded-md w-full" />
                  <input type="number" name="age" value={formData.age || person.age} onChange={handleInputChange} placeholder="Age" className="border border-gray-300 p-2 mb-2 rounded-md w-full" />
                  <input type="email" name="email" value={formData.email || person.email} onChange={handleInputChange} placeholder="Email" className="border border-gray-300 p-2 mb-2 rounded-md w-full" />
                  <input type="text" name="phone" value={formData.phone || person.phone} onChange={handleInputChange} placeholder="Phone" className="border border-gray-300 p-2 mb-2 rounded-md w-full" />
                  <button type="submit" className="mt-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save</button>
                </form>
              ) : (
                <div>
                  <p><strong>Name:</strong> {person.name}</p>
                  <p><strong>Age:</strong> {person.age}</p>
                  <p><strong>Email:</strong> {person.email}</p>
                  <p><strong>Phone:</strong> {person.phone}</p>
                </div>
              )}
            </div>
          </div>

          {/* Address details */}
          {/* Address details */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Address Details</h2>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" id="city" name="city" value={formData.city || person.address.city} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" id="state" name="state" value={formData.state || person.address.state} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" id="country" name="country" value={formData.country || person.address.country} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input type="text" id="zipCode" name="zipCode" value={formData.zipCode || person.address.zipCode} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
                <div className="col-span-2">
                  <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700">Street Address</label>
                  <input type="text" id="streetAddress" name="streetAddress" value={formData.streetAddress || person.address.streetAddress} onChange={handleInputChange} className="border border-gray-300 p-2 rounded-md w-full" />
                </div>
              </div>
              <button type="submit" className="mt-4 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save Address</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;