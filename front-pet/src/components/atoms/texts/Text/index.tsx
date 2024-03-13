import type { TextProps } from "./types";
import { textClasses } from "./tailwind";

const Text: React.FC<TextProps> = ({ variant = 'body', className, children, ...rest }) => {
  const baseStyle = textClasses[variant] || textClasses.body;

  return <span className={`${baseStyle} ${className || ""} font-sans `} {...rest}>{children}</span>;
}

export default Text;
