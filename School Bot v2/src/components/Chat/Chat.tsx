import { useState } from "react";
import Welcome from "../Welcome/Welcome";

export const Chat = (currentChat: any) => {
  
  const [predefineTasks, setPredefineTasks] = useState(0)
  const [message, setMessage] = useState("")



  const saveMessage = (message : string) => {
    /*
    la funzione deve prendere in input il testo del messaggio, prendere la chat corrente e
    aggiungere il messaggio alla sua cronologia
    */

  }

  const sendMessageToModel = () =>{
    /*
    la funzione quando chiamata deve inviare la messageHistory della current chat
    */
  }

  const usePredefineTasks = (task : number) => {

  }

  //Bisogna anche implementare il salvatggio dei dati della current chat quando vengono cambiati, 
  //penso si possa fare con lo useEffect()

  return (
    <div className="chatbot">
      <div className="chat">
        {!currentChat.initialUse ? (
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
                  <button onClick={() => {currentChat.initialUse = true; saveMessage(message)}} > Invia </button>
                </div>
              </form>
            </div>
            <div className="tasksPredefined"> 
              <div className="firstTaks">
                <button onClick = {() => {setPredefineTasks(1); usePredefineTasks(predefineTasks); }}> First task </button>
              </div>
              <div className="SecondoTaks">
                <button onClick = {() => {setPredefineTasks(2); usePredefineTasks(predefineTasks); currentChat.initialUse = true}}> Second task </button>
              </div>
              <div className="firstTaks">
                <button onClick = {() => {setPredefineTasks(3); usePredefineTasks(predefineTasks); currentChat.initialUse = true}}> Thrid task </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="currentComponent">
            <div className="messages">
              {currentChat.messageHistory.map((message:any) => {
                  <section className="messageBox">
                    <h6>{message.role}</h6>
                    <p>{message.content}</p>
                  </section>
              })}

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
