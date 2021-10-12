import {GET_CHAT_START, GET_CHAT_SUCCESS} from "../types/chatsTypes";

export const getChat = (chatId)=>{

    return (dispatch,getState)=>{
        dispatch({type:GET_CHAT_START})
        const chats = getState().chatsReducer.chats
        const chat = chats.find((chat)=>{
            if(chat.chatId===chatId){
                return true
            }
            return false
        })
        const {messages,...chatDetails} = chat;
        setTimeout(()=>{
            dispatch({type:GET_CHAT_SUCCESS,payload:{chat:chatDetails,messages}})
        },1000)
    }


}