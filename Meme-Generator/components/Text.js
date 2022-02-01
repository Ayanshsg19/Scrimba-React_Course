import React from "react"

export default function Text(props) {
    
    function handleChange(event) {
        const {name, value} = event.target
        
        props.setText(prev => ({
            ...prev,
            [name]: value
        }))
    }
    
    return (
        <div className="form">
            <input 
                type="text"
                placeholder="Top text"
                name="topText"
                value={props.text.topText}
                onChange={handleChange}
            />
            <input 
                type="text"
                placeholder="Bottom text"
                name="bottomText"
                value={props.text.bottomText}
                onChange={handleChange}
            />
        </div>
    )
}