import { useState } from "react"
import "./index.css";

function Counter()
{
    var [count,setCount] = useState(0)

    function increment()
    {
        setCount(count+1)
    }

    function decrement()
    {
        setCount(count-1)
    }

    return(
        <div>
            <h1 className="header">Double Sided Counter</h1>
            <h1>{count}</h1>
            <button className="buttons" onClick={increment}>Increment(+)</button>            
            <button className="buttons" onClick={() => setCount(0)}>Reset</button>
            <button className="buttons" onClick={decrement}>Decrement(-)</button>
        </div>
    )
}








export default Counter