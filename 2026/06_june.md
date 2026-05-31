## 📅 2026年6月の記録

### 6月1日 
【やったこと】<br>
Udemy React講座：`Color Box演習問題`の学習<br>
Udemy React講座：`Stateを関数で更新する`の学習<br>
Udemy React講座：`Stateを関数で初期化する`の学習<br>
Udemy React講座：`Reactはいつ再描画するのか`の学習<br>
Udemy React講座：`StateでObjectを扱う`の学習<br>
Udemy React講座：`Stateで配列を扱う`の学習<br>
Udemy React講座：`UUIDで一意なIDを生成しよう`の学習<br>
Udemy React講座：`React流に配列から要素を削除`の学習<br>
Udemy React講座：`Reactで使える配列更新パターン`の学習<br>
Udemy React講座：`配列内の全要素を更新する`の学習<br>
Udemy React講座：`スコアキーパー演習`の学習<br>

【コード】<br>
```
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
```

【学び・Why】<br>
Stateを直接更新するのではなく、新しい配列やオブジェクトを使うことを学んだ。<br>
上のコードのように、絵文字を追加するときはスプレッド構文を使った。<br>
また削除では、filterを使って、指定した要素以外の新しい配列を作った。<br>
UUIDを使うことで、重複のないキーを設定できることを学んだ<br>