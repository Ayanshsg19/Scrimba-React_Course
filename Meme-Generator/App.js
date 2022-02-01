import React from "react"
import Header from "./components/Header"
import Text from "./components/Text"
import Meme from "./components/Meme"

export default function App() {
    
    const [memeText, setMemeText] = React.useState({
        topText: "",
        bottomText: ""
    })
    
    return (
        <div>
            <Header />
            <main>
                <Text 
                    setText={setMemeText}
                    text={memeText}
                />
                <Meme 
                    text={memeText}
                />
            </main>
        </div>
    )
}