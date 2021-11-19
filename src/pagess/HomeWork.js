import React from 'react'
import hw1 from '../images/homeWork1.jpg'
import hw2 from '../images/homeworkout_3.jpg'
import './Page.scss'
const HomeWork = () => {
    return (
        <div>
            <div className="Image"><img src={hw1} alt='homeworkout' className="Image1" />
                <img src={hw2} alt='homeworkout' className="Image2" /></div>
            <br />
            <div className='text'>You can practice workout from our instructor via online</div>
        </div>
    )
}
export default HomeWork