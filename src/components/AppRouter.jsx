import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import Users from '../pages/Users';
import User from '../pages/User';
import Posts from '../pages/Posts';
import PostDetails from '../pages/PostDetails';
import Error from '../pages/Error';


const AppRouter = ({ isVision }) => {

    return (
        <Routes>
            <Route path='/users' element={<Users isVision={isVision}/>}/>
            <Route path='/posts/:id' element={<PostDetails isVision={isVision}/>}/>
            <Route path='/users/:id' element={<User isVision={isVision}/>}/>
            {/* <Route path='/users/:id/posts' element={<Posts/>}/> */}
            <Route path='/error' element={<Error/>}/>
            <Route
                path="/"
                element={<Navigate to="/users" replace />}
            />
            <Route
                path="*"
                element={<Navigate to="/error" replace />}
            />
        </Routes>
    )
}

export default AppRouter;
