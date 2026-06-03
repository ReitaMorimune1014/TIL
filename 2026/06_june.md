## 📅 2026年6月の記録
### 6月4日 
【やったこと】<br>
Udemy NewReact講座：`なぜReactなのか`の学習<br>
Udemy NewReact講座：`コースで使用するVSCodeの拡張機能を準備しよう`の学習<br>
Udemy NewReact講座：`資材のダウンロード`の学習<br>
Udemy NewReact講座：`Reactを動かしてみよう`の学習<br>

【一言で言うと】<br>
Reactとは、JSのライブラリで現在最も使われるモダンな技術である。<br>

【学び・Why】<br>
Reactはコンポーネント単位で画面を分割して開発するもの。<br>
State管理によって画面を自動的に更新できるため、DOMを直接いじる必要が少なくなる<br>

### 6月3日 
【やったこと】<br>
Udemy React講座：`ReactでFormを作ろう`の学習開始<br>
Udemy React講座：`制御コンポーネント`の学習<br>
Udemy React講座：`htmlFor属性について`の学習<br>
Udemy React講座：`複数のinputを使おう`の学習<br>
Udemy React講座：`登録フォームの改善`の学習<br>
Udemy React講座：`Computedプロパティ`の学習<br>
Udemy React講座：`ShoppingListFromコンポーネント`の学習<br>
～～～
Udemy React講座：`React Hook Formについて`の学習<br>
Udemy React講座：`useEffect`の学習開始<br>
Udemy React講座：`useEffectの使い方`の学習<br>
Udemy React講座：`useEffectの依存配列`の学習<br>
Udemy React講座：`APIから初期データを取得する`の学習<br>
Udemy React講座：`Githubプロフィール検索機能`の学習<br>
Udemy React講座：WevDevelopmentBootcapmのReact学習終了<br>
自己学習 成果物作成:いままでならったReactの知識を使い開発<br>

【コード】<br>
```
react-hook-form 抜粋
import { useForm } from "react-hook-form";

export default function RHFForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("example")} />
            <input {...register("exampleRequired", { required: true })} />
            
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}

github search 抜粋
const [username, setUsername] = useState("");
    const [profile, setProfile] = useState({ data: null, isLoading: false });

    useEffect(
        function feachUserOnUsernameChange() {
            async function fetchUser() {
                const userResult = await axios.get(`${BASE_URL}${username}`);
                setProfile({ data: userResult.data, isLoading: false });
            }
            fetchUser();
        },
        [username]
    );
```

【学び・Why】<br>
React Hook Formはregisterを使い、inputを登録するだけで、バリデーションができる。<br>
useEffectの後ろにつけるものが変更されること（依存関係）により、動作するもの。<br>
APIと組み合わせることで、ユーザーが操作によってデータを取得できる。<br>
Reactがちゃんと学習できているかどうか、taskアプリを作成して確認をした<br>
React,JS,React Hook Form,axios,uuidを使った<br>
作りながらコンポーネントの責務や、どこでState管理するかなどを考えてしまったので、効率的には作成できなかった<br>
https://github.com/ReitaMorimune1014/react-task-app

### 6月2日 
【やったこと】<br>
Udemy React講座：`コンポーネント設計`の学習開始<br>
Udemy React講座：`Lucky7の紹介`の学習<br>
Udemy React講座：`コンポーネントを設計しよう`の学習<br>
Udemy React講座：`さいころのコンポーネントを作る`の学習<br>
Udemy React講座：`Luckyコンポーネントを作ろう`の学習<br>
Udemy React講座：`StateWPropsに渡す`の学習<br>
Udemy React講座：`関数をPropsに渡す`の学習<br>
Udemy React講座：`Stateを更新する関数をPropsに渡す`の学習<br>
Udemy React講座：`Stateを更新する関数を使いこなそう`の学習<br>

【コード】<br>
```
export default function BoxGrid() {
    const [boxes,setBoxes] = useState([false,false,false,false,false,false])
    const resetBoxes = () => {
        setBoxes([false,false,false,false,false,false])
    }
    const toggleBox = (clickedIndex) => {
        setBoxes((previousBoxes) =>
            previousBoxes.map((boxIsActive, currentIndex) =>
                currentIndex === clickedIndex
                    ? !boxIsActive
                    : boxIsActive
            )
        )
    }
    return (
        <div>
            {boxes.map((box, index) => (
                <Box key={index} 
                toggle={() => toggleBox(index)}
                isActive={box}/>
            ))}
            <button onClick={resetBoxes}>Reset</button>
        </div>
    )
```

【学び・Why】<br>
なぜ関数をPropsで渡すのかは、下位コンポーネントでStateを管理するのではなく、判定した結果を制御コンポーネントに渡して、State管理するからである。<br>
この設計により、UIと制御を分けることができ、責務が明確になっている。<br>
上のコードでいうと、下位コンポーネントBoxを呼ぶときに、booleanや関数を渡している。<br>

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