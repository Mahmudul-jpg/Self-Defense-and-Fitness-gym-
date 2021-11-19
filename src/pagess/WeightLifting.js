import React from 'react'
import weight from '../images/weight.png'
import './Page.scss'
import { useNavigate } from 'react-router';
const WeightLifting = () => {
    const navigate = useNavigate()
    const SignUp = () => {
        navigate('/form')
    }
    return (
        <div>
            <h1>Pictures of members practicing</h1>
            <div>
                <img src={weight} alt='' />
            </div>
            <div className="text">Weightlifting is an athletic discipline which requires lifting of heavy weights in a progressive manner. It not only tests the physical prowess of an individual but also his/her rate of force generation, i.e., ballistic actions of lifting the weights in minimum amount of time.</div>
            <button type="submit" value='' className="signUp" onClick={SignUp}> SIGN UP </button>
        </div>
    )
}

export default WeightLifting
