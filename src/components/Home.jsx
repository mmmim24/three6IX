import React from 'react'
import GameParams from './GameParams';
import GameComponent from './GameComponent';

const Home = () => {
    const [start, setStart] = React.useState(false);
    return (
        <React.Fragment>
            <div className='min-h-[80vh] flex justify-center items-center lg:p-2'>
                {
                    start ? <GameComponent st={setStart} /> : <GameParams st={setStart} />
                }
            </div>
        </React.Fragment >
    )
}

export default Home