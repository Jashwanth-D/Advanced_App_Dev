import React, { useState } from 'react';


const Admindash = () => {
 
  const [person, setPerson] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country"
  });

  
  const [editMode, setEditMode] = useState(false);


  const [formData, setFormData] = useState({});


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
    setFormData({});
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          Welcome
        </div>
        <div className="flex flex-col flex-grow pt-4">
          <a  className="px-4 py-2 mt-2 text-sm text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300">Profile</a>
          <a  href="/userlist" className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">User List</a>
          <a  className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">Worklogs</a>
          <a className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">Pending list</a>
       
          
        </div>
      </div>
      
   
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Admin Profile</h1>
          {!editMode && (
            <button onClick={() => setEditMode(true)} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Edit</button>
          )}
        </div>
        <div className="flex flex-col ">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-800">Person Details</h2>
            <div className="mt-4">
              <p><strong>Admin name:</strong> {person.name}</p>
              <p><strong>Admin id:</strong> {person.age}</p>
              <p><strong>Admin Email:</strong> {person.email}</p>
              <p><strong>Admin Phone:</strong> {person.phone}</p>
              <p><strong>Admin Address:</strong> {person.address}</p>
              
              {editMode && (
                <button onClick={() => setEditMode(false)} className="px-4 py-2 mt-4 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Cancel</button>
              )}
            </div>
          </div>

   
          {editMode && (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Edit Admin Details</h2>
              <div className="mt-4">
                <input type="text" name="Name" value={formData.name || person.name} onChange={handleInputChange} placeholder="Name" className="border border-gray-300 p-2 mb-2 rounded-md" />
                <br></br>
                <input type="number" name="age" value={formData.age || person.age} onChange={handleInputChange} placeholder="Age" className="border border-gray-300 p-2 mb-2 rounded-md" />
                <br></br>
                <input type="email" name="email" value={formData.email || person.email} onChange={handleInputChange} placeholder="Email" className="border border-gray-300 p-2 mb-2 rounded-md" />
                <br></br>
                <input type="text" name="phone" value={formData.phone || person.phone} onChange={handleInputChange} placeholder="Phone" className="border border-gray-300 p-2 mb-2 rounded-md" />
                <br></br>
                <input type="text" name="address" value={formData.address || person.address} onChange={handleInputChange} placeholder="Address" className="border border-gray-300 p-2 mb-2 rounded-md" />
                <br>
                </br>
                <button type="submit" className="px-4 py-2 mt-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Save</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admindash;