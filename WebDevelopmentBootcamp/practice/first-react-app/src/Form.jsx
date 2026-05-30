export default function Form() {
    const handleformSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }
    return (
        <form onSubmit={handleformSubmit}>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    );
}