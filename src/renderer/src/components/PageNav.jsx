import React from 'react'
import { NavLink  } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { BsPersonStanding } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { PiNumberSquareTwoFill } from "react-icons/pi";
const PageNav = () => {
  return (
    <div className="w-full border-b-2 border-sky-700 h-6  ">
      <ul className="flex">
<NavLink to="/">
  {({ isActive }) => (
    <li className={`${isActive ? 'bg-sky-700 text-white' : ''} text-gray-700 flex items-center py-1 px-4 gap-2`}>
      <AiFillHome className="text-red-500"/>
      <p className="text-xs font-semibold "> Page d'Acceuill</p>
      </li>
    )}
       </NavLink>
<NavLink to="/patients">
  {({ isActive }) => (
    <li className={`${isActive ? 'bg-sky-700 text-white' : ''} text-gray-700 flex items-center py-1 pl-4 pr-1 gap-2`}>
      <BsPersonStanding className="text-red-600"/>
      <p className="  text-xs  font-semibold ">Patients</p>
     <FaXmark className=" hover:bg-red-500 hover:text-white h-full"/>
      </li>
        )}
      </NavLink>
      <NavLink to="/salle">
  {({ isActive }) => (
    <li className={`${isActive ? 'bg-sky-700 text-white' : ''} text-gray-700 flex items-center py-1 pl-4 pr-1 gap-2`}>
      <PiNumberSquareTwoFill className="text-blue-600"/>
      <p className="  text-xs  font-semibold ">Salle</p>
     <FaXmark className=" hover:bg-red-500 hover:text-white h-full"/>
      </li>
        )}
      </NavLink>
</ul>
    </div>
  )
}

export default PageNav