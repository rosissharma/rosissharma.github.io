import { ProjectProps } from "@/components/project"
import { SocialLinksProps } from "@/components/socials"
import { ExperienceProps } from "@/components/experience"

export const projects = [
  {
    title: "DOLORES",
    description: "Color generative AI assistant.",
    href: "https://github.com/rosissharma/ColorsAI",
  },
  {
    title: "ApolloAPI",
    description: "Open source news API.",
    href: "https://github.com/rosissharma/ApolloAPI",
  },
  {
    title: "Chat App",
    description: "Realtime chat app with Google Auth and Firebase.",
    href: "https://github.com/rosissharma/rfchat-app",
  },
  {
    title: "Subreddit",
    description: "Get the top articles from your favorite subreddits.",
    href: "https://github.com/rosissharma/subreddit",
  },
] as ProjectProps[]

export const experience = [
  {
    duration: "2023 - Present",
    title: "Full-Stack Developer",
    company: "TRAINOR",
    description: "Created dynamic SilverStripe websites with integrated APIs like Stripe for payments and Akismet for spam prevention. Improved development efficiency by managing CI/CD pipelines using Buddy for seamless deployments. Implemented effective SEO strategies, including on-page optimization and link-building, to boost search rankings and enhance website performance."
  },
  {
    duration: "2021 - 2023",
    title: "Web Developer",
    company: "Computer SOS, Inc.",
    description: "Enhanced search engine rankings and traffic by implementing SEO best practices. Provided support for Magento 2 e-commerce sites, developing custom modules to improve functionality and user experience. Built and maintained WordPress sites, ensuring timely project delivery through collaboration with cross-functional teams."
  },
  {
    duration: "2019",
    title: "Creative Services Intern",
    company: "The Digital Hyve",
    description: "Developed and maintained WordPress websites, focusing on content creation and editing. Conducted user testing to identify and report bugs and design issues, collaborating with the design team to improve user experience and visual design. Assisted in creating marketing materials and managing social media campaigns."
  }
] as ExperienceProps[]

export const socialLinks = [
  {
    title: "Email",
    href: "mailto:rosis.sharma@outlook.com"
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/rs9110/"
  },
  {
    title: "Github",
    href: "https://github.com/rosissharma"
  },
] as SocialLinksProps[]