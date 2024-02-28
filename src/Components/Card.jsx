

const Card = ({datos}) => {

    
  return (
    <div>
      <h3>Hola soy {datos.nombre}</h3>
      <h3>Tu comida favorita es: {datos.comida}</h3>
    </div>
  )
}

export default Card
