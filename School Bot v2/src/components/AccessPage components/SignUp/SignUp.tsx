import { useState } from "react"
import LeftBanner from "../LeftBanner/LeftBanner"
import Services from "../EmailType/Services/Services"


const SignUp = () => {
  const [signUpLevel,setSignUpLevel] = useState()
  const [initialLevel, setInitialLevel] = useState(false)
  const [emailUse, setEmailUse] = useState(false)

  const dataForm = {
    email: "",
    name: "",
    surname: "",
    class: 0,
    school: "",
    address: ""
  }

  const[dataAccount, setDataAccount] = useState(dataForm)

  const verifyData = (data : any) => {
    const regex = /^[A-Za-z]*$/

    


  }


  return (
    <div className="main module">
      <div className="leftBanner">
      <LeftBanner />
        signUpLevel = {signUpLevel}
        Inserire qua il banner di sinistra per la visualizzazione dei livelli
        si passa uno state, 1,2,3 per cambiare le grafiche in base al livello,
        sara un componente esterno da importare
      </div>
      <div className="SignUp module">
        { !initialLevel ? (
          <div className="first level">
            <button className="button email" onClick={() => {setEmailUse(true)}}>
              Email
            </button>
            <div className="services choose">
            <Services />
            </div>
          </div>
          ) : (
            <div>
              {signUpLevel == 2 ?(
                <div className="second level">
                  <form>
                    {emailUse ? (
                      // qua andrà inserito il componente email Field una volta creato
                      <div className="email field">
                        <label> Inserisci la tua email</label>
                        <input type="email" required value={dataAccount.email}/>
                      </div> 
                    ): (
                      <div className="void field">
                        // qua andrà inserito un modo per settare la email dell'account come quella
                        del servizio ( Google, Apple, Github) con cui si è fatto l'accesso o si può fare nella funzione
                        verifyData()
                      </div>
                    )}
                    <div className="personal data field">
                      <div className="name">
                        <label> Inserisci Nome </label>
                        <input type="text" required value={dataAccount.name}/>
                      </div>
                      <div className="surname">
                        <label> Inserisci Cognome </label>
                        <input type="text" required value={dataAccount.surname}/>
                      </div>
                      <div className="school information">
                        <div className="class select">
                          <label> Inserisci la tua classe </label>
                          <select>
                            <option value={dataAccount.class}></option>
                          </select>
                          
                        </div>
                        <div className="school select">
                          <label> Inserisci la tua scuola </label>
                          <select >
                            <option value={dataAccount.school}></option>
                          </select>

                        </div>
                        <div className="address select">
                          <label> Inserisci il tuo indirizzo di studi </label>
                          <select>
                            <option value={dataAccount.address}></option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="save button">
                      // anche qua andrà inserito il componente ArrowButton al posto del button normale
                      <button onClick={() => {verifyData(dataAccount)}}> Freccia button </button>
                    </div>
                  </form>
                </div>
              ): (
                <div className="third level">
                  qua all'interno va inserito sign up page (3)
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  )
}

export default SignUp