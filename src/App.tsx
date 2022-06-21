import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSON_QUERY = gql`
  query{
    lessons{
      id
      tittle
    }
  }

`


function App() {

  const {data}= useQuery(GET_LESSON_QUERY)


  return (
    <h1 className="text-5xl">cole</h1>
  )
}

export default App
