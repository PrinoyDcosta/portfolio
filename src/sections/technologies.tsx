'use client';

import {
  Marquee,
  MarqueeItem,
  MarqueeFade,
  MarqueeContent,
} from '@/components/ui/shadcn-io/marquee';

const skills: string[] = ["ts", "js", "react", "nextjs", "aws", "azure", "babel", "bitbucket", "cs", "css", "dotnet", "github", "git", "html", "jest","less", "linux", "mysql", "nodejs", "npm", "pnpm", "postgres", "redux", "sass", "vercel", "vite", "webpack"]

const Technologies = () => (
  <div className="bg-neutral-950 py-10 flex items-center justify-center">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {skills.map((item, index) => (
          <MarqueeItem key={index} className="w-32 h-32">
            <img
              src={`https://skillicons.dev/icons?i=${item}`}
              alt={`Image ${index}`}
              height={100}
              width={100}
              className="rounded-full overflow-hidden"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Technologies;