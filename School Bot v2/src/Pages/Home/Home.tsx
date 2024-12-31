import Sidebar from "../../components/HomeChatBot components/Sidebar/Sidebar.tsx"
import Chat from "../../components/HomeChatBot components/Chat/Chat.tsx"
import { useState } from "react"
import { Link } from 'react-router-dom'
import { HiMiniUser } from "react-icons/hi2";

const Home: React.FC = () => {
    /*
        QUESTA PAGINA è HOME, quella che si aprirà appena si entra sull'app
        in questa pagina ci saranno due componenti:
        - CHAT component
        - SIDEBAR component

        CHAT component:
        questo componente sarà la parte di interazione(chat) user e bot,
        ogni chat è salvata come un oggetto, i dati di questo oggetto e la sua dichiarazione
        sono dentro chatInitialazed, questi sono i dati che ogni nuova chat quando viene creata
        deve avere. Al componente viene passato dunque l'oggetto corrispondente, identificato con un ID
        e salvato nel localstorage alla chiave "chatList", che aveà l'array con tutte le chat salvate

        SIDEBAR component:
        questo componente invece sarà la barra laterale a sinistra che mostrerà le chat salvate
        le chat salvate saranno dei tag html cliccabili, al onclick() verrà chiamata la funzione
        selectChat() a cui sarà passato come parametro l'ID della chat, selectChat() cercherà nella chatList
        di Localstorage la chat e la setterà con lo state currentChat, come la chatCurrent, che sarà passato al component chat.
        La sidebar ha anche il bottone per aggiugere nuove chat, all'onClick() deve essere chiamata la funzione newChat(), 
        dichiarata però nella Home page, che crei un nuovo oggetto, sulla base di initializedChat, incrementando solo l'ID, di 1
        e poi aggiungendo l'oggetto alla chatList e settandolo come currentChat

        ATTENZIONE alla sidebar va passato la funzione setCurrentChat associata allo state per poter
        impostare lo stato ma questa funzione e lo stato associato vanno dichiarate e gestite in Home page.
    */

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

    const[currentChat,setCurrentChat] = useState<chat>({
      id: 0,
      title: "Chat n: 0",
      initialUse: false,
      messageHistory: [{
        id: 0,
        role: "bot",
        content: "Hi, I'm School Bot, how can I help you?"
      }]
    })
    const[chatList, setChatList] = useState<chat[]>([currentChat])

    const newChat = () =>{
      const idNewChat:number = chatList.length
      const newChat: chat= {
        id: idNewChat,
        title: "Chat n:" + idNewChat,
        initialUse: false,
        messageHistory: [{
          id: 0,
          role: "bot",
          content: "Hi, I'm School Bot, How can I help you?"
        }]
      }
      setChatList([...chatList,newChat])
      setCurrentChat(newChat)
    }

    const setInitialUse = (valore: boolean) => {
      setCurrentChat(prevChat => ({
        ...prevChat,
        initialUse: valore

      }))
    }

    const saveMessageHistory = (message : string) =>{
      // qua ci arriva ma il salvataggio dei nuovi messaggi ancora non funziona
      const idNewMessage : number = currentChat.messageHistory.length; 
      const newMessage : message = {
        id: idNewMessage,
        role: "user",
        content: message
      }
      // cosa che non ha senso perché non è questo il problema, sta nella gestione degli stati e dei componenti
      /*
      const indexChat: number = currentChat.id;
      let chatToModify: chat | undefined = chatList.find(chat => chat.id === indexChat);
      chatToModify = {
        ...currentChat,
        messageHistory: [...currentChat.messageHistory, newMessage]
      }
      setChatList(prevChatList => ({
        ...prevChatList
        .splice(indexChat,1,chatToModify)

      }))
      */
      setCurrentChat(prevChat => ({
        ...prevChat,
        messageHistory:[...prevChat.messageHistory,newMessage]
      }))
    }

    const changeCurrentChat = (chatSelected: chat) => {
      setCurrentChat(chatSelected);
    }

  return (
    <div className="Home">
        <div className="sidebar">
        <Sidebar  
          chatList={chatList}
          newChat={newChat}
          setCurrentChat={changeCurrentChat}
        />
       
      </div>
      <div className="accountLogo">
        <Link to={'/AccessPage'}>
          <button>
            <HiMiniUser />
          </button>
        </Link>

      </div>
      <div className="chat">
        <Chat
          currentChat={currentChat}
          changeInitialUse = {setInitialUse}
          saveMessage = {saveMessageHistory}
        />
      </div>
    </div>
  )
}

export default Home