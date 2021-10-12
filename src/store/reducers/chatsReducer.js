import { GET_CHATS_START, GET_CHATS_SUCCESS} from "../types/chatsTypes";

const initialState = {
    chats:  [],
    loading:true
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHATS_START:
            return {...state,loading:true}
        case GET_CHATS_SUCCESS:
            return {...state,loading:false,chats:action.payload.chats}
        default:
            return state
    }
}