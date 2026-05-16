const aboutSkills = [
  'Go', 'JavaScript', 'React', 'AWS', 'Python',
  'SQL', 'Linux', 'Node.js', 'Networking', 'Git', 'Agile',
]

function About({ mode }) {
  const isJrp = mode === 'jrp'

  return (
    <section
      id="about"
      className={`px-[clamp(2rem,7vw,7rem)] py-[clamp(3rem,5.5vw,5.5rem)] grid gap-[5rem] items-start transition-colors duration-600 border-t ${
        isJrp ? 'border-cardinal/8' : 'border-amber/10'
      }`}
      style={{ gridTemplateColumns: '160px 1fr' }}
    >
      <p
        className={`text-[0.65rem] tracking-[0.12em] uppercase font-sans font-medium pt-[0.3rem] transition-colors duration-500 ${
          isJrp ? 'text-cardinal' : 'text-amber/65'
        }`}
      >
        About
      </p>

      <div
        className="grid gap-[3rem]"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <p
          className={`text-[1.05rem] leading-[1.8] transition-colors duration-500 ${
            isJrp ? 'text-dark/65' : 'text-off-white/45'
          }`}
        >
          <strong
            className={`font-semibold ${isJrp ? 'text-dark' : 'text-off-white'}`}
          >
            Computer Science graduate from UW–Madison
          </strong>
          , currently two rotations into the university's IT program. Before
          that: a year building production web tools at SSEC, a contracted AWS
          deployment for PBS Wisconsin, and time spent as a peer TA.
        </p>

        <div className="flex flex-wrap gap-2 content-start">
          {aboutSkills.map((s) => (
            <span
              key={s}
              className={`text-[0.56rem] tracking-[0.08em] uppercase font-sans px-[0.68rem] py-[0.28rem] rounded-full border cursor-default transition-colors duration-500 ${
                isJrp
                  ? 'border-cardinal/13 text-muted-light hover:border-cardinal hover:text-cardinal'
                  : 'border-amber/18 text-off-white/30 hover:border-amber hover:text-amber'
              }`}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About