import React from 'react'
import SidebarOption from './SidebarOption'
import './Sidebar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';




const Sidebar = () => {

    return (

        <div className='dash-sidebar'>

            <SidebarOption Icon={DashboardIcon} text='Dashboard'/>
            <SidebarOption Icon={PersonAddIcon} text='New Member'/>
            <SidebarOption Icon={CreateIcon} text='Attendance'/>
            <SidebarOption Icon={PeopleIcon} text='Membership'/>
            <SidebarOption Icon={AccountBalanceIcon} text='Accounts'/>
            <SidebarOption Icon={MessageIcon} text='Messaging'/>
            <SidebarOption Icon={SettingsIcon} text='Settings'/>
        
        </div>
    )
}

export default Sidebar
