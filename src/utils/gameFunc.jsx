import React from 'react';
import { useLogicContext } from '../store/LogicStore';

export const renderPlayers = (player) => {
    const [activePlayer, setActivePlayer] = React.useState(0);
    const players = [];
    const radius = 200;
    const angleStep = (2 * Math.PI) / player;

    for (let i = 1; i <= player; i++) {
        const isHuman = i === 1;
        const angle = (i - 1) * angleStep + Math.PI / 2; // Start from the top
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);

        const playerStyle = {
            transform: `translate(${x}px, ${y}px)`,
            position: 'absolute',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: isHuman ? 'rgba(52, 211, 153, 0.8)' : 'rgba(156, 163, 175, 0.6)',
            border: i === activePlayer ? '3px solid #f59e0b' : '2px solid #1f2937',
            cursor: isHuman ? 'pointer' : 'default',
            transition: 'all 0.9s ease',
            zIndex: i === activePlayer ? 10 : 1
        };

        players.push(
            <div
                key={i}
                style={playerStyle}
                className={`player ${isHuman ? 'human' : 'npc'} ${i === activePlayer ? 'active' : ''}`}
                onClick={() => isHuman && setActivePlayer(i)}
            >
                <span className="text-white font-medium">
                    {isHuman ? 'You' : `P${i}`}
                </span>
            </div>
        );
    }

    return players;
};

export const initGame = (players, rounds) => {
    const { initialPlayer } = useLogicContext();
    const starter = initialPlayer(players);
}