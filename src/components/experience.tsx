import type React from "react"
import { Icons } from "./icons"

export interface ExperienceProps {
    duration: string
    title: string
    company: string
    description: string
}

export function Experience({ duration, title, company, description }: ExperienceProps) {
    return (
        <li className="ms-5">
            <div className="absolute -start-[6.5px] mt-[5px] h-3 w-3 rounded-full border border-neutral-400 bg-neutral-200 dark:border-neutral-600 dark:bg-neutral-800"></div>
            <time className="my-2 font-mono text-xs font-normal leading-none text-neutral-600 dark:text-neutral-400">{duration}</time>
            <h3 className="text-[15px] font-medium leading-8 tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <span className="flex w-max items-center text-pretty text-sm text-neutral-500">{company}</span>
            <p className="mt-3 text-pretty text-sm dark:text-neutral-400">{description}</p>
        </li>
    )
}
