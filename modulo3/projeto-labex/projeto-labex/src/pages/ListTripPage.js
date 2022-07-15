import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack, goToApplicationFormPage } from '../Routes/Coordinator'


const ListTripPage = () => {

const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <button onClick={() => goToApplicationFormPage(navigate)}> Inscrever-se </button>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            <h3>Lista de Viagens</h3>
            
            <Footer/>
        </div>
    )
}

export default ListTripPage