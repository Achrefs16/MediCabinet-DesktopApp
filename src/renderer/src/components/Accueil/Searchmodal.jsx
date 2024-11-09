import React from 'react'

const Searchmodal = () => {
  return (
    <div className="w-6/12 h-3/5 rounded border border-zinc-300 shadow-lg float-start absolute translate-x-1/4 bg-white">
         <div className="p-4 flex">
    {/* Search Bar */}
    <input
      type="text"
      placeholder="Date de naissance"
      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-gray-500"
    />
    <button className=" ml-4 border border-gray-400 px-2 rounded-sm bg-gray-200">Trouver</button>
  </div>
    </div>
  )
}

export default Searchmodal