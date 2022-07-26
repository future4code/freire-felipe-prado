import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { goToFeed } from "../Routes/Coordinator";
import {useForm} from "../Hooks/useForm"
import axios from 'axios'
import {BaseURL} from '../Constants/baseURL'


export const Cadastro = () => {

    const navigate = useNavigate()
    
    const {form, onChange, clearFields} = useForm({
        username: "",
        email: "",
        password: ""
    })

    const Cadastrar = () => {
        axios.post(`${BaseURL}/users/signup`, form)
        .then((response) => {
            goToFeed(navigate)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    return(
        <div>
            <input name={"username"} value={form.username} onChange={onChange} required placeholder="Nome do usuário" />
            <input name={"email"} value={form.email} onChange={onChange} required placeholder="E-mail" />
            <input name={"password"} value={form.password} onChange={onChange} required placeholder="Senha" />
            <p>Cadastro</p>
            <button onClick={() => goToFeed(navigate)}>Cadastrar</button>            
        </div>
    )

}