import React from 'react'
import H1tag from '../../components/h1tag'
import PhoneImage from '../../images/phone.png'
import './Features.css'


function Features() {
    return (
        <div  className='features-main'>

            <div className='content-container'>

                <div className='top'>
                    <H1tag classname='fea-h1' text='Features Of Tablet Church Management App'/>
                </div>
                <div className='bottom'>

                    <div className='bottom-left'>
                        <img src={PhoneImage} className='phone'/>
                    </div>
                    <div className='bottom-right'>

                        <div className='left-list listcontainer'>

                            <div className='feature-item'>

                                <div className='icon-div'>image div</div>

                                <div className='text-div'>

                                    <h2>ABSOLUTELY FREE</h2>

                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                    
                                </div>
                            </div>
                            <div className='feature-item'>

                                <div className='icon-div'>image div</div>

                                <div className='text-div'>
                                    <h2>WED-BASED APPLICATION</h2>
                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                </div>
                            </div> <div className='feature-item'>

                                <div className='icon-div'>image div</div>

                                <div className='text-div'>
                                    <h2>FAST, SECURE & EASY</h2>
                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className='right-list listcontainer'>

                            <div className='feature-item'>

                                <div className='icon-div'>image div</div>

                                <div className='text-div'>
                                    <h2>REGULAR UPDATES & SUPPORT</h2>
                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                </div>
                            </div>
                            
                            <div className='feature-item'>

                                <div className='icon-div'>image div</div>

                                <div className='text-div'>
                                    <h2>ACCESSIBILITY</h2>
                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                </div>
                            </div> 
                            
                            <div className='feature-item'>
                                <div className='icon-div'>image div</div>
                                <div className='text-div'>
                                    <h2>Header</h2>
                                    <p>Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Eaque
                                    aliquid eligendi culpa cumque
                                    expedita iusto!
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div >

            </div>
            
        </div>
    )
}

export default Features







