import type { ButtonType } from "./types";

const Button = ({ children, ...rest }: ButtonType) => {
  return (
    <button {...rest}>
      {children}
    </button>
  )
}

export default Button
