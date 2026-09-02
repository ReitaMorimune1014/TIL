## 📅 2026年9月の記録

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
