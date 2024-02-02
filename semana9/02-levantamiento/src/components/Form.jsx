export default function Form(props) {
  console.log(props)

  return (
    <>
        <h3>Formulario</h3>
        <input
            type="text"
            // componentes controlados,
            //El value de todo input, select, 
            //debe estar amarrado a un estado
            placeholder="Tu nombre"
            value={props.nombre}
            onChange={(evento) => {
                props.setNombre(evento.target.value)
            }}
            // onChange={updateNombre}
        />
    </>
  )
}
