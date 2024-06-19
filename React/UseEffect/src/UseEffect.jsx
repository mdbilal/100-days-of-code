import React, {useState, useEffect} from "react";

function UseEffect(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=> {
        window.addEventListener("resize", setResize);
    }, []);

    const setResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <>
            <p>Screen Width: {width} px</p>
            <p>Screen Height: {height} px</p>
        </>
    )
}

export default UseEffect;