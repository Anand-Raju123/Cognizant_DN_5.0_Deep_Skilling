import { useState } from "react";

import Guest from "./Components/Guest";
import User from "./Components/User";

import "./App.css";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div className="container">

            {

                isLoggedIn ?

                    <User logout={() => setIsLoggedIn(false)} />

                    :

                    <Guest login={() => setIsLoggedIn(true)} />

            }

        </div>

    );

}

export default App;