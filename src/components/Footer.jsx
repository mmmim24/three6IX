import React from 'react'

const Footer = () => {

    const [dateTime, setDateTime] = React.useState();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        weekday: 'long'
    }

    function update() {
        var date = new Date();
        setDateTime(date.toLocaleDateString('en-US', options));
    }

    React.useEffect(() => {
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <div className="h-[10vh] flex flex-col lg:flex-row text-xs md:text-sm lg:text-md lg:gap-10 justify-center items-center border-t-4 dark:border-emerald-900 border-emerald-500 dark:text-emerald-500 text-emerald-700">
                <p>3 6 9</p>
                <a className='dark:text-white text-emerald-900 hover:text-emerald-700 dark:hover:text-emerald-500 linear duration-500' href='https://www.github.com/mmmim24' target='_blank'>&copy; Mustaq Mujahid Mim </a>
                <p>{dateTime}</p>
            </div>
        </>
    )
}

export default Footer