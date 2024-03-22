import React from 'react'
import UserDashboard from './userDashboard'
import { Link } from "react-router-dom";


const DropDownProfile = () => {
  return (
    <div className=' dropDownProfile'>
        <ul className='flex flex-col gap-4'>
            <Link to='/UserDashboard'>My Profile</Link>
            <Link to='/MyBooking'>Bookings</Link>
            <Link to='/Login'>Log out</Link>
        </ul>
    </div>
  )
}

export default DropDownProfile