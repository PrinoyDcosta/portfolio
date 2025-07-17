import { Button } from "../ui/button"
import NavbarIcon from "../../assets/navbar_logo_small.png"
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { IconMenu2, IconDownload, IconBrandGithub } from "@tabler/icons-react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import MobileMenu from "../mobile-menu";
import Resume from "../../assets/resume/Prinoy_DCosta_CV.pdf"
import { track } from '@vercel/analytics/react';

const Navbar = () => {

    const onDownloadResume = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Prinoy_DCosta_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        track('Resume_downloaded', {}, { flags: ['resume'] });
    }

    return (<div className="py-5 px-5 flex lg:px-56 md:flex-row justify-between bg-neutral-950 backdrop-blur-md bg-opacity-50 fixed w-full top-0 start-0 end-0 z-50 shadow-2xl">
                <div className="w-30">
                  <a onClick={()=> scroll.scrollToTop()} className="cursor-pointer">
                    <img
                      src={NavbarIcon}
                      alt="startup template"
                      width={250}
                      height={250}
                      className="w-full rounded-lg"
                    />
                  </a>
                </div>
                <header className="text-white justify-center items-center hidden lg:flex">
                      <nav>
                        <ul className="flex justify-center items-center">
                            <li>
                            <Link activeClass="[&_button]:text-purple-500" to="introduction" smooth={true} duration={500} spy offset={-100}>
                              <Button size="lg" className="text-neutral-50 text-lg font-bold hover:text-purple-300" variant="ghost">Introduction</Button>
                            </Link>
                            </li>
                            <li>
                               <Link activeClass="[&_button]:text-purple-500" to="experience" smooth={true} duration={500} spy offset={-100}>
                                <Button size="lg" className="text-neutral-50 text-lg font-bold hover:text-purple-300" variant="ghost">Experience</Button>
                              </Link>
                            </li>
                            <li>
                              <Link activeClass="[&_button]:text-purple-500" to="projects" smooth={true} duration={500} spy offset={-50}>
                                <Button size="lg" className="text-neutral-50 text-lg font-bold hover:text-purple-300"  variant="ghost">Projects</Button>
                              </Link>
                            </li>
                            <li>
                               <Link activeClass="[&_button]:text-purple-500" to="contact-me" smooth={true} duration={500} spy offset={-100}>
                                <Button size="lg" className="text-neutral-50 text-lg font-bold hover:text-purple-300" variant="ghost">Contact me</Button>
                              </Link>
                            </li>
                          </ul>
                      </nav>
                </header>
                <div className="flex justify-center items-center dark gap-3">
                  <div className="justify-center items-center hidden lg:flex gap-3">
                     <a href="https://github.com/PrinoyDcosta" target="_blank">
                        <IconBrandGithub size={32} className="text-white dark cursor-pointer"/>
                      </a>
                      <Button onClick={onDownloadResume} size="lg" className=""><IconDownload size={48} className="text-neutral-800 dark"/>Resume</Button>
                  </div> 
                  <div className="lg:hidden">
                    <Sheet>
                      <SheetTrigger className="dark" asChild>
                        <Button variant="outline" ><IconMenu2 className="text-white dark"/></Button>
                      </SheetTrigger>
                      <MobileMenu onDownloadResume={onDownloadResume}/>
                    </Sheet>
                  </div>
                </div>

    </div>)
}


export default Navbar

