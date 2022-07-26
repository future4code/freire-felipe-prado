import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {goBack, goToLogin, goToCreateTripPage} from '../Routes/Coordinator'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import axios from 'axios'
import { CardStyle } from '../Components/CardStyle'
import {ButtonStyled} from '../Components/ButtonStyled'
import {Body} from '../Components/Body'


const AdminHomePage = () => {

    const [infoLista, setInfoLista] = useState()

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('token')
        goToLogin(navigate)
    }

useEffect(() => {
    if(localStorage.token === undefined) {
        goToLogin(navigate)
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips"
    axios.get(url)
    .then((response) => {
        setInfoLista(response.data.trips)
    })
    .catch((error) => {
        console.log(error.data)
    })
},[])

    const mapearViagens = infoLista?.map((viagem, index) => {
        return(
            <CardStyle key={index}>
                <p> {viagem.name} </p>
                <ButtonStyled> delete </ButtonStyled>
            </CardStyle>
        )
    })

    return (
        <div>
            <Header/>
            <Body>
            <p> Painel Administrativo </p>
            {mapearViagens}
            </Body>
            <ButtonStyled onClick={() => goBack(navigate)}> Voltar</ButtonStyled>
            <ButtonStyled onClick={() => goToCreateTripPage(navigate)}> Criar Viagem </ButtonStyled>
            <ButtonStyled onClick={() => logOut()}> Sair </ButtonStyled>
            <Footer/>
        </div>
    )
}

export default AdminHomePage