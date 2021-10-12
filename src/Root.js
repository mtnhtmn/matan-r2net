import {BrowserRouter as Router, Switch, Redirect, Route} from "react-router-dom";
import ChatsPage from "./router/ChatsPage";
import Appbar from "./components/ui/Appbar";
import Theme from "./components/ui/Theme";
import ChatPage from "./router/ChatPage";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {getChats} from "./store/actions/chatsActions";

function Root() {

    const chatsReducer = useSelector((store)=>store.chatsReducer)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getChats())
    },[dispatch])
    return (
        chatsReducer.loading ? <div>loading</div>:  <Router>
                <Theme>
                    <Appbar/>
                    <Switch>
                        <Route exact path='/'>
                            <ChatsPage/>
                        </Route>
                        <Route path='/chat/:chatId'>
                            <ChatPage/>
                        </Route>
                        <Redirect to='/'/>
                    </Switch>
                </Theme>
            </Router>
    );
}

export default Root;
