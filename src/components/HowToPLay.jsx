import React from 'react'

const HowToPLay = () => {

    const handleClick = () => {
        //intended to show the tooltip of game.jpeg
    }

    return (
        <>
            <div className="h-[50px] text-center cursor-pointer" onClick={handleClick}>
                <p className='text-emerald-500 hover:text-white hover:border-emerald-500 bg-emerald-900 mx-6 text-sm lg:text-md py-1 lg:py-2 px-2 lg:px-4 rounded-md lg:rounded-lg border-1 box-border lg:border-2 duration-500 linear'>Clap when the number contains 3 6 or 9</p>
            </div>
        </>
    )
}

export default HowToPLay