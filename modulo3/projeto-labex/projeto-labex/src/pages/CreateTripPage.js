import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
import {useEffect, useState} from 'react'



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
        </div>
    )
}

export default CreateTripPage