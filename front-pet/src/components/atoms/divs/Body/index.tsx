import { selectDarkMode } from "@/redux/slices/theme";
import { useSelector } from "react-redux";
import type { BodyType } from "./types";

const Body = ({ children, ...rest }: BodyType) => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <div className={`bg-gradient-linear ${darkMode ? 'dark' : 'light'}`}>
      <main {...rest} className={`bg-gradient-linear min-h-screen h-screen w-full ${rest.className}`}>
        {children}
      </main>
    </div>
  )
}

export default Body
