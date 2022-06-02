import React from 'react';

import { useNavigate } from "react-router-dom";

import '../styles/UserItem.css'


const UserItem = ({ user, isVision }) => {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/users/${user.id}`);
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className={'user-item'+clazzz}>
            <div className={'user-name'+clazzz}>
                {user.name}
            </div>
            <button 
                onClick={handleClick} 
                className={'user-btn'+clazzz}
            >
                Смотреть профиль
            </button>
        </div>
    );
};

export default UserItem;
