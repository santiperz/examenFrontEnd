import Form from '../Components/Form'
import Card from '../Components/Card'
import { useState } from 'react'
function Contact() {
        const [nombre, setNombre] = useState('');
        const [mail, setMail] = useState('');
        function laValidacion(nombre, mail){
          setNombre(nombre)
          setMail(mail)
          console.log('Todo bien')
        }
        return (
            <>
              <Form onNombre={laValidacion} onMail={laValidacion}/>
              {nombre ? <Card>
                {nombre}
              </Card>: "Ingresa tu respuesta"}
            </>
        )
      }
export default Contact
    
      