export default function ShoppingListItem({
    items,
    quantity,
    completed
}) {
    return (
        <li
            style={{
                color: completed ? 'green' : 'red',
                textDecoration: completed ? 'line-through' : 'none'
            }}
        >
            {items} - {quantity}
        </li>
    );
}