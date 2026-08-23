import uwLogo from "../assets/images/uw-logo-horizontal-color-web-digital.svg"
import { rotations, prodevCards } from "../data/jrp"

const badgeLabels = {
    done: "Complete",
    active: "In Progress",
    next: "Upcoming",
};

const badgeStyles = {
    done: "border-cardinal bg-cardinal-light text-cardinal shadow-cardinal",
    active: "border-cardinal bg-off-white text-cardinal shadow-cardinal",
    next: "border-dark/15 bg-dark/5 text-dark/50 shadow-dark/15",
};
 
const badgeDotStyles = {
    done: "bg-cardinal",
    active: "bg-cardinal",
    next: "bg-dark/40",
};

function ProfDev() {
  return (
    <section
      id="jrp-prodev"
      className="border-b-2 border-cardinal/35 px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)]"
    >
      <div className="flex gap-[2rem] md:gap-[5rem] items-start">
        <p className="text-[1rem] tracking-[0.12em] uppercase font-medium text-cardinal pt-[0.3rem]">
          Professional Development
        </p>

        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))' }}
        >
          {prodevCards.map((c) => (
            <div
                key={c.name}
                className="bg-cream p-6 shadow-[4px_4px_0_0] shadow-cardinal hover:shadow-[4px_4px_0_0,8px_8px_0_0] hover:shadow-cardinal hover:-translate-y-0.5 transition-all duration-200 hover:bg-white"
            >
              <p className="text-[0.54rem] tracking-[0.18em] uppercase text-cardinal mb-[0.55rem]">{c.type}</p>
              <p className="text-[1rem] font-normal text-dark mb-[0.35rem]">{c.name}</p>
              <p className="text-[0.56rem] tracking-[0.04em] text-muted-light leading-[1.6]">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutJrp() {
  return (
    <section
      id="jrp-about"
      className="border-b-2 border-cardinal/35 px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)] grid gap-[2rem] md:gap-[5rem]"
    >
    <div className="max-w-[820px] mx-auto grid gap-[2rem] md:gap-[5rem] items-start grid-cols-1 md:grid-cols-[160px_1fr]">
      <p className="text-[1rem] tracking-[0.12em] uppercase font-medium text-cardinal pt-[0.3rem]">
        About JRP
      </p>

      <div className="flex flex-col gap-[1.3rem] max-w-[600px]">
        <p className="text-[1.05rem] leading-[1.82] text-dark/58">
          The <span className="text-dark">Job Rotation Program</span> at the <span className="text-cardinal"><em>University of Wisconsin–Madison </em></span>
          provides focused career development for participants in the
          professional field of their choice, with career tracks available in
          finance, human resources, and information technology. It is a <span className="text-dark">2
          year program</span>, where Rotators get meaningful work experiences
          through 4, <span className="text-dark">6 month long rotations</span> in a variety of professional
          settings and job responsibilities.
        </p>
        <p className="text-[1.05rem] leading-[1.82] text-dark/58">
          <span className="text-cardinal"><em>The Information Technology Track</em></span> within the Job Rotation Program
          allows early career IT Professionals to gain a well-rounded breadth
          of experiences in fields including but not limited to — software
          engineering, cybersecurity, IT support, networking, cloud, etc.
        </p>
      </div>
    </div>
    </section>
  )
}


function RotationCard({ rotation }) {
    return (
        <div className="transition-color duration-200 flex h-full flex-col border-2 border-cardinal bg-off-white text-dark p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-cardinal hover:translate-3 hover:bg-cardinal-light hover:shadow-none hover:text-dark sm:p-6">
            <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-1.5">
                    <span className="text-sm font-bold text-cardinal">{rotation.num}</span>
                    <time className="text-xs/none font-semibold uppercase">
                        {rotation.period}
                    </time>
                </span>
 
                <span className={`inline-flex shrink-0 items-center gap-1.5 border-2 px-3 py-1.5 text-xs/none font-semibold uppercase shadow-[2px_2px_0_0] ${badgeStyles[rotation.badge] ?? badgeStyles.next}`}>
                    <span className={`size-2 ${badgeDotStyles[rotation.badge] ?? badgeDotStyles.next}`}></span>
                    {badgeLabels[rotation.badge] ?? rotation.badge}
                </span>
            </div>
 
            <h3 className="mt-2 text-xl font-semibold">
                {rotation.title}
            </h3>
 
            {rotation.org && (
                <p className="mt-1 text-sm text-dark/70">
                    {rotation.org}
                </p>
            )}
 
            <ul className="mt-2 list-disc pl-4 space-y-1 text-pretty text-sm">
                {rotation.bullets.map((bullet, i) =>
                    typeof bullet === "string" ? (
                        <li key={i}>{bullet}</li>
                    ) : (
                        <li key={i}>
                            {bullet.text}
                            <ul className="mt-1 list-[circle] pl-4 space-y-1">
                                {bullet.subBullets.map((subBullet, j) => (
                                    <li key={j}>{subBullet}</li>
                                ))}
                            </ul>
                        </li>
                    )
                )}
            </ul>
 
            {rotation.chips.length > 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {rotation.chips.map((chip, i) => (
                        <span
                            key={i}
                            className="border-2 border-cardinal bg-off-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-cardinal shadow-[2px_2px_0_0] shadow-cardinal"
                        >
                            {chip}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
 
function Rotations() {
    return (
        <section className="px-20 pt-15 pb-20 border-b-2 border-cardinal/35">
            <h2 className="text-5xl font-normal text-center mb-12 text-cardinal">
                Rotations
            </h2>
            <div className="grid grid-cols-2 gap-20">
                {rotations.map((rotation) => (
                    <RotationCard key={rotation.num} rotation={rotation} />
                ))}
            </div>
        </section>
    );
}

function JrpHero() {
    return (<div 
            className="bg-cardinal-light/15 flex px-[clamp(2rem,7vw,7rem)] py-[clamp(3.5rem,7vw,6rem)] gap-[5rem] items-center border-b-2 border-b border-cardinal/35"
        >
        <div className="flex-1 text-center">
            <img 
                src={uwLogo} 
                alt="UW Madison Logo"
                className="h-30 w-auto mb-[1.4rem] block mx-auto"
            />
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-normal leading-[1.06] tracking-[-0.03em] text-dark mb-[1.3rem]">
                Job Rotation<br />
                <em className="italic text-cardinal not-italic" style={{ fontStyle: 'italic' }}>Program</em>
            </h1>
        </div>
        <div className="flex-1 divide-y-2 divide-cardinal border-2 border-cardinal shadow-[4px_4px_0_0] shadow-cardinal">
            <div>
                <div
                className="flex items-center justify-between gap-4 bg-off-white px-4 py-3 font-medium text-dark hover:bg-cardinal-light"
                >
                    <div className="flex gap-3">
                        <span className="font-semibold text-cardinal">01</span>
                        <span className="font-semibold">IT User Support</span>
                    </div>
                    <span
                        className="inline-flex items-center gap-1.5 border-2 border-cardinal bg-cardinal-light px-3 py-1.5 text-sm/none font-semibold text-cardinal shadow-[2px_2px_0_0] shadow-cardinal"
                        >
                        <span className="size-2 bg-cardinal"></span>
 
                        Complete
                    </span>
                </div>
            </div>
            <div>
                <div
                className="flex items-center justify-between gap-4 bg-off-white px-4 py-3 font-medium text-dark hover:bg-cardinal-light"
                >
                <div className="flex gap-3">
                    <span className="font-semibold text-cardinal">02</span>
                    <span className="font-semibold">Software Engineering</span>
                </div>
                <span
                    className="inline-flex items-center gap-1.5 border-2 border-cardinal bg-cardinal-light px-3 py-1.5 text-sm/none font-semibold text-cardinal shadow-[2px_2px_0_0] shadow-cardinal"
                    >
                    <span className="size-2 bg-cardinal"></span>
 
                    Complete
                </span>
                </div>
            </div>
            <div>
                <div
                className="flex items-center justify-between gap-4 bg-off-white px-4 py-3 font-medium text-dark hover:bg-cardinal-light"
                >
                <div className="flex gap-3">
                    <span className="font-semibold text-cardinal">03</span>
                    <span className="font-semibold">Full Stack Software Development</span>
                </div>
                <span
                    className="inline-flex items-center gap-1.5 border-2 border-cardinal bg-off-white px-3 py-1.5 text-sm/none font-semibold text-cardinal shadow-[2px_2px_0_0] shadow-cardinal"
                    >
                    <span className="size-2 bg-cardinal"></span>
 
                    Active
                </span>
                </div>
            </div>
            <div>
                <div
                className="flex items-center justify-between gap-4 bg-off-white px-4 py-3 font-medium text-dark hover:bg-cardinal-light"
                >
                <div className="flex gap-3">
                    <span className="font-semibold text-cardinal">04</span>
                    <span className="font-semibold">TBD</span>
                </div>
                <span
                    className="inline-flex items-center gap-1.5 border-2 border-dark/15 bg-dark/5 px-3 py-1.5 text-sm/none font-semibold text-dark/50 shadow-[2px_2px_0_0] shadow-dark/15"
                >
                <span className="size-2 bg-dark/40"></span>
 
                    Upcoming
                </span>
                </div>
            </div>
        </div>
    </div>);
}



function JrpPanel() {

    return <div>
        <JrpHero/>
        <Rotations/>
        <AboutJrp/>
        <ProfDev/>
    </div>
    // return <div className="flex px-20 gap-20 pt-20">
    //     <a 
    //         href="#"
    //         className="transition-color duration-200 block border-2 border-cardinal bg-off-white text-dark p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-cardinal hover:translate-3 hover:bg-cardinal-light hover:shadow-none hover:text-dark sm:p-6"
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
    //         className="transition-color duration-200 block border-2 border-cardinal bg-off-white text-dark p-4 shadow-[4px_4px_0_0,8px_8px_0_0,12px_12px_0_0] shadow-cardinal hover:translate-3 hover:bg-cardinal-light hover:shadow-none hover:text-dark sm:p-6"
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
export default JrpPanel;