import { useState } from 'react'
export default function SignupForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const updateLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(firstName, lastName)
    }
    return (
        <div>
                <label htmlFor="firstname">First Name:</label>
                <input 
                id="firstname"
                type="text" 
                placeholder="First Name" 
                value={firstName} 
                onChange={updateFirstName}/>
                <label htmlFor="lastname">Last Name:</label>
                <input 
                id="lastname"
                type="text" 
                placeholder="Last Name" 
                value={lastName} 
                onChange={updateLastName}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}