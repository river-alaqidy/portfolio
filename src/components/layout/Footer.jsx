
function Footer({mode}) {
    return <div>
    <footer className={`px-[clamp(2rem,7vw,7rem)] py-[1.8rem] flex justify-between items-center border-t transition-colors duration-500 ${mode === 'jrp' ? "border-cardinal/13" : "border-amber/18"}`}>
        <span className={`text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-500 font-display ${mode === 'jrp' ? "text-muted-light" : "text-off-white/22"}`}>
            River Alaqidy - Madison, WI
        </span>
        <ul className="flex gap-8 list-none m-0 p-0">
            {["Github", "LinkedIn", "Email"].map((l) => (
                <li key={l}>
                    <a href="#" className={`text-[0.58rem] tracking-widest uppercase transition-colors font-display ${mode === 'jrp' ? "text-muted-light hover:text-cardinal" : "text-off-white/22 hover:text-amber"}`}>{l}</a>
                </li>
            ))}
        </ul>
    </footer>
</div>
}
export default Footer