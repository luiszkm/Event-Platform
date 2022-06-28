import { CheckCircle, Lock } from "phosphor-react"
import { isPast, format } from "date-fns"
import ptBr from "date-fns/locale/pt-BR"
import { Link, useParams } from "react-router-dom"
import { is } from "date-fns/locale"

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: "live" | "class"
}



export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd ' de 'MMM ' • 'K'h'MM", {
    locale: ptBr,
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={`rounded border border-gray-500 p-4 mt-2 text-center group-hover:border-green-500
       ${isActiveLesson ? 'bg-green-500' : ''} `} >

        <header className="flex items-center justify-between">

          {isLessonAvailable ?
            (<span className={
              `text-sm 
              font-medium flex items-center gap-2 ${isActiveLesson ? 'text-white' : 'text-blue-500'} `
            }>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>) :
            (<span className="text-sm text-orange-500
           font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>)}
          {/* 
              <span className={`text-sm rounded px-2 py-2 text-white font-bold border
               ${isActiveLesson ?'border-white' : ''} 
               ${!isActiveLesson ? 'border-green-500': ''}`}
               >
                 {props.type === "live" ? "AO VIVO" : "Aula Pratica"}
              </span> */}

          <span className={`text-sm rounded px-2 py-2  font-bold border
             ${isActiveLesson ? 'border-white' : ''} 
             ${!isActiveLesson ? 'border-green-500' : ''} `}>
            {props.type === "live" ?
              (<span className={`${isActiveLesson ? 'text-white ' : 'text-green-300'}`}>AO VIVO</span>)
              : (<span className="text-white ">Aula Prática</span>)}
          </span>



        </header>

        <strong className={` block mt-5 ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}