import React from 'react' //preso da node module

const ListGroupItem = (props) => {

    return(
        <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{props.heading}</h5>
                <small>{props.right}</small>
            </div>
            <p className="mb-1"><small>{props.content}</small></p>
        </a>
    )
}

export default ListGroupItem