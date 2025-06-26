// import { BackgroundBeams } from "@/components/ui/background-beams"
import SignupFormDemo from "@/components/signup-form-demo";

// const ContactMe = () => {
//     return(
//         <div className="flex justify-center bg-neutral-950">
//             <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
//                 <div className="max-w-2xl mx-auto p-4">
//                     {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
//                     Let's get in touch <br></br>
//                     </h1> */}
//                     <h1 className="text-neutral-100 scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
//                         Wanna contact me?
//                     </h1>
//                     <p></p>
//                     <p className="text-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
//                         Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at   judebaptista18@gmail.com. I make an effort to respond to all messages within 24 hours, although it may take me longer during busy periods. Alternatively, you can use the contact form on my website to get in touch. Simply fill out the required fields and I'll get back to you as soon as possible. Finally, if you prefer to connect on social media, you can find me on https://www.linkedin.com/in/jude-baptista/. I post regular updates and engage with my followers there, so don't hesitate to reach out. Thanks again for your interest, and I look forward to hearing from you!
//                     </p>
//                 </div>
//             </div>
//             <div className="md:pr-20">
//                 <img src={ProfilePic} />
//             </div>
//         </div>)
// }

// export default ContactMe
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { Highlight } from "@/components/ui/hero-highlight";
import { Element } from "react-scroll";
 
const ContactMe = () => {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "http://linkedin.com/in/prinoy-d-costa-66500a6b/",
    },
    {
      title: "Email",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:prinoydcosta12@gmail.com",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/PrinoyDcosta",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/prinoy__/",
    },
 
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/prinoybullboy/",
    },
  ];
  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 md:pb-50"
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <Element name="contact-me">
          <div className="flex flex-col md:flex-row">
              <div className="h-[40rem] w-full md:w-1/2 rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
                      <div className="max-w-2xl mx-auto p-4">
                          {/* <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                          Let's get in touch <br></br>
                          </h1> */}
                          <h1 className="text-neutral-100 scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
                              Want to get in touch?
                          </h1>
                          <p></p>
                          <p className="text-neutral-400 leading-7 [&:not(:first-child)]:mt-6">
                              Thank you for visiting my portfolio and taking the time to explore my work! I truly appreciate your interest and the effort to reach out. 
                              Whether you have a project in mind, a career opportunity, or just want to connect, I'd love to hear from you. 
                              Feel free to email me directly at {" "}   
                              <Highlight className="text-white">prinoydcosta12@gmail.com
                              </Highlight>, or if you prefer, use the handy contact form on the left—both options work great! 
                              I make it a priority to respond to all inquiries within 24 hours, so you won't be left waiting.
                              <br/>
                              If you'd like to see more of my work or stay updated, I've included links to my social media and professional profiles below—don't hesitate to connect there as well. Collaboration and networking are important to me, so whether it's feedback, ideas, or just a friendly hello, I'm all ears. Looking forward to our conversation!
                          </p>
                      </div>
                      <div className="flex items-center justify-center h-[35rem] w-full">
                          <FloatingDock
                              items={links}
                          />
                      </div>
              </div>
              <div className="w-full md:w-1/2">
                  <SignupFormDemo />
              </div>
          </div>
        </Element>
      </div>
    </div>
  );
}

 export default ContactMe


 