import React from 'react'

const ScoreComponent = ({ values }) => {
    return (
        <>
            <div className="h-[75px] flex flex-col gap-2 items-center">
                <div className='flex items-center gap-4'>

                    <p className='text-red-500'>Current Round: {values.currentRound}</p>
                    <p>Score: {values.score}</p>
                    <p>Lives: {values.life}</p>

                </div>
                <div className='flex gap-4 text-lg lg:text-2xl'>
                    {values.isWrongMove && <p className="text-red-500">Wrong move!</p>}
                    {values.isGameOver && <p className="text-red-500">Game Over!</p>}
                </div>
            </div>
        </>
    )
}

export default ScoreComponent