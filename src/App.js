import Navbar from "./components/Navbar";
import StartPage from "./components/StartPage";
import Information from "./components/Information";
import KBT from "./components/KBT";
import LifeSpan from "./components/LifeSpan";
import ContactMe from "./components/ContactMe";
import Emdr from "./components/Emdr";


function App() {
  return (
    <div>
       <Navbar/>
       <StartPage/>
       <Information/>
       <KBT/>
       <Emdr/>
       <LifeSpan/>
       <ContactMe/>
    </div>
  );
}

export default App;
