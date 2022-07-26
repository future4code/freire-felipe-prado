import React from 'react';
import {Login} from "../Pages/Login";
import {Cadastro} from "../Pages/Cadastro";
import {Feed} from "../Pages/Feed";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Post} from "../Pages/Post";

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