## 📅 2026年7月の記録
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
