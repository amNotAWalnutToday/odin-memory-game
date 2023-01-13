import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);

  return (
    <div id="container">
      <Header score={score} topScore={topScore} />
    </div>
  );
}

export default App;
