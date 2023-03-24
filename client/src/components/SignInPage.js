
import React, { useState } from 'react'
import { UserContext } from "../context/user";
import { useContext } from "react";
import ErrorMsgList from './ErrorMsgList'
import SignIn from './SignIn';
import SignUpForm from './SignUpForm';

function SignInPage(){
    
    const [user, setUser] = useContext(UserContext)
    const [showLogin, setShowLogin] = useState(true);
    const [errors, setErrors] = useState([])

    return (
    <>

<h2 class="ui center aligned white icon header">
Already a Member?
</h2>

        <div>
            {showLogin ? <>
                <SignIn  setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Sign up</button>
            </>
            : <>
                <SignUpForm setErrors={setErrors}/> 
                <button class="ui button" onClick={() => setShowLogin(!showLogin)}>Show Log in</button>
            </>
            }
            <ErrorMsgList errors={errors}/>
            </div>


    </>
    )
}

export default SignInPage;