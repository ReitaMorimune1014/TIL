## 📅 2026年6月の記録
### 6月11日 
【やったこと】<br>
コードテスト対策：'２番目に大きい値'の学習<br>
コードテスト対策：'文字の出現回数'の学習<br>
コードテスト対策：'１段階flatten'の学習<br>
コードテスト対策：'オブジェクトのキー一覧'の学習<br>
コードテスト対策：'配列の合計値（reduce）'の学習<br>

【コード】<br>
```
// 6: 共通部分
function intersection(a, b) {
    const setB = new Set(b);
    return a.filter(x => setB.has(x));
}

// 7: 2番目に大きい値
function nextMaxNum(arr) {
    const n = arr.slice().sort((a, b) => b - a);
    return n[1];
}

// 8: 文字の出現回数
function strCount(str, target) {
    let count = 0;
    for (const n of str) {
        if (n === target) {
            count++;
        }
    }
    return count;
}

// 9: flatten（1段階）
function flatten(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    return result;
}

// 10: Object.keys
function objKey(obj) {
    return Object.keys(obj);
}

// 11: reduce（合計）
function sum(arr) {
    return arr.reduce((sum, n) => sum + n, 0);
}

```

【学び・Why】<br>
共通部分は、Set、filterを組み合わせる。<br>
２番目に大きい値は、sliceでコピー、b-aで降順にする<br>
Array.isArray()で配列かどうかを判定<br>
Object.keyでキーを取得<br>
reduceは(sum,n) => sum + nをつかう。<br>



### 6月10日 
【やったこと】<br>
コードテスト対策：'Setの使い方'の学習<br>
コードテスト対策：'文字列を逆順に'の学習<br>
コードテスト対策：'最頻値を求める'の学習<br>
コードテスト対策：'共通を出す'の学習<br>
コードテスト対策：'FazzBizz'の学習<br>

【コード】<br>
```
Set
return [...new Set(arr)];
逆順
return str.split('').reverse().join('');
最頻値
map[n] = (map[n] || 0) + 1;
共通
function intersection(a, b) {
    const setB = new Set(b);
    return a.filter(x => setB.has(x));
}
```

【学び・Why】<br>
Setを利用することで、簡潔、拘束に重複を消すことができる<br>
文字列を、split,reverse,joinの順番に使うことで効率よく、逆順にできる<br>
最頻値は、値があれば１，ないければ０を入れるというのを(map[n] || 0) + 1で表現している。<br>
配列同士の共通を出す時には、片方をSetにして、has()で判定することで、表現している。


### 6月9日 
【やったこと】<br>
Udemy NewReact講座：`不要なタグを出力しないFragmentの使い方`の学習<br>
Udemy NewReact講座：`JSX内でJSコードを実行してみよう`の学習<br>
Udemy NewReact講座：`propsでコンポーネントに値を渡してみよう`の学習<br>
Udemy NewReact講座：`propsにいろいろな値を渡してみよう`の学習<br>

【学び・Why】<br>
Fragmentを使うことで、divなどを使わなくても、複数の要素を返せることを学んだ。<br>
Propsを利用することで、親から子へデータを渡せることを学んだ。<br>


### 6月8日 
【やったこと】<br>
Udemy NewReact講座：`Reactプロジェクトノ作成方法`の学習<br>
Udemy NewReact講座：`コンポーネントにスタイルを当ててみよう`の学習<br>
Udemy NewReact講座：`コンポーネントの分割方法`の学習<br>

【コード】<br>
```
const Child = () => {
    return (
        <div className="component">
            <List />
        </div>
    );
}
```

【学び・Why】<br>
classをつけるときには、HTMLのときはclassのみで良かったが、jsxでは予約語になっているので、classNameとする。<br>

### 6月5日 
【やったこと】<br>
Udemy NewReact講座：`Reactコンポーネントとはなに？`の学習<br>

【学び・Why】<br>
コンポーネントを使用することで、再利用性を高めて保守性も高めている

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
