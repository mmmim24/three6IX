import React from 'react'
import GameParams from './GameParams';
import GameComponent from './GameComponent';
import { GameContext } from '../store/GameStore';
import LogicProvider from '../store/LogicStore';
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = () => {
    const { gameState } = React.useContext(GameContext);
    return (

        <React.Fragment>
            <div className='min-h-[80vh] flex justify-center items-center lg:p-2 '>
                <Routes>
                    <Route path='/' element={<GameParams />} />
                    <Route
                        path='/game'
                        element={
                            gameState.isStarted
                                ? <LogicProvider><GameComponent /></LogicProvider>
                                : <Navigate to='/' />
                        }
                    />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        </React.Fragment >

    )
}

export default Home