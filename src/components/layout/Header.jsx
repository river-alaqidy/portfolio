function Header({mode, setMode}) {

    return(
        <div>
           <header className={`sticky top-0 z-300 flex items-stretch h-14.5 transition-all duration-500 backdrop-blur-md ${mode === 'jrp' ? "bg-off-white shadow-[0_1px_0_rgba(197,5,12,0.13),0_2px_16px_rgba(197,5,12,0.04)]" : "bg-dark shadow-[0_1px_0_rgba(196,154,46,0.18),0_2px_20px_rgba(0,0,0,0.3)]"}`}>
                <span>
                    River Alaqidy
                </span>
                <div>
                    <button onClick={() => setMode('jrp')}>
                        JRP Porftolio
                    </button>
                    <button onClick={() => setMode('exp')}>
                        Experience
                    </button>
                </div>
                <div>
                    {["About", "Contact"].map((l) => (
                        <a 
                            key={l} 
                            href={l === "About" ? "#about" : "#"} 
                            className={`${mode === 'jrp' ? "text-dark/35 hover:text-cardinal" : "text-off-white/25 hover:text-amber"}`}>
                            {l}
                        </a>
                    ))}
                </div>
           </header>
        </div>
    )
} 
export default Header