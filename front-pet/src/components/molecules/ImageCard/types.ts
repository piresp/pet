import { GetObjectKeys } from "@/utils/types/getObjectValue";
import { TailwindDivType } from "../../../../tailwind/types";
import { backgroundClasses, backgroundImageClasses, backgroundImagePositions, textAlignmentClasses } from "./tailwind";

type CardColors = GetObjectKeys<typeof backgroundClasses>;
type CardImg = GetObjectKeys<typeof backgroundImageClasses>
type TextPosition = GetObjectKeys<typeof textAlignmentClasses>
type ImgPosition = GetObjectKeys<typeof backgroundImagePositions>;

export interface ImageCardType extends TailwindDivType {
  classes: {
    bg: {
      color: CardColors,
      img?: {
        content: CardImg,
        position?: ImgPosition
      },
    },
    text?: {
      position?: TextPosition
      className?: string
    }
  }
  text: string,
}
