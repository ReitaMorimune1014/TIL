import { useState } from 'react'
export default function BetterSignupForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        password: ''
    })
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData.firstName, formData.lastName)
    }
    const handleChange = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        setFormData((currData) => {
            return {...currData, [fieldName]: value}
        });
    }
    return (
        <div>
                <label htmlFor="firstname">First Name:</label>
                <input 
                id="firstname"
                type="text" 
                name="firstName"
                placeholder="First Name" 
                value={formData.firstName} 
                onChange={handleChange}/>

                <label htmlFor="lastname">Last Name:</label>
                <input 
                id="lastname"
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                value={formData.lastName} 
                onChange={handleChange}/>

        <label htmlFor="password">Password:</label>
                <input 
                id="password"
                type="password" 
                name="password"
                placeholder="Password" 
                value={formData.password} 
                onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}