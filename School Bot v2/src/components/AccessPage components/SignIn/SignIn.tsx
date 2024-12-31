import Services from '../Services/Services'
import ArrowButton from '../../ArrowButton/ArrowButton'
import RightBanner from '../RightBanner/RightBanner'
import InputField from '../../InputField/InputField'
import React from 'react'

interface signInProps {
    functionToSignUp: (value: boolean) => void
}

const SignIn: React.FC<signInProps> = (signInProps) => {
  return (
    <>
        <div className='main-module'>
            <div className="signIn title">
                    Sign in, titolo fatto meglio qua
            </div>
            <div className="email field">
                <div className="information">
                    Enter your email for receive a passcode on the email
                </div>
            </div>
            <div className="field">
                <form>
                    <InputField />
                    <ArrowButton />
                </form>
            </div>
            <div className="service field">
                <Services />
            </div>
        </div>
        <div className="right banner">
            <RightBanner />
                inserire qua il componente di destra che mostra delle demo, o delle icone con le funzionalita
                spiegate in maniera carina
        </div>
        <div className="signUp button">
            <div className="information"> <h5>Need an account</h5> </div>
                <div className="button">
                    <button onClick={() => {signInProps.functionToSignUp(true)}}> SignUp </button>
                </div>
        </div>  
    </>
    
  )
}

export default SignIn