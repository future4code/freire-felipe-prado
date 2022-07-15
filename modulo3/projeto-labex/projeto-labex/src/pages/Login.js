import React from 'react';
import {useNavigate} from 'react-router-dom';
import useForm from '../Hooks/UseForm';
import axios from 'axios';
import { goToAdminHomePage } from '../Routes/Coordinator';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { goBack } from '../Routes/Coordinator';



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
            <p>Página de Login</p>
            <input name={"email"} value={form.email} onChange={onChange} required/>
            <input name={"password"} value={form.password} onChange={onChange} required/>
            <button onClick={loginSite}> Entrar </button>
            <button onClick={() => goBack(navigate)}> Voltar </button>
            <Header/>
            <Footer/>
        </div>
    )
}

export default Login