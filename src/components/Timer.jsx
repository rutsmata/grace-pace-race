import { useState } from "react";

export default function Timer (props) {
    const [time, setTime] = useState(props.startTime) // 0 is default value, e.g starts from. Could be also null or undefined, [], {}...

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