import {GET_CHAT_START, GET_CHAT_SUCCESS} from "../types/chatsTypes";

const initialState = {
    loading:false,
    chat:null,
    messages:[]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHAT_START:
            return {...initialState,loading:true}
        case GET_CHAT_SUCCESS:
            return {...initialState,chat:action.payload.chat,messages:action.payload.messages}
        default:
            return state
    }
}