export default function Die({numSides = 6}) {
    const num = Math.floor(Math.random() * numSides) + 1;
    return (
        <div>
            <p>{numSides}面のさいころの出目は{num}です</p>
        </div>
    )
}