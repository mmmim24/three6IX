import React from 'react'
import character from '../../public/character369.jpeg'
import game from '../../public/game.jpeg'

const GameParams = ({ ...props }) => {
    return (
        <>
            <div className='flex flex-row justify-center items-center lg:gap-6 lg:p-6'>
                <div>
                    <img src={character} alt='cards' className='w-64 h-64 rounded-lg' />
                </div>
                <div className='border-2 border-emerald-500 lg:p-6 rounded-xl flex flex-col lg:gap-6'>
                    <label htmlFor='round' className='text-xl'>Enter rounds</label>
                    <input type='number' id='round' min={13} className='lg:p-3 rounded-md bg-emerald-900 border-emerald-500 box-border lg:border-2 focus:outline-0' />
                    <label htmlFor='player' className='text-xl'>Enter players</label>
                    <input type='number' id='player' min={4} className='lg:p-3 rounded-md bg-emerald-900 border-emerald-500 box-border lg:border-2 focus:outline-0' />
                    <button onClick={() => props.st(true)} className='p-3 text-emerald-500 hover:text-white hover:bg-emerald-900 rounded-md border-2 border-emerald-500 linear duration-500'>Start</button>
                </div>
            </div>
        </>
    )
}

export default GameParams