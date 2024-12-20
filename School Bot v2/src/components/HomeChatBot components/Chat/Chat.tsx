import { useEffect, useState } from "react";
import Welcome from "../Welcome/Welcome";

export const Chat = ({currentChat, changeInitialUse, saveMessage}:any) => {
  
  const [predefineTasks, setPredefineTasks] = useState(0)
  const [message, setMessage] = useState("")
  const [initialUse, setInitialUse] = useState(currentChat.initialUse)


   useEffect (() => {
    changeInitialUse(initialUse)
   }, [initialUse])
   
  const sendMessageToModel = () =>{
    /*
    Questa potrebbe essere chiamata direttamente lato server con la gestione del modello e dell' elaborazione
    sull'applicativo che poi invia la risposta tramite api al client. DA CAPIRE
    */
  }

  const usePredefineTasks = (task : number) => {

  }

  return (
    <div className="chatbot">
      <div className="chat">
        {!initialUse ? (
          <div className="initialComponent">
            <div className="welcome">
              <Welcome /> 
            </div>
            <div className= "initialField">
              <form>
                <input type="text" placeholder=" Chiedi a School Bot"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="initialButton">
                  // inserire qua Arrow Button
                  <button onClick= {() => {setInitialUse(true), saveMessage(message), setMessage("")}}> Invia </button>
                </div>
              </form>
            </div>
            <div className="tasksPredefined"> 
              <div className="firstTasks">
                <button onClick = {() => setInitialUse(true)}> First task </button>
              </div>
              <div className="secondTasks">
                <button onClick = {() => setInitialUse(true)}> Second task </button>
              </div>
              <div className="thridTasks">
                <button onClick = {() => setInitialUse(true)}> Thrid task </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="currentComponent">
            <div className="messages">
              {currentChat.messageHistory.map((message:any) => (
                // problemi con il rendering della message History, problemi anche con il rendering di chatList
                  <section key= {message.id} className="messageBox">
                    <h6>{message.role}</h6>
                    <p>{message.content}</p>
                  </section>
              ))}
            </div>
            <div className="currentField">
              <form>
                <input type="text" placeholder=" Chiedi a School Bot"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="currentButton">
                  <button onClick={() => {saveMessage(message)}} > Invia </button> 
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default Chat;
