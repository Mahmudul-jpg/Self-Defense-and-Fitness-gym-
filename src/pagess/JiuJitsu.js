import React from 'react'
import jitsu from '../images/jiu.png'
import './Page.scss'
import { useNavigate } from 'react-router';
const JiuJitsu = () => {
    const navigate = useNavigate()
    const SignUp = () => {
        navigate('/form')
    }
    return (
        <div>
            <h1>Pictures of members practicing</h1>
            <div>
                <img src={jitsu} alt='' />
                <div className="text">
                    Jiu-Jitsu (BJJ; /dʒuːˈdʒɪtsuː/; Portuguese: [ˈʒiw ˈʒitsu], [ˈʒu ˈʒitsu], jiu-jitsu brasileiro) is a martial art and combat sport based on ground fighting (ne-waza) and submission holds. It focuses on the skill of taking an opponent to the ground, controlling one's opponent, gaining a dominant position, and using a number of techniques to force them into submission via joint locks or chokeholds.
                </div>
            </div>
            <button type="submit" value='' className="signUp" onClick={SignUp}> SIGN UP </button>
        </div>
    )
}

export default JiuJitsu
