import React from 'react'
import {useNavigate} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
import {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import useForm from '../Hooks/UseForm'
import { goBack } from '../Routes/Coordinator'



const CreateTripPage = () => {

    const navigate = useNavigate()

    const {form, onChange, clearFields} = useForm({
        nome: "",
        descricao: "",
        duracaoDias: "",
})

    useEffect(() => {
        if(localStorage.token === undefined){
            goToLogin(navigate)
        }
    })

    return (
        <div>
            <Header/>
            <h2> Criar Viagem</h2>
            <input name={"nome"} value={form.nome} onChange={onChange} placeholder={"Nome"} required/>
            <select> Escolha um Planeta </select>
            <input name={"descricao"} value={form.descricao} onChange={onChange} placeholder={"Descrição"} required/>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            <button onClick={alert('parabens, sua viagem foi criada com sucesso!')}> Criar </button>
            <Footer/>
        </div>
    )
}

export default CreateTripPage