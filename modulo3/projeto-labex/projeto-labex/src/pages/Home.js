import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goToListTripPage, goToLogin } from '../Routes/Coordinator'




const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <p>Home</p>
            <button onClick={() => goToListTripPage(navigate)}> Ver Viagens </button>
            <button onClick={() => goToLogin(navigate)}> Aréa do Admin </button>
            <Footer/>
        </div>
    )
}

export default Home