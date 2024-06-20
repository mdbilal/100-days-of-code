import { useState, useEffect } from "react";

function Clock () {
    const [time, setTime] = useState(new Date());

    useEffect(()=> {
        setInterval(()=> {
            setTime(new Date());
        }, 1000);
        console.log('effect')
    }, []);

    const timeFormat = () => {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridium}`;
    }

    const padZero = (digit) => {
        return digit < 10 ? '0' + digit : digit;
    }

    return (
        <div className="container">
            <div className="clock">
                <span>{timeFormat()}</span>
            </div>
        </div>
    );
}

export default Clock;