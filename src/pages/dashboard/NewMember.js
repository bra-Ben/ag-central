import Input from '../../components/input'
import React, {  useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from  '../../components/button'
import './NewMember.css'



function NewMember() {

    return (

        <div className='newMember-main'>
            
            <div className='newMemberContainer'>

                <div className='newMemberBanner'>New Member Registration</div>

                    <form className='newMemberForm'>
                    
                        <div className='regformheader'> 
                            <h2>Enter details to register member</h2>
                        </div>

                            <div className='mainregformdiv'>

                                <div className='regform-left'>
                                   <div className='leftreginput inputstyling'>
                                        <label className='reg-label'>Surname:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                        <label className='reg-label'>First Name:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                        <label className='reg-label'>Middle/Other Name:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                        <label className='reg-label'>Date of Birth:</label>
                                        <Input classname='newreginput' label='' type='date' placeholder='' />
                                    </div>
                                    <div className='regGenderdiv'>
                                        <div className='selectiondiv'>
                                            <Input label='' classname='' type='checkbox' placeholder='' />
                                            <h3>Male</h3>
                                        </div>
                                        <div className='selectiondiv'>
                                            <Input label='' classname='' type='checkbox' placeholder='' />
                                            <h3>Female</h3>
                                        </div>
                                    </div>
                                    <div className='leftreginput inputstyling'>
                                        <label className='reg-label'>Mobile No:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                        <label className='reg-label'>Hometown:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                    </div>
                                </div>

                                <div className='regverticalrule'></div>

                                <div className='regform-right'>
                                    <div className='rightreginput inputstyling'>
                                        <label className='reg-label'>District:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                        <label className='reg-label'>Region:</label>
                                        <Input classname='newreginput' label='' type='select' placeholder='' />
                                    </div>

                                    <div className='regMaritalStatusdiv'>
                                        <div className='selectiondiv'>
                                            <Input label='' classname='' type='checkbox' placeholder='' />
                                            <h3>Single</h3>
                                        </div>
                                        <div className='selectiondiv'>
                                            <Input label='' classname='' type='checkbox' placeholder='' />
                                            <h3>Married</h3>
                                        </div>
                                        <div className='selectiondiv'>
                                            <Input label='' classname='' type='checkbox' placeholder='' />
                                            <h3>Divorced</h3>
                                        </div>
                                    </div>

                                    <div className='rightreginput'>
                                        <label className='reg-label'>Occupation:</label>
                                        <Input classname='newreginput' label='' type='text' placeholder='' />
                                    </div>

                                    <div className='regDepartmentdiv'>
                                        <h3>Wish department you wish to join (Select all that applies)</h3>
                                        <div className='bottomdepartmentdiv'>
                                            <div className='right-input-row'>

                                                <div className='selectiondiv'>
                                                    <Input label="" classname='' type='checkbox' placeholder='' />
                                                    <h3>Men's Ministry</h3>
                                                </div>
                                                <div className='selectiondiv'>
                                                    <Input label="" classname='' type='checkbox' placeholder='' />
                                                    <h3>Women's Ministry</h3>

                                                </div>
                                                <div className='selectiondiv'>
                                                    <Input label="" classname='' type='checkbox' placeholder='' />
                                                    <h3>Youth Ministry</h3>
                                                    
                                                </div>
 
                                                <div className='selectiondiv'>
                                                    <Input label="" classname='' type='checkbox' placeholder='' />
                                                    <h3>Music Ministry</h3>    
                                                </div>
                                            </div>

                                            <div className='right-input-row'>
 
                                                <div className='selectiondiv'>
                                                    <Input label='' classname='' type='checkbox' placeholder='' />
                                                    <h3>Ushering</h3>  
                                                </div>
 
                                                <div className='selectiondiv'>
                                                    <Input label="" classname='' type='checkbox' placeholder='' />
                                                    <h3>Children's Ministry</h3>
                                                </div>
 
                                                <div className='selectiondiv'>
                                                    <Input label='' classname='' type='checkbox' placeholder='' />
                                                    <h3>Music Ministry</h3>
                                                </div>
 
                                                <div className='selectiondiv'>
                                                    <Input label='' classname='' type='checkbox' placeholder='' />
                                                    <h3>Ministry</h3>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        <div className='regbuttondiv'>
                            <Button classname='reg-button' text='Register'/>
                        </div>

                    </form>

                {/* <div className='regform-container'>     

                </div> */}


            </div>

        </div>
    )
}

export default NewMember
