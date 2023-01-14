import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';
import Loading from './components/Loading';

function App() {
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useState(false);
  const [numOfCards, setNumOfCards] = useState(4);
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
    '念',
    '確',
    '暇',
    '卵',
    '影',
    '番',
    '光',
    '照',
    '明',
    '炎',
    '系',
    '星',
    '衛',
    '永',
    '水',
    '砂',
    '根',
    '植',
    '庭',
    '虹',
    '遊',
    '園',
    '地',
    '鉄',
    '砲',
    '撃',
    '撃',
    '雷',
    '鳴',
    '岩',
    '鬼',
    '吸',
    '血',
    '捕',
    '爪',
    '月',
    '散',
    '満',
    '防',
    '魔',
    '天',
    '国',
    '桃',
    '股',
    '祭',
    '海',
    '鋭',
    '鈍',
    '感',
    '暗',
    '味',
    '弁',
    '勘',
    '狐',
    '狼',
    '亀',
    '桜',
    '楓',
    '蘭',
    '羊',
    '迷',
    '惑',
    '汚',
    '好',
    '嫌',
    '冒',
    '険',
    '談',
    '知',
    '汁',
    '汗',
    '灰',
    '焼',
    '解',
    '孤',
    '空',
    '港',
    '船',
    '蝶',
    '超',
    '足',
    '手',
    '脇',
    '花',
    '鼻',
    '冷',
    '風',
    '果',
    '春',
    '夏',
    '秋',
    '諦',
    '鳥',
    '虎',
    '竜',
    '鼠',
    '豚',
    '馬',
    '勝',
    '象',
    '忠',
    '線',
    '縞',
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
      setNumOfCards(2 + (level * 2))
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
      { !loading 
      ?<CardHolder 
        levelKanji={levelKanji}
        scorePoint={scorePoint}
      />
      :<Loading/>
      }
    </div>
  );
}

export default App;
