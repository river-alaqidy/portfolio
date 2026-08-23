import experience from "../data/exp";
import { sideProjects } from "../data/exp";
import { useState } from "react";

function ProjectsSection() {
    const [hovered, setHovered] = useState(null);
    const lastIndex = sideProjects.length - 1;

    return (
        <section
          id="exp-projects"
          className="bg-amber-dark/15 border-b-2 border-amber px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)]"
          style={{ scrollMarginTop: "96px" }}
        >
            <div className="flex gap-[2rem] md:gap-[5rem] items-start mb-8">
                <p className="w-[10rem] shrink-0 text-[1rem] tracking-[0.12em] uppercase font-medium text-amber pt-[0.3rem]">
                    Projects
                </p>
                <p className="pt-1.5 text-sm text-off-white/60 leading-[1.72] max-w-[540px]">
                    Projects built outside of professional experience. Full source
                    on{" "}
                    <a
                        href="https://github.com/river-alaqidy"
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber border-b-2 border-amber/40 no-underline hover:border-amber transition-colors duration-200"
                    >
                        GitHub ↗
                    </a>
                </p>
            </div>
 
            <div className="flex gap-[2rem] md:gap-[5rem] items-start">
                <div className="w-[10rem] shrink-0" />
                <div
                  className={`flex-1 flex flex-col border-t-2 border-b-2 transition-colors duration-200 ${
                      hovered === 0 ? "border-t-amber" : "border-t-amber/20"
                  } ${hovered === lastIndex ? "border-b-amber" : "border-b-amber/20"}`}
                >
                    {sideProjects.map((p, i) => (
                        <div
                            key={p.name}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`flex items-baseline justify-between gap-8 py-[1.1rem] transition-colors duration-200 ${
                                i === 0
                                    ? ""
                                    : `border-t-2 ${
                                          hovered === i || hovered === i - 1
                                              ? "border-t-amber"
                                              : "border-t-amber/20"
                                      }`
                            } ${hovered === i ? "text-amber" : ""}`}
                        >
                            <div className="flex items-baseline gap-[1.2rem] flex-1 min-w-0">
                                <span className={`text-[1rem] font-semibold whitespace-nowrap transition-colors duration-200 ${
                                    hovered === i ? "text-amber" : "text-off-white"
                                }`}>
                                    {p.name}
                                </span>
                                <span className={`text-sm overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-200 ${
                                    hovered === i ? "text-off-white/70" : "text-off-white/50"
                                }`}>
                                    {p.desc}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <span className="border-2 border-amber bg-amber-dark px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-amber shadow-[2px_2px_0_0] shadow-amber">
                                    {p.lang}
                                </span>
                                <a
                                    href={p.href || "#"}
                                    className="border-2 border-amber px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-amber no-underline shadow-[2px_2px_0_0] shadow-amber hover:bg-amber-dark transition-colors duration-200"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ExpEntry({ entry }) {
    return (
        <div className="transition-color duration-200 block border-2 border-amber bg-off-dark text-off-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-amber hover:translate-3 hover:bg-amber-dark hover:shadow-none hover:text-off-white sm:p-6">
            <span className="inline-flex items-center gap-1.5">
                <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                >
                    <path
                        fillRule="evenodd"
                        d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                        clipRule="evenodd"
                    />
                </svg>
 
                <time className="text-xs/none font-semibold uppercase">
                    {entry.dates}
                </time>
            </span>
 
            <h3 className="mt-1 text-xl font-semibold">
                {entry.title}
            </h3>
 
            <p className="mt-1 text-sm text-off-white/70">
                {entry.org} · {entry.location}
            </p>
 
            <ul className="mt-2 list-disc pl-4 space-y-1 text-pretty">
                {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-2">
                {entry.skills.map((skill, i) => (
                    <span
                        key={i}
                        className="border-2 border-amber bg-amber-dark px-3 py-1.5 text-sm/none font-semibold text-off-white shadow-[2px_2px_0_0] shadow-amber"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
 
function ExpSection({ entry }) {
    const id = entry.section.toLowerCase().replace(/\s+/g, "-");
    return (
        <section
          id={id}
          className="border-b-2 border-amber px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)]"
        >
          <div className="flex gap-[2rem] md:gap-[5rem] items-start">
            <p className="w-[10rem] shrink-0 text-[1rem] tracking-[0.12em] uppercase font-medium text-amber pt-[0.3rem]">
              {entry.section}
            </p>
 
            <div className="flex-1">
              <ExpEntry entry={entry} />
            </div>
          </div>
        </section>
    )
}


function ExpHero() {
    return (<div 
            className="flex px-[clamp(2rem,7vw,7rem)] py-[clamp(3.5rem,7vw,6rem)] gap-[5rem] items-center border-b-2 border-b border-amber"
        >
        <div className="flex-1 text-center">
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-normal leading-[1.06] tracking-[-0.03em] text-off-white mb-[1.3rem]">
                Professional<br />
                <em className="italic text-amber not-italic" style={{ fontStyle: 'italic' }}>Experience</em>
            </h1>
            <p className="text-[1rem] leading-[1.78] text-off-white/38 max-w-[400px] mb-[2rem] mx-auto">Background outside the Job Rotation Program, including web development, a capstone project, teaching, and projects.</p>
        </div>
        <div className="flex-1 divide-y-2 divide-amber border-2 border-amber shadow-[4px_4px_0_0] shadow-amber">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex cursor-pointer items-center justify-between gap-4 bg-dark px-4 py-3 font-medium text-off-white hover:bg-amber-dark"
                >
                    <div className="flex gap-3">
                        <span className="font-semibold text-amber">01</span>
                        <span className="font-semibold">IT User Support</span>
                    </div>
                    <div className="flex gap-3">
                        <span
                            className="inline-flex items-center gap-1.5 border-2 border-amber bg-amber-dark px-3 py-1.5 text-sm/none font-semibold text-amber shadow-[2px_2px_0_0] shadow-amber"
                            >
                            <span className="size-2 bg-amber"></span>

                            Complete
                        </span>
                        <svg
                            aria-hidden="true"
                            className="size-5 shrink-0 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </summary>

                <div className="border-t-2 border-amber p-4">
                <p className="text-off-white">
                    Wisconsin Public Media August 2025 - Feburary 2026
                </p>
                </div>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex cursor-pointer items-center justify-between gap-4 bg-dark px-4 py-3 font-medium text-off-white hover:bg-amber-dark"
                >
                    <div className="flex gap-3">
                        <span className="font-semibold text-amber">01</span>
                        <span className="font-semibold">IT User Support</span>
                    </div>
                    <div className="flex gap-3">
                        <span
                            className="inline-flex items-center gap-1.5 border-2 border-amber bg-amber-dark px-3 py-1.5 text-sm/none font-semibold text-amber shadow-[2px_2px_0_0] shadow-amber"
                            >
                            <span className="size-2 bg-amber"></span>

                            Complete
                        </span>
                        <svg
                            aria-hidden="true"
                            className="size-5 shrink-0 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </summary>

                <div className="border-t-2 border-amber p-4">
                <p className="text-off-white">
                    Wisconsin Public Media August 2025 - Feburary 2026
                </p>
                </div>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex cursor-pointer items-center justify-between gap-4 bg-dark px-4 py-3 font-medium text-off-white hover:bg-amber-dark"
                >
                    <div className="flex gap-3">
                        <span className="font-semibold text-amber">01</span>
                        <span className="font-semibold">IT User Support</span>
                    </div>
                    <div className="flex gap-3">
                        <span
                            className="inline-flex items-center gap-1.5 border-2 border-amber bg-amber-dark px-3 py-1.5 text-sm/none font-semibold text-amber shadow-[2px_2px_0_0] shadow-amber"
                            >
                            <span className="size-2 bg-amber"></span>

                            Complete
                        </span>
                        <svg
                            aria-hidden="true"
                            className="size-5 shrink-0 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </summary>

                <div className="border-t-2 border-amber p-4">
                <p className="text-off-white">
                    Wisconsin Public Media August 2025 - Feburary 2026
                </p>
                </div>
            </details>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                className="flex cursor-pointer items-center justify-between gap-4 bg-dark px-4 py-3 font-medium text-off-white hover:bg-amber-dark"
                >
                    <div className="flex gap-3">
                        <span className="font-semibold text-amber">01</span>
                        <span className="font-semibold">IT User Support</span>
                    </div>
                    <div className="flex gap-3">
                        <span
                            className="inline-flex items-center gap-1.5 border-2 border-amber bg-amber-dark px-3 py-1.5 text-sm/none font-semibold text-amber shadow-[2px_2px_0_0] shadow-amber"
                            >
                            <span className="size-2 bg-amber"></span>

                            Complete
                        </span>
                        <svg
                            aria-hidden="true"
                            className="size-5 shrink-0 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </summary>

                <div className="border-t-2 border-amber p-4">
                <p className="text-off-white">
                    Wisconsin Public Media August 2025 - Feburary 2026
                </p>
                </div>
            </details>  
        </div>
    </div>);
}

function ExpPanel() {
    return <div>
        <ExpHero/>
        {experience.map((entry, i) => (
            <ExpSection key={i} entry={entry} />
        ))}
        <ProjectsSection/>
    </div>
    //  return <div className="flex px-20 gap-20 pt-20">
    //     <a 
    //         href="#"
    //          className="transition-color duration-200 block border-2 border-amber bg-off-dark text-off-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-amber hover:translate-3 hover:bg-amber-dark hover:shadow-none hover:text-off-white sm:p-6"
    //     >
    //         <span className="inline-flex items-center gap-1.5">
    //             <svg
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 16 16"
    //             fill="currentColor"
    //             className="size-4"
    //             >
    //             <path
    //                 fillRule="evenodd"
    //                 d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
    //                 clipRule="evenodd"
    //             />
    //             </svg>

    //             <time dateTime="2025-04-01" className="text-xs/none font-semibold uppercase">
    //             April 1, 2025
    //             </time>
    //         </span>

    //         <h3 className="mt-1 text-xl font-semibold">
    //             How I built my first website with Nuxt, Tailwind CSS and Vercel
    //         </h3>

    //         <p className="mt-2 line-clamp-2 text-pretty">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
    //             maiores deleniti consectetur nobis et eaque.
    //         </p>
    //     </a>
    //     <a
    //         href="#"
    //         className="transition-color duration-200 block border-2 border-amber bg-off-dark text-off-white p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-amber hover:translate-3 hover:bg-amber-dark hover:shadow-none hover:text-off-white sm:p-6"
    //     >
    //         <span className="inline-flex items-center gap-1.5">
    //             <svg
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 16 16"
    //             fill="currentColor"
    //             className="size-4"
    //             >
    //             <path
    //                 fillRule="evenodd"
    //                 d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
    //                 clipRule="evenodd"
    //             />
    //             </svg>

    //             <time dateTime="2025-04-01" className="text-xs/none font-semibold uppercase">
    //             April 1, 2025
    //             </time>
    //         </span>

    //         <h3 className="mt-1 text-xl font-semibold">
    //             How I built my first website with Nuxt, Tailwind CSS and Vercel
    //         </h3>

    //         <p className="mt-2 line-clamp-2 text-pretty">
    //             Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
    //             maiores deleniti consectetur nobis et eaque.
    //         </p>
    //     </a>

    // </div>
}
export default ExpPanel;