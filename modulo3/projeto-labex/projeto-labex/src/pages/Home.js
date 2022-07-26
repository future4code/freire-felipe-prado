import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goToListTripPage, goToLogin } from '../Routes/Coordinator'
import {ButtonStyled} from '../Components/ButtonStyled'
import {Body} from '../Components/Body'

const Home = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <Body>
            <div>
            <p>Home</p>
            <ButtonStyled onClick={() => goToListTripPage(navigate)}> Ver Viagens </ButtonStyled>
            <ButtonStyled onClick={() => goToLogin(navigate)}> Aréa do Admin </ButtonStyled>
            </div>
            </Body>
            <Footer/>
        </div>
    )
}

export default Home