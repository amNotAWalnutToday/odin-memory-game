import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';

function App() {
  const [level, setLevel] = useState(1);
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

  const storePressedKanji = (targetKanji) => {
    const newPressedKanji = [...pressedKanji];
    newPressedKanji.push(targetKanji);
    setPressedKanji(newPressedKanji);
  }

  const scorePoint = (e) => {
    if(willLose(e)) return resetGame();
    console.log('hello')
    setScore(score + 1);
  };

  const willLose = (e) => {
    const targetKanji = e.target.firstChild.textContent.toString();
    if(pressedKanji.some(kanji => kanji === targetKanji)) return true;
    storePressedKanji(targetKanji);
  }

  const resetGame = () => {
    console.log('baibai');
    if(score > topScore) setTopScore(score);
    setScore(0);
    setLevel(1);
    setPressedKanji([]);
  }

  return (
    <div id="container">
      <Header score={score} topScore={topScore} />
      <CardHolder 
        levelKanji={levelKanji}
        scorePoint={scorePoint}
      />
    </div>
  );
}

export default App;
