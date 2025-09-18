// task-2 
import { useState } from "react"

export default function Display() {
    const [display, setDisplay] = useState("")

    const handleDisplay = () => {
        // display === "" ? setDisplay("Hello, React Learner!") : setDisplay("")
        setDisplay(display ? "" : "Hello, React Learner!")
    }
    return (
        <div className="cardStyle">
            <h1>{display}</h1>
            <button onClick={handleDisplay}>Click Me</button>
        </div>
    )
}