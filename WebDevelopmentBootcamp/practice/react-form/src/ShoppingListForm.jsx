import { useState } from "react";
export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({
        item: '',
        quantity: 0
    })
    const handleChange = (e) => {
        setFormData((currData) => {
            return {
                ...currData,
                [e.target.name]: e.target.value
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="item">商品名:</label>
            <input
                type="text"
                name="item"
                id="item"
                placeholder="商品名"
                value={formData.item}
                onChange={handleChange} />

            <label htmlFor="quantity">数量:</label>
            <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="数量"
                value={formData.quantity}
                onChange={handleChange} />
            <button type="submit">追加</button>
        </form>
    )
}