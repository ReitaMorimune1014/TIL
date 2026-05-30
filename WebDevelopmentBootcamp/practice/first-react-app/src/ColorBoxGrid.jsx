import ColorBox from './ColorBox'
import './ColorBoxGrid.css'
export default function ColorBoxGrid({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBox key={i} color={colors[i % colors.length]} colors={colors} />)
    }
    return (
        <div className='colorBoxGrid'>
            {boxes}
        </div>
    );
}