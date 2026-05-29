export default function Slots({s1, s2, s3}) {
    const winner = (s1 === s2) && (s2 === s3);
    const style = {color: winner ? 'green' : 'red'};
    return (
        <div>
            <p style={style}>{s1} {s2} {s3}</p>
            {winner ? <h2 style={style}>You Win!</h2> : <h2 style={style}>You Lose!</h2>}
        </div>
    )
}