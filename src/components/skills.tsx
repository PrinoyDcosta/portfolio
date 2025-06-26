import { Badge } from "./ui/badge"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4esRP7Ihx2L
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Skills() {
  const frontendSkills = ["React", "TypeScript", "JavaScript", "NextJs", "Redux", "Webpack", "Vite", "EsBuild", "Jest", "Vitest", "Ant Design", "ShadCn", "TailwindCSS", "LESS", "SCSS"]
  const backendSkills = [".Net Core", "C#", "Web APIs", "PostgresSQL", "MySQL", "EntityFramework", "LINQ"] 
  const cloudSkills = ["AWS", "BitBucket", "TeamCity", "Github Actions"]
  const skills = [{
    type: "Front-end",
    list: frontendSkills
  },{
    type: "Back-end",
    list: backendSkills
  },{
    type: "Cloud & DevOps",
    list: cloudSkills
  }]
  return (
      <div className="container py-5 md:py-20 px-4 md:px-6 text-white">
        <div className="flex flex-col flex-wrap">
        {
            skills.map(item => 
            <div className="pt-5">
                <h3 className="mb-4 text-xl font-semibold">{item.type}</h3>
                <div className="flex flex-wrap gap-3">
                    {
                        item.list.map(value => 
                        <div className="flex flex-col items-center gap-2">
                            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
                                <CodepenIcon className="h-6 w-6" />
                            </div> */}
                            <span className="text-sm font-medium">
                                <Badge variant="trial">{value}</Badge>
                            </span>
                        </div>)
                    }
                </div>
            </div>)
        }
        </div>
      </div>
  )
}

//   <div className="container px-4 md:px-6 text-white">
//         <div className="mb-8 md:mb-12 lg:mb-16">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">My Skills</h2>
//         </div>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           <div>
//             <h3 className="mb-4 text-xl font-semibold">Front-end</h3>
//             <div className="grid grid-cols-3 gap-6">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                   {/* <CodepenIcon className="h-6 w-6" /> */}
//                 </div>
//                 <span className="text-sm font-medium">React</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">TypeScript</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">JavaScript</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">NextJs</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Redux</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Webpack</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Vite</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">EsBuild</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Jest</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Vitest</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Ant Design</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">ShadCn</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">TailwindCSS</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">LESS</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">SCSS</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="mb-4 text-xl font-semibold">Back-end</h3>
//             <div className="grid grid-cols-3 gap-6">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">.Net Core</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">PostgresSQL</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">MySQL</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">EntityFramework</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">Web APIs</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">LINQ</span>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="mb-4 text-xl font-semibold">Cloud & DevOps</h3>
//             <div className="grid grid-cols-3 gap-6">
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">AWS</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">BitBucket Pipelines</span>
//               </div>
//               <div className="flex flex-col items-center gap-2">
//                 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted p-2">
//                 </div>
//                 <span className="text-sm font-medium">TeamCity Pipelines</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>