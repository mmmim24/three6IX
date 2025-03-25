import React from 'react'

const GameComponent = ({ ...props }) => {
    return (
        <>
            <div className='flex flex-col gap-8'>
                <button onClick={() => props.st(false)} className='bg-red-500 text-white p-4 rounded-md'>Stop</button>
            </div>
        </>
    )
}

export default GameComponent