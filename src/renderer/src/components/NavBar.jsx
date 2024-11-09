
import { AiFillHome } from "react-icons/ai";
const NavBar = () => {
 const Menu = [
    {
        title: "Acceuil",
      
    },
    {
        title: "Données",
 
    },
    {
        title: "Gestion",
    
    },
    {
        title: "Général",
    }
];

  return (
  <div className="w-full py-1 text-sm">
    <ul className=" max-w-72 ml-4 flex justify-between">
   {Menu.map((element) => (
        <li key={element.title} className="cursor-pointer" >
        <p>{element.title}</p>

        </li>
    ))}
     </ul>
        </div>
        )
}

export default NavBar
