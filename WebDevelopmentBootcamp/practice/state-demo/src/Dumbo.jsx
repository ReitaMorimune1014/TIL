import { useState } from 'react'

function generateGameBoard() {
    console.log('generating game board')
    return Array(5000);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard)
    return <button>stateを初期化</button>
}