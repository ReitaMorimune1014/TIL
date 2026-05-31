import {v4 as uuid} from 'uuid'
import { useState } from 'react'

function randomEmoji() {
    const emojis = ['🤩', '🤗', '🤔', '🤨', '🤫', '🤭', '🤮', '🤯', '🤠', '🤡']
    return emojis[Math.floor(Math.random() * emojis.length)]
}

export default function EmojiClicker() {
    const [emojis,setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}])
    const addEmoji = () => {
        setEmojis((previousEmojis) => [...previousEmojis, {id: uuid(), emoji: randomEmoji()}])
    }
    const removeEmoji = (id) => {
        setEmojis((previousEmojis) => previousEmojis.filter(emoji => emoji.id !== id))
    }
    const makeEveryEmojiHeart = () => {
        setEmojis((previousEmojis) => previousEmojis.map(emoji => ({...emoji, emoji: '❤️'})))
    }
    return (
        <div>
            {emojis.map(emoji => (
                <span style={{fontSize: '2rem'}} key={emoji.id} onClick={() => removeEmoji(emoji.id)}>{emoji.emoji}</span>
            ))}
            <button onClick={addEmoji}>絵文字を追加しよう！</button>
            <button onClick={makeEveryEmojiHeart}>すべてハートにする</button>
        </div>
    )
}