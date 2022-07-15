import React from 'react'
import {useNavigate} from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack } from '../Routes/Coordinator'
import useForm from '../Hooks/UseForm'

const ApplicationFormPage = () => {

    const {form, onChange, clearFields} = useForm({
        nome: "",
        idade: "",
        textoCandidatura: "",
        profissao: "",
})

    const navigate = useNavigate()

    return (
        <div>
            <Header/>
            <p>Aplicando Formulário</p>
            <button onClick={() => (navigate)}> Enviar </button>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            <input name={"nome"} value={form.nome} onChange={onChange} placeholder={"Nome"} required/>
            <input name={"idade"} value={form.idade} onChange={onChange} placeholder={"Idade"} required/>            
            <input name={"textoCandidatura"} value={form.textoCandidatura} onChange={onChange} placeholder={"Texto de Candidatura"} required/>
            <input name={"profissao"} value={form.profissao} onChange={onChange} placeholder={"Profissão"} required/>
            <Footer/>
        </div>
    )
}

export default ApplicationFormPage