import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
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
            <p>Administrando as Viagens</p>
            <button onClick={() => logOut()}> Sair </button>
            <Header/>
            <Footer/>
        </div>
    )
}

export default AdminHomePage