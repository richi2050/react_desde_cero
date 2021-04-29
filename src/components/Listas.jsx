import React, { useState } from 'react'

const Listas = () => {
    const estadoInicial = [
        {id: 1, texto: 'texto 1'},
        {id: 2, texto: 'texto 2'},
        {id: 3, texto: 'texto 3'},
        {id: 4, texto: 'texto 4'},
    ]
    const [lista, setLista] = useState(estadoInicial)
    const agregarElemento = () => {
        setLista([
            ...lista,
            {id: 5, texto: 'texto 5'},
        ])

    }

    return (
        <div>
            <h2>Listas</h2>
            <ul>
                {
                    lista.map( (item, key) => (
                        <li key={key}>{ item.texto }</li>
                    ))
                }
            </ul> 
            <button onClick={ () => agregarElemento() }>Agregar al array</button>
        </div>
    )
}

export default Listas
