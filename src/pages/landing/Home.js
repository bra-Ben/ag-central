import React from 'react'
import H1tag from '../../components/h1tag'
import Paragraph from '../../components/paragraph'


import './Home.css'



function Home() {

    return (
        <div className='home-main'>
            
            {/* <img className='myimage' src={HomeImage} /> */}

            <div className='mycolor'> </div>

            <div className='textdiv'>

                <H1tag classname='header' text='Free Online Church Management Software'/>
                            
                <Paragraph
                    classname='paragraph'
                    text='Now you can manage, your Church 
                    regardeless of the size  with Tablet. 
                    It is 100% free with no limitations.'
                />
            </div>

        </div>

    )
}

export default Home;
