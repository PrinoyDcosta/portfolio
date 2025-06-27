
"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import GotoIcon from "../assets/goto-icon.jpg"
import CardItem from "@/components/card-item";
import VIBLogo from "../assets/vib_logo.jpeg"
import AternosAutoConfirmIcon from "../assets/aternos_confirm_128.png"
import HmaiIcon from "../assets/hmai_logo.jpeg"
import PersonalProjectIcon from "../assets/personal_project.png"

const Projects = () => {
    return(<div className="bg-neutral-950 2xl:py-40 md:pb-20 px-5 2xl:px-40 ">
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
            <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                <TextGenerateEffect words={"Key projects that I have worked on"} />
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
                A few projects I've designed, built, and optimized.
            </p>
        </div>
        <ul className="flex gap-5 items-center justify-center flex-wrap">
            <CardItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={GotoIcon}
                title="GoTo Unified Checkout Flow - GoTo Technologies, USA"
                description="Built a B2B SaaS e-commerce Dynamic Checkout Flow using React, TypeScript, and Sitecore, enabling web publishers to configure it effortlessly without developer intervention. Designed customizable sections to tailor the checkout experience for different products. Implemented granular configuration options, allowing unique setups for each product. Integrated GA tracking to monitor performance and user behavior, aiding data-driven growth strategies. Reduced development time by empowering publishers with self-service controls."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://buy.logmein.com/buy/resolve/standard/customize"
            />    
              <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={GotoIcon}
                title="GoTo Forms widget - GoTo Technologies, USA"
                description="Built a CMS-driven, customizable form component that empowers web publishers to create and manage forms without developer dependency. Supports dynamic field configuration (text, dropdowns, checkboxes, etc.) directly from the CMS. Developed with React and Formik for seamless form handling and validation. Tracks key Google Analytics events—form views, submissions, and abandonment—for actionable insights. Optimized for flexibility, allowing quick form updates via the CMS. Reduces dev overhead while maintaining robust functionality."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://www.logmein.com/products/resolve/trial"
            />
              <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB Home - VIB, Belgium"
                description="Vib-Home: A configurable micro-frontend showcasing research work, featuring advanced filters for displaying posts and news. Enhanced content discoverability, boosting user engagement by 35%. Empowered web publishers to create posts using CKEditor, where I developed custom plugins for diagrams, attachments, and a new text viewer. Accelerated content creation by 50%, enabling richer and more interactive posts."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://home.vib.be"
            />
              <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB Ticketing System - VIB, Belgium"
                description="Built a ticketing system where users can create and assign tickets.
                            It includes worklog timers to track time spent and a comment system for updates.
                            Users receive email notifications for status changes or new comments.
                            Each ticket supports multiple watchers to keep stakeholders informed.
                            The system ensures real-time updates through automated email alerts.
                            It streamlines collaboration by tracking every interaction efficiently. This system also had a pluggable microfrontend that could be plugged into any center or lab's web application."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://tickets.vib.be"
            />
              <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB Knowledgebase - VIB, Belgium"
                description="Built a knowledge base system with an admin panel for creating and managing articles using a custom CKEditor 5 build with tailored plugins. 
                            Articles were organized into hierarchically nested collections, each mapped to a Center and Lab. 
                            This allowed researchers and scientists to search, filter, and access articles by category, collection, or lab affiliation. 
                            A role-based access control (RBAC) system ensured proper permissions, while server-side caching (Redis) optimized read performance for high-traffic queries."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://kb.vib.be"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB App & Websites Catalog - VIB, Belgium"
                description="Developed a centralized catalog platform where admins could submit software tools (with metadata like version, OS support, and descriptions) and website entries (URLs, categories, and summaries). 
                The system tracked user engagement via Google Analytics (GA4) integration, logging downloads and link clicks, then displayed real-time metrics (e.g., download counts) to users. 
                Built with a React frontend and .Net Core backend, it featured role-based admin controls and automated metadata scraping for websites."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://catalog.vib.be"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB News & Annoucements - VIB, Belgium"
                description="Developed a versatile news and announcements portal featuring an intuitive CMS interface for admins, powered by a customizable rich-text editor (CKEditor) to effortlessly create and format articles. The pluggable frontend displayed content in a dynamic, filterable feed—organized by categories, labs, or centers—with pinned posts for priority visibility. Designed as a pluggable microfrontend, the system seamlessly integrated across platforms while maintaining user-specific filters. Additionally, integrated Google Analytics to track engagement, providing admins with actionable insights into content performance."
                tags={["Client Project", "Private Source Code"]}
                projectLink="https://vib.be/en/news#/"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={VIBLogo}
                title="VIB Email Campaigns - VIB, Belgium"
                description="Built an email campaign management platform that enabled admins to create and send monthly digest emails highlighting news, announcements, and promotions. Integrated with Mailchimp's API for email distribution, the solution tracked user engagement through webhook callbacks that captured opens, clicks, and delivery statuses in real-time. These webhooks fed data into our PostgreSQL database, powering an analytics dashboard that displayed key metrics (delivery rates, open rates, CTR). The platform included template versioning  and subscriber list segmentation based on user preferences and engagement history."
                tags={["Client Project", "Private Source Code"]}
            />

            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={AternosAutoConfirmIcon}
                title="Aternos Auto Confirm Chrome Extension"
                description="built a lightweight Chrome extension using vanilla JavaScript that automatically confirms Aternos Minecraft server queues the moment slots become available. The extension monitors the queue status in real-time and programmatically clicks the confirmation button, eliminating manual refreshes. With no dependencies and minimal resource usage, it runs seamlessly in the background while users play. Within just 20 days of launch, it organically gained 154 active users, proving its utility for the Aternos community."
                tags={["Personal Project", "Open Source Code"]}
                projectLink="https://chromewebstore.google.com/detail/aternos-server-auto-confi/mfbcjmjdjfhdhkameeoljajobdgccdgf"
                githubLink="https://github.com/PrinoyDcosta/aternos-auto-confirm-extension"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={PersonalProjectIcon}
                title="React Resume Builder Component"
                description="Developed a modular React Resume Component using ShadCN UI and Tailwind CSS, enabling dynamic customization. Users can easily add, remove, and reorder sections through intuitive drag-and-drop functionality. Built as a lightweight, reusable npm package for seamless integration. Utilizes React DnD for smooth, interactive resume editing. Maintains a clean, modern UI with a focus on accessibility. Designed for flexibility, allowing personalized resume layouts. Perfect for developers seeking a customizable, easy-to-implement solution."
                tags={["Personal Project", "Open Source Code"]}
                //projectLink="https://chromewebstore.google.com/detail/aternos-server-auto-confi/mfbcjmjdjfhdhkameeoljajobdgccdgf"
                githubLink="https://github.com/PrinoyDcosta/Resume-Masonry"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={PersonalProjectIcon}
                title="Linux-based Auto Port toggler on DDoS"
                description="Built a Linux-based DDoS protection system for HLDS game servers that automatically toggles server ports during attacks. Using AWS Lightsail's APIs, it shuts down ports when detecting DDoS traffic through metrics analysis, then restores access when the attack subsides. The system integrates with an AMXX plugin to whitelist active players' IPs before lockdown, maintaining legitimate access while blocking malicious traffic. This automated solution combines cloud infrastructure control with game server protection, eliminating manual intervention during attacks while preserving real player connections through intelligent IP filtering."
                tags={["Personal Project", "Private Source Code"]}
                githubLink="https://github.com/PrinoyDcosta/auto-port-toggler-with-whitelister"
            />
            <CardItem
                area="md:[grid-area:1/1/3/3] xl:[grid-area:1/1/2/6]"
                icon={HmaiIcon}
                title="Goa Homeopathic website"
                description="Developed a comprehensive website for the Goa Homeopathic Association of India, featuring a public-facing landing page alongside a secure admin panel. The admin interface enabled authorized users to dynamically manage content—including uploading photos to organized albums and maintaining an updated directory of doctors with their contact details for the 'fIND Your Doctor' feature. The website also incorporated visitor analytics to track and display user traffic, providing valuable insights into engagement. Built with a responsive design, the platform effectively served both the association's promotional needs and the public's access to homeopathic practitioners in Goa."
                tags={["Personal Project", "Private Source Code"]}
                projectLink="https://www.hmaigoa.com/"
            />
        </ul>
    </div>)
}
export default Projects

