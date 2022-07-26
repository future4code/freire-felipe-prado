import React from 'react'
import {useNavigate} from 'react-router-dom';
import { goToPost } from "../Routes/Coordinator";

export const Feed = () => {

    const navigate = useNavigate

    return (
        <div>
            
            <button onClick={() => goToPost(navigate)}>Postar</button>
        </div>
    )
}