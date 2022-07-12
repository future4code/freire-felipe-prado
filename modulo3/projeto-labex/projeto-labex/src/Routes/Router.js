import React from 'react';
import Home from "../pages/Home";
import Login from "../pages/Login";
import TripDetailsPage from "../pages/TripDetailsPage";
import ListTripPage from "../pages/ListTripPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import AdminHomePage from "../pages/AdminHomePage";


const Router = () => {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/admin/trips/:id' element={<TripDetailsPage/>} />
                <Route path='/trips/list' element={<ListTripPage/>} />
                <Route path='/trips/application' element={<ApplicationFormPage/>} />
                <Route path='/admin/trips/create' element={<CreateTripPage/>} />
                <Route path='/admin/trips/list' element={<AdminHomePage/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router