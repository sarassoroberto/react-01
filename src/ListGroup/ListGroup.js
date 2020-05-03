import React from 'react'

const ListGroup = (props)=>{

    return (
        <section className="ListGroup"> 
            <div className="list-group" > 
               {props.children}
            </div>
        </section>
    )
}

export default ListGroup