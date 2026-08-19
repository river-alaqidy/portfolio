function Header({mode, setMode}) {
    return(
        <header className={`sticky top-0 z-300 flex items-stretch h-14.5 transition-all duration-600 backdrop-blur-md ${mode === 'jrp' ? "bg-off-white shadow-[0_1px_0_rgba(197,5,12,0.13),0_2px_16px_rgba(197,5,12,0.04)]" : "bg-dark shadow-[0_1px_0_rgba(196,154,46,0.18),0_2px_20px_rgba(0,0,0,0.3)]"}`}>
            <span className={`text-[.66rem] tracking-[0.2rem] uppercase flex items-center px-8 font-sans transition-colors duration-500 ${mode === 'jrp' ? 'text-cardinal' : 'text-amber/80'}`}>
                River Alaqidy
            </span>
            <div className="flex ml-auto h-full pr-6">
                <button 
                    onClick={() => setMode('jrp')}
                    className={`relative text-[0.66rem] tracking-[0.14em] uppercase bg-transparent border-none cursor-pointer px-8 h-full transition-colors duration-300 font-sans ${mode === 'jrp' ? 'border-cardinal/13 text-cardinal' : 'border-amber/18 text-off-white/30 hover:text-off-white/65'}`}>
                    JRP Porftolio
                    {mode === 'jrp' && <span className="absolute bottom-0 left-0 right-0 h-0.75 rounded-[3px] bg-cardinal"/>}
                </button>
                <button 
                    onClick={() => setMode('exp')}
                    className={`relative text-[0.66rem] tracking-[0.14em] uppercase bg-transparent border-none cursor-pointer px-8 h-full transition-colors duration-300 font-sans ${mode === 'exp' ? "border-amber/18 text-amber" : "border-cardinal/13 text-dark/30 hover:text-dark/65"}`}>
                    Experience
                    {mode === 'exp' && <span className="absolute bottom-0 left-0 right-0 h-0.75 rounded-[3px] bg-amber" />}
                </button>
            </div>
            {/* <div className="hidden md:flex items-center gap-6 px-8">
                {["About", "Contact"].map((l) => (
                    <a 
                        key={l} 
                        href={l === "About" ? "#about" : "#"} 
                        className={`text-[0.6rem] tracking-[0.12em] uppercase transition-colors font-sans ${mode === 'jrp' ? "text-dark/35 hover:text-cardinal" : "text-off-white/25 hover:text-amber"}`}>
                        {l}
                    </a>
                ))}
            </div> */}
        </header>
    )
} 
export default Header