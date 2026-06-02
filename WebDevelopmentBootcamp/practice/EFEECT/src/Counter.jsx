import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Taro");
    useEffect(function myEffect(){
        console.log("useEffect");
    }, [count]);
    const increment = () => {
        setCount(c => c + 1);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <p>
                {name}
            </p>
            <input type="text" value={name} onChange={handleNameChange} />
        </div>
    )
}