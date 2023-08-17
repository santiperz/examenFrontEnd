import { useState } from 'react'

function Form(props) {
    const [nombre, setNombre] = useState('')
    const [color, setColor] = useState('')
    const [mensaje, setMensaje] = useState('')

    function laValidacion(event) {
        event.preventDefault()
        if (nombre.length >= 3 && color.length >=6) {
            props.onNombre(nombre)
            props.onColor(color)
            setMensaje('')
        } 
        else {
            console.log('todo mal')
            setMensaje('Por favor chequea que la informacion sea correcta')
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
            <label htmlFor="pedido">Ingresa un color</label>
            <input 
                type="text"
                placeholder="Ingresa tu nombre"
                id='nombre'
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
             <input 
                type="text"
                placeholder="Ingresa tu color favorito (formato HEX)"
                id='color'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            {mensaje ? <p>{mensaje}</p> : undefined}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form