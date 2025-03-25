import React from 'react'
import { GameContext } from '../store/GameStore';

const GameComponent = () => {
    const { gameState, updateGameState } = React.useContext(GameContext);

    const handleStop = () => {
        updateGameState({ isStarted: false });
    };

    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className='text-xl'>
                    <p>Game started with {gameState.rounds} rounds and {gameState.players} players</p>
                    {/* Add your game logic here */}
                </div>
                <button
                    onClick={handleStop}
                    className='bg-red-500 text-white p-4 rounded-md'
                >
                    Stop
                </button>
            </div>
        </>
    )
}

export default GameComponent