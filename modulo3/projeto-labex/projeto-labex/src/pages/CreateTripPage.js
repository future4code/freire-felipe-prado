import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
import {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import useForm from '../Hooks/UseForm'
import { goBack } from '../Routes/Coordinator'
import {Planets} from '../Planets/Planets'
import {ButtonStyled} from '../Components/ButtonStyled'
import {InputStyled} from '../Components/InputStyled'
import {Body} from '../Components/Body'
import styled from 'styled-components'
import axios from 'axios'

const SelectStyle = styled.select`
border: 1px solid #333;
margin: 10px 10px;
width: 350px;
height: 30px;
border-radius: 3px;
items-align: center;
display: flex;
`

const CreateTripPage = () => {

    const navigate = useNavigate()

    const {form, onChange, clearFields} = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: "",     
})

    useEffect(() => {
        if(localStorage.token === undefined){
            goToLogin(navigate)
        }
    })

    const mapearPlanetas = Planets?.map((planeta) => {
        return(
            <option key={planeta.name} value={planeta.name}>
                {planeta.name}
            </option>
        )
    })

    const criarViagem = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips"
        const headers = { headers: {
            auth: localStorage.getItem('token')
        }}
        axios.post(url, form, headers)
        .then((response) => {
            console.log(response.data.trip)
            alert('Sua viage foi criada com sucesso!')
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    return (
        <div>
            <Header/>
            <Body>
            <h2> Criar Viagem</h2>
            <InputStyled name={"name"} value={form.name} onChange={onChange} placeholder={"Nome"} required/>
            <SelectStyle name={"planet"} value={form.planet} onChange={onChange}>
            <option value={""}> Escolha um Planeta </option>
                {mapearPlanetas}
            </SelectStyle>
            <InputStyled type="date" name={"date"} value={form.date} onChange={onChange} placeholder={"Data"} required/>
            <InputStyled name={"description"} value={form.description} onChange={onChange} placeholder={"Descrição"} required/>
            <InputStyled name={"durationInDays"} value={form.durationInDays} onChange={onChange} placeholder={"Duração em Dias"} required/>
            <ButtonStyled onClick={() => goBack(navigate)}> Voltar </ButtonStyled>
            <ButtonStyled onClick={() => criarViagem()}> Criar </ButtonStyled>
            </Body>
            <Footer/>
        </div>
    )
}

export default CreateTripPage