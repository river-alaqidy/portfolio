function Header({mode, onJrp, onExp}) {
    return <div className="pt-4">
        <div className={`border-b-2 ${mode === "jrp" ? "border-cardinal" : "border-amber"} px-4 flex justify-between`}>
            <h1 className={`px-2 py-2 font-semibold ${mode === "jrp" ? "text-dark" : "text-off-white"}`}>
                River Alaqidy
            </h1>
            <div role="tablist" className="-mb-0.5 flex flex-row-reverse">
                <button 
                onClick={onExp}
                role="tab"
                aria-selected="true"
                className={`cursor-pointer ${mode === "exp" ? "border-2 border-x-amber border-t-amber border-b-0 text-amber" : "text-dark/30 hover:text-cardinal hover:border-text-dark/65"} px-6 py-2 font-semibold`}
                >
                Experience
                </button>

                <button 
                onClick={onJrp}
                role="tab"
                aria-selected="false"
                className={`cursor-pointer ${mode === "jrp" ? "border-2 border-x-cardinal border-t-cardinal border-b-transparent text-dark" : "text-off-white/30 hover:text-off-white/65 hover:border-text-off-white/65"} px-6 py-2 font-semibold`}
                >
                JRP
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