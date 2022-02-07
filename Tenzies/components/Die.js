import React from "react"
import DiceDot from "./DiceDot"

export default function Die(props) {
    
    return (
        <div className={`die ${props.isHeld && "held"}`} onClick={props.toggle}>
            {DiceDot[props.value]}
        </div>
    )
}