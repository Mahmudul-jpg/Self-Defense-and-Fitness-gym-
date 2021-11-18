import React from 'react';
import './HomePage.scss'
import Swipe from '../../components/swipe/Swipe'

const HomePage = () => {
    return (
        <div className="home">
            <h1 className="header">Join Us to stay fit and stay safe</h1>
            <Swipe />
        </div>
    )
}

export default HomePage
