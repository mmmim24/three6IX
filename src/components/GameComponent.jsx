import React from 'react'
import { GameContext } from '../store/GameStore';
import { useLogicContext } from '../store/LogicStore';
import PlayerComponents from './PlayerComponents';
import ScoreComponent from './ScoreComponent';

const GameComponent = () => {
    const game = React.useContext(GameContext);
    const { isStarted, players, rounds } = game.gameState;
    const { values, updateValues, initialPlayer } = useLogicContext();
    const [time, setTime] = React.useState(3);
    const [running, setRunning] = React.useState(false);

    React.useEffect(() => {
        const randomPlayer = Math.floor(Math.random() * players) + 1;
        updateValues({
            startingPlayer: randomPlayer,
            isYourTurn: randomPlayer === 1
        });
    }, [isStarted]);

    React.useEffect(() => {
        let currentPlayer = (values.startingPlayer + (values.currentRound - 1) % players);
        if (currentPlayer > players) currentPlayer = currentPlayer - players;
        updateValues({
            isYourTurn: currentPlayer === 1,
            isGameOver: values.currentRound === rounds || values.life <= 0,
        });
    }, [values.startingPlayer, values.currentRound]);

    React.useEffect(() => {
        let interval;
        if (isStarted && time > 0) {
            interval = setInterval(() => {
                setTime(prev => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        setRunning(true);
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isStarted, time]);

    React.useEffect(() => {
        let interval;
        if (running && values.currentRound < rounds && values.life > 0) {
            interval = setInterval(() => {
                updateValues({
                    currentRound: values.currentRound + 1,
                    isPressed: false,
                })
            }, 500 * players);
        }
        return () => clearInterval(interval);
    }, [running, values.currentRound]);

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='text-sm lg:text-xl text-emerald-900 dark:text-emerald-500 my-2'>
                    {time > 0 ? <p>Game starting with {rounds} rounds and {players} players in {time}</p> : <ScoreComponent values={values} />}
                </div>
                <PlayerComponents players={players} rounds={rounds} starter={values.startingPlayer} turn={values.isYourTurn} />
            </div>
        </>
    )
}

export default GameComponent