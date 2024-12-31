import React from 'react'

interface chatBoxInfo {
  index: number
  title: string,
  useChat: boolean,
  content?: string,
  handleChat?: (selectChat: number) => void
}
export const ChatBox: React.FC<chatBoxInfo> = (chatInfo) => {
  return (
    <section key={chatInfo.index} >
        <h4>{chatInfo.title}</h4>
        {chatInfo.useChat ? (
           <p>{chatInfo.content}</p>
        ):(
          <button onClick={() => {
            if(typeof(chatInfo.handleChat) !== "undefined"){
               chatInfo.handleChat(chatInfo.index)
            }
          }}> seleziona </button>
        )}
    </section>
  )
}

export default ChatBox