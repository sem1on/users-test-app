import React from 'react';

import { useNavigate } from 'react-router-dom';

import '../styles/PostInfo.css';


const PostInfo = ({ post, isVision }) => {

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/posts/${post.id}`);
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className={'postinfo'+clazzz}>
            <div className={'post-title'+clazzz}>{post?.title}</div>
            <div className={'post-body'+clazzz}>{post?.body}</div>
            <button 
                onClick={handleClick} 
                className={'postinfo-btn'+clazzz}
            >
                Смотреть пост
            </button>
        </div>
    );
};

export default PostInfo;