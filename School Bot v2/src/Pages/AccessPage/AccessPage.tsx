import { useState } from "react"
import RightBanner from "../../components/AccessPage components/RightBanner/RightBanner"
import SignUp from "../../components/AccessPage components/SignUp/SignUp"
import EmailField from "../../components/AccessPage components/EmailType/EmailField/EmailField"
import Services from "../../components/AccessPage components/EmailType/Services/Services"
import ArrowButton from "../../components/ArrowButton/ArrowButton"

const AccessPage = () => {

    const [signUp,setSignUp] = useState(false)

  return (
    <div>
        {!signUp ?(
            <div className="AccessModules">
                <div className="signIn module">
                    <div className="signIn title">
                        Sign in, titolo fatto meglio qua
                    </div>
                    <div className="email field">
                        <div className="information">
                            Enter your email for receive a passcode on the email
                        </div>
                        <div className="field">
                            <form>
                                <EmailField />
                                <ArrowButton />
                            </form>
                        </div>
                    </div>
                    <div className="service field">
                        <Services />
                    </div>
                    <div className="signUp button">
                        <ArrowButton
                        functionToActive = {setSignUp(true)}
                        />
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
                        <button> SignUp </button>
                    </div>
                </div>
            </div>
        ): (
            <div className="signUp module">
                <div className="sign up component">
                    <SignUp />
                    qua va inserito il componente sign up che come per il left banner
                    gli viene passato signUp level e cambia in base al 1, 2,3 
                    facendo inserire diversi dati e cose
                </div>
            </div>
        )}
    </div>
  )
}

export default AccessPage;