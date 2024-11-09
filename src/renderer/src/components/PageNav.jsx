import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsPersonStanding } from "react-icons/bs";
const PageNav = () => {
  return (
    <div className="w-full border-b-2 border-sky-700 h-6  ">
      <ul className="flex">
<li className="flex items-center py-1 px-4 gap-2 "><AiFillHome/><p className="text-xs font-semibold "> Page d'Acceuill</p></li>
<li className="flex items-center bg-sky-700 py-1  px-4  text-white gap-2 "><BsPersonStanding/><p className="  text-xs  font-semibold ">Patients</p></li>
</ul>
    </div>
  )
}

export default PageNav