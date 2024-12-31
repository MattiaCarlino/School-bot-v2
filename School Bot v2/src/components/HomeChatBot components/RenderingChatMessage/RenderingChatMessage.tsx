import React from 'react';
import ChatBox from '../ChatBox/ChatBox';

interface message {
    id: number,
    role: string,
    content: string
  }

interface renderingProps{
    messageHistory: message[],
}

const RenderingChatMessage: React.FC<renderingProps> = ({messageHistory}: renderingProps) => {
    return(
        <div className="messages">
            {messageHistory.map((message : message ) => (
                // qua andra usata il context che salva le informazioni della currentChat e della chatList
                // il context salverà i due stati, con useRedux, evitando il re-rendering del componente Home.tsx
                <ChatBox
                    index = {message.id}
                    title = {message.role}
                    useChat = {true}
                    content = {message.content}
                />
            ))}
        </div>
    )

}

export default RenderingChatMessage;