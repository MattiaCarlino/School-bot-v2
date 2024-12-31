import React, { useEffect, useState } from "react";
import Welcome from "../Welcome/Welcome";
import ArrowButton from '../../ArrowButton/ArrowButton';
import RenderingChatMessage from '../RenderingChatMessage/RenderingChatMessage';

interface message {
  id: number,
  role: string,
  content: string
}

interface chat {
  id: number,
  title: string,
  initialUse: boolean,
  messageHistory:message[]
}

interface chatProps {
  currentChat: chat
  changeInitialUse: (valore: boolean) => void,
  saveMessage: (messaggio: string) => void
}

export const Chat: React.FC<chatProps> = ({changeInitialUse, saveMessage,currentChat}) => {
  
  const [predefineTasks, setPredefineTasks] = useState<number>(0)
  const [message, setMessage] = useState<string>("")
  const [initialUse, setInitialUse] = useState<boolean>(currentChat.initialUse)

   useEffect (() => {
    changeInitialUse(initialUse)
   }, [initialUse])

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!initialUse)
      setInitialUse(true);
    saveMessage(message);
    setMessage("");
   }
   
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
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder=" Chiedi a School Bot"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="initialButton">
                  <ArrowButton type='submit'/>
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
              <RenderingChatMessage 
                messageHistory={currentChat.messageHistory}
              />
            </div>
            <div className="currentField">
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder=" Chiedi a School Bot"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
                <div className="currentButton">
                <ArrowButton type='submit'/>
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
