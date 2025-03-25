import React from 'react'
import character from '/character369.jpeg'
import { GameContext } from '../store/GameStore';

const GameParams = () => {
    const { gameState, updateGameState } = React.useContext(GameContext);
    const [roundsInput, setRoundsInput] = React.useState(gameState.rounds);
    const [playersInput, setPlayersInput] = React.useState(gameState.players);

    const handleStart = () => {
        updateGameState({
            rounds: roundsInput,
            players: playersInput,
            isStarted: true
        });
    };

    return (
        <>
            <div className='flex flex-row justify-center items-center lg:gap-6 lg:p-6'>
                <div>
                    <img src={character} alt='cards' className=' rounded-lg' />
                </div>
                <div className='border-2 border-emerald-500 lg:p-6 rounded-xl flex flex-col lg:gap-6'>
                    <div className='flex justify-between items-center gap-2'>
                        <label htmlFor='round' className='text-xl'>Enter rounds</label>
                        <input
                            type='text'
                            id='round'
                            min={13}
                            value={roundsInput}
                            onChange={(e) => setRoundsInput(Number(e.target.value))}
                            className='lg:p-2 w-[75px] rounded-md bg-emerald-900 border-emerald-500 box-border lg:border-2 focus:outline-0'
                        />
                    </div>
                    <div className='flex justify-between items-center gap-2'>
                        <label htmlFor='player' className='text-xl'>Enter players</label>
                        <input
                            type='text'
                            id='player'
                            min={4}
                            value={playersInput}
                            onChange={(e) => setPlayersInput(Number(e.target.value))}
                            className='lg:p-3 w-[75px] rounded-md bg-emerald-900 border-emerald-500 box-border lg:border-2 focus:outline-0'
                        />
                    </div>
                    <button
                        onClick={handleStart}
                        className='p-3 text-emerald-500 hover:text-white hover:bg-emerald-900 rounded-md border-2 border-emerald-500 linear duration-500'
                    >
                        Start
                    </button>
                </div>
            </div >
        </>
    )
}

export default GameParams