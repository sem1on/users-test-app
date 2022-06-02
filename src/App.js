import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";


function App() {

    const [isVision, setIsVision] = useState(
        JSON.parse(localStorage.getItem('isVision')) || false
    );

    useEffect(() => {
        localStorage.setItem('isVision', JSON.stringify(isVision))
    }, [isVision]);

    
    return (
        <div>
            <Navbar isVision={isVision} setIsVision={setIsVision}/>
            <AppRouter isVision={isVision}/>
        </div>
    );
}

export default App;
