import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Input from '../../components/input'
import Button from '../../components/button';
import './login.css'

const MyLogin = () => {



    const history = useHistory()



    return (
        
        <div className='loginbackground'>

            <div className='formcontainer'>

                <div className='imagediv'>


                </div>
                
                <form className='form'>
                    
                    <h1 className='loginh1'>Welcome</h1>

                    <Input 
                        label='Username:' 
                        type='text' 
                        placeholder='E.g. Kofi123'
                        classname='inputstyle'
                    />
                    
                    <Input 
                     label='Password:' 
                     type='password' 
                     placeholder='yourmail@gmail.com'
                     classname='inputstyle'
                    />

                    <Button 
                        text='Log In'
                        classname='login-btn' 
                    
                    />

                </form>

            </div>

        </div>
    )

}

export default MyLogin;


