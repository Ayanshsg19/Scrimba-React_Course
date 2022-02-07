import React from "react"

export default function Header() {
    return (
        <div className="header">
            <div className="title">Tenzies</div>
            <div className="instructions">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
                <br />One with minimum dice rolls, wins.
            </div>
        </div>
    )
}