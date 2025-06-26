import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { RainbowButton } from "./magicui/rainbow-button";
import { GlowingEffect } from "./ui/glowing-effect";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

interface CardItemProps {
  area: string;
  icon: string;
  title: string;
  description: React.ReactNode;
  projectLink?: string;
  githubLink?: string;
  tags?: string[]

}

const CardItem = ({ area, icon, title, description, projectLink, tags = [], githubLink }: CardItemProps) => {
  return (
    <li className={`md:min-h-[14rem] list-none w-full md:w-1/3 xl:w-1/4 ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              <img src={icon} className="h-16 w-16 text-black dark:text-neutral-400"/>
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
              <div className="flex gap-2">
                {tags.map(item => <RainbowButton variant={"outline"}>{item}</RainbowButton>)}
              </div>
              <div className="flex gap-2 w-fit">
                {projectLink &&
                 <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={projectLink} target="_blank"><IconLink className="bg-neutral-950 text-white"/></a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to project link</p>
                  </TooltipContent>
                </Tooltip>
                }
                {githubLink &&
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href={githubLink} target="_blank"><IconBrandGithub className="bg-neutral-950 text-white"/></a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Go to GitHub link</p>
                  </TooltipContent>
                </Tooltip>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CardItem