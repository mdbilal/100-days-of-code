import ComponentD from "./ComponentD";
import { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC () {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h1>Component C</h1>
            <p>hey once again: { user }</p>
            <ComponentD />
        </div>
    );
}

export default ComponentC;