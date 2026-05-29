export default function ShoppingList({items}) {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => (
                    <li key={i.id}
                    style={{color: i.completed ? 'green' : 'red', 
                        textDecoration: i.completed ? 'line-through' : 'none'}}>{i.items} - {i.quantity}</li>
                ))}
            </ul>
        </div>
    );
}