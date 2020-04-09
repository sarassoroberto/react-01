import React from 'react'


const ListGroupItem = (props) => {

    return (
        <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    <i className="fa fa-plus-circle pr-1"></i> 
                    {props.header}
                </h5>
                <small>{props.right}</small>
            </div>
            <p className="mb-1">
                {props.content}    
            </p>
        </div>
    )
}

export default ListGroupItem