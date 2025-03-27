import React from 'react'
import { GameContext } from '../store/GameStore';
import { useLogicContext } from '../store/LogicStore';
import PlayerComponents from './PlayerComponents';
import ScoreComponent from './ScoreComponent';
import Whistle from './Whistle';

const GameComponent = () => {
    const game = React.useContext(GameContext);
    const { isStarted, players, rounds } = game.gameState;
    const { values, updateValues, initialPlayer } = useLogicContext();
    const [time, setTime] = React.useState(5);
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
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [running, values.currentRound]);

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className='text-sm lg:text-xl text-emerald-900 dark:text-emerald-500 lg:mt-8'>
                    {
                        time > 0
                            ? <Whistle
                                players={players}
                                rounds={rounds}
                                time={time}
                            />
                            : <ScoreComponent />
                    }
                </div>
                <PlayerComponents players={players} />
            </div>
        </>
    )
}

export default GameComponent