import React from "react"
import Main from "./Main"

export default function Start() {
    
    const [start, setStart] = React.useState(true)
    const [categoryData, setCategoryData] = React.useState([])
    const [categoryName, setCategoryName] = React.useState()
    const [categoryId, setCategoryId] = React.useState(9)
    
    // sotres the API data from https://opentdb.com/ and stores the question category in an array which is used to select the category of questions from the dropdown.
    React.useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then(res => res.json())
            .then(data => setCategoryData(data.trivia_categories))
    }, [])
    
    // set the options array in the dropdown menu
    const categoryOptions = categoryData.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
        ))
    
    // handle clicks on the category selected from the dropdown, which is then used to find the category id, which in turn is used to make an API call from the list of questions in the MAIN component
    function handleChange(event) {
        const {value} = event.target
        setCategoryName(value)
    }
    
    // toggles start btn to display the quiz.
    function toggleStart() {
        for(let i = 0; i < categoryData.length; i++) {
            if(categoryData[i].name === categoryName) {
                setCategoryId(categoryData[i].id)
                break
            }
        }
        setStart(false)
    }
    
    return (
        <div className="start">
            {
                start
                ?
                <div className="start-in">
                    <div className="start-head">Quizzical</div>
                    <div className="start-option">
                        <label htmlFor="quizCategory">Quiz Category : </label>
                        <select
                            id="quizCategory"
                            value={categoryName}
                            onChange={handleChange}
                            className="start-drop"
                        >
                            {categoryOptions}
                        </select>
                    </div>
                    <div className="start-btn" onClick={toggleStart}>Start Quiz</div>
                </div>
                :
                <Main 
                    url={`https://opentdb.com/api.php?amount=5&type=multiple&category=${categoryId}`} 
                />
            }
        </div>
    )
}