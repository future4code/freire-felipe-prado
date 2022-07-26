import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {goToLogin} from '../Routes/Coordinator'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Body} from '../Components/Body'

const TripDetailsPage = () => {
    const [details, setDetails] = useState({
        candidates: [],
        approved: []
    })
    const {id} = useParams()   
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.token === undefined){
            goToLogin(navigate)
        }
    })
    
    const getDetails = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/felipe/trip/${id}`
        const headers = {
            headers: {
                auth: localStorage.getItem('token')
            }
        }
        axios.get(url, headers)
        .then((response) => {
            setDetails(response.data.trip)
            console.log(response.data.trip)
        })
        .catch((error) => {
            console.log(error.data)
        }) 
    }
    useEffect(() => {
        getDetails(id)
    },[])

    return (
        <div>
            <Header/>
            <Body>
            <p>Página Detalhes da Viagem</p>
            </Body>
            <Footer/>
        </div>
    )
}

export default TripDetailsPage