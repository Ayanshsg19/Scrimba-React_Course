import React from "react"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import Ques from "./Ques"

export default function Main(props) {
    
    const [categoryData, setCategoryData] = React.useState([])
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    const [check, setCheck] = React.useState(true)
    
    // Takes the data from the API https://opentdb.com/ and stores it in categoryData array
    React.useEffect(()=> {
        fetch(props.url)
            .then(res => res.json())
            .then(data => setCategoryData(prev => {
                let v = data.results
                let arr = []
                for(let i = 0; i < v.length; i++) {
                    let a = [...v[i].incorrect_answers, v[i].correct_answer]
                    arr.push({
                        id: nanoid(),
                        question: v[i].question,
                        options: a.sort(()=>Math.random()-0.5),
                        correct: v[i].correct_answer,
                        heldOption: ""
                    })
                }
                return arr
            }))
    }, [])
    
    // get the text of the option clicked and is used to comapre the correct option with the selected option
    function getSelected(txt, id) {
        setCategoryData(prev => prev.map(data => {
            return (
                data.id === id
                ?
                {...data, heldOption: txt}
                :
                data
            ) 
        }))
    }
    
    // Returns a QnA components for each categoryData element
    const QnA = categoryData.map(data =>{
        return (
            <Ques 
                key={data.id}
                id={data.id}
                question={data.question}
                options={data.options}
                correct={data.correct}
                selected={data.HeldOption}
                getSelected={getSelected}
                check={check}
            />
        )
    } )
    
    // toggle the check answers btn to show the result of quiz
    function toggleCheck() {
        setCorrectAnswers(categoryData.filter(data => data.correct === data.heldOption).length)
        setCheck(false)
    }
    
    // refreshes the page and start new quiz
    function refreshPage() {
        window.location.reload(false);
    }
    
    return (
        <div className="main">
            {correctAnswers === 5 && <Confetti />}
            <div className="main-in">
                {QnA}
                {
                    check
                    ?
                    <div className="main-check-btn" onClick={toggleCheck}>Check Answers</div>
                    :
                    <div className="result">
                        <div className="result-desc">You scored {correctAnswers}/5 correct answers</div>
                        <div className="refresh-btn" onClick={refreshPage}>Play Again</div>
                    </div>
                }
            </div>
        </div>
    )
}