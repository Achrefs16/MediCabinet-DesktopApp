import React, { useState } from 'react';

import { BsPersonStanding } from "react-icons/bs";
import { BsFileText } from "react-icons/bs"
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import { HiUserAdd } from "react-icons/hi";
import { PiNumberSquareTwoFill } from "react-icons/pi";

const Sidebar = () => {
 
  const [listOpen,Setlistopen]=useState({
    Patients:false,
    Planning:false,
    Listes:false,
  })
  const togglebtn = (list) =>{
   
          Setlistopen((prvlist)=>({
           ...prvlist,
          [list]:!prvlist[list],
          }))
   


  }


  return (
    
    <div className="w-2/12  border-r-gray-400 border-r ">
      <ul>
        <li>
          <button className="flex items-center justify-between w-11/12 p-2 " onClick={()=>togglebtn('Patients')}> <p className="font-semibold text-gray-800">Patients</p> <IoIosArrowDown className={`${listOpen.Patients ? 'rotate-180' : null} transition text-gray-700`}/> </button>
          {listOpen.Patients? <ul className="px-4 text-sm">
            <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"> <BsPersonStanding className=" text-red-600 text-lg"/><p className="pl-2">Patients</p></li>
            <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"><CgSearch className=" text-sky-600 text-lg "/> <p className="pl-2">Recherche patient</p> </li>
            <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"><HiUserAdd className=" text-green-600 text-xl "/><p className="pl-2">Nouveau patient </p></li>
          </ul>:null}
        </li>
        <li>
          <button className="flex items-center justify-between w-11/12 p-2 " onClick={()=>togglebtn('Planning')}> <p className="font-semibold text-gray-800">Planning</p> <IoIosArrowDown className={`${listOpen.Planning ? 'rotate-180' : null} transition text-gray-700`}/> </button>
         {listOpen.Planning?
          <ul  className="px-4 text-sm">
            <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"> <BsCalendarDate className="text-base text-rose-600"/><p className="pl-2">  Agenda</p></li>
              <li className="flex items-center pl-1 py-1 cursor-pointer hover:bg-slate-200"><PiNumberSquareTwoFill className="text-xl text-sky-600"/> <p className="pl-2">Salle d'attente</p></li>
          </ul>
            :null}
        </li>
        <li>
         <button className="flex items-center justify-between w-11/12 p-2 " onClick={()=>togglebtn('Listes')}> <p className="font-semibold text-gray-800">Listes</p> <IoIosArrowDown className={`${listOpen.Listes ? 'rotate-180' : null} transition text-gray-700`}/> </button>
         {listOpen.Listes?
          <ul  className="px-4 text-sm">
             <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"><BsFileText className="text-lg text-violet-600"/>  <p className="pl-2">Ordonnance</p></li>
             <li className="flex items-center pl-2 py-1 cursor-pointer hover:bg-slate-200"> <HiOutlineClipboardList className="text-lg text-green-600"/>  <p className="pl-2"> Consultations</p></li>
          </ul>
          :null}
        </li>
      </ul>
     </div>
  )
}

export default Sidebar