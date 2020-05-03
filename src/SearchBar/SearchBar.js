import React, { useState } from 'react'

export default function SearchBar (props) {
    

    const [parola, setParola] = useState("")

    function changehandler(e){
        const newParola = e.target.value
        console.log("changehandler",newParola)
        
        setParola(newParola)

        props.onSearch(newParola)
    }
    
    return (
            <div className="form-group">
            <label>search</label>    
            <input type="text" className="form-control" onChange={changehandler} value={parola} />
            </div>
            )
}

// 