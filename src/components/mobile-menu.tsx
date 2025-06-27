import { Link } from "react-scroll"
import { SheetClose, SheetContent, SheetHeader, SheetTitle} from "./ui/sheet"
import { Button } from "./ui/button"
import NavbarIcon from "../assets/navbar_logo_small.png"
import { animateScroll as scroll } from 'react-scroll';

const MobileMenu = () =>
{
    return(<SheetContent className="dark [&>button]:text-white" >
        <SheetHeader>
          <SheetTitle className="flex justify-center">
            <a onClick={()=> scroll.scrollToTop()} className="cursor-pointer">
              <img
                src={NavbarIcon}
                alt="navbar-icon"
                width={250}
                height={250}
                className=" w-24 rounded-lg"
              />
            </a>
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4 mt-10">
            <Link activeClass="[&_button]:text-purple-500" className="bg-neutral-800 rounded-sm" to="introduction" smooth={true} duration={500} spy offset={-100}>
              <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Introduction</Button>
            </Link>
            <Link activeClass="[&_button]:text-purple-500" to="experience" className="bg-neutral-800 rounded-sm" smooth={true} duration={500} spy offset={-100}>
              <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Experience</Button>
            </Link>
            <Link activeClass="[&_button]:text-purple-500" to="projects" className="bg-neutral-800 rounded-sm" smooth={true} duration={500} spy offset={-50}>
              <Button size="lg" className="text-neutral-50 text-lg font-bold"  variant="ghost">Projects</Button>
            </Link>
            <Link activeClass="[&_button]:text-purple-500" to="contact-me" className="bg-neutral-800 rounded-sm" smooth={true} duration={500} spy offset={-100}>
              <Button size="lg" className="text-neutral-50 text-lg font-bold" variant="ghost">Contact me</Button>
            </Link>
        </div>
        <SheetClose className="text-white"/>
      </SheetContent>)
}

export default MobileMenu