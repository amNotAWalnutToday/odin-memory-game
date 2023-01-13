import React, { useState } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';

function App() {
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div id="container">
      <Header score={score} topScore={topScore} />
      <CardHolder level={level} />
    </div>
  );
}

export default App;
