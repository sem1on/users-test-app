import React, { useState, useEffect } from 'react';

import { useParams, useNavigate  } from 'react-router-dom';

import GetData from '../api/api';

import { useFetching } from '../hooks/useFetching';

import PostInfo from '../components/PostInfo';
import Loader from '../components/Loader';

import '../styles/UserDetails.css';


const User = ({ isVision }) => {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState(false);

    const params = useParams();

    const [fetchByid, isLoading, error] = useFetching( async(id) => {
        const response = await GetData.getUserById(id);
        setUser(response.data);
    });

    const [fetchPostsByid, isPostLoading, postError] = useFetching( async(id) => {
        const response = await GetData.getUserPosts(id);
        setPosts(response.data);
    });

    useEffect(() => {
        fetchByid(params.id)
        fetchPostsByid(params.id)
    }, []);

    const newPosts = posts.slice(0, 3);

    const navigate = useNavigate();
    function handleClick() {
        navigate(`/users/${user.id}/posts`);
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className='user-datails'>
            {isLoading &&
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}><Loader/></div>
                }
            <div className='user-info'>
                <h2 className={'username'+clazzz}>
                    {user.username}
                </h2>
                <div className={'information'+clazzz}>
                    <p >{user.name}</p>
                    <p >{user.email}</p>
                    <p >{user.phone}</p>
                    <p >{user.website}</p>
                    <p >{user.company?.name}</p>
                    <p>{user.company?.bs}</p>
                </div>
            </div>
            <div className={'user-posts'+clazzz}>
                {/* // Вариант с отдельной страницей */}
                {/* <h2>Посты</h2>
                {isPostLoading &&
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}><Loader/></div>
                }
                <div className='post-container'>
                    {newPosts.map((post) =>
                        <PostInfo post={post} key={post.id}/>
                    )}
                </div>
                <button onClick={handleClick} className='post-btn'>Смотреть все посты</button> */}
                {/* // С подгрузкой постов */}
                <h2>Посты</h2>
                {isPostLoading &&
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}><Loader/></div>
                }
                <div className='post-container'>
                    {allPosts ? posts.map((post) => <PostInfo post={post} key={post.id} isVision={isVision}/>)
                              : newPosts.map((post) => <PostInfo post={post} key={post.id} isVision={isVision}/>)
                    }
                </div>
                <button 
                    onClick={() => setAllPosts(!allPosts)} 
                    className={'post-btn'+clazzz}
                >
                    {allPosts ? 'Смотреть меньше' : 'Смотреть все посты'}
                </button>
            </div>
        </div>
    );
};

export default User;
