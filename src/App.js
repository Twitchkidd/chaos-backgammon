import { useState, useEffect } from 'react';
import Main from './components/Main';
import Title from './components/Title';
import PlayerLabel from './components/PlayerLabel';

const initialBoard = {
	1: [1, 1],
	2: [],
	3: [],
	4: [],
	5: [],
	6: [0, 0, 0, 0, 0],
	7: [],
	8: [0, 0, 0],
	9: [],
	10: [],
	11: [],
	12: [1, 1, 1, 1, 1],
	13: [0, 0, 0, 0, 0],
	14: [],
	15: [],
	16: [],
	17: [1, 1, 1],
	18: [],
	19: [1, 1, 1, 1, 1],
	20: [],
	21: [],
	22: [],
	23: [],
	24: [0, 0],
	bar: [],
	homePlayer1: [],
	homePlayer2: [],
};

const App = () => {
	const [playerData, setPlayerData] = useState([]);
	const [stakes, setStakes] = useState(1);
	const [continuing, setContinuing] = useState(false);
	const [board, setBoard] = useState(initialBoard);
  const [splash, setSplash] = useState(true);
  const [playerSelect, setPlayerSelect] = useState(true);
	return (
		<Main>
      {splash ? (
        <Title splash={splash}>Chaos Backgammon!</Title>
      ) : playerSelect ? (
        <>
          <Title>Chaos Backgammon!</Title>
          {playerData[0].name ? (
            <PlayerLabel
          )}
        </>
      ) : }
    </Main>
	);
};

export default App;
