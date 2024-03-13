import Body from "@/components/atoms/div/Body";
import Input from "@/components/atoms/Input";
import Square from "@/components/atoms/div/Square";
import ImageCard from "@/components/molecules/ImageCard";
import Menu from "@/components/molecules/Menu";
import Nav from "@/components/molecules/Nav";
import { selectIsMenuActive } from "@/redux/slices/menu";
import { useSelector } from "react-redux";
import { UsersIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const isMenuActive = useSelector(selectIsMenuActive)
  console.log(isMenuActive)
  return (
    <Body>
      <Menu name="Gabriel" />
      <div className="flex flex-col mx-auto lg:w-4/6 2xl:w-3/6">
        <div className="flex px-6 pt-6">
          <ImageCard
            classes={{
              bg: {
                color: "green",
                img: {
                  content: "bigChick",
                  position: "center"
                }
              },
              text: {
                position: "centerLeft"
              }
            }}
            text="AEHOO"
          />
        </div>
        <div className="flex gap-5 p-6">
          <div className="flex-1 flex flex-col gap-5">
            <ImageCard
              classes={{
                bg: {
                  color: "red",
                  img: {
                    content: "puppies",
                    position: "bottomRight"
                  }
                },
                text: {
                  position: "topLeft"
                }
              }}
              text="User"
              className="h-52"
            />
            <ImageCard
              classes={{
                bg: {
                  color: "green",
                  img: {
                    content: "bunnieTeddy",
                    position: "bottomRight"
                  }
                },
                text: {
                  position: "centerLeft"
                }
              }}
              className="h-28"
              text="esquerda baixo"
            />
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <ImageCard
              classes={{
                bg: {
                  color: "red",
                  img: {
                    content: "bunnies",
                    position: "bottomCenter"
                  }
                },
                text: {
                  position: "topLeft"
                }
              }}
              text="direita"
              className="h-60"
            />
            <ImageCard
              classes={{
                bg: {
                  color: "green",
                  img: {
                    content: "bigChick",
                    position: "bottomRight"
                  }
                },
                text: {
                  position: "centerLeft"
                }
              }}
              text="Direita Baixo"
            />
          </div>
        </div>
        <div className="w-11/12 flex flex-col self-center">
          <div className="flex items-center">
            <Square className="bg-theme-yellow-dark" />
            <Input placeholder="Nome" />
          </div>
          <div className="flex items-center">
            <div className="flex w-1/2 items-center">
              <Square className="bg-theme-red-dark"><UsersIcon className="w-6 text-theme-red" /></Square>
              <Input placeholder="Nome" />
            </div>
            <div className="flex w-1/2 items-center">
              <Square className="bg-theme-red-dark"><UsersIcon className="w-6 text-theme-red" /></Square>
              <Input placeholder="Nome" />
            </div>
          </div>
          <div className="flex items-center">
            <Square className="bg-theme-yellow-dark" />
            <Input placeholder="Nome" />
          </div>

        </div>
      </div>
      <Nav />
    </Body>

  )
}
