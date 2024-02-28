import { useState } from 'react'
import Card from './Card'

const Form = ({datos, setDatos}) => {

    
  {/*const [datos, setDatos] = useState({
    nombre: '',
    comida: ''
  })*/}

  const [state, setState] = useState(false)
  const [error, setError] = useState(false)

  const handlerEvent = (e) => {
    e.preventDefault()
    if(datos.nombre.length >= 3 && datos.nombre.trim() && datos.comida.length >=6){
        setState(true)
                
    }else{
        setError(true)
    }
    
  }  

  //console.log(datos.nombre)
  //console.log(datos.comida)

  return (
    
        <div>
            {!state ? 
                <form onSubmit={handlerEvent}>
            
                <label>Ingresa tu nombre</label>
                <input type="text" onBlur={(e) => setDatos({...datos, nombre: e.target.value})}/>

                <label>Ingresa tu comida favorita</label>
                <input type="text" onBlur={(e) => setDatos({...datos, comida: e.target.value})}/>
                <button onClick={() => setDatos({nombre: datos.nombre, comida: datos.comida, state: true})}>Enviar</button>

                </form> 
                : null
                
            } 

            {error && <h4>Por favor chequea que la información sea correcta</h4>}
            
        </div>
     
    
    
    
  )
}

export default Form
