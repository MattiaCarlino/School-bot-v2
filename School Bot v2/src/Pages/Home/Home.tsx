import Sidebar from "../../components/HomeChatBot components/Sidebar/Sidebar.tsx"
import Chat from "../../components/HomeChatBot components/Chat/Chat.tsx"
import { useState } from "react"

const Home = () => {
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

    const[currentChat,setCurrentChat] = useState({
      id: 0,
      title: "chat n: 0",
      initialUse: false,
      messageHistory: [{
        id: 0,
        role: "bot",
        content: "Hi, I'm School Bot, How can I help you?"
      }]
    })
    const[chatList, setChatList] = useState([currentChat])

    // lavorare sul salvataggio dei dati della chatList nel LocalStorage
    const saveChatLIst = () =>{
      localStorage.setItem("chatList",JSON.stringify(chatList))
    }

    const newChat = () =>{
      const idNewChat:number = currentChat.id +1
      let newChat = {
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
      saveChatLIst()
    }

    const setInitialUse = (valore: boolean) => {
      setCurrentChat(prevChat => ({
        ...prevChat,
        initialUse: valore

      }))
    }

    const saveMessageHistory = (message : string) =>{
      console.log("arrivato in saveMessageHisotry")
      // qua ci arriva ma il salvataggio dei nuovi messaggi ancora non funziona
      const newMessage = {
        id: currentChat.messageHistory.length,
        role: "user",
        content: message
      } 
      setCurrentChat(prevChat => ({
        ...prevChat,
        messageHistory:[...prevChat.messageHistory,newMessage]
      }))
      console.log(currentChat.messageHistory)
    }

  return (
    <div className="Home">
        <div className="sidebar">
        <Sidebar  
          chatList={chatList}
          newChat={newChat}
          setCurrentChat={setCurrentChat}
        />
       
      </div>
      <div className="accountLogo">
        qua per il logo dell'account in alto a destra
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