import './App.css'
import { useState } from 'react'

function App() {
  const [isSelected, setIsSelected] = useState(false);
  const clickHandler = () => {
    setIsSelected(prev => !prev);
  }
  const style = {
    width: 100,
    height: 60,
    display: 'block',
    fontWeight: 'bold',
    "border-radius": "50%",
    cursor: 'pointer',
    border: 'none',
    margin: 'auto',
    backgroundColor: isSelected ? 'pink' : '',
  }
  return (
    <div>
      <button onClick={clickHandler} style={style}>ボタン</button>
    </div>
  )
}

export default App
