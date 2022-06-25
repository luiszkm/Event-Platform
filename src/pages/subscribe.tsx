import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}


`

export function Subscribe() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

  function handleSubscriber(event: FormEvent) {
    event.preventDefault()


    createSubscriber({
      variables:{
        name,
        email,
      }
    })
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">

      <div className="max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px] ">
          < Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">
              aplicação completa</strong>
            , do zero, <strong className="text-blue-500">com React. </strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p=8 bg-gray-700 border border-gray-500 rounded p-6">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscriber} className="flex flex-col gap-2 2-full">
            <input className="bg-gray-900 rounded px-5 h-12"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)} />

            <input className="bg-gray-900 rounded px-5 h-12"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)} />

            <button className="mt-4 bg-green-500 uppercase rounded font-bold py-4 text-sm hover:bg-green-700 transition-colors"
              type="submit">
              Garantir minha vaga
            </button>
          </form>

        </div>
      </div>

      <img className="mt-10"
        src="/src/assets/code.png"
        alt="imagem de um print com código" />

    </div>
  )
}