import Sidebar from "../../components/Sidebar/Sidebar.tsx"
import Chat from "../../components/Chat/Chat.tsx"
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

    const chatInitialized = {
      id: 1,
      title: "",
      initialUse: false,
      messaggeHistory: [{
        id: 0,
        role: "bot",
        content: "Hi, I'm School Bot, How can I help you?"
      }]

        /*
        qua va definita la chat inizializzata ovvero i dati che ogni nuova chat
        deve avere quando viene creata e dunque i dati che anche quando la pagina home si apre deve 
        avere
        */
    }

    const[currentChat,setCurrentChat] = useState(chatInitialized)
    const[chatList, setChatList] = useState([currentChat])

    const saveChatLIst = () =>{
      localStorage.setItem("chatList",JSON.stringify(saveChatLIst))
    }

    const newChat = () =>{
      let newChat = chatInitialized
      newChat.id = chatList.length+1
      setChatList([...chatList,newChat])
      setCurrentChat(newChat)
      saveChatLIst()
    }

  return (
    <div className="Home">
        <div className="sidebar">
        <Sidebar
        newChat={newChat}
        setCurrentChat={setCurrentChat}
        chatList={chatList}
        />
      </div>
      <div className="accountLogo">
        qua per il logo dell'account in alto a destra
      </div>
      <div className="chat">
        <Chat
        currentChat={currentChat}
        />
      </div>
    </div>
  )
}

export default Home