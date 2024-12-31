import SignUp from "../../components/AccessPage components/SignUp/SignUp"
import SignIn from '../../components/AccessPage components/SignIn/SignIn'
import React, {useState} from 'react'

const AccessPage = () => {

    const [signUp,setSignUp] = useState(false)

  return (
    <div>
        {!signUp ?(
            <div className="AccessModules">
                <div className="signIn module">
                    <SignIn functionToSignUp={setSignUp}/>
                </div>   
            </div>
        ): (
            <div className="signUp module">
                <div className="sign up component">
                    <SignUp />
                </div>
            </div>
        )}
    </div>
  )
}

export default AccessPage;