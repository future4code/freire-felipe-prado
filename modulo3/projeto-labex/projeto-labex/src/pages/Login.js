import React from 'react';
import {useNavigate} from 'react-router-dom';
import useForm from '../Hooks/UseForm';
import axios from 'axios';
import { goToAdminHomePage } from '../Routes/Coordinator';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack } from '../Routes/Coordinator';
import {ButtonStyled} from '../Components/ButtonStyled'
import {InputStyled} from '../Components/InputStyled'
import {Body} from '../Components/Body'




const Login = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/login"
    const {form, onChange, clearFields} = useForm({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const loginSite = () => {
        axios.post(url, form)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((error) => {
            clearFields()
            alert("deu ruim")
        })
    }

    return (
        <div>
            <Header/>
            <Body>
            <p>Página de Login</p>
            <InputStyled name={"email"} value={form.email} onChange={onChange} required/>
            <InputStyled name={"password"} value={form.password} onChange={onChange} required/>
            <ButtonStyled onClick={loginSite}> Entrar </ButtonStyled>
            <ButtonStyled onClick={() => goBack(navigate)}> Voltar </ButtonStyled>
            </Body>
            <Footer/>
        </div>
    )
}

export default Login