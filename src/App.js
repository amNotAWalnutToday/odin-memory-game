import React, { useState } from 'react';
import Header from './components/Header';
import CardHolder from './components/CardHolder';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div id="container">
      <Header score={score} topScore={topScore} />
      <CardHolder />
    </div>
  );
}

export default App;
