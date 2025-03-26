import React from 'react';
import { useLogicContext } from '../store/LogicStore';

export const renderPlayers = (player) => {
    const { values } = useLogicContext();
    const activePlayer =
        values.startingPlayer && values.currentRound
            ? (((values.startingPlayer + (values.currentRound - 1)) % player) || player)
            : 0;

    const players = [];
    const radius = 150;
    const angleStep = (2 * Math.PI) / player;

    for (let i = 1; i <= player; i++) {
        const isHuman = i === 1;
        const angle = (i - 1) * angleStep + Math.PI / 2;
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
            backgroundColor: '#004F3B',
            border: i === activePlayer ? '3px solid #00BC7D' : '3px solid #004F3B',
            cursor: isHuman ? 'pointer' : 'default',
            transition: 'all 0.9s ease',
            // zIndex: i === activePlayer ? 10 : 1
        };

        players.push(
            <div
                key={i}
                style={playerStyle}
                className={`player ${isHuman ? 'human' : 'npc'} ${i === activePlayer ? 'active' : ''}`}
            >
                <span className="text-[#00BC7D]">
                    {isHuman ? 'You' : `P${i}`}
                </span>
            </div>
        );
    }

    return players;
};