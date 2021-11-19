import React from 'react'
import wrestling from '../images/wrestling.png'
import './Page.scss'
import { useNavigate } from 'react-router';
const Wrestling = () => {
    const navigate = useNavigate()
    const SignUp = () => {
        navigate('/form')
    }
    return (
        <div>
            <h1>Pictures of members practicing</h1>
            <div>
                <img src={wrestling} alt='' />
            </div>
            <div className="text">Wrestling is a combat sport involving grappling-type techniques such as clinch fighting, throws and takedowns, joint locks, pins and other grappling holds. ... A wrestling bout is a physical competition, between two (occasionally more) competitors or sparring partners, who attempt to gain and maintain a superior position.</div>
            <button type="submit" value='' className="signUp" onClick={SignUp}> SIGN UP </button>
        </div>
    )
}

export default Wrestling