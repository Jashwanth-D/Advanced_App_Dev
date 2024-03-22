import React, { useState } from 'react';

const MyBooking = () => {
  
  const [profile] = useState({
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Street, City, Country"
  });

  const [bookingHistory] = useState([
    { id: 1, date: "2023-12-20", time: "10:00 AM", service: "Service A" },
    { id: 2, date: "2023-12-22", time: "02:00 PM", service: "Service B" },
    { id: 3, date: "2023-12-25", time: "09:00 AM", service: "Service C" }
  ]);


  const [booking, setBooking] = useState({
    date: "",
    time: "",
    service: "",
    note: ""
  });

   const [profileImage, setProfileImage] = useState("https://media1.thrillophilia.com/filestore/lus237nuqc3fj1zdtxhdk6j8skfz_profile_image.jpg");

  
  const [createFormVisible, setCreateFormVisible] = useState(false);


  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBooking(prevBooking => ({
      ...prevBooking,
      [name]: value
    }));
  };

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

  
  const handleSubmitBooking = (e) => {
    e.preventDefault();
   
    console.log("Booking submitted:", booking);

    setBooking({
      date: "",
      time: "",
      service: "",
      note: ""
    });
 
    setCreateFormVisible(false);
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
          <a href="/MyBooking" className="px-4 py-2 mt-2 text-sm text-gray-900 bg-gray-200 rounded-md hover:bg-gray-300">My Bookings</a>
          <a href="/quotation" className="px-4 py-2 mt-2 text-sm text-gray-900 hover:bg-gray-300">My Quotation</a>
          <a  href="/wallet" className="px-4 py-2 mt-2 text-sm text-gray-900  hover:bg-gray-300">My Wallet</a>
   
          
        </div>
      </div>
     
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <button onClick={() => setCreateFormVisible(true)} className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create</button>
        </div>
        <div className="flex flex-col">
          
          {createFormVisible && (
            <div className="bg-white rounded-lg shadow-md p-6 mt-4">
              <h2 className="text-lg font-semibold text-gray-800">Create Booking</h2>
              <form onSubmit={handleSubmitBooking} className="mt-4">
                <div className="mb-4">
                  <label htmlFor="date" className="block text-gray-700 font-semibold mb-2">Date</label>
                  <input type="date" id="date" name="date" value={booking.date} onChange={handleBookingChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-gray-700 font-semibold mb-2">Time</label>
                  <input type="time" id="time" name="time" value={booking.time} onChange={handleBookingChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">Service</label>
                  <input type="text" id="service" name="service" value={booking.service} onChange={handleBookingChange} className="border border-gray-300 rounded-md p-2 w-full" required />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Submit</button>
              </form>
            </div>
          )}

       
          <div className="bg-white rounded-lg shadow-md p-6 mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Booking History</h2>
            <div className="mt-4">
              {bookingHistory.map(booking => (
                <div key={booking.id} className="mb-4">
                  <p><strong>Date:</strong> {booking.date}</p>
                  <p><strong>Time:</strong> {booking.time}</p>
                  <p><strong>Service:</strong> {booking.service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyBooking;