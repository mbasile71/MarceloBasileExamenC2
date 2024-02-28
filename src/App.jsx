import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  
  const [datos, setDatos] = useState({
    nombre: '',
    comida: '', 
    state: 'false'
  })
  //console.log(datos.nombre)
  console.log(datos.state)
  return (
    <>
      <div>

        <Form datos={datos} setDatos={setDatos}/>
        {datos.state ? <Card datos={datos}/> : null}
        
      </div>
      
    </>
  )
}

export default App
