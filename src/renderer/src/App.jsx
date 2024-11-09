import Accueil from "./components/Accueil/Accueil"
import NavBar from "./components/NavBar"
import PageNav from "./components/PageNav"
import Sidebar from "./components/Sidebar"
import SubBar from "./components/SubBar"



function App() {
  return (
  <div className="flex flex-col h-screen select-none">
  <NavBar/>
  <SubBar/>
  <div className="flex flex-1 ">
  <Sidebar/>
  <div className="flex flex-col w-full">
  <PageNav/>
  <Accueil/>
  </div>
  </div>

</div>
)
}

export default App
