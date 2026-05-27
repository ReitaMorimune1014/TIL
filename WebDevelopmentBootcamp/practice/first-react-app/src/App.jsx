import './App.css'
import Chicken from './Chicken'
import './Chicken.css'
import Greeter from './Greeter'
import Die from './Die'
import ListPicker from './ListPicker'

function App() {

  return (
    <div>
      <ListPicker values={['Apple', 'Banana', 'Cherry']}/>
    </div>
  )
}

export default App
