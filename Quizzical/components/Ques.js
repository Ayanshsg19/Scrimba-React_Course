import React from "react"
import {nanoid} from "nanoid"

export default function Ques(props) {
    
    const [selectedArr, setSelectedArr] = React.useState([-1, -1, -1, -1])
    
    // sets the optionArr which is used to render the options on the webpage according to specific demands
    const optionArr = props.options.map((option, index) => {
        return (
            // if user clicked the "check answers" btn or not.
            props.check
            ?
            <div 
                key={nanoid()}
                data-index={index}
                className={index === selectedArr[index] ? "selected" : ""}
            >
                {option}
            </div>
            :
            (
                // if the correct option is correct use className "correct" else use either "wrong" or "other".
                (option === props.correct)
                ?
                <div 
                    key={nanoid()}
                    className="correct"
                >
                    {option}
                </div>
                :
                <div 
                    key={nanoid()}
                    className={index === selectedArr[index] ? "wrong" : "others"}
                >
                    {option}
                </div>
            )
        )
    })
    
    // used to set the heldOption key to the clickedoption value, which is then used to find the number of correct options clicked, and also used to change the color of the clicked option by storing the index of selected option and putting relevant className while making the optionArr in Ques.js.
    function holdOption(event) {
        const i = parseInt(event.target.dataset.index)
        setSelectedArr(prevArr => {
            let arr = [-1,-1,-1,-1]
            arr[i] = i
            return arr
        })
        props.getSelected(event.target.innerText, props.id)
    }
    
    return (
        <div className="main-qel">
            <div className="main-ques">{props.question}</div>
            <div className="main-options" onClick={holdOption}>{optionArr}</div>
            <hr />
        </div>
    )
}