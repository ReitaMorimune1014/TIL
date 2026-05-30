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
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import TogglerCounter from './TogglerCounter'
import ColorBoxGrid from './ColorBoxGrid'

const date = [
  {id: 1, items: '卵', quantity: 12, completed: false},
  {id: 2, items: '牛乳', quantity: 1, completed: false},
  {id: 3, items: 'パン', quantity: 2, completed: false},
  {id: 4, items: 'お茶', quantity: 1, completed: true},
  {id: 5, items: 'お酒', quantity: 1, completed: false},
  {id: 6, items: 'お酒', quantity: 1, completed: false},
]

const properties = [
  {id: 1, name: '砂丘の離れ', rating:4.9, price: 100000},
  {id: 2, name: '切り立つ山の庵', rating:4.8, price: 333333},
  {id: 3, name: '綺麗な森のお茶屋', rating:4.7, price: 222222},
  {id: 4, name: '落ち葉が美しい森のお茶屋', rating:4.6, price: 666666},
  {id: 5, name: '海のお茶屋', rating:4.5, price: 555555},
  {id: 6, name: '温泉のお茶屋', rating:4.4, price: 444444},
]

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function App() {
 return (
  <div>
    <ColorBoxGrid colors={colors} />
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
