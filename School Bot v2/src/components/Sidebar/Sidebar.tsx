import { Link } from "react-router-dom";
import ChatBox from "../ChatBox/ChatBox";

export const Sidebar = (newChat: any, setCurrentChat: any, chatList: any ) => {

  const selectChat = (id:number) => {
    chatList.map((chat : any) => {
      if(chat.id == id){
        setCurrentChat(chat)
      }
    })

  }

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
            <button onClick={newChat()}> Nuova chat </button>
          </div>
          <div className="chats">
            {chatList.map((chat : any) => (
              <ChatBox
              chat = {chat}
              selectChat = {selectChat}
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
