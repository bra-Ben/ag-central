import { Link, useHistory } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Atag from '../../components/anchortag';
import H1tag from   '../../components/h1tag';
import Input from '../../components/input'
import './Navigation.css'
import Button from   '../../components/button'


const Navigation = () => {

    let history = useHistory()

    const  toGoLogin= () => {
        history.push('../../pages/login/login')
    }

    const  toGoSignup= () => {
        history.push('../../pages/signup/signup')
    }

   return (

      <div className='navigation'>
          
        <H1tag classname='h1tag' text='Tablet' />    
           
        <div className='listdiv'>

            <Atag clasname='aTag' text='Home' />
            <Atag clasname='aTag' text='Features' />
            <Atag clasname='aTag' text='Why Us' />
            <Atag clasname='aTag' text='Services' />
            <Atag clasname='aTag' text='About Us' />

        </div>

        <div className='navdiv'>

            <Button 
            onClick={toGoLogin}
            classname=' navbutton btn1' text='Login'
            // onClick={() => history.push("/login", { from: "Login" })}
            />

            <Button onClick={toGoSignup} classname=' navbutton btn2' text='Sign Up'/>
        </div>

      </div>
   );
};

export default Navigation;
