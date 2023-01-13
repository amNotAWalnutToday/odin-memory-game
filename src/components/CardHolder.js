import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardHolder = ( {level} ) => {
    const [seed, setSeed] = useState(Math.floor(Math.random() * 10));
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
    ]);
    const [levelKanji, setLevelKanji] = useState([]);

    useEffect(() => {
        const newKanji = [...kanji];
        const newLevelKanji = [...levelKanji];
        const i = 4 + (level * 2);
        if(levelKanji.length < i) {
            newKanji.splice(seed, 1);
            newKanji.push(newKanji[seed-1]);
            newLevelKanji.push(kanji[seed]);
            setSeed(Math.floor(Math.random() * (10 - newLevelKanji.length)));
            setKanji(newKanji);
            setLevelKanji(newLevelKanji);
        }
    }, [level, seed, kanji, levelKanji]);

    const mapCards = () => {
        return levelKanji.map((item, i) => {
            return  <div key={i}>
                        <Card kanji={item}/>
                    </div>
        });
    }

    return(
        <div id="card-holder">
            {mapCards()}
        </div>
    );
}

export default CardHolder;
