//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react';
import {globalcontext} from '../Components/utils/global.context'
const Detail = () => {

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const params = useParams()
    const {dentistState}= useContext(globalcontext)
    const dentist = dentistState.dentistList.find(
        (dentista) => dentista.id === parseInt(params.id)
      );
        
    return (
      <>
        
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {dentist ? (
        <div className='detail'>
            <h2 >Id del Dentista {params.id}</h2>
          <h2>Nombre: {dentist.name}</h2>
          <p>Username: {dentist.username}</p>
          <p>Email: {dentist.email}</p>
          <p>Teléfono: {dentist.phone}</p>
          <p>Sitio Web: {dentist.website}</p>
          {/* Puedes mostrar otros detalles del dentista aquí */}
        </div>
      ) : (
        <p>No se encontró al dentista con el ID {params.id}</p>
      )}
      </>
    )
  }
  
  export default Detail