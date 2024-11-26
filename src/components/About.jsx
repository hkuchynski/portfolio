const aboutItems = [
  {
    label: 'Project done',
    number: 30
  },
  {
    label: 'Years of experience',
    number: 7
  }
];


const About = () => {
  return (
    <section 
        id="about"
        className="section"
    >
        <div className="container"> 

            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8
                md:text-xl md:max-w-[60ch]">
                    Welcome! I&apos;m Hanna, 
                    a highly skilled and results-driven Software Engineer with over 7 years of experience 
                    in developing dynamic, high-performance web applications. 
                    Proficient in modern JavaScript frameworks, including React, Node.js, and Angular, 
                    with a strong foundation in front-end and back-end development. 
                    Passionate about writing clean, efficient code and optimizing application performance. 
                    Adept at collaborating with cross-functional teams to deliver 
                    innovative solutions that meet business objectives.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img 
                        src="/images/logo.svg" 
                        alt="Logo" 
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]" 
                    />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About