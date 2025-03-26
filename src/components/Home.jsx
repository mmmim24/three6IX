import React from 'react'
import GameParams from './GameParams';
import GameComponent from './GameComponent';
import { GameContext } from '../store/GameStore';
import LogicProvider from '../store/LogicStore';

const Home = () => {
    const { gameState } = React.useContext(GameContext);
    return (

        <React.Fragment>
            <div className='min-h-[80vh] flex justify-center items-center lg:p-2'>
                {
                    gameState.isStarted ? <LogicProvider> <GameComponent /></LogicProvider> : <GameParams />
                }
            </div>
        </React.Fragment >

    )
}

export default Home