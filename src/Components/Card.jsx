import React from 'react';
function Card(props){
    console.log("las props", props)
    const { children }= props
    return (
        <div className="card">
        <h3>Tu nombre es {children} </h3>
        <h3>Tu color favorito es {children} </h3>
      </div>
    )
}

export default Card