import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToLogin, goToCreateTripPage} from '../Routes/Coordinator'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const AdminHomePage = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

useEffect(() => {
    if(localStorage.token === undefined) {
        goToLogin(navigate)
    }
})

    return (
        <div>
            <Header/>
            <p>Administrando as Viagens</p>
            <button onClick={() => goBack()}></button>
            <button onClick={() => goToCreateTripPage()}></button>
            <button onClick={() => logOut()}> Sair </button>
            <Footer/>
        </div>
    )
}

export default AdminHomePage