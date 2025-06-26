import { Timeline } from "@/components/ui/timeline";
import TeknorixAward1 from "../assets/teknorix/1.jpeg"
import TeknorixAward2 from "../assets/teknorix/2.jpeg"
import PersistentAward1 from "../assets/persistent/1.jpeg"
import PersistentAward2 from "../assets/persistent/2.jpeg"
import PersistentAward3 from "../assets/persistent/3.jpeg"
import VibLogo from "../assets/vib_logo.jpeg"
import GotoLogo from "../assets/goto-icon.jpg"
import PersistentLogo from "../assets/persistent_logo.png"
import TeknorixLogo from "../assets/teknorix_logo.jpeg"
import DubaiPicture from "../assets/dubai.jpeg"

const Experience = () => {
      const data = [

    {
      title: "2020",
      content: (
        <div>
          <div className="flex flex-wrap gap-2 pb-2">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
                <img src={TeknorixLogo} className="h-8 w-8 text-black dark:text-neutral-400"/>
            </div>
            <h3 className="flex items-center scroll-m-20 text-2xl font-semibold tracking-tight dark:text-white">
              Teknorix Technologies Pvt. Ltd. 
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 ">
            <h3 className="flex items-center scroll-m-20 text-xl font-semibold tracking-tight dark:text-white">
              Senior Software Engineer
            </h3>
          </div>
          <div className="flex items-center flex-wrap gap-2 pb-1">
            <h3 className="flex items-center italic scroll-m-20 text-base font-semibold tracking-tight dark:text-neutral-300">
              Client:
            </h3>
            <img src={VibLogo} className=" h-4 w-4 text-black dark:text-neutral-400"/>
            <h3 className="flex items-center italic scroll-m-20 text-base font-semibold tracking-tight dark:text-neutral-400">
              Vlaams Instituut voor Biotechnologie {"(VIB)"}, Belgium
            </h3>
          </div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I began my career at Teknorix as a Trainee Software Engineer during the challenging first wave of COVID-19, 
            initially focusing on backend development. 
            Driven by my passion for learning, I quickly expanded my skills to include React and TypeScript, 
            transitioning into a full-stack engineer. Over my 3.5-year tenure, my dedication and technical contributions led to two promotions—first to 
            Software Engineer and later to Senior Software Engineer.
             I played a pivotal role in developing multiple high-impact web applications for the company, ensuring robust and scalable solutions. 
             My efforts were recognized with back-to-back awards: "On-Time Performer of the Year" for consistent delivery and "Leader of the Year". 
             I also mentored junior developers and interns, helping them grow their skills.
              This experience not only sharpened my technical expertise but also strengthened my leadership and collaboration abilities.
            
          </p>
          <div className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
             <ul className="list-disc pl-6 text-muted-foreground">
              <li>Developed and maintained end-to-end web applications using C#,
              ASP.NET Core, TypeScript and React.js, ensuring seamless integration and
              optimal performance between frontend and backend components.</li>
              <li>Developed and maintained multiple complex applications using
              React.js, NextJs, managing state, and creating reusable components.</li>
              <li>Designed, developed, and maintained server-side applications and
              RESTful APIs.</li>
              <li>Experienced with Git and code collaboration through repositories like
              GitHub or Bitbucket.</li>
              <li>Conducted thorough code reviews for team members, ensuring
              adherence to coding standards, best practices, and optimization
              techniques.</li>
              <li>
                Mentored and guided junior developers and interns through
              technical challenges, fostering skill development and promoting
              collaborative learning environment.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={TeknorixAward1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={TeknorixAward2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <div className="flex flex-wrap gap-2 pb-2">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
                <img src={PersistentLogo} className="h-8 w-8 text-black dark:text-neutral-400"/>
            </div>
            <h3 className="flex items-center scroll-m-20 text-2xl font-semibold tracking-tight dark:text-white">
              Persistent Systems Ltd. 
            </h3>
          </div>
          <div className="flex items-center flex-wrap gap-2 pb-1">
            <h3 className="flex items-center italic scroll-m-20 text-base font-semibold tracking-tight dark:text-neutral-300">
              Client:
            </h3>
            <img src={GotoLogo} className=" h-4 w-4 text-black dark:text-neutral-400"/>
            <h3 className="flex items-center italic scroll-m-20 text-base font-semibold tracking-tight dark:text-neutral-400">
              GoTo Technologies USA, Inc, USA
            </h3>
          </div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            After an enriching 3.5 years with my previous company, I decided to take on a new challenge and joined Persistent Systems, one of India's top IT firms with a talented workforce of over 10,000 professionals. As a Lead Software Engineer, I was immediately entrusted with the role of Lead Frontend Engineer on a project with a globally distributed team. Working alongside colleagues from diverse cultural backgrounds was an incredible learning experience and helped me grow both professionally and personally. Thanks to consistent hard work and dedication, I was honored with three consecutive quarterly awards. During my time here, my team successfully delivered two major business initiatives—a dynamic checkout flow and an all-in-one payment system called OnePay, designed to streamline and accelerate the checkout process. Additionally, I had the privilege of mentoring juniors and interns, while also leading a team of five developers. Though my journey at Persistent lasted just 1.4 years, the international exposure, leadership opportunities, and invaluable lessons I gained have left a lasting impact on my career.
            
          </p>
          <div className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
             <ul className="list-disc pl-6 text-muted-foreground">
              <li>Led the front-end development of a high-performance client-facing website using React.js, Next.js, TypeScript, and Redux, achieving a 40% improvement in user experience and application responsiveness.</li>
              <li>Implemented a dynamic unified checkout system as a micro front-end for seamless integration across all marketing websites, resulting in a 30% faster launch of plans and products while enhancing user experience and reducing development redundancy by 90%..</li>
              <li>Developed a CMS-driven dynamic form widget exportable to any client-facing website, streamlining form creation and integration and reducing development time by 30%.</li>
              <li>Conducted web performance optimization across all marketing websites, improving load times by 110% through effective architecture design.</li>
              <li>Built and maintained scalable back-end Web APIs ( REST APIs ) using .NET Core, Entity Framework, and PostgreSQL, enabling efficient data handling and seamless client-server communication.</li>
              <li>Facilitated interviews to assess and recruit candidates, ensuring compliance with technical requirements and enhancing team collaboration.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={PersistentAward1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={PersistentAward2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src={PersistentAward3}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Present",
      content: (
        <div>
          <p className="mb-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
           After months of reflection, I realized it was time to step out of my comfort zone and embrace a new challenge. This led me to make the exciting decision to move to the UAE in pursuit of a role that aligns perfectly with my aspirations and growth. The journey ahead is uncharted, but I’m eager to see what the future holds!
          </p>
           <div className="grid grid-cols-2 gap-4">
            <img
              src={DubaiPicture}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },

  ];
    return(<>
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    </>)
}
export default Experience