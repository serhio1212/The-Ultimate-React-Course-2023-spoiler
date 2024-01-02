import React, {Component} from 'react';
import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Accordion from "./components/Accordion/Accordion.jsx";
// import faqs from "./redux/dData.jsx";
import faqs from "./redux/dData";

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
                <Accordion dData={faqs}  />
            </div>

        </div>
    )
}

export default App;


