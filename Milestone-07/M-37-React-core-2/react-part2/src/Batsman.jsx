import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    //state for sixes count
    const [six, setSix] = useState(0);
    //state for fours count
    const [four, setFour] = useState(0);

    const handelSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handelFour = () => {
        setFour(four + 1);
        setRuns(runs + 4);
    }
    const handelSix = () => {
        setSix(six + 1);
        setRuns(runs + 6);
    }


    return (
        <div className="cardStyle text-2xl font-bold">
            {runs > 50 && <h4>🏆 Player scored 50! Congratulations! 🎉</h4>}


            <h3>Batsman Score : {runs} 🏏</h3>

            <p>Total four: {four} 🔥</p>
            <p>Total six: {six} 💥</p>
            <button onClick={handelSingle}>Singles 1️⃣</button>
            <button onClick={handelFour}>Four 4️⃣</button>
            <button onClick={handelSix}>Six 6️⃣</button>
        </div>
    )
}