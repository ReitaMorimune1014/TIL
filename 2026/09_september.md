## 📅 2026年9月の記録
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
