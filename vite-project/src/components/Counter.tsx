import { useState } from "react"

function Counter() {
    const [counterState, setCounterState] = useState(0);

    const handleClick = () => {
        setCounterState(counterState + 17)
    }

    return (
        <div>
            <button onClick={handleClick}>Clique !!!</button>
            <p>Vous avez cliqué {counterState} fois</p>
        </div>
    )
}

export default Counter