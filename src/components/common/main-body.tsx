import AboutMe from "@/sections/about-me"
import ContactMe from "@/sections/contact-me"
import Experience from "@/sections/experience"
import HeroBanner from "@/sections/hero-banner"
import Projects from "@/sections/projects"
import Technologies from "@/sections/technologies"
import { Element } from 'react-scroll';

const MainBody = () => {
    return(<div id="container-main">
        <HeroBanner />
        <Technologies />
        <Element name="introduction">
            <AboutMe />
        </Element>
        <Element name="experience">
            <Experience />
        </Element>
        <Element name="projects">
            <Projects />
        </Element>
            <ContactMe />  
    </div>)
}
export default MainBody