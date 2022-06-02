import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import GetData from '../api/api';

import { useFetching } from '../hooks/useFetching';

import Modal from '../components/Modal';
import CommentForm from '../components/CommentForm';
import Loader from '../components/Loader';

import '../styles/PostInfo.css';


const PostDetails = ({ isVision }) => {

    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [modal, setModal] = useState(false);

    const params = useParams();

    const [fetchPostByid, isLoading, error] = useFetching( async(id) => {
        const response = await GetData.getPostById(id);
        setPost(response.data);
    });

    const [fetchComment, isCommentLoading, commenError] = useFetching( async(id) => {
        const response = await GetData.getComment(id);
        setComment(response.data);
    });

    useEffect(() => {
        fetchPostByid(params.id)
        fetchComment(params.id)
    }, []);

    const onAdd = (newComm) => {
        setComment([...comment, newComm])
        setModal(false)
    };

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className={'post-wrapper'+clazzz}>
            <h2>Пост</h2>
            <h3>{post.title}</h3>
            {isLoading
                ? <Loader/>
                : <div className={'post-text'+clazzz}>{post.body}</div>
            }
            <h2 style={{marginTop: '35px'}}>Комментарии:</h2>
            {isCommentLoading
                ? <Loader/>
                : <div style={{marginTop: '25px' }}>
                    {comment.map(comm =>
                        <div key={comm.id} className={'comm-wrapper'+clazzz}>
                            <h4>{comm.name}</h4>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>)}
                </div>
            }
            <button 
                onClick={() => setModal(true)} 
                className={'comment-btn'+clazzz}
            >
                Добавить комментарий
            </button>
            <Modal 
                isVision={isVision} 
                visible={modal} 
                setVisible={setModal}
            >
                <CommentForm 
                    isVision={isVision} 
                    onAdd={onAdd}
                />
            </Modal>
        </div>
    );
}

export default PostDetails;
