import { useState, useEffect } from 'react';
import Main from './components/Main';
import Title from './components/Title';
import PlayerLabel from './components/PlayerLabel';
import TextInput from './components/TextInput';
import Button from './components/Button';
import DiceCup from './components/DiceCup';
import Modal from './components/Modal';

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
	const [continuing, setContinuing] = useState(true);
	const [board, setBoard] = useState(initialBoard);
	const [splash, setSplash] = useState(true);
	const [playerSelect, setPlayerSelect] = useState(true);
	const handlePlayerNameSubmit = e => {
		e.preventDefault();
		if (!playerData[0].name) {
			setPlayerData([
				{
					name: e.data.name,
					color: 'white',
					roll: [0, 0],
					selected: null,
					points: 0,
				},
			]);
		} else {
			setPlayerData(prevPlayerData => [
				...prevPlayerData,
				{
					name: e.data.name,
					color: 'red',
					roll: [0, 0],
					selected: null,
					points: 0,
				},
			]);
			setPlayerSelect(false);
		}
	};
	const handleFirstRoll = () => {
		if (!playerData[0].roll[0]) {
			let nextPlayerData = [...playerData];
			nextPlayerData[0].roll[0] = Math.ceil(Math.random * 6);
			setPlayerData(nextPlayerData);
		} else {
			let nextPlayerData = [...playerData];
			nextPlayerData[1].roll[0] = Math.ceil(Math.random * 6);
			setPlayerData(nextPlayerData);
		}
	};
	useEffect(() => {
		if (splash) {
			setTimeout(() => {
				setSplash(false);
			}, 2000);
		}
	}, []);
	return (
		<Main>
			{splash ? (
				<Title splash={splash} />
			) : playerSelect ? (
				<>
					<Title />
					{playerData[0].name ? (
						<>
							<h2>Player 1, Name?</h2>
							<form>
								<TextInput name='name' />
								<Button type='submit' onClick={handlePlayerNameSubmit}>
									Enter
								</Button>
							</form>
						</>
					) : (
						<>
							<h2>Player 2, Name?</h2>
							<form>
								<TextInput name='name' />
								<Button type='submit' onClick={handlePlayerNameSubmit}>
									Enter
								</Button>
							</form>
						</>
					)}
				</>
			) : firstRolls ? (
				<>
					<Title />
					{playerData[1].roll[0] ? (
						<Modal>
							<h2>Player {}</h2>
						</Modal>
					) : (
						<>
							<PlayerLabel player={playerData[0].roll[0] ? 2 : 1} />
							<DiceCup onClick={handleFirstRoll} />
						</>
					)}
				</>
			) : null}
		</Main>
	);
};

export default App;
