import React from "react"
import Confetti from 'react-confetti'

export default function EndGame(props) {
    
    props.winner.sort((a, b) => (a.rollCount > b.rollCount ? 1 : -1))
    
    const declareWinners = props.winner.map(player => (
        <div className="winner-el" key={player.id}>
            {player.name}
            <span>{player.rollCount}</span>
        </div>
    ))
    
    return (
        <div className="endgame">
            <Confetti />
            <div className="endgame-in">
                {declareWinners}
            </div>
        </div>
    )
}