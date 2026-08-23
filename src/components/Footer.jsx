function Footer({mode}) {
    const links = [
        { label: "Github", href: "https://github.com/river-alaqidy" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/river-alaqidy" },
    ]
    return <div>
        <footer className={`px-[clamp(2rem,5vw,7rem)] py-[1.8rem] flex justify-between items-center transition-colors duration-500`}>
            <span className={`text-[0.58rem] tracking-[0.14em] uppercase transition-colors duration-500 font-sans ${mode === 'jrp' ? "text-muted-light" : "text-off-white/22"}`}>
                River Alaqidy - Software Engineer | IT Professional
            </span>
            <ul className="flex gap-8 list-none m-0 p-0">
                {links.map(({ label, href }) =>  (
                    <li key={label}>
                        <a href={href} 
                            target="_blank"
                            rel="noreferrer" 
                            className={`text-[0.58rem] tracking-widest uppercase transition-colors font-sans ${mode === 'jrp' ? "text-muted-light hover:text-cardinal" : "text-off-white/22 hover:text-amber"}`}>{label}</a>
                    </li>
                ))}
            </ul>
        </footer>
    </div>
}
export default Footer;