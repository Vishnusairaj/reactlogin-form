import App from './App.css'

import React from 'react'

const LoginForm = () => {
  return (
    
        <div className='form'>
            <form>
                <dl>
                    <dt>Login</dt>
                    <input type="text" placeholder='Username'/>
                    <dt>password</dt>
                    <input type="password" placeholder='password'/>
                    <dt>Email</dt>
                    <input type="email" placeholder='emailID'/>

                    
                   
                   
                </dl>
            </form>
        </div>
     
   
  )
}

export default LoginForm
