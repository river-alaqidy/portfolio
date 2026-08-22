function Header({mode, onJrp, onExp}) {
    return <div className={`pt-4 border-b-2 pb-4 ${mode === "jrp" ? "border-cardinal" : "border-amber"}`}>
        <div className={"px-4 flex justify-between items-start"}>
            <h1 
                className={`transition-colors duration-200 font-semibold block border-2 ${mode == "jrp" ? "border-cardinal bg-off-white text-dark shadow-cardinal" : "border-amber bg-dark text-off-white shadow-amber"} p-4 shadow-[4px_4px_0_0] sm:p-6"`}
            > 
                River Alaqidy
            
            </h1>
            <div role="tablist" className="-mb-0.5 flex flex-row-reverse gap-4">
                <button 
                onClick={onExp}
                role="tab"
                aria-selected="true"
                className={`cursor-pointer transition-colors duration-200 font-semibold block border-2 ${mode == "jrp" ? "border-cardinal bg-off-white text-dark shadow-cardinal hover:bg-cardinal-light hover:text-dark" : "border-amber bg-dark text-off-white shadow-amber hover:bg-amber-dark hover:text-off-white"} p-4 shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none sm:p-6"`}
               >
                Experience
                </button>

                <button 
                onClick={onJrp}
                role="tab"
                aria-selected="false"
                className={`cursor-pointer transition-colors duration-200 font-semibold block border-2 ${mode == "jrp" ? "border-cardinal bg-off-white text-dark shadow-cardinal hover:bg-cardinal-light hover:text-dark" : "border-amber bg-dark text-off-white shadow-amber hover:bg-amber-dark hover:text-off-white"} p-4 shadow-[4px_4px_0_0] hover:translate-1 hover:shadow-none sm:p-6"`}
               >
                JRP Portfolio
                </button>
            </div>
        </div>

        {/* <div role="tabpanel" className="mt-4">
            <p className="text-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic dicta
                quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus iste odio
                consectetur molestias iusto cupiditate ullam laborum veniam quos officia. Quos, temporibus
                perspiciatis!
            </p>
        </div> */}
    </div>
}
export default Header;