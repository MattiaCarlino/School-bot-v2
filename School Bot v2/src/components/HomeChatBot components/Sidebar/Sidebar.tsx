import { Link } from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";

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

  interface sideBarProps {
    chatList: chat[],
    newChat: () => void,
    setCurrentChat: (newCurrentChat: chat) => void
  }

export const Sidebar: React.FC<sideBarProps> = ({chatList,newChat,setCurrentChat}) => {

  /* la selezione delle chat funziona ma c'è un problema ancora più generale dato
  dalla gestione degli state e dal salvataggio di ques'ultimi in Home.tsx, che subendo
  re-rendering quando i loro valori cambiano, fa perdere i dati quando si va a operare con essi
  */
  const handleChat = (idChat: number) =>{
    const chatSelected: chat | undefined = chatList.find(chat => chat.id == idChat);
    if(chatSelected !== undefined)
      setCurrentChat(chatSelected);
  }

  // Da vedere il rendering della chatlist e verificare che la selezione della chat con setCurrentChat funzioni
  return (
    <div className="sidebar">
        <div className="logoSchoolBot">
          
        </div>
        <div className="expandButton">
            il bottoncino per rendere fissa o adaptive
            la sidebar
        </div>
        <div className="chatList">
          <div className="chatListTtitle">
            Chatlist : 
          </div>
          <div className="buttonAddChat">
            <button onClick={() => {newChat()}}> Nuova chat </button>
          </div>
          <div className="chats">
            {chatList.map((chat :chat) => (
              <ChatBox
              index = {chat.id}
              title = {chat.title}
              useChat = {false}
              handleChat={handleChat}
              // da capire come integrare setNumberChat = {setNumberChat}
              />
            ))}
          </div>
        </div>
        <div className="chronology">
            <Link to = "/Chronology">
                <button> Lista completa chats </button>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar;
