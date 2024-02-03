import { useParams } from "react-router-dom"

export default function Detalles() {

    const {id} = useParams()
    console.log(id)
  return (
    <h1>Detalles</h1>
  )
}
