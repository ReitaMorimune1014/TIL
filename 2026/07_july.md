## 📅 2026年7月の記録
### 7月7日 
【やったこと】<br>
卒研：`ELIZA効果について`<br>

【学び・Why】<br>
セクションとして、Introduction、ELIZAprogram、Discussionがある<br>
ロジャース派心理療法士を模した理由<br>
対話の相手として、心理療法士のように応答する設計を選んだ理由は、被験者の現実世界についてほとんど何も知らなくても大丈夫な対話形式だから。<br>
⇒無知を装っても不自然でない設計であった<br>
人間側が理解されているという幻想を自ら作ってもらえるメカニズ<br>
⇒機会が賢く見えるのは、機械の性能ではなく、人間側が能動的に意味をつけているから<br>
ELIZAと話した人の中には、これを本当に人が返信しているんじゃないかと信じ込んでしまう人がいた<br>
Weizenbaumはこの現象をすごいと喜ぶのではなく、危険だと警告している。機械の言うことを無批判に信じてしまうリスクがあるから<br>

### 7月6日 
【やったこと】<br>
卒研：`テーマについて`<br>
卒研：`なぜこのテーマなのか`<br>
卒研：`論理的背景`<br>

【学び・Why】<br>
テーマ：LEGO Education教材を用いた小学生のロボット擬人化に関する実証的研究：AI要素の有無による比較<br>
LEGOの教材を使い、ロボットにAI要素が含まれている場合と、条件分岐のみdえ動く場合で子供たちの、擬人化機構（ロボットに意図や意識を感じる度合）がどのような差が出るか検証する計画<br>
小学生にAIすごいと感動させるだけではなく、裏側の技術的な仕組みを理解し、AIとの適切な距離感や付き合い方を考える力を養ってもらうため。<br>
論理的背景<br>
ELIZA効果：機会に人格を感じてしまう心理<br>
擬人化の酸要素理論：擬人化が起こる条件の定義<br>
メディア等式：機会に対しても対人関係と同じ社会的ルールを適用してしまう現象<br>

### 7月5日 
【やったこと】<br>
Udemy NewReact講座：` useContextを使う際の注意点`の学習<br>
Udemy NewReact講座：` useContextとuseReducerを組み合わせて`の学習<br>

【コード】<br>
```
const StateContext = createContext();
const DispatchContext = createContext();
```

【学び・Why】<br>
ContextのProviderに値を渡した値が変わると、useContextでそのcontextを参照している全コンポーネントが再レンダリングされてしまう。<br>
そのため、Contextを用途ごとに分割する<br>

### 7月3日 
【やったこと】<br>
Udemy NewReact講座：`useContextのリファクタリングをしてみよう`の学習<br>

【コード】<br>
```
function App() {
  const [user, setUser] = useState({ name: "Reita", isLoggedIn: true });
  return <Header user={user} setUser={setUser} />;
}
function Header({ user, setUser }) { return <UserInfo user={user} setUser={setUser} />; }

// After: useContext
const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState({ name: "Reita", isLoggedIn: true });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
    </UserContext.Provider>
  );
}
function Header() { return <UserInfo />; }
function UserInfo() {
  const { user, setUser } = useContext(UserContext);
  return <button onClick={() => setUser({ ...user, isLoggedIn: false })}>{user.name}</button>;
}
```

【学び・Why】<br>
propsDrillingの問題は中間コンポーネントが使われないpropsのバケツリレー薬にされること。<br>

### 7月1日 
【やったこと】<br>
Udemy NewReact講座：`useContextでstateを管理してみよう`の学習<br>

【コード】<br>
```
const ThemeContext = createContext();
<ThemeContext.Provider value={theme}>...</ThemeContext.Provider>
// 子コンポーネント側
const theme = useContext(ThemeContext);
```

【学び・Why】<br>
Contextを使うことでpropsのバケツリレーをしなくて済む<br>
