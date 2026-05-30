import { useState } from 'react';
export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => {
        setIsHappy(!isHappy)
    }
    return (
        <div>
            <p onClick={toggleIsHappy}>
                {isHappy ? '嬉しい' : '悲しい'}
                <img src={isHappy ? 'https://picsum.photos/200/300' : 'https://picsum.photos/200/300'} alt="表情" />
            </p>
        </div>
    );
}