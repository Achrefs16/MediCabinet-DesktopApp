import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
const SubBar = ({data}) => {
  return (
    <div className="w-full  h-16 border-y border-gray-400 text-sm">
      <ul className="flex max-w-56 justify-between  items-center h-full">
        <li className="h-full cursor-pointer rounded-sm hover:bg-slate-200 p-4">
       <IoMdAdd className="text-2xl mx-auto mb-1 text-blue-600"/><p>Ajouter</p>
        </li>
        <li className="h-full cursor-pointer rounded-sm hover:bg-slate-200 p-4">
          <RiEditLine className="text-2xl mx-auto  mb-1 text-blue-600"/><p>Modifier</p></li>
        <li className="h-full cursor-pointer rounded-sm hover:bg-slate-200 p-4"> 
          <MdDeleteOutline className="text-2xl mx-auto  mb-1 text-red-600"/> <p>Supprimer</p></li></ul>
    </div>
  )
}

export default SubBar