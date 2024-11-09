import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { BsPersonStanding } from "react-icons/bs";
import { BsFileText } from "react-icons/bs"
import { HiOutlineClipboardList } from "react-icons/hi";
import { HiUserAdd } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
const cards=[
  {id:1,
    name:"Nouveau patient",
    icon:<HiUserAdd className=" text-sky-600 text-3xl "/>
  },
   {id:2,
    name:"Patients",
    icon:<BsPersonStanding className=" text-red-600 text-3xl "/>
  },
   {id:3,
    name:"Ordonnance",
    icon:<BsFileText className=" text-violet-600 text-2xl "/>
  },
   {id:4,
    name:"Consultation",
    icon:<HiOutlineClipboardList className=" text-green-600 text-3xl "/>
  },
   {id:5,
    name:"Compte-rendu",
    icon:<HiUserAdd className=" text-green-600 text-3xl "/>
  },
   {id:6,
    name:"Courrier",
    icon:<HiUserAdd className=" text-green-600 text-3xl "/>
  },
   {id:7,
    name:"Examen Lab.",
    icon:<HiUserAdd className=" text-green-600 text-3xl "/>
  },
  {id:8,
    name:"Demande radio",
    icon:<HiUserAdd className=" text-green-600 text-3xl "/>
  },
  
]
const Accueil = () => {
  return (
    <div className=" h-full w-full  text-center flex">
      <div className="w-10/12">
      <h1 className="text-6xl my-6 font-bold text-green-700">Cabinet Achref</h1>
        <div className="flex items-center w-fit mx-auto text-left">
            <p className="mr-8">Patient</p> 
            <div className="border-2 px-2 rounded-l-sm w-96 border-gray-300 cursor-pointer">Foulen</div>
            <button className="bg-gray-300 py-1.5  px-1 text-gray-700"><IoIosArrowDown/></button>
              <button className="bg-gray-300 py-1.5 px-1  text-gray-700"><FaXmark/></button>
       <button className=" ml-8 border border-gray-400 px-2 rounded-sm bg-gray-200">Dossier</button>
       </div> 
       <div className="grid grid-cols-4 gap-y-8 items-center w-11/12 justify-items-center mt-20 mx-auto">
        {cards.map((card)=>(
             
        <div className="border border-gray-400 rounded-sm w-40 h-20 justify-center cursor-pointer hover:bg-slate-300 bg-gray-200 flex flex-col items-center"> {card.icon}<p>{card.name}</p>
    
        </div>
))}


       </div>
         </div>
       <div className="w-2/12 bg-orange-100 items-end">
       <h1 className="w-full bg-orange-200 text-center text-zinc-800 py-2 font-semibold">Alertes</h1></div>
      
    </div>
  )
}

export default Accueil