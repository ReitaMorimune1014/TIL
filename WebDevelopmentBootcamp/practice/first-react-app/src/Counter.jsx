import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0)
    const changeCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={changeCount}>Click me</button>
        </div>
    );
}