import { useState } from "react";

export default function ProfileSearchForm({ search }) {
    const [term, setTerm] = useState("");
    function handleSearchChange(e) {
        setTerm(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        search(term);
        setTerm("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={term} onChange={handleSearchChange} />
            <button>Search</button>
        </form>
    )
}