## 📅 2026年6月の記録
### 6月28日 
【やったこと】<br>
フィジカルAIについての学習<br>

【一言で言うと】<br>
デジタルの知性を、現実の物体に宿らせる技術<br>

【学び・Why】<br>
今までのAIは、テキスト・画像・音声といったデジタルデータを扱うモノだった。<br>フィジカルAIはそこからさらに進化し、現実世界の物理空間で自立敵に動作するAIを指す。<br>
例）ロボット、自動車運転、ドローン<br>

コア技術<br>
センシング：カメラなどで世界を認識<br>
WorldModel：現実空間の内部モデルを構築・予測<br>
強化学習：試行錯誤を通じて動作を最適化<br>
シミュレーション：現実のコストを下げるために仮想空間で先に学習<br>

なぜ注目されているか<br>
LLM・VisionModelの成熟：見て考える能力が実用水準に達した<br>
計算資源の向上：リアルタイム推論がデジタル上で可能に<br>

### 6月26日 
【やったこと】<br>
Udemy NewReact講座：`useReducer練習`の学習<br>
Udemy NewReact講座：`useContextでグローバルな値を管理しよう`の学習<br>

【学び・Why】<br>
親から孫にpropsをバケツリレーする問題を解消するために使われるもの<br>
`const { state, dispatch } = useContext(CountContext);`

### 6月25日 
【やったこと】<br>
Udemy NewReact講座：`useReducer`の学習<br>
Udemy NewReact講座：`useReducerとuseStateの違い`の学習<br>
Udemy NewReact講座：`useReducerとuseStateの違い`の学習<br>

【一言で言うと】<br>
useReducerは状態の更新のロジックをコンポーネントの外に出すことで、純粋関数として扱えるHook

【学び・Why】<br>
■ useReducerの基本構造
- `const [state, dispatch] = useReducer(reducer, initialState)`
reducerは、同じstateと同じactionを渡せば必ず同じ結果を返す純粋関数

### 6月23日 
【やったこと】<br>
Udemy NewReact講座：`関数型プログラミングとは`の学習<br>
Udemy NewReact講座：`状態と処理の分離`の学習<br>
Udemy NewReact講座：`純粋関数`の学習<br>
Udemy NewReact講座：`不変性`の学習<br>
Udemy NewReact講座：`Reactにおける状態と処理の分離`の学習<br>
Udemy NewReact講座：`JSコードと見比べてみよう`の学習<br>

【一言で言うと】<br>
不変性とは、データを直接書き換えず、新しい値を作るという考え方<br>

【学び・Why】<br>
純粋関数とは、同じ引数には必ず同じ戻り値を持つもの<br>
ロジックとstateを分離することで、再利用性、保守性が上がる<br>
手続き型のJSでは、変数を更新したが、関数型では新しい値を返すようになっている<br>

### 6月22日 
【やったこと】<br>
ドリームアーツのコーディングテスト（最長片道切符問題）を実装した。<br>
Node.jsを使い、readlineを受け取り、双方向グラフをMapで構築した。<br>

【一言で言うと】<br>
「全ルートを1本ずつ歩いて、一番長かったものを記録する」のがDFS＋バックトラックの本質。<br>

【学び・Why】<br>
バックトラックは「進んだら記録し、戻るときに記録を消す」ことで別ルートを探索できる状態に戻す手法。`push` して再帰、戻ったら `pop` と `delete` がセット。<br>
最長単純路問題はNP困難であり、頂点数が増えると指数時間かかる。テスト規模であればDFS全探索で十分対応できる。<br>

### 6月20日 
【やったこと】<br>
Udemy NewReact講座：`createPortal モーダルの作り方`の学習<br>
Udemy NewReact講座：`refでDOMを直接操作してみよう`の学習<br>
Udemy NewReact講座：`refとは？refとstateの違い`の学習<br>
Udemy NewReact講座：`他のコンポーネントノDOMにアクセスする方法`の学習<br>
Udemy NewReact講座：`練習 refの使い方`の学習<br>

【一言で言うと】<br>
refとは、再レンダリングを発生せずに値を保持できるもの。<br>

【学び・Why】<br>
stateとrefの違いは、画面に反映させるかしないか<br>
stateは、画面に反映させる<br>

### 6月18日 
【やったこと】<br>
Udemy NewReact講座：`外部CSSのimpoetを使ったスタイリング`の学習<br>
Udemy NewReact講座：`CSS Modulesを使ったスタイリング`の学習<br>
Udemy NewReact講座：`CSS-in-Jsを使ったスタイリング`の学習<br>
Udemy NewReact講座：`まとめ Reactでのスタイルノ適用方法`の学習<br>

【一言で言うと】<br>
ReactでCSSをつける方法は複数あり、CSS-in-JSはファイル分割が不要で見通しが良い一方、
実行時コストがあるため、近年はCSS ModulesやTailwindに採用がシフトしている

【学び・Why】<br>
個人開発や、小規模の場合CSS Modulesがよい、デザインシステムを厳密に管理するならCss-in-Jsを使う<br>


### 6月17日 
【やったこと】<br>
業界理解：`SierとSaaSの違い`
業界理解：`SaaSとは`
企業理解：`ドリームアーツについて`

【学び・Why】<br>
Sierは、顧客の依頼を受けてシステムを開発する「受託型」<br>
自社開発は、自社サービスや商品を企画・開発してユーザに提供する「事業型」<br>
誰のためのシステムを作るかが最大の違い<br>
SaaSとは、インターネットを通じてクラウド上のソフトウェアを必要な文だけ利用できるサービス<br>
SaaSのメリットは、いつでもどこでも利用可能なこと、常に最新バージョンであること<br>
デメリットは、カスタマイズの制限、ネットワークへの依存というものがある<br>
ドリームアーツとは、日本の大企業のDXを支えるホリゾンタルSaaS企業<br>
製品：SmartDB,Shopらん,InsuiteX<br>
DAValues<br>
1,圧倒的な当事者意識<br>
2,自立とリーダーシップ<br>
3,挑戦と変革<br>
4,機会の本質<br>
5,やり抜く忍耐と勇気<br>
6,建設的対立<br>

### 6月16日

【やったこと】<br>
Udemy NewReact講座：`インラインスタイルの使い方`の学習<br>
Udemy NewReact講座：`インラインスタイルの注意点`の学習<br>

【コード】<br>

```
    <div>
      <button onClick={clickHandler} style={style}>ボタン</button>
    </div>
```

【学び・Why】<br>
インラインスタイルを使うことの注意点は、再利用性が悪くなるということだ。<br>
今回のコードの例でいうと、毎回ボタンにstyleを当てなければいけない。<br>
そのため、外部のcssを定義して、importしているのだと再確認した。<br>

### 6月15日

【やったこと】<br>
Udemy NewReact講座：`特別なプロパティ―`の学習<br>
Udemy NewReact講座：`propsの重要なルール`の学習<br>
Udemy NewReact講座：`JSXの正体`の学習<br>
Udemy NewReact講座：`コンポーネントツリー`の学習<br>
Udemy NewReact講座：`イベントに合わせて関数を実行`の学習<br>
Udemy NewReact講座：`開発でよく利用するイベントタイプ`の学習<br>
Udemy NewReact講座：`ステートとは？`の学習<br>
Udemy NewReact講座：`ステートとレンダリングの仕組み`の学習<br>
Udemy NewReact講座：`ステート使用時の注意点`の学習<br>

【一言で言うと】<br>
useStateとは、変化を感知できる変数を作り、その値が更新されると自動で再レンダリングをするフックである。<br>

【学び・Why】<br>
propsは読み取り専用である。データの流れを親から子にだけにすることで、バクがどこで起きているか分かりやすくなる。<br>
ステートの注意点は、非同期のため直後に値を見ても変更されていない。<br>

### 6月13日

【やったこと】<br>
コードテスト対策：'苦手克服問題'の学習<br>

【コード】<br>

```
function getOdds(arr) {
  const result = [];
  for(const n of arr) {
    if(n % 2 === 1) result.push(n);
  }
return result;
}
function getAverage(arr){
  let sum = arr.reduce((sum,x) => sum+x,0);
  let ave = sum / arr.length;
  return ave;
}
```

【学び・Why】<br>
return忘れや、pushをせずに直接代入したりする、凡ミスがあった。<br>
そのため、書いた後にコードを読んで確認する習慣をつける。<br>

### 6月12日

【やったこと】<br>
コードテスト対策：'何も見ずに１０問解けるように'の学習<br>
コードテスト対策：'演習問題'の学習<br>

【学び・Why】<br>
何回も解いたので、ある程度型をつかむことができた。<br>
そのため、演習問題でも、組み合わせを変えたりして対応できた。<br>
ただ、タイプミスや凡ミスもあるので書き終わったら、コードを読むようにする<br>

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
