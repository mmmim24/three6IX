import React from 'react'
import { renderPlayers } from '../utils/gameFunc';
import { useLogicContext } from '../store/LogicStore';

const PlayerComponents = ({ players, rounds, starter, turn }) => {
    const { values, clap, shoot } = useLogicContext();
    return (
        <>
            <div className='flex flex-col justify-center items-center'>

                <div className='relative w-[500px] h-[500px] flex justify-center items-center'>
                    <button
                        disabled={values.isGameOver || !values.isYourTurn}
                        onClick={() => clap()}
                        className={`w-15 h-15 rounded-full ${values.isYourTurn ? 'bg-emerald-700' : 'bg-emerald-900'} text-emerald-500 z-10 flex justify-center items-center gap-4 ${values.isYourTurn ? 'hover:bg-emerald-800' : ''} border-1 ease-linear duration-500 ${!values.isYourTurn ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <i className='text-3xl'>👏</i>
                    </button>
                    <button
                        disabled={values.isGameOver || !values.isYourTurn}
                        onClick={() => shoot()}
                        className={`w-15 h-15 rounded-full ${values.isYourTurn ? 'bg-emerald-700' : 'bg-emerald-900'} text-emerald-500 z-10 flex justify-center items-center gap-4 ${values.isYourTurn ? 'hover:bg-emerald-800' : ''} border-1 ease-linear duration-500 ${!values.isYourTurn ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <i className='text-3xl'>

                            {values.currentRound}
                        </i>
                    </button>

                    {renderPlayers(players)}
                </div>
            </div>
        </>
    )
}

export default PlayerComponents;