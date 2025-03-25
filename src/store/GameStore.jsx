import React from 'react';

export const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
    const [gameState, setGameState] = React.useState({
        rounds: 13,
        players: 4,
        isStarted: false
    });

    const updateGameState = (newState) => {
        setGameState(prev => ({ ...prev, ...newState }));
    };

    return (
        <GameContext.Provider value={{ gameState, updateGameState }}>
            {children}
        </GameContext.Provider>
    );
};
