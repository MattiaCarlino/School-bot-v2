/*
qua andranno dichiarate tutte le interfacce usate nell'applicazione, quella della chat
quella dei messaggi, e tutte le altre, questo file poi verrà importato e le interfacce
usate dove serve, passandole come
*/

export interface message {
    id: number,
    role: string,
    content: string
  }
  
export interface chat {
    id: number,
    title: string,
    initialUse: boolean,
    messageHistory:message[]
}