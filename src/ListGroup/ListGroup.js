import React from 'react'

const ListGroup = (props)=>{

    return (
        <section className="ListGroup">
            <h1>{props.header}</h1>
            
            <div className="list-group" >
               
               {props.children}
            </div>
        </section>
    )
}

export default ListGroup