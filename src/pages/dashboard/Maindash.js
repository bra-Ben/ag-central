import React from 'react'
import Sidebar from './Sidebar'
import Dashlanding from './Dashlanding'
import './Maindash.css'
import NewMember from './NewMember'



function Maindash() {



  
    return (

        <div id='maindash' className='maindash'>

          <div className='blue-bar'>


          </div>

          <div className='dashbottom'>
            
            <Sidebar className='mainside'/>

            <div className='bottom-right'>

              {/* <Dashlanding className='dashlanding-toggle'/> */}

              <NewMember className='memberRegistration'/>

            </div>

          </div>

        </div>
    )
}

export default Maindash
