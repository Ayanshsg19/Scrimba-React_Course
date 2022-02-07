import React from "react"
import Header from "./Header"
import Die from "./Die"
import EndGame from "./EndGame"

export default function Main(props) {
    
    const [allPlay, setAllPlay] = React.useState(true)
    const [tenzies, setTenzies] = React.useState(false)
    const [dice, setDice] = React.useState(randDiceArray())
    const [currentPlayer, setCurrentPlayer] = React.useState(props.players[0].name)
    const [playNum, setPlayNum] = React.useState(0)
    const [currentRoll, setCurrentRoll] = React.useState(0)
    const [win, setWin] = React.useState(props.players)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstVal = dice[0].val
        const allVal = dice.every(die => die.val === firstVal)
        if(allHeld && allVal) {
            setTenzies(true)
            setWin(prevArr => {
                const arr = [...prevArr]
                arr[playNum] = {...prevArr[playNum], rollCount: currentRoll}
                return arr
            })
            setPlayNum(prevNum => prevNum+1)
            if(playNum === props.players.length-1) {
                setAllPlay(false)
            }
        }
    }, [dice])
    
    function randDiceArray() {
        const diceArray = []
        for(let i = 0; i < 10; i++) {
            diceArray.push({
                val: Math.floor(Math.random() * 6),
                isHeld: false
            })
        }
        return diceArray
    }
    
    const getRandDice = dice.map((die,index) => (
        <Die 
            key={index}
            value={die.val}
            isHeld={die.isHeld}
            toggle={() => holdDice(index)}
        />
    ))
    
    function getDice() {
        if(tenzies) {
            setCurrentRoll(0)
            setCurrentPlayer(props.players[playNum].name)
            setDice(randDiceArray())
            setTenzies(false)
        }
        else {
            setCurrentRoll(prevCount => prevCount + 1)
            setDice(prevArr => prevArr.map(die => {
                return !die.isHeld ? {...die, val: Math.floor(Math.random() * 6)} : die
            }))
        }
    }
    
    function holdDice(id) {
        setDice(prevArr => {
            const newArr = [...prevArr]
            newArr[id] = {...prevArr[id], isHeld: !prevArr[id].isHeld}
            return newArr
        })
    }
    
    return (
        <div className="main">
            {
                allPlay 
                ?
                <div className="main-in">
                    <div className="current-player">{currentPlayer}</div>
                    <Header />
                    <div className="dice-container">
                        {getRandDice}
                    </div>
                    <div className="roll-btn" onClick={getDice}>
                        {tenzies ? "Next Player" : "Roll"}
                    </div>
                </div>
                :
                <EndGame 
                    winner={win}
                />
            }
        </div>
    )
}