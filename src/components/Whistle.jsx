import React from 'react'

const Whistle = ({ players, rounds, time }) => {
    return (
        <>
            <div className='h-[75px] flex flex-col gap-2'>
                <p >Starting with {rounds} rounds and {players} players</p>
                <div className='text-lg lg:text-2xl'>
                    <span > in</span><span className='text-red-500 '> {time}</span>
                </div>
            </div>
        </>
    )
}

export default Whistle