import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }
    const Square = () => {
        setCounter(counter * counter)
    }
    return (
        <div className="text-center display-6 border rounded-5">
            <div>{counter}</div>
            <div className="mt-3 mb-3">
                <button className="btn btn-sm btn-outline-success m-2" onClick={increment}>Increment</button>
                <button className="btn btn-sm btn-outline-warning m-2" onClick={reset}>Reset</button>
                <button className="btn btn-sm btn-outline-danger m-2" onClick={decrement}>Decrement</button>
                <button className="btn btn-sm btn-outline-primary m-2" onClick={Square}>Square</button>


            </div>
        </div>
    )
}
export default Counter;