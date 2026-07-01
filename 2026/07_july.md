## 📅 2026年7月の記録

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
