import './App.css'
// import Chicken from './Chicken'
// import './Chicken.css'
// import Greeter from './Greeter'
// import Die from './Die'
// import ListPicker from './ListPicker'
// import DoubleDice from './DoubleDice'
// import ColorList from './ColorList'
// import Slots from './Slots'
import ShoppingList from './ShoppingList'

const date = [
  {id: 1, items: '卵', quantity: 12, completed: false},
  {id: 2, items: '牛乳', quantity: 1, completed: false},
  {id: 3, items: 'パン', quantity: 2, completed: false},
  {id: 4, items: 'お茶', quantity: 1, completed: true},
  {id: 5, items: 'お酒', quantity: 1, completed: false},
  {id: 6, items: 'お酒', quantity: 1, completed: false},
]

function App() {
 return (
  <div>
    <ShoppingList items={date}/>
  </div>
 )
  
  
  // return (
  //   <div>
  //     <Slots s1="🍎" s2="🍊" s3="🍎"/>
  //     <Slots s1="🍎" s2="🍎" s3="🍎"/>
  //     <Slots s1="🍎" s2="🍊" s3="🍊"/>
  //   </div>
  // )
}

export default App
