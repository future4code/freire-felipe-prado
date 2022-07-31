import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { goToFeed } from "../../Routes/Coordinator";
import {useForm} from "../../Hooks/useForm"
import axios from 'axios'
import {BaseURL} from '../../Constants/baseURL'
import { CadastroStyle } from "./CadastroStyle";
import {TextField} from '@mui/material';
import {Button} from '@mui/material' 


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
            localStorage.setItem('token', response.data.token)
            goToFeed(navigate)
        })
        .catch((error) => {
            console.log(error.data)
        })
    }

    return(
        <CadastroStyle>
            <TextField id="outlined-basic" label="Nome do usuário" variant="outlined" 
            name={"username"} value={form.username} onChange={onChange} required />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" 
            name={"email"} value={form.email} onChange={onChange} required />
            <TextField id="outlined-basic" label="Senha" variant="outlined" 
            name={"password"} value={form.password} onChange={onChange} required  />
            <p>Cadastro</p>
            <Button variant="contained" onClick={() => Cadastrar()}>Cadastrar</Button>            
        </CadastroStyle>
    )

}