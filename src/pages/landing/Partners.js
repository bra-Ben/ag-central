import React from 'react'
import MestLogo from '../../images/mest.png'
import WhizzyLogo from '../../images/whizzylogo.png'
import './Partners.css'


function Partners() {
    return (
        <div className='partners'>
            
            <div className='part-text'>
                <h1>Our Partners</h1>
            </div>
            <div className='patrule'></div>
            <div className='part-div'>
                <a href='https://meltwater.org/'  target='_blank'>
                    <img src={MestLogo}/>
                </a>
            </div>
            <div className='part-div'>
                <a href='https://whizzyacademy.org/' target='_blank'>
                    <img style={{height: '80%', width: '80%'}} src={WhizzyLogo}/>
                </a>
            </div>

        </div>
    )
}

export default Partners
