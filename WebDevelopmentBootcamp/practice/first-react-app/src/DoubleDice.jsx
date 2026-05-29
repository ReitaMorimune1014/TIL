export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 6) + 1;
    const num2 = Math.floor(Math.random() * 6) + 1;
    const isWinner = num1 === num2;
    const style = {color: isWinner ? 'green' : 'red', fontSize: '20px'};
    return (
        <div className="double-dice" style={style}>
            <h1>Double Dice</h1>
            {isWinner ? <h2>勝ち</h2> : null}
            <p>1つ目のさいころの出目は{num1}です</p>
            <p>2つ目のさいころの出目は{num2}です</p>
        </div>
    )
}