import { DetailedHTMLProps, HTMLAttributes } from "react"

// tailwind config
type TailwindStringObjectType = Record<string, string> | undefined

export type { TailwindStringObjectType }

// tailwind elements
type TailwindElementType<T> = DetailedHTMLProps<HTMLAttributes<T>, T>

type TailwindDivType = TailwindElementType<HTMLDivElement>
type TailwindButtonType = TailwindElementType<HTMLButtonElement>
type TailwindInputType = TailwindElementType<HTMLInputElement>

export type { TailwindDivType, TailwindButtonType, TailwindInputType }
