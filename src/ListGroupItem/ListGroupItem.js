import React, { useState } from 'react'
// export default React
// export useState = (a,b) => {}  :::: export function useState() {}
// useState --> HOOK --> Solo in functional Component
const ListGroupItem = (props) => {

    const inizio = {
        "isContentOpen" : false
        }

    const [statoDelPannello,impostaStatoDelPannello] = useState(inizio)
    
    //const [active,setActive] = useState(props.active)

    const toggleContent = (e) => {

        const nuovoStato = {
           "isContentOpen" : ! statoDelPannello.isContentOpen 
        }
        impostaStatoDelPannello(nuovoStato)
    }
  
    const activeClass = props.active  ? 'active' : null
    const width = {padding:"0 1. 5rem"}
    const itemHeight = {height:"1.5rem","align-items":"center"}

    return (
        <div  className={"list-group-item list-group-item-action "+activeClass} >
            <div style={itemHeight} className="d-flex w-100 justify-content-between align-content-center px-1">
                { 
                props.content ? <div style={width} className="fa fa-plus-circle text-align-center pr-2" onClick = {toggleContent}></div> 
                              : <div style={width}></div>  
                }

                <div className="header flex-grow-1" onClick={()=> props.onSongChange(props.id)}>
                        {props.header}
                </div>  
            
                <small>{props.right}</small>
            </div>
            { 
            statoDelPannello.isContentOpen ? <p className="mb-1 mt-1 pl-4">{props.content}</p>
                                           : null
            }
           
        </div>
    )
}

export default ListGroupItem