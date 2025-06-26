import { Button } from "../ui/button"
import NavbarIcon from "../../assets/navbar_logo_small.png"
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu'
import { IconMenu2 } from "@tabler/icons-react";

const Navbar = () => {
    return (<div className="py-5 px-5 md:px-56 flex md:flex-row justify-between bg-neutral-950 backdrop-blur-md bg-opacity-50 fixed w-full top-0 start-0 end-0 z-50 shadow-2xl">
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
                <header className="text-white justify-center items-center hidden md:flex">
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
                <div className="md:hidden flex justify-center items-center">
                  <Menu menuClassName={ "!h-64" } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right className="text-white"
                  // customCrossIcon={<IconX size={48} className="text-white"/>} 
                  customBurgerIcon={<IconMenu2 size={48} className="text-white"/>}>
                      <Link activeClass="[&_button]:text-purple-500" to="introduction" smooth={true} duration={500} spy offset={-100}>
                        <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Introduction</Button>
                      </Link>
                      <Link activeClass="[&_button]:text-purple-500" to="experience" smooth={true} duration={500} spy offset={-100}>
                        <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Experience</Button>
                      </Link>
                      <Link activeClass="[&_button]:text-purple-500" to="projects" smooth={true} duration={500} spy offset={-50}>
                        <Button size="lg" className="text-neutral-50 text-lg font-bold"  variant="ghost">Projects</Button>
                      </Link>
                      <Link activeClass="[&_button]:text-purple-500" to="contact-me" smooth={true} duration={500} spy offset={-100}>
                        <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Contact me</Button>
                      </Link>
                  </Menu>
                   
                </div>

                <div className="justify-center items-center hidden md:flex">
                    <Button size="lg" className="">View Resume</Button>
                </div> 
    </div>)
}


export default Navbar

