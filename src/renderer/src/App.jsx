import Accueil from "./components/Accueil/Accueil"
import NavBar from "./components/NavBar"
import PageNav from "./components/PageNav"
import Patients from "./components/patients/Patients"
import Salle from "./components/Salle/Salle"
import Sidebar from "./components/Sidebar"
import SubBar from "./components/SubBar"

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
  <div className="flex flex-col h-screen select-none">
  <NavBar/>
  <SubBar/>
  <div className="flex flex-1 ">
  <Sidebar/>
  <div className="flex flex-col w-full">
  <PageNav/>
   <Routes>
              <Route path="/" element={<Accueil />} />
              <Route path="/patients" element={<Patients />} />
               <Route path="/salle" element={<Salle/>} />
 </Routes>
  </div>
  </div>

</div>
</BrowserRouter>
)

}

export default App
