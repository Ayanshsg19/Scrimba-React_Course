import React from "react"
import Players from "./Players"

export default function Start() {
    
    const [startGame, setStartGame] = React.useState(true)
    const [playerCount, setPlayerCount] = React.useState(1)
    
    function toggleStart() {
        setStartGame(false)
    }
    
    function plusPlayer() {
        setPlayerCount(prevCount => prevCount<3 ? prevCount+1 : prevCount)
    }
    
    function minusPlayer() {
        setPlayerCount(prevCount => prevCount>1 ? prevCount-1 : prevCount)
    }
    
    return (
        <div className="start">
            {
                startGame
                ? 
                <div className="start-in">
                    <div className="start-title">Tenzies</div>
                    <div className="start-btn" onClick={toggleStart}>Start Game</div>
                    <div className="start-players">
                        <div>Players</div>
                        <div className="player-counter">
                            <div onClick={minusPlayer}>-</div>
                            <div>{playerCount}</div>
                            <div onClick={plusPlayer}>+</div>
                        </div>
                    </div>
                </div>
                :
                <Players 
                    playerCount={playerCount}
                />
            }
        </div>
    )
}