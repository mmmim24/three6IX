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
            <div className="lg:h-[10vh] flex lg:flex-row lg:gap-10 justify-center items-center border-2 border-emerald-900  text-emerald-500">
                <p>3 6 9</p>
                <a href='https://www.github.com/mmmim24' target='_blank'>&copy; Mustaq Mujahid Mim </a>
                <p>{dateTime}</p>
            </div>
        </>
    )
}

export default Footer