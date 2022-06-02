import React, { useState, useEffect } from 'react';

import GetData from '../api/api';

import { useFetching } from '../hooks/useFetching';

import UserItem from '../components/UserItem';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';

import '../styles/UsersList.css';


const Users = ({ isVision }) => {

    const [users, setUsers] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const getPages = (totalCount, limit) => {
        return Math.ceil(totalCount / limit);
    }

    const [fetchUsers, isUserLoading, userError] = useFetching( async () => {
        const responce = await GetData.getUsers(limit, page);
        setUsers(responce.data);
        const totalCount = (responce.headers['x-total-count'])
        setTotalPages(getPages(totalCount, limit))
    })

    useEffect(() => {
        fetchUsers();
    }, [page, limit]);

    const changePage = (page) => {
        setPage(page)
    }

    let clazzz = '';
    if(isVision){
        clazzz = '-active';
    }

    return (
        <div className='users-list'>
            {userError &&
                <h1>Произошла ошибка {userError}</h1>    
            }
            <div className={'list-bg'+clazzz}>
            {/* <div className={clazzz.join('')}> */}
            </div>
            <div className={'list'+clazzz}>
                <h2>Список пользователей</h2>
                {isUserLoading &&
                    <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}><Loader/></div>
                }
                <div className='users-items'>
                    {users.map((user) => 
                        <UserItem isVision={isVision} key={user.id} user={user}/>
                    )}
                </div>
                <div>
                    <Pagination 
                        isVision={isVision}
                        totalPages={totalPages} 
                        page={page} 
                        changePage={changePage}
                    />
                </div>
            </div>
        </div>
    );
};

export default Users;
