import { DiscordLogo } from "phosphor-react";

interface ButtonProps {
  title: string,
 
}
export function ButtonCommunity (props:ButtonProps){

  return (
    
    <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
    <DiscordLogo size ={24} />
    {props.title}
  </a>
  )
}