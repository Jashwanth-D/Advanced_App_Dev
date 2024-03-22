import React, { useState } from 'react';

const Wallet = () => {
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
          <a  href="/userDashboard" className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300">My Profile</a>
          <a href="/MyBooking" className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">My Bookings</a>
          <a href="/quotation"className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300 ">My Quotation</a>
          <a  className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300 bg-gray-200 rounded-md">My Wallet</a>
         
          {/* Other links */}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">My Profile</h1>
        </div>
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <p className="text-lg font-semibold text-gray-800">No current wallets</p>
            </div>
            
      </div>
    </div>
  );
}

export default Wallet;