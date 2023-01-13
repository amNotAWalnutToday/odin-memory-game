import React, { useState } from 'react';

const Card = () => {
    const [seed, setSeed] = useState(Math.floor(Math.random() * 10))
    const [kanji, setKanji] = useState([
        '思',
        '愛',
        '雨',
        '冬',
        '義',
        '忍',
        '美',
        '静',
        '幽',
        '壺',
    ])
    
    return (
        <div>
            <p>{kanji[seed]}</p>
        </div>
    )
}

export default Card;