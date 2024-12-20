import { Link } from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";
import { useEffect, useState } from "react";

export const Sidebar = ({chatList,newChat,setCurrentChat}:any) => {
  const [numberChat, setNumberChat] = useState()

  useEffect(() =>{
    console.log("arrivato allo use effect " + {numberChat})
    setCurrentChat(numberChat)
  }, [numberChat])

  // Da vedere il rendering della chatlist e verificare che la selezione della chat con setCurrentChat funzioni
  return (
    <div className="sidebar">
        <div className="logoSchoolBot">
          
        </div>
        <div className="expandButton">
            il bottoncino per rendere fissa o adattiva
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
            {chatList.map((chat : any) => (
              <ChatBox
              index = {chat.id}
              chat = {chat}
              setNumberChat = {setNumberChat}
              />
            ))
            }
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
