import * as React from 'react';
import { useState, useEffect } from 'react';

import Game from './star-game';
// STAR MATCH - V9



const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
}


export function App({ initialData }) {
  const [count, setCount] = React.useState(0);
  return (
    <StarMatch />
  );
}
