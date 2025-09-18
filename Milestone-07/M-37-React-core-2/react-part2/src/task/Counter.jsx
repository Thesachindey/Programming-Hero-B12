import { useState } from "react";

export default function Counter() {
    const [increment, setIncrement] = useState(0);
    

    const handelIncre = () => {
        setIncrement(increment + 1);
    }

    const handelDecre = () => {
        increment > 0 && setIncrement(increment - 1);
    }
    const handelReset = () => {
       setIncrement(0);
    }

    return (
        <div className="cardStyle">
            <h1>{increment}</h1>
            <button onClick={handelIncre}>Click Me +</button>
            <button onClick={handelDecre}>Click Me -</button>
            <button onClick={handelReset}>Click Me ~</button>
        </div>
    )
}