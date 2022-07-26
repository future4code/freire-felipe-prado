import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {goToCadastro, goToFeed} from "../Routes/Coordinator";
import {useForm} from "../Hooks/useForm"
import {BaseURL} from "../Constants/baseURL"
import axios from 'axios'


export const Login = () => {

    const navigate = useNavigate()

    const {form, onChange, clearFields} = useForm({
        email: "",
        password: ""
    })

    const fazerLogin = () => {
        axios.post(`${BaseURL}/users/login`, form)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            goToFeed(navigate)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }
    

    return(
        <div>
            <p>pagina Login</p>
            <input name={"email"} value={form.email} onChange={onChange} required placeholder="Email"/>
            <input name={"password"} value={form.password} onChange={onChange} required placeholder="Senha"/>
            <button onClick={() => fazerLogin()}>Entrar</button>
            <button onClick={() => goToCadastro(navigate)}>Cadastrar</button>
        </div>
    )
}