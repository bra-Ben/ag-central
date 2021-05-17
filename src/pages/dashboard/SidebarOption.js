import React from 'react'
import {Link} from 'react-router-dom'
import './SidebarOption.css'
// import Link from '@material-ui/core/Link';






function SidebarOption({href,text, Icon, active}) {

    return (

        <div className='dash_SidebarOption'>

            <Link className='option-link'>

                <Icon />

                <h2>{text}</h2>
            
            </Link>

        </div>
    )
}

export default SidebarOption
