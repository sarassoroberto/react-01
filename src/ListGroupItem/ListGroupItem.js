import React from 'react' //preso da node module

const ListGroupItem = (props) => {

    console.log(props.content === undefined)

    return(
        <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                    {
                        props.content ?
                        <i class="fa fa-plus-circle pr-1"></i>
                        : null
                    }
                    {props.heading}
                </h5>
                <small>{props.right}</small>
            </div>
            <p className="mb-1 d-none"><small>{props.content}</small></p>
        </a>
    )
}

export default ListGroupItem