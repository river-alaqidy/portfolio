function Header({mode, onJrp, onExp}) {
    const isCardinal = mode === "jrp";
    const tabBase = "cursor-pointer transition-colors duration-200 font-semibold block border-2 p-2 shadow-[3px_3px_0_0] sm:p-3";
    const activeTab = isCardinal
        ? "border-cardinal bg-cardinal-light text-dark shadow-none translate-1"
        : "border-amber bg-amber-dark text-off-white shadow-none translate-1";
    const inactiveTab = isCardinal
        ? "border-cardinal bg-off-white text-dark shadow-cardinal hover:bg-cardinal-light hover:translate-1 hover:shadow-none"
        : "border-amber bg-dark text-off-white shadow-amber hover:bg-amber-dark hover:translate-1 hover:shadow-none";

    return <div className={`sticky top-0 z-50 pt-2 border-b-2 pb-2 ${mode === "jrp" ? "bg-off-white border-cardinal/35" : "bg-dark border-amber/35"}`}>
        <div className={"px-4 flex justify-between items-start"}>
            <h1 
                className={`transition-colors duration-200 font-semibold block border-2 ${mode == "jrp" ? "border-cardinal bg-off-white text-dark shadow-cardinal" : "border-amber bg-dark text-off-white shadow-amber"} p-2 shadow-[3px_3px_0_0] sm:p-3`}
            > 
                River Alaqidy
            
            </h1>
            <div role="tablist" className="-mb-0.5 flex flex-row-reverse gap-3">
                <button 
                onClick={onExp}
                role="tab"
                aria-selected={mode === "exp"}
                className={`${tabBase} ${mode === "exp" ? activeTab : inactiveTab}`}
               >
                <span className="sm:hidden">Exp</span>
                <span className="hidden sm:inline">Experience</span>
                </button>

                <button 
                onClick={onJrp}
                role="tab"
                aria-selected={mode === "jrp"}
                className={`${tabBase} ${mode === "jrp" ? activeTab : inactiveTab}`}
               >
                <span className="sm:hidden">JRP</span>
                <span className="hidden sm:inline">JRP Portfolio</span>
                </button>
            </div>
        </div>
    </div>
}
export default Header;