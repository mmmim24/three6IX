import React from 'react'
import { GameContext } from '../store/GameStore';

const GameComponent = () => {
    const { gameState, updateGameState } = React.useContext(GameContext);

    const handleStop = () => {
        updateGameState({
            rounds: 13,
            players: 4,
            isStarted: false
        });
    };

    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className='text-sm lg:text-xl text-emerald-900 dark:text-emerald-500'>
                    <p>Game started with {gameState.rounds} rounds and {gameState.players} players</p>
                </div>
                <button
                    onClick={handleStop}
                    className='bg-red-500 text-white p-2 lg:p-4 rounded-md text-sm'
                >
                    Stop
                </button>
            </div>
        </>
    )
}

export default GameComponent