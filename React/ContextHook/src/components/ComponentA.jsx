import { useState, createContext } from "react";
import ComponentB from './ComponentB';

export const UserContext = createContext();

function ComponentA () {

    const [user, setUser] = useState('Bilal');

    return (
        <div className="box">
            <h1>Component A</h1>
            <p>hello: {user}</p>
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA;