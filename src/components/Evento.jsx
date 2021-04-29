import React, { Fragment, useState } from 'react'

const Evento = () => {
    const [texto,setTexto] = useState('nuevo texto')
    
    const  eventoClick = () => {
        console.log('Evento click')
        setTexto('update texto')
    } 
    return (
        <Fragment>
            <hr/>
            <h2> { texto }</h2>
            <button onClick={ () => eventoClick() }> Button</button>
        </Fragment>
    )
}

export default Evento
