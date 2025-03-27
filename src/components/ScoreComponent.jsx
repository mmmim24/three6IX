import React from 'react'
import { useLogicContext } from '../store/LogicStore';
import Modal from './Modal';

const ScoreComponent = () => {
    const { values, updateValues } = useLogicContext();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            updateValues({
                isWrongMove: false
            });
        }, 500);
    }, [values.isWrongMove]);

    React.useEffect(() => {
        if (values.isGameOver) {
            setIsModalOpen(true);
        }
    }, [values.isGameOver]);

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
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} {...values} />
            </div>
        </>
    )
}

export default ScoreComponent