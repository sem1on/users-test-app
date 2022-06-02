import React from 'react';

import { useNavigate } from "react-router-dom";

import '../styles/Navbar.css';


const Navbar = ({ isVision, setIsVision }) => {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/users`);
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }


    return (
        <div className={'navbar'+clazzz}>
            <div 
                onClick={handleClick} 
                className={'logo'+clazzz}
            >
                App Name
            </div>
            <button 
                className={'navbar-btn'+clazzz} 
                onClick={() => setIsVision(!isVision)}
            >
                {isVision ? 'Обычный вид' : 'Версия для слабовидящих'}
            </button>
        </div>
    );
};

export default Navbar;
