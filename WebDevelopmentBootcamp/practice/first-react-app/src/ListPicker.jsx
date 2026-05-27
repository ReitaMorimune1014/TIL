export default function ListPicker({values}) {
    const randIndex = Math.floor(Math.random() * values.length);
    const randomValue = values[randIndex];
    return (
        <div>
            <p>値の一覧： {values}</p>
            <p>ランダムな値： {randomValue}</p>
        </div>
    )
}