// import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import { motion } from "motion/react";

const HeroBanner = () => {
    return(<>
         {/* <div className="relative h-[500px] w-full overflow-hidden border bg-background">
            <FlickeringGrid
                className="absolute inset-0 z-0 size-full"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
               // height={800}
                //width={800}
            />
            <div>
                test
            </div>
        </div> */}
         <HeroHighlight>
            <div className="flex">
                <motion.h1
                    initial={{
                    opacity: 0,
                    y: 20,
                    }}
                    animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                    }}
                    transition={{
                    duration: 1,
                    ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug mx-auto"
                >
                    Hey there, I&apos;m {" "}
                    <Highlight className="text-black dark:text-white">
                    Prinoy D&apos;Costa
                    </Highlight>, <br /> a full-stack engineer passionate about building products with detail and purpose.{" "}
                </motion.h1>
                {/* <img
                    src={HeroImg}
                    alt="hero template"
                    height={600}
                    width={500}
                /> */}

            </div>
        </HeroHighlight>
    </>)
}
export default HeroBanner