import React, { useState } from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        numberOfMembers: '',
        place: '',
        amount: '',
        dob: ''
    });
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        setBookingSuccess(true);
        // Reset form data
        setFormData({
            name: '',
            age: '',
            numberOfMembers: '',
            place: '',
            amount: '',
            dob: ''
        });
    
    };

    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Booking Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="numberOfMembers" className="block text-sm font-medium text-gray-700">Number of Members</label>
                        <input type="number" id="numberOfMembers" name="numberOfMembers" value={formData.numberOfMembers} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
                        <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                        <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
                {bookingSuccess && <BookingSuccessPopup />}
        </div>

            
        </div>
    );
}
const BookingSuccessPopup = () => {
    return (
        <div className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg">
                <p className="text-green-500">Booking successful!</p>
            </div>
        </div>
    );
}

export default Booking;