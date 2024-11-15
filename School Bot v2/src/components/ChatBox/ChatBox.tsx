
const ChatBox = (chat: any, selectChat : any ) => {
  return (
    <section key={chat.id} onClick={selectChat(chat.id)}>
        <h4>{chat.title}</h4>
    </section>
  )
}

export default ChatBox