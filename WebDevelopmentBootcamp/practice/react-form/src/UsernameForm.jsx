import { useState } from 'react'
export default function UsernameForm() {
    const [username, setUsername] = useState('')
    const updateUsername = (e) => {
        setUsername(e.target.value)
    }
    return (
        <div>
            <label htmlFor="username">Username:</label>
            <input 
            id="username"
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={updateUsername}/>
            <button>Submit</button>
        </div>
    )
}