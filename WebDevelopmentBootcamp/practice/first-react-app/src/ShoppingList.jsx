import ShoppingListItem from './ShoppingListItem';

export default function ShoppingList({ items }) {
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => (
                    <ShoppingListItem
                        key={i.id}
                        {...i}
                    />
                ))}
            </ul>
        </div>
    );
}