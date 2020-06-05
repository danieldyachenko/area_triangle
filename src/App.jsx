import React, {useState} from "react";
import './App.css';

export default function AreaTriangle() { //AreaTriangle

    const [sideA, setSideA] = useState(null)
    const [sideB, setSideB] = useState(null)
    const [sideC, setSideC] = useState(null)
    const [result, setResult] = useState(null)

    const calculate = (a, b, c) => {
        const p = (a + b + c)/2
        return Math.sqrt(p * (p - a) * (p - b) * (p - c))
    }

    return (
        <div className='App'>
            <div><input value={sideA} onChange={(event) => setSideA(event.target.value)}/> сторона (a)</div>
            <div><input value={sideB} onChange={(event) => setSideB(event.target.value)}/> сторона (b)</div>
            <div><input value={sideC} onChange={(event) => setSideC(event.target.value)}/> сторона (c)</div>
            <button onClick={() => setResult(calculate(sideA, sideB, sideC))}>Calculate</button>
            <span>{result}</span>
        </div>
    )
}