import React, { useState } from 'react';
import Modal from 'react-modal';

const UserList = () => {

  const userList = [
    { 
      id: 1, 
      name: "John Doe", 
      email: "john@example.com", 
      selectedPackage: "Beach Getaway",
      packagePrice: "$200",

      days: 7,
      travelPlan: "Beach relaxation",
      hotel: "Beach Resort",
      members: 2,
      travelRequired: true,
      extraInformation: "Special dietary requirements: None"
    },
    { 
      id: 2, 
      name: "Alice", 
      email: "alice@example.com", 
      selectedPackage: "Beach Getaway",
      packagePrice: "$200",
   
      days: 7,
      travelPlan: "Beach relaxation",
      hotel: "Beach Resort",
      members: 2,
      travelRequired: true,
      extraInformation: "Special dietary requirements: None"
    },
    { 
      id: 3, 
      name: "Smith", 
      email: "smith@example.com", 
      selectedPackage: "Beach Getaway",
      packagePrice: "$200",

      days: 7,
      travelPlan: "Beach relaxation",
      hotel: "Beach Resort",
      members: 2,
      travelRequired: true,
      extraInformation: "Special dietary requirements: None"
    },

  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const [currentUserDetail, setCurrentUserDetail] = useState(null);


  const openModal = (user) => {
    setCurrentUserDetail(user);
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setCurrentUserDetail(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    
        {userList.map(user => (
          <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-600">Selected Package: {user.selectedPackage}</p>
            <p className="text-gray-600">Price: {user.packagePrice}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => openModal(user)}>
              View Full Detail
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="User Detail Modal"
      >
        {currentUserDetail && (
          <div>
            <h2>User Details</h2>
            <p>Number of Days: {currentUserDetail.days}</p>
            <p>Travel Plan: {currentUserDetail.travelPlan}</p>
            <p>Staying Hotel: {currentUserDetail.hotel}</p>
            <p>Number of Members: {currentUserDetail.members}</p>
            <p>Travel Required: {currentUserDetail.travelRequired ? "Yes" : "No"}</p>
            <p>Extra Information: {currentUserDetail.extraInformation}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default UserList;