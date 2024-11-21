import { Project } from "@/components/project"
import { SocialLinks } from "@/components/socials"
import { Experience } from "@/components/experience"
import { projects, socialLinks, experience } from "@/lib/constants"
import { Newsreader } from "next/font/google"
import Image from "next/image"

const newsreader = Newsreader({
  style: "italic",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      {/* Name */}
      <header className="top-0 z-50 w-full animate-slide-from-down-and-fade-1 cursor-context-menu flex gap-x-4 items-center">
        <div className="h-12 w-12 rounded-full">
          <Image src="/memoji.png" width={48} height={48} alt="avatar" className="rounded-full bg-black dark:bg-white p-1" />
        </div>
        <div className="flex flex-col">
          <h1 className="inline-flex text-xl font-medium no-underline">
            Rosis Sharma
          </h1>
          <div className="flex items-center">
            <span className="prose prose-neutral dark:prose-invert text-sm">
              Full-Stack Developer
            </span>
          </div>
        </div>
      </header>

      {/* About me */}
      <section className="prose prose-zinc dark:prose-invert text-[15px] animate-slide-from-down-and-fade-2 text-pretty">
        <p className="leading-relaxed">
          I&#39;m a full-stack web developer who loves building and improving the web experience. I&#39;m always eager to explore new technologies,
          constantly discovering exciting tools to take the projects I work on to the next level.
        </p>
      </section>

      {/* Projects */}
      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-xl">Projects</h3>

        <div className="grid grid-cols-1 gap-6 ">
          {projects.map((project, index) => (
            <Project {...project} key={index} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="animate-slide-from-down-and-fade-3 space-y-4 text-sm">
        <h3 className="font-medium text-xl">Experience</h3>

        <ol className="grid grid-cols-1 gap-2 relative space-y-6 py-2 border-s-2 border-neutral-300 dark:border-neutral-800">
          {experience.map((project, index) => (
            <Experience {...project} key={index} />
          ))}
        </ol>
      </section>

      {/* Contacts */}
      <section className="animate-slide-from-down-and-fade-4 space-y-4 text-sm">
        <p className="prose prose-zinc dark:prose-invert leading-relaxed">
          Let&#39;s connect! Feel free to get in touch or explore my work on GitHub.
        </p>
        <section>
          <div className="flex items-center gap-6 ">
            {socialLinks.map((socials, index) => (
              <SocialLinks {...socials} key={index} />
            ))}
          </div>
        </section>
      </section>
    </section>
  )
}
