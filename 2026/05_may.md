## 📅 2026年5月の記録
### 5月29日
【やったこと】<br>
Udemy React講座：`配列をレンダリングしてみよう`の学習<br>
Udemy React講座：`スロットマシン演習問題`の学習<br>
Udemy React講座：`買い物リストを作ってみよう`の学習開始<br>
Udemy React講座：`買い物リストについて`の学習<br>
Udemy React講座：`Key Propsについて`の学習<br>

【コード】<br>
```
<div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(i => (
                    <li key={i.id}
                    style={{color: i.completed ? 'green' : 'red', 
                        textDecoration: i.completed ? 'line-through' : 'none'}}>{i.items} - {i.quantity}</li>
                ))}
            </ul>
        </div>
```

【学び・Why】<br>
配列をレンダリングするには、mapメソッドを使い1つ1つをliの中に入れている。<br>
今回作った買い物リストは、動的にスタイルを当てて行った。その時参考演算子を用いて色を変えたりlineをつけたりした<br>
mapメソッドを使うことで、配列すべてを書く手間を省いている。<br>


### 5月28日
【やったこと】<br>
Udemy React講座：`Reactで条件分岐`の学習<br>
Udemy React講座：`React Developer Tools`の学習<br>
Udemy React講座：`動的なスタイルを当ててみよう`の学習<br>

【コード】<br>
```
~~~
const isWinner = num1 === num2;
    const style = {color: isWinner ? 'green' : 'red', fontSize: '20px'};
    return (
        <div className="double-dice" style={style}>
            <h1>Double Dice</h1>
            {isWinner ? <h2>勝ち</h2> : null}
            <p>1つ目のさいころの出目は{num1}です</p>
            <p>2つ目のさいころの出目は{num2}です</p>
        </div>
    )
```

【学び・Why】<br>
Reactで条件分岐をするときは、{}内にjsをかけるので、参考演算子などを使うことで表現できる<br>
また、styleをあてて動的な処理にする時には、styleを{}で渡している。<br>
ちょっとしたことだが、isWinnerを先に判定することで、使いますことができ、Dry原則に沿っている。<br>


### 5月27日
【やったこと】<br>
Udemy React講座：`文字列以外のProps`の学習<br>
Udemy React講座：`Propsのデフォルト値`の学習<br>
Udemy React講座：`Propsに配列やオブジェクトを渡す`の学習<br>

【コード】<br>
```
export default function Die({numSides = 6}) {
    const num = Math.floor(Math.random() * numSides) + 1;
    return (
        <div>
            <p>{numSides}面のさいころの出目は{num}です</p>
        </div>
    )
}
```

【学び・Why】<br>
jsなどと同じように、デフォルト値を設定しておくことで、値を渡さない場合デフォルトを標示することが分かった。<br>
今回では、numSidesを６と設定しておくことで、毎回設定しなくても６面さいころとなるので、再利用性が向上している。<br>

### 5月26日
【やったこと】<br>
Udemy React講座：`Propsを学ぼう！`の学習開始<br>
Udemy React講座：`Propsとは？`の学習<br>

【コード】<br>
```
App.jsx
<Greeter person="Ringo" />
Greeter.jsx
export default function Greeter({person}) {
    return (
        <h1>Hello, {person}!</h1>
    )
}
```

【学び・Why】<br>
Propsを使うことで、コンポーネントごとに標示するものを変更することができる。<br>
これを使うことで、毎回値を設定しなくていいので手間を省くことができる。<br>

### 5月25日
【やったこと】<br>
Udemy React講座：`viteでReactのローカル開発`の学習開始<br>
Udemy React講座：`ローカル環境でのReactアプリ`の学習<br>
Udemy React講座：`Create React Appについて`の学習<br>
Udemy React講座：`Viteの概要`の学習<br>

【コード】<br>
```
import './Chicken.css';

function Chicken() {
    return <p className="chicken">こけっここー</p>
}

export default Chicken;
```

【学び・Why】<br>
ローカル環境で、Reactを使う方法を学んだ<br>
viteは、以前使われていたCreate React Appよりも、使われるようになっている<br>


### 5月24日
【やったこと】<br>
Udemy React講座：`コンポーネントにスタイルをあてる`の学習<br>
Udemy React講座：`ランダムポケモン演習`の学習<br>
Udemy React講座：`JSXについて`の学習終了<br>

【コード】<br>
```
return <h2 className="Die">さいころの出目： {roll}</h2>;
```

【学び・Why】<br>
コンポーネントにcssを当てるときには、classではなくclassNameを使うようにする。<br>
その時には、importを使いcssファイルを読み込む<br>


### 5月23日
【やったこと】<br>
Udemy React講座：`JSX内でjsを使う`の学習<br>
Udemy React講座：`さいころコンポーネントを作ろう`の学習<br>
Udemy React講座：`コンポーネントの分割`の学習<br>

【コード】<br>
```
export default function Die() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return <h1>さいころの出目： { roll }</h1>
}

imoprt Die form './Die'
```

【学び・Why】<br>
コンポーネントを分割するのは、再利用しやすくするためである。<br>
小さいコンポーネントを組み合わせて、大きいコンポーネントを作ることができる。<br>


### 5月21日
【やったこと】<br>
Udemy React講座：`JSXについて`の学習<br>
Udemy React講座：`コンポーネントのimportとexport`の学習<br>
Udemy React講座：`JSXのルール`の学習<br>
Udemy React講座：`Reactフラグメント`の学習<br>

【コード】<br>
```
Greeter.js
export default function Greeter(){
  return <h1>HELLO!</h1>;
}

App.js
import Greeter form './Greeter'

```

【学び・Why】<br>
App.jsに責務が集中して可動性や、保守性が悪くならないようにコンポーネントごとにファイルを分ける方がよい。<br>
呼び出す時はimport,送るときはexportだということ<br>
divで囲み、それをexportするとdivで囲まれたものがそのまま出てくる。囲みを表示しないようにするために<></>で囲むことができる（フラグメント）<br>

### 5月20日
【やったこと】<br>
HRクラウド 課題:'合格判定ミーティング'<br>

【学び・Why】<br>
課題の条件１０個を説明できるかどうかを試すものだった。それは対策できているつもりだったが、何個かちゃんと説明できないものがあった。<br>
sessionやcookieを使うの部分では、今回はsessionのみを使ったが本来両方使うのが多い。cookieの使い方を学習する<br>
ネームスペースは、変数や関数で使われ、同じ名前の衝突を防ぐためのもの<br>
/はネームスペースの外側にあるものを使うために使うもの<br>
DBクラスを使うことのメリットは、SQLインジェクションを防ぐことができる。フロント側で悪意のある人がフォームなどにSQLを書くとその命令が通ってしますのでそれを防いでいる。<br>

### 5月19日
【やったこと】<br>
HRクラウド 課題:'作ったものを説明できるように
'<br>

【学び・Why】<br>
AIを活用して作成したので、ブラックボックス化させないように、どうなっているか忘れた部分を学び直した。<br>
どうなっているか忘れている部分があったので、問題形式手出してもらいながら答えて覚えていった<br>

### 5月18日
【やったこと】<br>
Udemy React講座：`Reactとは何なのか？`の学習開始<br>
Udemy React講座：`Reactコンテンツについて`の学習<br>
Udemy React講座：`Reactについて`の学習<br>
Udemy React講座：`CodeSandboxをセットアップ`の学習<br>
Udemy React講座：`JSXの基本`の学習<br>
Udemy React講座：`Reactアプリの基本構造`の学習<br>
Udemy React講座：`初めてのコンポーネント`の学習<br>

【コード】<br>
```
import "./styles.css";

function Greeter() {
  return <h1>HELLO!!!</h1>;
}

function Dog() {
  return <p>wan</p>;
}

export default function App() {
  return (
    <div className="App">
      <Greeter />
      <Dog />
      <Greeter />
      <Greeter />
      <Greeter />
    </div>
  );
}
```

【学び・Why】<br>
Reactとは、コンポーネントを作成、管理、再利用しながらUIを構築するJSのライブラリである。<br>
Reactを使う理由は、パーツごとに分けるコンポーネント指向によって、開発効率、保守性が向上するから<br>

### 5月17日
【やったこと】<br>
HRクラウド 課題:'レビューから修正2'<br>

【学び・Why】<br>
group作成時に、groupsとgroup_usersを別々に実行している。<br>
もし途中で失敗すると、DB不整合になる。<br>
そのためトライキャッチを使ってinsertを行う<br>


### 5月15日
【やったこと】<br>
HRクラウド 課題:'レビューから修正'<br>

【コード】<br>
```
変更前
public function action_delete($id)
{
    Model_Todo::delete_todo($id);

    return Response::redirect('/todo');
}

変更後
public function post_delete($id)
{
    $this->require_csrf();

    Model_Todo::delete_todo($id);

    return Response::redirect('/todo');
}
```

【学び・Why】<br>
この部分は、GETで削除しているので、URLアクセスだけで削除することができる。<br>
そのため、削除はPOST形式にする<br>
またここにCSRFもつけるようにする。<br>


### 5月13日
【やったこと】<br>
HRクラウド 課題:'課題が条件をクリアしているか確認'<br>
HRクラウド 課題:'課題を提出'<br>

【学び・Why】<br>
要件定義のExcelをみて、ズレていないかを確認。<br>
期限より10日早く提出することができた。<br>

### 5月12日
【やったこと】<br>
HRクラウド 課題:'テスト'<br>
HRクラウド 課題:'セキュリティーチェック'<br>

【コード】<br>
```
try {

                Model_Group::create_group(
                    $group_name,
                    Session::get('user_id')
                );
                Session::set_flash(
                    'success',
                    'グループを作成しました'
                );
            } catch (Exception $e) {

                Session::set_flash(
                    'error',
                    'グループ作成に失敗しました'
                );
            }
```

【学び・Why】<br>
作っていたテストから、できていないところがないか確認をした。<br>
その時、MVCのMの部分（DBを触る部分）を作っていないことが分かった<br>
Cの中にMCを入れていたので、リファクタリングをしていった<br>
すべて正常に動くので、課題の条件を最後に見て提出仕様と思う<br>

### 5月11日
【やったこと】<br>
HRクラウド 課題:'非同期処理（Knockout.js）続き'<br>

【コード】<br>
```
self.deleteTodo = async function (todo) {
        if (!confirm('削除しますか？')) {
            return;
        }
        try {
            const response = await fetch('/todo/ajax_delete/' + todo.id, {
                method: 'POST'
            });
            const data = await response.json();
            if (!data.success) {
                alert(data.message);
                return;
            }
            self.todos.remove(todo);
        } catch (error) {
            console.error(error);
            alert('削除に失敗しました');
        }
```

【学び・Why】<br>
エラーが連発して、なにがエラーになっているのか分からなくなった。<br>
そのため、コンソールログやlogファイルの中を見て、１つ１つエラーを解消していった。<br>
まだ、表示部分がおかしいのでViewの部分でエラーが起きてないか確認をしてみる<br>

### 5月10日
【やったこと】<br>
HRクラウド 課題:'非同期処理（Knockout.js）'<br>

【コード】<br>
```
<script src="https://cdn.jsdelivr.net/npm/knockout@3.5.1/build/output/knockout-latest.js"></script>
    <script src="/assets/js/todo.js"></script>
```

【学び・Why】<br>
まずknocoutがどのようなものかを学んだ。いちいちjsを書かなくても値が更新されたのを確認したらviewを更新してくれるもの<br>
DOMの操作を減らすことができるので、何回も書く必要や、保守性も上がるもの<br>

### 5月9日
【やったこと】<br>
HRクラウド 課題:'グループ機能作成'<br>
HRクラウド 課題:'ToDoCURD作成'<br>
HRクラウド 課題:'UI修正'<br>

【コード】<br>
```
public function before()
    {
        parent::before();

        if (Session::get('user_id'))
        {
            Response::redirect('/groups');
            exit;
        }
    }
```

【学び・Why】<br>
今日はかなりの時間を使ってプログラミングをしていった<br>
招待URLも１回つかったら、もう使えないように制限をかけていった。<br>
UIについては、AIにcssをつけてもらい違和感がある部分を、管理ツールで何がついているか見て変更をしていった<br>
beforeメソッドを使う理由は、毎回共通の処理をしないためです。今回はログイン済みならログインを見せずにgroupsに行くようにしている<br>


### 5月8日
【やったこと】<br>
HRクラウド 課題:'dockerの使い方学習'<br>
HRクラウド 課題:'mysqlの使い方学習'<br>
HRクラウド 課題:'fuelphpの使い方学習'<br>
HRクラウド 課題:'ログイン機能構築'<br>

【コード】<br>
```
$user = DB::select()
                ->from('users')
                ->where('username', $username)
                ->execute()
                ->current();
            if ($user && password_verify($password, $user['password'])) {
                Session::set('user_id', $user['id']);
                Response::redirect('/');
            } else {
                echo 'login failed';
            }
            exit;
        }
        return View::forge('login/index');
```

【学び・Why】<br>
初めてdockerを使ったので、操作がいろいろあり複雑だった。<br>
そのため、これは何をしているのかを常に意識して覚えていった<br>
AIでログイン機能を作ったことがあったが、実際どうなっているか知らなかったのでとても興味深く学ぶことができた<br>
DBは、大学で習っていたのでそこまで理解が難しくなかった<br>

### 5月7日
【やったこと】<br>
HRクラウド 課題:'UI設計のフレームワーク作成'<br>

【学び・Why】<br>
フレームワークを作成するために、作成していたUI設計を使った。それによって、必要な画面は作成することができた。<br>
フレームワークを作成することで、実際にどんな感じに作ればいいかイメージが湧いた。<br>

### 5月5日
【やったこと】<br>
HRクラウド 課題:'Dockerの環境構築'<br>

【一言で言うと】<br>
どのPC屋サーバーでも同じ状態で実行できるもの<br>

【学び・Why】<br>
入れ方が難しく分からなかったので、１つずつどうすればいいか考えていった。<br>
環境差を無くすために、Dockerを使っている<br>

### 5月1日
【やったこと】<br>
HRクラウド 課題:'要件定義が複雑なのでシンプルな設計に'<br>
HRクラウド 課題:'UI設計イメージ図作成'<br>

【学び・Why】<br>
要件定義をDB、UI設計と一致させるため変更したら、複雑になってしまった。<br>
そのため、sabtask削除、権限管理を無くすことをする<br>