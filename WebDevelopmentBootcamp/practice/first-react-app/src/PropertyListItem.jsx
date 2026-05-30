export default function PropertyListItem({
    name,
    rating,
    price
}) {
    return (
        <li>
            {name} - {rating} - ¥{price}
        </li>
    );
}