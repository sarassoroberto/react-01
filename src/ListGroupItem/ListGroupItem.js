import React from 'react'


const ListGroupItem = (props) => {

    return (
        <div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">
                    <i class="fa fa-plus-circle pr-1"></i> 
                    {props.header}
                </h5>
                <small>{props.right}</small>
            </div>
            <p class="mb-1">
                {props.content}    
            </p>
        </div>
    )
}

export default ListGroupItem