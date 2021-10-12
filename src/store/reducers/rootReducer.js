import {combineReducers} from "redux";
import {chatsReducer} from "./chatsReducer";
import {chatReducer} from "./chatReducer";


const rootReducer = combineReducers({
 chatReducer,
 chatsReducer
})

export default rootReducer
