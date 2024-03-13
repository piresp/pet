import type { CardType } from "./types";

const Card = ({ children, ...rest }: CardType) => {
  return (
    <div {...rest} className={`flex flex-col px-10 py-6 w-full h-fit bg-theme-dark rounded-2xl hover:opacity-80 ${rest.className}`}>
      {children}
    </div>
  )
}

export default Card
