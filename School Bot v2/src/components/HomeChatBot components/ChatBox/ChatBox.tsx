
const ChatBox = ({setNumberChat, chat}: any, index:number) => {
  return (
    <section key={index} >
        <h4>{chat.title}</h4>
        <button onClick={()=> {setNumberChat(chat)}}> seleziona </button>
    </section>
  )
}

export default ChatBox