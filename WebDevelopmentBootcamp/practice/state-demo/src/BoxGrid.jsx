import Box from './Box'
import { useState } from 'react'
export default function BoxGrid() {
    const [boxes,setBoxes] = useState([false,false,false,false,false,false])
    const resetBoxes = () => {
        setBoxes([false,false,false,false,false,false])
    }
    const toggleBox = (clickedIndex) => {
        setBoxes((previousBoxes) =>
            previousBoxes.map((boxIsActive, currentIndex) =>
                currentIndex === clickedIndex
                    ? !boxIsActive
                    : boxIsActive
            )
        )
    }
    return (
        <div>
            {boxes.map((box, index) => (
                <Box key={index} 
                toggle={() => toggleBox(index)}
                isActive={box}/>
            ))}
            <button onClick={resetBoxes}>Reset</button>
        </div>
    )
}