import PropertyListItem from './PropertyListItem'
export default function PropertyList({ properties }) {
    return (
        <div>
            <h1>Property List</h1>
            <ul>
                {properties.map(p => (
                    <PropertyListItem key={p.id} {...p} />
                ))}
            </ul>
        </div>
    );
}