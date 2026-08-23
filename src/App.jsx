import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import JrpPanel from "./components/JrpPanel";
import ExpPanel from "./components/ExpPanel";

function App() {

  // either view jrp info or other experience
  const [mode, setMode] = useState("jrp"); 

  const modeStyles = {
    jrp: 'bg-off-white text-dark',
    exp: 'bg-dark text-off-white',
  }

  return <div className={`min-h-screen w-full transition-color duration-600 ${modeStyles[mode]}`}>
    <Header mode={mode} onJrp={() => setMode("jrp")} onExp={() => setMode("exp")}/>
    {
      mode === "jrp" ?
      <JrpPanel/>
      :
      <ExpPanel/>
    }
    <Footer mode={mode}/>
  </div>
}
export default App;