import { useState } from "react";

export default function Increment () {
    const [ x, setx ] = useState(10);
    const [ count, setCount ] = useState(1);

    const incByThird = () => {        
        if (count % 3 == 0) {
            setx(x * 2);
        }

        setCount(count + 1);
    }

    return (
        <div>
            <h1>{x}</h1>
            <button onClick={incByThird}>Increment</button>
        </div>
    )
}