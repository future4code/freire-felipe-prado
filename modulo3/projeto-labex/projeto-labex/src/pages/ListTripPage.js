import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack, goToApplicationFormPage } from '../Routes/Coordinator'
import { CardStyle } from '../Components/CardStyle'
import axios from 'axios'
import {ButtonStyled} from '../Components/ButtonStyled'
import {Body} from '../Components/Body'



const ListTripPage = () => {

    const [infoViagens, setInfoViagens] = useState([]) 

const navigate = useNavigate()

useEffect (() => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips"
    axios.get(url)
    .then((response) => {
        setInfoViagens(response.data.trips)
    })
    .catch((error) => {
        console.log(error.data)
    })
},[])

const mapearLista = infoViagens.map((viagem) => {
    return(
        <CardStyle>
            <p> {viagem.name} </p>
            <p> {viagem.description} </p>
            <p> {viagem.planet} </p>
            <p> {viagem.durationInDays} </p>
            <p> {viagem.date} </p>
        </CardStyle>
    )
})

    return (
        <div>
            <Header/>
            <Body>
            <h3>Lista de Viagens</h3>
            {mapearLista}
            </Body>
            <ButtonStyled onClick={() => goToApplicationFormPage(navigate)}> Inscrever-se </ButtonStyled>
            <ButtonStyled onClick={() => goBack(navigate)}> Voltar </ButtonStyled>
            <Footer/>
        </div>
    )
}

export default ListTripPage