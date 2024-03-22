import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDownProfile from './DropDownProfile'

import profilepice from '../../assets/IMG/profile.png';
import houseboat from '../../assets/IMG/houseboat.png'

const Navbar = () => {

    const [openDropDown, setOpenDropDown] = useState(false)

    const links= [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'About Us',
            path:'/aboutus'
        },
        {
            name:'contact',
            path:'/Contact'
        },
        {
            name:'login',
            path: '/Login'
        }
    ]
  return (
    <div className='h-[5vh] w-screen flex flex-row justify-center items-center bg-emerald-400'>
                <img
            className="flex flex-col justify-center h-11 w-10 "
            src={houseboat}
            
            alt="HarborHut"
            />
        <div className='w-[90%] h-full flex flex-row justify-between items-center'>
            <div className='w-1/4 text-2xl font-bold text-blue-950'>
            HarborHut
            </div>
            <div className='w-1/4 flex flex-row justify-between items-center text-black-600 font-bold'>
                {links.map((link,index)=>(
                    <NavLink key={index} to={link.path} onClick={() => setOpenDropDown(false)} className='cursor-pointer'>
                        {link.name}
                    </NavLink>
                ))
                    }
                <span onClick={() => setOpenDropDown(!openDropDown)} className='cursor-pointer'>
                        <img src={profilepice} style={{ blockSize:"25px"}} />
                    </span>
            </div>
        </div>
        {
            openDropDown && <DropDownProfile/>
        }
    </div>
  )
}

export default Navbar