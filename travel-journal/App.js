import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(el => {
        return (
            <Card 
                key = {el.key}
                item = {el}
            />
        )
    })
    return (
        <div>
            <Header />
            {cards}
        </div>
    )
}