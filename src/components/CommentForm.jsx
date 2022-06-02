import React from "react";
import { useState } from "react";

import '../styles/CommentForm.css';


const CommentForm = ({ onAdd, isVision }) => {
    
    const [comment, setComment] = useState({name: '', email: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newComm = {
            ...comment, id: Date.now()
        }
        onAdd(newComm)
        setComment({name: '', email: '', body: ''});
    };

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <form className="form">
            <input 
                className={"form-input"+clazzz}
                type="text" 
                placeholder='Название'
                value={comment.name}
                onChange={e => setComment({...comment, name: e.target.value})}
            />
            <input 
                className={"form-input"+clazzz}
                type="text" 
                placeholder='Email'
                value={comment.email}
                onChange={e => setComment({...comment, email: e.target.value})}
            />
            <textarea 
                className={"form-text"+clazzz}
                type="text" 
                placeholder='Комментарий'
                value={comment.body}
                onChange={e => setComment({...comment, body: e.target.value})}
            />
            <button 
                className={'form-btn'+clazzz} 
                onClick={addNewPost}
            >
                Отправить
            </button>
        </form>
    )
}

export default CommentForm;
