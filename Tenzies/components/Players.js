import React from "react"
import {nanoid} from "nanoid"
import Main from "./Main"

export default function Players(props) {
    
    const [enterGame, setEnterGame] = React.useState(true)
    const [playerList, setPlayerList] = React.useState(getPlayers())
    
    function getPlayers() {
        const arr = []
        for(let i = 0; i < props.playerCount; i++) {
            arr.push({
                name: `player ${i+1}`,
                id: nanoid(),
                rollCount: 0
            })
        }
        return arr
    }
    
    const inputPlayers = playerList.map(player => (
        <input 
            key={player.id}
            type="text"
            className="player-input"
            placeholder="Enter Player Name"
            id={player.id}
            value={player.name}
            onChange={handleChange}
        />
    ))
    
    function handleChange(event) {
        const {id, value} = event.target
        setPlayerList(prevArr => prevArr.map(play => {
            return play.id === id ? {...play, name: value} : play
        }))
    }
    
    function toggleEnter() {
        setEnterGame(false)
    }
    
    return (
        <div className="players">
            {
                enterGame
                ?
                <div className="players-in">
                    <div className="player-title">Players</div>
                    <div className="player-form">
                        {inputPlayers}
                    </div>
                    <div className="player-btn" onClick={toggleEnter}>Enter</div>
                </div>
                :
                <Main 
                    players={playerList}
                />
            }
        </div>
    )
}