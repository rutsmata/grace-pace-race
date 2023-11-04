import { useState } from "react"

export default function Counter (props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1)
    }

    const clearClickHandler = () => {
        setCount(0)
    }

    return (
                <div>

                    {count < 0
                        ? <p>Invalid count!</p>
                        : null
                    }
                    {count == 0 && <p>Please start incrementing!</p>}
                    {count == 0 || <p>Please start incrementing!</p>}


                <button onClick={incrementClickHandler}>+</button>
                <button onClick={clearClickHandler}>Clear</button>
              <a
                href="javascript:void(0)"
                className="font-weight-bold text-muted mr-4"
                >
                <i className="ti-pinterest-alt pr-1" /> Counter: {count}
              </a>
                  </div>

        
    )
}