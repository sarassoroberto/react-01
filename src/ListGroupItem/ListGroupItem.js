import React from 'react'


const ListGroupItem = (props) => {

    return (
        <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    {props.content ? <i className="fa fa-plus-circle pr-1"></i> : null  }
                    {props.header}
                </h5>
                <small>{props.right}</small>
            </div>
            { props.content ?
                <p className="mb-1">
                    {props.content}    
                </p>
                : null
            }
           
        </div>
    )
}

export default ListGroupItem