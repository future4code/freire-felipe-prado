import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack } from '../Routes/Coordinator'
import useForm from '../Hooks/UseForm'
import axios from 'axios'
import Countries from '../Countries/Countries'
import {ButtonStyled} from '../Components/ButtonStyled'
import {InputStyled} from '../Components/InputStyled'
import { Body} from '../Components/Body'
import styled from 'styled-components'

const SelectStyle = styled.select`
border: 1px solid #333;
margin: 10px 10px;
width: 350px;
height: 30px;
border-radius: 3px;
items-align: center;
display: flex;
`

const ApplicationFormPage = () => {

    const [escolhaViagem, setEscolhaViagem] = useState()

    const {form, onChange, clearFields} = useForm({
        viagens: "",
        nome: "",
        idade: "",
        textoCandidatura: "",
        profissao: "",
        countries: ""
})
    const {id} = useParams()

    const navigate = useNavigate()

    const escolherViagem = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips"
        axios.get(url)
        .then((response) => {
            setEscolhaViagem(response.data.trips)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    useEffect(() => {
        escolherViagem()
    },[])

    const enviarInscricao = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trips/${form.viagens}/apply`
        const body = {
            name:form.nome,
            age: form.idade,
            applicationText: form.textoCandidatura,
            profession: form.profissao,
            country: form.countries
        }
        axios.post(url, body)
        .then((response) => {
            alert('Inscrição aceita!')
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    const mapearNome = escolhaViagem?.map((viagem) => {
        return(
            <option key={viagem.id} value={viagem.id}>
             {viagem.name}
            </option>
        )
    })

    const mapearPaises = Countries?.map((country) => {
        return(
            <option key={country.nome} value={country.nome}>
                {country.nome}
            </option>
        )
    })

    return (
        <div>
            <Header/>
            <Body>
            <p>Aplicando Formulário</p><br></br>
            <SelectStyle name={"viagens"} value={form.viagens} onChange={onChange}>
                <option value=""> Escolha uma Viagem  </option>
                {mapearNome}
            </SelectStyle>
            <InputStyled name={"nome"} value={form.nome} onChange={onChange} placeholder={"Nome"} required/>
            <InputStyled name={"idade"} value={form.idade} onChange={onChange} placeholder={"Idade"} required/>            
            <InputStyled name={"textoCandidatura"} value={form.textoCandidatura} onChange={onChange} placeholder={"Texto de Candidatura"} required/>
            <InputStyled name={"profissao"} value={form.profissao} onChange={onChange} placeholder={"Profissão"} required/>
            <SelectStyle name={"countries"} value={form.countries} onChange={onChange}>
                <option value=""> Escolha um País </option>
                {mapearPaises}
            </SelectStyle>            
            </Body>
            <ButtonStyled onClick={() => enviarInscricao()}> Enviar </ButtonStyled>
            <ButtonStyled onClick={() => goBack(navigate)}> Voltar </ButtonStyled>
            <Footer/>
        </div>
    )
}

export default ApplicationFormPage