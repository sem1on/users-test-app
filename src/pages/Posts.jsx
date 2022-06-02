import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import GetData from '../api/api';

import { useFetching } from '../hooks/useFetching';

import PostInfo from '../components/PostInfo';
import Loader from '../components/Loader';

import '../styles/UserPosts.css';


const Posts = () => {

    const [user, setUser] = useState({});
    const [posts, setPosts] = useState([]);

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

    return (
        <div className='userposts'>
            {isLoading
                ? <Loader/>
                : <h2>Посты {user.username}</h2>
            }
            <div className='userposts-container'>
                {posts.map((post) =>
                    <PostInfo key={post.id} post={post}/>
                )}
            </div>
        </div>
    );
};

export default Posts;
