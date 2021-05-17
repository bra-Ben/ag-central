import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {

    return (

        <div className='footer'>
            
            <div className='sections sec1'>
            
                    <div className='txtdiv '>
                        <h1>Tablet</h1>
                    </div>
                    <div className='iconsdiv'>
                        <div className='social-icons facebook'>
                            <FacebookIcon className='icontag'/>
                        </div>
                        
                        <div className='social-icons twitter'>
                            <TwitterIcon className='icontag'/>
                        </div>

                        <div className='social-icons instagram'>
                            <InstagramIcon className='icontag'/>
                        </div>
                        
                        <div className='social-icons whatsapp'>
                            <WhatsAppIcon className='icontag'/>
                        </div>
                    </div>

            </div>
            <div className='vertical-rule'></div>

            <div className='sections sec2'>
                
                <div className='headerdiv'>
                    <h2>Resources</h2>
                </div>
                <div className='listdiv'>
                    <ul>
                        <li>
                            <a>About Us</a>
                        </li>
                        <li>
                            <a>Our Team</a>
                        </li>
                        <li>
                            <a>Careers</a>
                        </li>
                        <li>
                            <a>Blog</a>
                        </li>
                        <li>
                            <a>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='vertical-rule'></div>

            <div className='sections sec3'>

                <div className='headerdiv'>
                    <h2>Services/Features</h2>
                </div>
                    <div className='listdiv'>
                        <ul>
                            <li>
                                <a>Membership Management</a>
                            </li>
                            <li>
                                <a>Communication</a>
                            </li>
                            <li>
                                <a>Financial Management</a>
                            </li>
                            <li>
                                <a>Branch Management</a>
                            </li>
                            <li>
                                <a>Digital Payments</a>
                            </li>
                            <li>
                                <a>Attendance Tracker</a>
                            </li>
                        </ul>
                    </div>
            </div>

            <div className='vertical-rule'></div>

            <div className='sections sec4'>

                <div className='headerdiv'>
                     <h2>Contact Us</h2>
                </div>

                    <div className='listdiv onlysec4list'>
                        <div className='alltext address'>
                            <p>
                                Plot 47 Block C, 
                            </p>
                            <p>
                                Kokoso-Teakmu, Kumasi,
                            </p>
                            <p>
                                Ghana, West Africa.
                            </p>
                        </div>

                        <div className='alltext tel-numbers'>
                            <p>
                                +233 242 144081
                            </p>
                            <p>
                                +233 206 085547
                            </p>
                        </div>

                        <div className='alltext emaildiv'>
                            <p>bngdarko@gmail.com</p>
                        </div>

                    </div>

            </div>
        
        </div>
    )
}

export default Footer
