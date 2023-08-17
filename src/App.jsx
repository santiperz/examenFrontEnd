import './App.css'
import { useState } from 'react'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  const [nombre, setNombre] = useState('');
  const [color, setColor] = useState('');
  function laValidacion(nombre, color){
    setNombre(nombre)
    setColor(color)
    console.log('Todo bien')
  }
  return (
      <>
        <Form onNombre={laValidacion} onColor={laValidacion}/>
        {nombre ? <Card>
          {nombre}
        </Card>: "Ingresa tu respuesta"}
      </>
  )
}

export default App
