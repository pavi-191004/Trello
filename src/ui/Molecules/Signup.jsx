import React from 'react'
import ButtonStyle from '../Atom/ButtonStyle'
import Input from '../Atom/Input'


function Signup(){
  return (
   <>
   <div className='Blue-box'>
  
 <div className='text-4'>Sign up and get started with Trello today. A world of productive teamwork awaits!</div>
   <div className='container-1'>
   <div className='Input-feild '>
    <Input/>
   </div>
   <div className='button-style'>
   <ButtonStyle>Sign up</ButtonStyle>
   </div>
   </div>
   </div>
   </>
  )
}
export default Signup
