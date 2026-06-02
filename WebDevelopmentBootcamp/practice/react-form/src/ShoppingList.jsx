import { useState } from "react";
import RHFForm from "./RHFForm";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
    const [items, setItems] = useState([{
        id: 1,
        product: 'Apple',
        quantity: 10
    },
    {
        id: 2,
        product: 'Banana',
        quantity: 20
    },
    {
        id: 3,
        product: 'Orange',
        quantity: 30
    }
    ]);

    const addItem = (formData) => {
        const correctedItem = {
            id: currItems.length + 1,
            product: formData.item,
            quantity: formData.quantity
        }
        setItems((currItems) => [...currItems, correctedItem]);
    };
    return <RHFForm />;
}