import React, {Component} from 'react';
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Accordion from "./components/Accordion/Accordion.jsx";

const faqs = [
    {title: "Where are these chairs assembled?", text: "In production"},
    {title: "How long do I have to return my chairs", text: "One day, in inside EU"},
    {title: "Do you ship to countries to outside the EU", text: "Yes"}
]

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <div>
                    <a href="https://react.dev" target="_blank" rel="noreferrer">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <h1>React</h1>
                <div>
                    <button onClick={() => setCount((count) => count + 1)}>
                        count is {count}
                    </button>
                </div>
            </div>
            <div className="App2">
                <Accordion data={faqs}/>
            </div>

        </div>
    )
}

export default App;


