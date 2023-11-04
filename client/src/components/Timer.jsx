import { useState } from "react";

export default function Timer (props) {
    const [time, setTime] = useState(props.startTime) // 0 is initial state, e.g starts from. Could be also null or undefined (empty parameter), [], {}...
    // first element is the current value of the state
    // second element - function to change the state
    // we could have multiple states to a single component

    setTimeout (() => {
        setTime(time + 1)
    }, 1000)

    return (
        <div>
            <h3>Timer: {time}</h3>
            <p>{time}</p>
        </div>
    )
}