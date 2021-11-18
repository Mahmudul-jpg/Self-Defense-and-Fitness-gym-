import React from 'react';
import { useNavigate } from 'react-router-dom'
const Welcome = () => {
    const navigate = useNavigate()
    function goBack() {
        navigate('/');
    }
    return (
        <div>
            <div>
                <h1>Welcome Now you are member of our team</h1>

            </div>


            <button style={{ background: 'blue', color: 'whitesmoke', width: '100px', height: '50px' }} onClick={goBack}>Go Back</button>
        </div>

    )
}

export default Welcome
