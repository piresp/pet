import type { SectionType } from "./types";

const Section = ({ children, ...rest }: SectionType) => {
  return (
    <section {...rest} className={`px-6 py-6 dark:bg-theme-dark bg-theme bg-opacity-50 dark:bg-opacity-10 shadow-xl w-fit h-fit ${rest.className}`}>
      {children}
    </section>
  )
}

export default Section
