// import { Link } from 'react-router-dom'
import Navigation from './Navigation';
import Home from './Home'
import Features from './Features'
import Partners from '../landing/Partners'
import Footer from '../landing/Footer'
import Services from './Services';
import './Landing.css'


const Landing = () => {

    return (

        <div className='main'>
            
            <Navigation classname='navigation'/>           
            
            <Home />

            <Features />

            <Services />

            <Partners />

            <Footer />

        </div>
        
    )

}

export default Landing;

