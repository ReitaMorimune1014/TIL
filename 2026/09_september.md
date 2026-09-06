## 📅 2026年9月の記録
### 9月5日 
【やったこと】<br>
読んだ本：世界は経営でできている 著岩尾俊兵

【学び・Why】<br>
世界のあらゆること、モノは経営である。なぜなら、人とかかわる共同体には、何にリソースを割くかの選択が生じるため。
例えば、就活でいうと内定を得るために、数多くのESを出すというのがある。それの問題点としては、数多くの企業に応募するため、１つ１つに時間を割くことができず浅いESになってしまうことだ。そうなると、企業側がなぜわが社がよいのか判断できないため、通過率が下がる。結果、内定を取るという目的が達成できなくなる。

### 9月5日 
【やったこと】<br>
Udemy NewReact講座：`useEffectの実行順を意識して実装してみよう`の学習<br>
Udemy NewReact講座：`独自のフックを作成してみよう`の学習<br>

【コード】<br>
```
カスタムフック
const = useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
```

【学び・Why】<br>
useStateなどのHookを含むものを関数として切り出すことで、独自のフックを作ることができる。<br>
このフックを作成する理由は、カプセル化できること、再利用可能でできるためである。<br>
今回でいうと、タイマーの処理を別関数に切り出したので、useTimerと命名している。<br>

### 9月4日 
【やったこと】<br>
HRクラウド：`非同期処理の設計でのミス`の学習<br>

【学び・Why】<br>
・ミリ単位のズレを、問題ないと判断してしまった。<br>
2つの変数の更新が、1行ずれていることを把握していたが、1ミリ秒は大丈夫だと考えていた。ただ、何かエラーが起きた時に、片方の変数のみしか更新されないとなるとエラーが起きてしまう。<br>
・成功した時しか考えられていなかった。<br>
ajax完了を待たずにモーダルを閉じるという変更を考えた時に、成功時しか考えられておらず、失敗時にどうするかを考えられていなかった。<br>
レビューを出す前に、成功したらだけでなく、失敗した時、別操作をしたときを考えてから、提出する。<br>
感覚で判断するのではなく、デメリットを考える。<br>

### 9月3日 
【やったこと】<br>
Udemy NewReact講座：`useEffectとは？`の学習<br>
Udemy NewReact講座：`useEffectの依存配列の使い方`の学習<br>
Udemy NewReact講座：`useEffectのクリーンアップ処理の使い方`の学習<br>
Udemy NewReact講座：`useEffectの実行タイミングをおさらいしよう`の学習<br>
Udemy NewReact講座：`useLayoutEffectって何？useEffectとの違いは？`の学習<br>

【コード】<br>
```
useEffect(() => {
  window.setInterval(() => {
    setTime(prev => prev + 1);
  }, 1000);
}, [])

useLayoutEffect(() => {
  if(state === 0) {
    setState(Math.random() * 300);
  }
}, [state]);
```

【学び・Why】<br>
useEffectとは、再レンダリングされた際に行われるもの。依存配列にstateを入れることで、そのstateが更新された際に、副作用をつけることができる。<br>
useLayoutEffectは、レンダリング後DOM更新、ブラウザが描画する前に動く（同期）<br>

### 9月2日 
【やったこと】<br>
Udemy NewReact講座：`useContextでstateを管理してみよう`の学習<br>
Udemy NewReact講座：`useContextのリファクタリングをしてみよう`の学習<br>
Udemy NewReact講座：`useContextを使う際の注意点`の学習<br>
Udemy NewReact講座：`useContextとuseReducerを組み合わせて使ってみよう`の学習<br>

【コード】<br>
```
import { createContext } form "react";

const CounterContext = createContext();
const CounterDispatchContext = createContext();
```

【学び・Why】<br>
Contextは値が変わるとその値を参照している全コンポーネントが再レンダリングされるため、細分化するのが大切である。
