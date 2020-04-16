import React, { useState } from 'react'
// export default React
// export useState = (a,b) => {}  :::: export function useState() {}
// useState --> HOOK --> Solo in functional Component
const ListGroupItem = (props) => {


    // le informazioni sullo stato in lettura si possona fare accedeno direttamente allo stato
    const inizio = {
        "isContentOpen" : false
        }

    const [statoDelPannello,impostaStatoDelPannello] = useState(inizio)
    const [active,setActive] = useState(false)

    const toggleContent = (e) => {
        // true --> ! true --> false
        // false --> ! false --> true

        // NOOOOOOOO !!!!!!
        // statoDelPannello.isContentOpen = ! statoDelPannello.isContentOpen
        const nuovoStato = {
           "isContentOpen" : ! statoDelPannello.isContentOpen 
        }

        impostaStatoDelPannello(nuovoStato)
    }

    const clickHandler = () => {
        console.log("selectItem",props.id)
        props.listItemSelected(props.id)
    }


    return (
        <div className={"list-group-item list-group-item-action"}
        onClick={clickHandler}
        >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    {props.content ? 
                                    <i  className="fa fa-plus-circle pr-1"
                                        onClick = {toggleContent}></i> 
                                   : null  }
                    {props.header}
                </h5>
                <small>{props.right}</small>
            </div>
            { 
                statoDelPannello.isContentOpen ?
                <p className="mb-1">
                    {props.content}  
                  
                </p>
                : 
                null
            }
           
        </div>
    )
}

export default ListGroupItem