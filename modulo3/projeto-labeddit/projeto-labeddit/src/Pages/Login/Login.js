import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {goToCadastro, goToFeed} from "../../Routes/Coordinator";
import {useForm} from "../../Hooks/useForm"
import {BaseURL} from "../../Constants/baseURL"
import axios from 'axios'
import {TextField} from '@mui/material';
import {Button} from '@mui/material'
import {Box} from "@mui/system";
import {LoginStyle} from "./LoginStyle"



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
        <LoginStyle>
        <Box display="flex" m="10px" flexDirection="column">
            <h1>LabEddit</h1>
            
            <TextField margin={"normal"} id="outlined-basic" label="Email" variant="outlined" 
             name={"email"} value={form.email} onChange={onChange} required />
            <TextField margin={"normal"} id="outlined-basic" label="Senha" variant="outlined" 
             name={"password"} value={form.password} onChange={onChange} required />
            
            <Button variant="contained" onClick={() => fazerLogin()}>Entrar</Button>
            <Button variant="contained" onClick={() => goToCadastro(navigate)}>Cadastrar</Button>    
        </Box>
        </LoginStyle>
    )
}