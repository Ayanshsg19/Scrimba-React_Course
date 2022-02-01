import React from "react"

export default function Meme(props) {
    
    const [memeUrl, setMemeUrl] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [allMeme, setAllMeme] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    }, [])
     
    function getMemeUrl() {
        const idx = Math.floor(Math.random() * allMeme.length)
        setMemeUrl(allMeme[idx].url)
    }
    
    return (
        <div className="meme-container">
            <div className="meme-btn" onClick={getMemeUrl}>
                Get a new meme image 🖼
            </div>
            <div className="memeImg-container">
                <div className="top">{props.text.topText}</div>
                <img src={memeUrl} className="meme-img"/>
                <div className="bottom">{props.text.bottomText}</div>
            </div>
        </div>
    )
}