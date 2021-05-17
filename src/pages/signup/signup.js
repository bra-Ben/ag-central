import './signup.css'
import H1tag from '../../components/h1tag'
import Paragraph from '../../components/paragraph'
import Input from '../../components/input'
import Button from '../../components/button'


function Signup(){

    return (

        <div className='signupmain'>

            <div className='left'>

                <div className='lefttop'>
                    <H1tag classname='h1' text='Tablet' />
                    <Paragraph text='Securing the Sheep digitally!' />
                </div>

                <div className='leftmid'>
                    <Paragraph text='Register to get your 
                    Church Online.' />
                </div>

                <div className="leftbottom">
                    <Paragraph text='It is 100% free!' />
                </div>

            </div>

            <div className='right'>

                {/* <div className='signformcontainer'> */}

                    <form className='mainform'>

                        <div className='heading'>

                            <H1tag text='Please fill in your details here'/>

                        </div>

                        <div className='inputsection'>
                            <div className='topgroup'>
                                <Input classname='inputsignup topinput' type='text' placeholder='Full Name'/>
                                <Input classname='inputsignup topinput' type='text' placeholder='Church Name' />
                            </div>

                            <div className='midgroup'>
                                <div className='inputleft btngroup'>
                                    <Input classname='inputsignup' type='text' placeholder='Position' />
                                    <Input classname='inputsignup' type='text' placeholder='Username' />
                                    <Input classname='inputsignup' type='email' placeholder='E-mail' />
                                    <Input classname='inputsignup' type='text' placeholder='Mobile No' />
                                    <Input classname='inputsignup' type='text' placeholder='Mobile No 2' />
                                </div>

                                <div className='inputright btngroup'>
                                    <Input classname='inputsignup' type='text' placeholder='District' />
                                    <Input classname='inputsignup' type='text' placeholder='Region' />
                                    <Input classname='inputsignup' type='password' placeholder='Password' />
                                    <Input classname='inputsignup' type='password' placeholder='Confirm Password' />
                                   
                                    <Input For='terms' classname='inputsignup checkbox' type='checkbox'/>
                                    <span id='terms'>Accept our terms & conditions</span>

                                </div>    
                            </div>

                            <div className='btnstyle'>
                                <Button classname='button' text='Sign Up'/>
                            </div>
                        </div>

                        <div className='loginhere'>
                            <Paragraph text='Already have an account?'/>
                            <span> Login Here</span>
                        </div>
                    </form>

                {/* </div> */}

            </div>


        </div>
    )
}

export default Signup;















