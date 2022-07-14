import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ListTripPage from './ListTripPage'
import Login from './Login'



const Home = () => {
    return (
        <div>
            <p>Home</p>
            <button onClick={ListTripPage}> Ver Viagens </button>
            <button onCLick={Login}> Aréa do Admin </button>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Home