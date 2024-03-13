import backgroundClasses from "./background"
import textClasses from "./text"

const tailwindConfigClasses = {
  background: {
    image: backgroundClasses.image,
    imagePositions: backgroundClasses.imagePositions,
    colors: backgroundClasses.colors
  },
  text: {
    colors: textClasses.colors,
    fontFamily: textClasses.fontFamily
  }
}

export default tailwindConfigClasses
