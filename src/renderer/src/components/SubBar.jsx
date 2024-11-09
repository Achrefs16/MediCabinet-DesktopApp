import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { RiEditLine } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
const SubBar = ({data}) => {
  return (
    <div className="w-full  h-fit border-y border-gray-400 text-sm">
      <ul className="flex max-w-56  h-full">
        <li className="cursor-pointer rounded-sm hover:bg-slate-200 p-2">
       <IoMdAdd className="text-2xl mx-auto  text-blue-600"/><p>Ajouter</p>
        </li>
        <li className="h-full cursor-pointer rounded-sm hover:bg-slate-200 p-2">
          <RiEditLine className="text-2xl mx-auto   text-blue-600"/><p>Modifier</p></li>
        <li className="h-full cursor-pointer rounded-sm hover:bg-slate-200 p-2"> 
          <MdDeleteOutline className="text-2xl mx-auto   text-red-600"/> <p>Supprimer</p></li></ul>
    </div>
  )
}

export default SubBar