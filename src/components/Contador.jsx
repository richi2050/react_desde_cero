import React, { useState } from 'react'

const Contador = () => {
   const [contador, setContador] = useState(0)
   const aumentar = () => {
        setContador(contador + 1)
   }

    return (
        <div>
            <h1>Contador</h1>
            <h3>nuestro número aumentado:  { contador }</h3>
            <h4>
                {
                    contador > 2 ? 'Es mayor a dos' : 'Es menor a dos'
                }
            </h4>
            <button onClick={ () => aumentar() }> Aumentar</button>
        </div>
    )
}

export default Contador