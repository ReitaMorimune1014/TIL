import { useState } from 'react'
export default function Counter() {
    const [count, setCount] = useState(0)
    const addOne = () => {
        setCount(c => c + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addOne}>Change Count</button>
        </div>
    )
}