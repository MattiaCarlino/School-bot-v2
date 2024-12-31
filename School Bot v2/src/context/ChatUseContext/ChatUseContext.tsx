
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

