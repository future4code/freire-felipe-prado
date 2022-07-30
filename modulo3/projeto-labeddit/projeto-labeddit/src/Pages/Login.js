import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {goToCadastro, goToFeed} from "../Routes/Coordinator";
import {useForm} from "../Hooks/useForm"
import {BaseURL} from "../Constants/baseURL"
import axios from 'axios'
import {TextField} from '@mui/material';
import {Button} from '@mui/material' 



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

            <TextField id="outlined-basic" label="Email" variant="outlined" 
             name={"email"} value={form.email} onChange={onChange} required />
            <input name={"password"} value={form.password} onChange={onChange} required placeholder="Senha"/>
            
            <Button variant="contained" onClick={() => fazerLogin()}>Entrar</Button>
            <button onClick={() => goToCadastro(navigate)}>Cadastrar</button>
        </div>
    )
}