import React from 'react'
import character from '/character369.jpeg'
import { GameContext } from '../store/GameStore';
import { validate } from '../utils/validate';
import HowToPLay from './HowToPLay';
import { useSearchParams, useNavigate } from 'react-router-dom'

const GameParams = () => {
    const { gameState, updateGameState } = React.useContext(GameContext);
    const [error, setError] = React.useState(null);
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    const initialRounds = searchParams.get('rounds')
        ? Number(searchParams.get('rounds'))
        : gameState.rounds
    const initialPlayers = searchParams.get('players')
        ? Number(searchParams.get('players'))
        : gameState.players

    const handleRoundsChange = (value) => {
        const numValue = Number(value)
        searchParams.set('rounds', numValue)
        setSearchParams(searchParams)
    }

    const handlePlayersChange = (value) => {
        const numValue = Number(value)
        setSearchParams({
            ...Object.fromEntries(searchParams),
            players: numValue
        });
    }

    const handleStart = () => {
        const roundsInput = Number(searchParams.get('rounds')) || gameState.rounds
        const playersInput = Number(searchParams.get('players')) || gameState.players

        const validation = validate(roundsInput, playersInput);
        const audio = new Audio('/clap.mp3');

        if (validation) {
            updateGameState({
                rounds: roundsInput,
                players: playersInput,
                isStarted: true
            });
            audio.play();
            navigate('/game');
        } else {
            setError(
                <div className='h-[50px] text-center'>
                    <p className='text-red-800 mx-6 text-sm lg:text-md bg-red-300 py-1 lg:py-2 px-2 lg:px-4 rounded-md lg:rounded-lg border-1 box-border lg:border-2'>
                        Rounds must be between 13 and 1000 and
                        Players must be between 4 and 12
                    </p>
                </div>
            );
        }
    };
    return (
        <>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-6 lg:p-6'>
                    <div>
                        <img src={character} alt='cards' className='border-1 lg:border-2 rounded-lg lg:rounded-xl border-emerald-500' />
                    </div>
                    <div className='border-1 lg:border-2 border-emerald-500 p-5 lg:p-7 rounded-lg lg:rounded-xl flex flex-col gap-4 lg:gap-6'>
                        <div className='flex justify-between items-center gap-2'>
                            <label htmlFor='round' className='text-md lg:text-xl text-emerald-500'>Enter rounds</label>
                            <input
                                type='number'
                                id='round'
                                min={13}
                                value={searchParams.get('rounds') || initialRounds}
                                onChange={(e) => handleRoundsChange(e.target.value)}
                                className='p-1.5 lg:p-2 w-[50px] lg:w-[75px] rounded-md text-right bg-emerald-900 text-white border-emerald-500 box-border border-1 lg:border-2 focus:outline-0'
                            />
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <label htmlFor='player' className='text-md lg:text-xl text-emerald-500'>Enter players</label>
                            <input
                                type='number'
                                id='player'
                                min={4}
                                value={searchParams.get('players') || initialPlayers}
                                onChange={(e) => handlePlayersChange(e.target.value)}
                                className='p-1.5 lg:p-2 w-[50px] lg:w-[75px] rounded-md text-right bg-emerald-900 text-white border-emerald-500 box-border border-1 lg:border-2 focus:outline-0'
                            />
                        </div>
                        <button
                            onClick={handleStart}
                            className='p-1 lg:p-2 text-emerald-500 hover:text-white bg-emerald-900 rounded-md border-1 lg:border-2 border-emerald-500 linear duration-500'
                        >
                            Start
                        </button>
                    </div>
                </div >
                <div>
                    {
                        error !== null ? error : <HowToPLay />
                    }
                </div>
            </div>
        </>
    )
}

export default GameParams