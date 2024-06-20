import React, {useState, useEffect} from "react";

function UseEffect(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('black');

    useEffect(()=> {
        window.addEventListener("resize", setResize);
    }, []);

    useEffect(()=> {
        document.title = `Count: ${count} ${color}`;
    }, [count, color])

    const setResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    const handleDecremment = () => {
        setCount(prevCount => prevCount-1);
    }

    const handleIncrement = () => {
        setCount(prevCount => prevCount+1);
    }

    const handleColor = () => {
        setColor(prevColor => prevColor == 'black' ? 'red' : 'black');
    }

    return (
        <div style={{color: color}}>
            <p>Screen Width: {width} px</p>
            <p>Screen Height: {height} px</p>
            <p>Count: {count}</p>
            <button onClick={handleDecremment}>-</button>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleColor}>change color</button>
        </div>
    )
}

export default UseEffect;