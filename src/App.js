import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';

function App() {
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [numOfCards, setNumOfCards] = useState(2);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

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
  const [pressedKanji, setPressedKanji] = useState([]);

  useEffect(() => {
    const newKanji = [...kanji];
    const newLevelKanji = [...levelKanji];
    if(levelKanji.length < numOfCards 
    && newKanji.length - newLevelKanji.length !==0) {
        newKanji.push(newKanji[seed]);
        newLevelKanji.push(newKanji[seed]);
        newKanji.splice(seed, 1);
        setSeed(Math.floor(Math.random() * (newKanji.length - newLevelKanji.length)));
        setKanji(newKanji);
        setLevelKanji(newLevelKanji);
    }
    return(
      setNumOfCards(4 + (level * 2))
    )
  }, [level, numOfCards, seed, kanji, levelKanji]);

  const storePressedKanji = (targetKanji) => {
    const newPressedKanji = [...pressedKanji];
    newPressedKanji.push(targetKanji);
    setPressedKanji(newPressedKanji);
  }

  const scorePoint = (e) => {
    if(willLose(e)) return resetGame();
    setScore(score + 1);
    shuffleCards();
    if(numOfCards - 1 === pressedKanji.length) return nextLevel();
  };

  const nextLevel = () => {
    loadCards();
    setLevel(level + 1);
    setPressedKanji([]);
    setLevelKanji([]);
  }

  const willLose = (e) => {
    const targetKanji = e.target.firstChild.textContent.toString();
    if(pressedKanji.some(kanji => kanji === targetKanji)) return true;
    storePressedKanji(targetKanji);
  }

  const resetGame = () => {
    if(score > topScore) setTopScore(score);
    setScore(0);
    setLevel(1);
    setPressedKanji([]);
    setLevelKanji([]);
    loadCards();
  }

  const shuffleCards = () => {
    const cards = [...levelKanji];
    const shuffledCards = [];
    for(let i = 0; i < levelKanji.length; i++){
      const ran = Math.floor(Math.random() * (levelKanji.length - i));
      shuffledCards.push(cards[ran]);
      cards.splice(ran, 1);
    }
    setLevelKanji(shuffledCards);
  }

  const loadCards = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }

  return (
    <div id="container">
      <Header 
        level={level}
        score={score}
        topScore={topScore} 
      />
      { !loading &&
        <CardHolder 
        levelKanji={levelKanji}
        scorePoint={scorePoint}
      />
      }
    </div>
  );
}

export default App;
