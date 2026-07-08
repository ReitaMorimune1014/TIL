## 📅 2026年7月の記録
### 7月8日 
【やったこと】<br>
卒研：`擬人化の三要素理論 (Epley et al.)`<br>

【学び・Why】<br>
On Seeing Human: A Three-Factor Theory of Anthropomorphismが提唱した理論<br>
人が人間ではないもの（ロボット、機械、動物、自然現象など）に人間らしさを感じる（擬人化）の心理プロセスを３つの要因で説明している。<br>
① Elicited Agent Knowledge（誘発された当該知識）<br>
対象の見た目、動き、反応が人間的なパターンに近いほど、この知識が活性化される<br>
② Sociality Motivation（社会的つながりへの動機）<br>
孤独感が強い人、社会的つながりを求めている人ほど、対象を擬人化しやすい<br>
③ Effectance Motivation（環境理解・予測可能性への動機）<br>
対象が意図を持つ存在とすれば、行動予測が容易になり不確実性が減る<br>

【卒研への接続】<br>
AI要素あり条件 vs ルールベース条件の比較は、主に③Effectance Motivationの差を検証する設計と言える（AIの方が挙動予測が難しく、意図帰属＝擬人化が起きやすいと仮説立てできる）<br>
①は装置の外見・動作デザインで統制すべき交絡要因<br>
②は個人差要因として、事前アンケート等での測定・統制を検討する余地あり<br>

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
