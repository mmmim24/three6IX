import React from 'react'

const ScoreComponent = ({ values }) => {
    return (
        <>
            <div className="flex gap-4 justify-center items-center">
                <p className='text-red-500'>Current Round: {values.currentRound}</p>
                <p>Score: {values.score}</p>
                <p>Lives: {values.life}</p>
                {values.isWrongMove && <p className="text-red-500">Wrong move!</p>}
                {values.isGameOver && <p className="text-red-500">Game Over!</p>}
            </div>
        </>
    )
}

export default ScoreComponent