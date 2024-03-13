import { SquareProps } from "./types";

const Square: React.FC<SquareProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className={`rounded-md ${children ? 'p-2': 'p-5'} m-3 bg-theme-green hover:bg-opacity-80 items-center justify-center text-center ${rest.className}`}>
      {children}
    </div>
  );
};

export default Square;
