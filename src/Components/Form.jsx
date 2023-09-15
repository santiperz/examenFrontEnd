import { useState } from 'react'

function Form(props) {
    const [nombre, setNombre] = useState('')
    const [mail, setMail] = useState('')
    const [mensaje, setMensaje] = useState('')

    function laValidacion(event) {
        event.preventDefault()
        const emailPattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        if (nombre.length >= 3 && emailPattern.test(mail)) {
            props.onNombre(nombre)
            props.onMail(mail)
            setMensaje('Bien')
        } 
        else {
            console.log('Correo electrónico no válido')
            setMensaje('Por favor, ingrese un mail y un nombre valido')
        }
    }
    return (
        <form
        onSubmit={laValidacion}
        style={{
            display:'flex',
            flexDirection: 'column',
            gap: '16px',
        }}
        >
            <label htmlFor="pedido">Ingresa su mail</label>
            <input 
                type="text"
                placeholder="Ingresa tu nombre"
                id='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
             <input 
                type="text"
                placeholder="Ingrese su mail"
                id='mail'
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            />
            {mensaje ? <p>{mensaje}</p> : undefined}
            <button>Submit</button>
        </form>
    )
}

export default Form