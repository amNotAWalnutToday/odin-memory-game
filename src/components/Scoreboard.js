import React, { useState, useEffect, useRef } from 'react';

const usePrevScore = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

const Scoreboard = ( {level, score, topScore} ) => {
    const [scoreChange, setScoreChange] = useState(true);
    const [topScoreChange, setTopScoreChange] = useState(true);
    const [levelChange, setLevelChange] = useState(true);
    const prevScore = usePrevScore({level, score, topScore});

    useEffect(() => {
        if(score && prevScore.level !== level) {
            setLevelChange(true);
            setTimeout(() => setLevelChange(false), 1000)
        } else if (levelChange) {
            setTimeout(() => setLevelChange(false), 1000);
        } 

        if(score && prevScore.score !== score) {
            setScoreChange(true);
            setTimeout(() => setScoreChange(false), 500);
        }
        else if(scoreChange) {
            setTimeout(() => setScoreChange(false), 500);
        }

        if(topScore && prevScore.topScore !== topScore) {
            setTopScoreChange(true);
            setTimeout(() => setTopScoreChange(false), 1000)
        } else if (topScoreChange) {
            setTimeout(() => setTopScoreChange(false), 1000);
        }
    },  [
            level,
            score,  
            prevScore,
            topScore, 
            scoreChange, 
            topScoreChange, 
            levelChange,
        ]
    )

    return(
        <div>
            <p className={levelChange ? 'highlight' : ''}>Level: {level}</p>
            <p className={scoreChange ? 'highlight' : ''}>Score: {score}</p>
            <p className={topScoreChange ? 'highlight' : ''} >Top Score: {topScore}</p>
        </div>
    );
}

export default Scoreboard
