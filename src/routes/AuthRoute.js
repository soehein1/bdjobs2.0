


import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm'
import SignInForm from '../components/SignInForm'
export default function AuthRoute() {
  var [isSignIn, setIsSignIn] = useState(false)
  
  
    return (
    <div>
        {isSignIn?<SignInForm/>:<SignUpForm/>}
        {isSignIn?<button onClick={()=>setIsSignIn(false)}>Sign Up</button>:<button onClick={()=>setIsSignIn(true)}>Sign In</button>}
    </div>
  )
}
