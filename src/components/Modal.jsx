import React from 'react'
import ReactDOM from 'react-dom'
import { GameContext } from '../store/GameStore'

const Modal = ({ isOpen, onClose, score, life }) => {

    if (!isOpen) return null;

    const audio = new Audio('/slap.mp3');
    audio.play();

    const { updateGameState } = React.useContext(GameContext);
    function playAgain() {
        onClose();
        updateGameState({
            isStarted: false
        });
    }

    return ReactDOM.createPortal(
        <>
            <div className='fixed w-full h-full bg-[rgba(0,0,0,0.7)] flex justify-center z-11 items-center left-0 top-0' onClick={playAgain}>
                <div className='bg-[#333] w-[300px] h-[250px] flex flex-col items-center justify-center gap-8 p-4 text-center rounded-lg' onClick={e => e.stopPropagation()}>
                    <p className="text-xl md:text-2xl lg:text-3xl text-red-500">Game Over!</p>
                    <p className='text-md md:text-lg lg:text-xl text-emerald-500'>You have scored {score} with {life} life remaining </p>
                    <button className='px-2 py-1 rounded-lg bg-red-500 text-white' onClick={playAgain}>Play Again</button>
                </div>
            </div>
        </>, document.getElementById('modal')
    )
}

export default Modal