import React from 'react'
import kick from '../images/kickboxing.png'
import './Page.scss'
import { useNavigate } from 'react-router';
const KickBoxing = () => {
    const navigate = useNavigate()
    const SignUp = () => {
        navigate('/form')
    }
    return (
        <div>
            <h1>Pictures of members practicing</h1>
            <div>
                <img src={kick} alt='' />
                <div className="text">Kickboxing is a group of stand-up combat sports based on kicking and punching, historically developed from karate mixed with boxing. Kickboxing is practiced for self-defence, general fitness, or as a contact sport. </div>
            </div>
            <button type="submit" value='' className="signUp" onClick={SignUp}> SIGN UP </button>
        </div>
    )
}
export default KickBoxing