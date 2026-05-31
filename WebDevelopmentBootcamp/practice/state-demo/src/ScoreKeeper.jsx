import { useState } from 'react'
export default function ScoreKeeper({numPlayers}) {
    const [scores,setScores] = useState(Array.from({length: numPlayers}, () => 0))
    function incrementScore(player) {
        setScores((previousScores) => previousScores.map((score, index) => index === player ? score + 1 : score))
    }
    function resetScores() {
        setScores(Array.from({length: numPlayers}, () => 0))
    }
    return (
        <div>
            <h1>Score Keeper</h1>
            {scores.map((score, index) => (
                <p key={index}>Player {index + 1}: {score}</p>
            ))}
            {Array.from({length: numPlayers}, (_, index) => (
                <button key={index} onClick={() => incrementScore(index)}>Player {index + 1}</button>
            ))}
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}
    