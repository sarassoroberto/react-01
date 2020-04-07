import React, { useState } from 'react' //preso da node module

const ListGroupItem = (props) => {

    console.log(props.content === undefined)

    const [state,setState] = useState({
        "openNote":false
    })

    const toggleNote = () => {
        const newState = ! state.openNote;
        setState({"openNote":newState})
    }

    return(
        <div  className="list-group-item list-group-item-action" >
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    {
                        props.content ? <i
                                        onClick = {toggleNote} 
                                        class="fa fa-plus-circle pr-1"
                                        ></i> 
                                    : null
                    }
                    {props.heading}
                </h5>
                <small>{props.right}</small>
            </div>
            {
                state.openNote ? <p className="mb-1"><small>{props.content}</small></p> : null        
            }
        </div>
    )
}

export default ListGroupItem