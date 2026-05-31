import './App.css'
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from './ScoreKeeper'
import EmojiClicker from './EmojiClicker'

function App() {
  return (
    <div>
       <ScoreKeeper numPlayers={Math.floor(Math.random() * 10) + 1} />
        
    </div>
  )
}

export default App
