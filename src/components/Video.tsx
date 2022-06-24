import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css'
import { CaretRight, FileArrowDown } from "phosphor-react";
import { Button } from "./Button";
import { ButtonCommunity } from "./ButtonCommunity";

export function Video() {
  return (
    <div className=" flex-1">
      <div className="bg-black flex flex-col justify-center">
        <div className="h-full w-full max-w[1100px] ,max-h-[60vh] aspect-video ">
          <Player>
            <Youtube videoId="AInWkvzSFnA" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">

            <h1 className="text-2xl font-bold ">
              Aula1
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.
            </p>


            <div className="flex flex- gap-4 mt-6 leading-relaxed">
              <img className="h-16 w-=16 rounded-full border border-blue-500"
                src="https://github.com/luiszkm.png"
                alt="foto do professor" />
              <div>
                <strong className=" font-bold text-2lx block">Luis Murilo</strong>
                <span className="text-gray-200 text-sm block">Comedor de cu</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ButtonCommunity title="Comunidade" />
            <Button title="Acesse o desafio" />
          </div>

        </div>
      </div>

      <div className="p-6 gap-8 grid grid-cols-2 mt-20">
        <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" >

          <div className="bg-green-700 h-full p-6 items-center">
            <FileArrowDown size={40} />
          </div>

          <div className="py-6 leading-relaxed">
            <strong className="txt-2xl">
              Material Complementar
            </strong>
            <p className="mt-2 text-sm text-gray-200">
              Acesse o material complementar para acelerar o seu desenvolvimento
            </p>
          </div>

          <div className="h-full p-6 flex items-center">
            < CaretRight size={40} />
          </div>
        </a>

        <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors" >

          <div className="bg-green-700 h-full p-6 items-center">
            <FileArrowDown size={40} />
          </div>

          <div className="py-6 leading-relaxed">
            <strong className="txt-2xl">
              Wallpapers exclusivos
            </strong>
            <p className="mt-2 text-sm text-gray-200">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
            </p>
          </div>

          <div className="h-full p-6 flex items-center">
            < CaretRight size={40} />
          </div>
        </a>
      </div>
    </div>

  )
}