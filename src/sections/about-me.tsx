import Skills from "@/components/skills"

const AboutMe = () => {
    return(<>
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <div className="flex flex-col md:flex-row">
                <div className="h-[40rem] w-full md:w-1/2 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                        <div className="max-w-2xl mx-auto p-4">
                            <h1 className="text-neutral-100 scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
                                A little about me
                            </h1>
                            <p></p>
                            <p className="text-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
                                Hi, I’m <b>Prinoy D’Costa</b>, a Full-Stack Engineer with a passion for frontend development.
                                Over the past 5 years, I’ve built robust web applications, specializing in React and .NET Core. My journey into software engineering began as a kid, fascinated by how things worked behind the screen—how code brought ideas to life. That curiosity led me to tinker with AMXX plugins for Counter-Strike 1.6 as a teenager, marking my first dive into programming. From there, I became hooked on blending that foundational knowledge with web development.
                                Beyond coding, I’m an avid Manchester United fan and enjoy playing blitz chess for fun. I also take pride in mentoring and leading—whether guiding juniors at work (earning recognition like Leader of the Year and quarterly team awards) or building tools that make a difference, like the Aternos Auto-Confirm Extension and Auto Port-Off on DDoS plugin.
                                I love crafting purposeful, detail-oriented solutions—both professionally and in my free time. Let’s build something great together!
                            </p>
                        </div>
                </div>
                <div className="md:h-[40rem] w-full md:w-1/2 rounded-md bg-neutral-950 relative flex flex-col items-center md:justify-center ">
                    <Skills />
                </div>
            </div>
      </div>
    </div>
    </>)
}

export default AboutMe
