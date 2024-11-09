import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsPersonStanding } from "react-icons/bs";
const PageNav = () => {
  return (
    <div className="w-full border-b-2 border-sky-700 h-6  ">
      <ul className="flex">
<li className="flex items-center"><AiFillHome/><p className="px-4 text-xs py-1 font-semibold "> Page d'Acceuill</p></li>
<li className="flex items-center bg-sky-700"><BsPersonStanding/><p className=" text-white  px-4 text-xs py-1 font-semibold ">Patients</p></li>
</ul>
    </div>
  )
}

export default PageNav