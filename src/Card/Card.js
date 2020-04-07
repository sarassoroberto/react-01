import React from 'react' 

const Card = (props) => {
    
    return (
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Card

