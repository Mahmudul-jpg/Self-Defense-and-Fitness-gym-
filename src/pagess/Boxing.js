import React from 'react'
import boxing from '../images/boxing.png'
import './Page.scss'
import { useNavigate } from 'react-router';
const Boxing = () => {
    const navigate = useNavigate()
    const SignUp = () => {
        navigate('/form')
    }
    return (
        <div>
            <h1>Pictures of members practicing</h1>
            <div>
                <img src={boxing} alt='' />
                <div className="text">Boxing is a combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring. </div>
            </div>
            <button type="submit" value='' className="signUp" onClick={SignUp}> SIGN UP </button>
        </div>
    )
}

export default Boxing
