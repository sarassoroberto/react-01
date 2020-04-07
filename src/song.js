import React from 'react'

// 01 Functional Component

// function song() {}
const song = (props) => {
    //console.log(props.title);
    return (
            <div className="song">
                <h6>{props.title}</h6>
                <p>time: {props.time}</p>
            </div>
            )
}

export default song