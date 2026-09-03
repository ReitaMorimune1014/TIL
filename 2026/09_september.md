## 📅 2026年9月の記録
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
