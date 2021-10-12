import {GET_CHATS_START, GET_CHATS_SUCCESS} from "../types/chatsTypes";

export const getChats = () => {
    return (dispatch) => {
        dispatch({type: GET_CHATS_START})
        const chats = [
            {
                "chatId": "123",
                "fromName": "User1",
                "fromNumber": "054-129312",
                "messages": [
                    {
                        "receivedAt": "2021-08-30 18:09:35",
                        "text": "lorem ipsum?"
                    },
                    {
                        "receivedAt": "2021-08-31 12:01:20",
                        "text": "lorem ipsum!"
                    }
                ]
            },
            {
                "chatId": "456",
                "fromName": "User2",
                "fromNumber": "054-122222",
                "messages": [
                    {
                        "receivedAt": "2021-08-30 18:09:35",
                        "text": "lorem ipsum lorem?"
                    }
                ]
            }
        ]

        setTimeout(() => {
            dispatch({type: GET_CHATS_SUCCESS, payload: {chats}})
        }, 1000)
    }
}