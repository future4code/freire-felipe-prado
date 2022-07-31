import React from 'react';
import {Login} from "../Pages/Login/Login";
import {Cadastro} from "../Pages/Cadastro/Cadastro";
import {Feed} from "../Pages/Feed/Feed";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Post} from "../Pages/Post/Post";


export const Router = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/cadastro' element={<Cadastro/>} />
                <Route path='/feed' element={<Feed/>} />
                <Route path='/post' element={<Post/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}