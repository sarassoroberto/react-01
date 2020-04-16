import React from 'react'

// 01 Functional Component
// importare react
// dichiarazione della funzione
// volendo anche la dichiarazione es5 function song() {}
// deve restituire un JSX (HTML)
// deve esportare il componente (export deault)
// dovete importare il componente dove verrà utilizzato

const song = (props) => {
    return (
            <div className="song">
                <h6>{props.titolocanzone}</h6>
                <p>autore: {props.author}</p>
            </div>
            )
}

// ES6 export 
export default song