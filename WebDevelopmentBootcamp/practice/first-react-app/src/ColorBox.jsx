import { useState } from 'react';
import './ColorBox.css'
export default function ColorBox({ color, colors }) {
    const [boxColor, setBoxColor] = useState(color)
    const changeColor = () => {
        const idx = Math.floor(Math.random() * colors.length)
        setBoxColor(colors[idx])
    }
    return (    
        <div className='colorBox' style={{ width: '100px', height: '100px', backgroundColor: boxColor }} onClick={changeColor}></div>
    );
}