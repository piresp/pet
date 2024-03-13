import Card from "@/components/atoms/div/Card";
import Text from "@/components/atoms/Text";
import { backgroundClasses, backgroundImageClasses, backgroundImagePositions, textAlignmentClasses } from "./tailwind";
import type { ImageCardType } from "./types";

const ImageCard: React.FC<ImageCardType> = ({ classes, text, ...rest }: ImageCardType) => {
  return (
    <Card
      {...rest}
      className={`
        grid grid-cols-3 grid-rows-3 
        bg-no-repeat 
        cursor-pointer
        ${backgroundClasses[classes.bg?.color]}
        ${classes.bg.img && backgroundImageClasses[classes.bg.img?.content]}
        ${classes.bg.img?.position && backgroundImagePositions[classes.bg.img.position]}
        ${rest.className}
      `}
    >
      <div
        className={`
          self-center justify-self-center
          ${textAlignmentClasses[classes.text?.position ?? 'center']} 
        `}
      >
        <Text variant="title">
          {text}
        </Text>
      </div>
    </Card>
  );
};

export default ImageCard;
