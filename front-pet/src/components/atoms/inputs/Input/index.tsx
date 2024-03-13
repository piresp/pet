import { TailwindInputType } from "../../../../tailwind/types";

const Input = ({ ...rest }: TailwindInputType) => {
  return (
    <input {...rest} className={`w-full h-12 pt-2 px-1 bg-transparent border-b-4 border-black border-opacity-5 rounded-lg focus:outline-none text-theme-gray font-normal text-lg`} /> 
  )
}

export default Input
