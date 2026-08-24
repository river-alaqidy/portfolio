import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useRef, useState } from "react";
import JrpPanel from "./components/JrpPanel";
import ExpPanel from "./components/ExpPanel";

function App() {

  const [mode, setMode] = useState("jrp"); 
  const panelRef = useRef(null);

  const modeStyles = {
    jrp: 'bg-off-white text-dark',
    exp: 'bg-dark text-off-white',
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    //panelRef.current?.focus({ preventScroll: true });
  }, [mode]);

  return <div className={`min-h-screen w-full transition-color duration-600 ${modeStyles[mode]}`}>
    <Header mode={mode} onJrp={() => setMode("jrp")} onExp={() => setMode("exp")}/>
    <div ref={panelRef} tabIndex={-1}>
      {
        mode === "jrp" ?
        <JrpPanel/>
        :
        <ExpPanel/>
      }
    </div>
    <Footer mode={mode}/>
  </div>
}
export default App;