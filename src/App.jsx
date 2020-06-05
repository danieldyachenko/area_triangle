import React, {useState} from "react";
import './App.css';

const initialState = {
    sideA: null,
    sideB: null,
    sideC: null,
    result: null
};

export function App() {

    const [sideA, setSideA] = useState(null)
    const [sideB, setSideB] = useState(null)
    const [sideC, setSideC] = useState(null)
    const [result, setResult] = useState(null)

    const calculate = (a, b, c) => {
        const p = (a + b + c)/2
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
        return s
    }

    return (
        <div className='App'>
            <div><input value={sideA} onChange={(event) => setSideA(event.target.value)}/> сторона (a)</div>
            <div><input value={sideB} onChange={(event) => setSideB(event.target.value)}/> сторона (b)</div>
            <div><input value={sideC} onChange={(event) => setSideC(event.target.value)}/> сторона (c)</div>
            <bottom onClick={() => setResult(calculate(sideA, sideB, sideC))}>Calculate</bottom>
            <span>{result}</span>
        </div>
    )
}