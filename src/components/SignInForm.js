import '../static/css/SignInForm.css'


import React from 'react'

export default function SignInForm() {
  return (
    <div >
      <form className='sign-in-form'>
        <div className='input' >
          <label>Email</label>
          <input className='input-box' type="text" />
        </div>
        <div className='input'>
          <label>Password</label>
          <input type="password" />
        </div>
        <button type='summit'>Summit</button>
      </form>

    </div>
  )
}
