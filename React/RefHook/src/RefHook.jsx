import { useEffect, useRef } from "react";

function RefHook(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);1

    useEffect(()=>{
        console.log('Component Rendered');
    });

    const handleClick1 = () => {
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef2.current.style.background = "yellow";
        inputRef1.current.style.background = "";
        inputRef3.current.style.background = "";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef3.current.style.background = "yellow";
        inputRef2.current.style.background = "";
        inputRef1.current.style.background = "";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                click me 1
            </button>
            <input type="text" ref={inputRef1}/>

            <button onClick={handleClick2}>
                click me 2
            </button>
            <input type="text" ref={inputRef2}/>

            <button onClick={handleClick3}>
                click me 3
            </button>
            <input type="text" ref={inputRef3}/>
        </div>
    );
}

export default RefHook;