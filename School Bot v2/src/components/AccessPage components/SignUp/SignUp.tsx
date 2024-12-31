import React, { FormEvent, useState } from "react"
import LeftBanner from "../LeftBanner/LeftBanner"
import Services from "../Services/Services"
import ArrowButton from '../../ArrowButton/ArrowButton'

/*
interface dataForm {
  email?: string,
  nome: string,
  cognome: string,
  classe: 5 | 4 | 3 | 2 | 1 | undefined,
  scuola: string,
  indirizzo: string
}
  */

interface componentProps{
  numberLevel: 1 | 2 | 3
}


const SignUp: React.FC = () => {
  const [signUpLevel,setSignUpLevel]= useState <1 | 2 | 3>(2)
  const [emailUse, setEmailUse] = useState<boolean>(false)
  /*
  const [formData, setFormData] = useState<dataForm>({
    email: "",
    nome: "",
    cognome: "",
    classe: undefined,
    scuola: "",
    indirizzo: ""

  })

  funzione per impostare il valore negli input quando viene cambiato
  onChange={(e) => {setFormData((prevState => ({
                  ...prevState,
                  email: e.target.value
                })))}}

  
  */

  const verifyData = (data: FormData) => {
    const regex = /^[A-Za-z]*$/;

    /*
    controlli sui field di inserimento, sui selecet, controllare solo che 
    non siano uguali al valore di default e per gli input applicare la regex con 
    il .test(), metodo delle stringhe, aspettare di vedere la stilizzazione, dei 
    componenti con bootstrap
    */


    


    return true
  }

  
  // problemi con la presa degli elementi del form, partendo dall'evento, intercettato con FormEvent
  // non riuscendo ad accedere al form, non posso applicarlo per costruire il formData, e dunque non
  // posso recuperare i dati da esso

  const handleData = (e: FormEvent) => {
    e.preventDefault();
    const form= e;
    const formData= new FormData(form);

    console.log(formData)

    if(verifyData(formData)){
      return true

      
    }else{
      return false
      
    }

  }
  
  const SignUpPart: React.FC<componentProps> = (componentProps) => {
    if(componentProps.numberLevel === 1){
      return(
        <div className="first level">
          <button className="button email" onClick={() => {setEmailUse(true)}}>
            Email
          </button>
          <div className="services choose">
            <Services />
          </div>
        </div>
      )
    }else if(componentProps.numberLevel === 2){
      // capire come inserire le diverse opzioni di scuola e indirizzo in maniera efficiente
      // all'interno delle option nei select
      return (
        <div className="second level">
          <form onSubmit={handleData}>
            {emailUse && 
            <>
              <label> Inserisci la tua email</label>
              <input type="email" required name='email'/> 
            </>
            }
            
            <label> Inserisci Nome </label>
            <input type="text" required name='nome'
             
            />
                      
            <label> Inserisci Cognome </label>
            <input type="text" required name='cognome' 
             
            />

            <label> Inserisci la tua classe </label>
            <select name='classe' id='classe' defaultValue={"Classe"}>
              <option></option>
            </select>

            <label> Inserisci la tua scuola </label>
            <select name='scuola' id='scuola' defaultValue={"Scuola"}>
              <option></option>
            </select>

            <label> Inserisci il tuo indirizzo di studio </label>
            <select name='indirizzo' id='indirizzo' defaultValue={"indirizzo"}>
              <option></option>
            </select>
                       
            <ArrowButton type='submit'/>
                    
          </form>
        </div>
      )
    }else if(componentProps.numberLevel === 3){
      return (
        <div className="third level">
        qua all'interno va inserito sign up page (3)
      </div>
      )      
    }

    return(
      <div> Problemi con il ciclo if o la verifica e stampa del JSX</div>
    )

  }


  return (
    <div className="main module">
      <div className="leftBanner">
        <LeftBanner numberLevel={signUpLevel} />
         
      </div>
      <div className="SignUp module">
        <SignUpPart numberLevel={signUpLevel}/>
      </div>
      <div className='button next level'>
        <ArrowButton  /> // devo capire ancora come generalizzare con le generics la funzione functionToActive()
      </div>
    </div>
  )
}

export default SignUp