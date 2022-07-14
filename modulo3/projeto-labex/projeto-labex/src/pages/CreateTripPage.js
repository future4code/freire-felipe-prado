import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
import {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'



const CreateTripPage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.token === undefined){
            goToLogin(navigate)
        }
    })

    return (
        <div>
            <p>Criando sua Viagem</p>
            <Header/>
            <Footer/>
        </div>
    )
}

export default CreateTripPage