import React from 'react';
import {AppBar, Container, Grid, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getChat} from "../store/actions/chatActions";
import Typography from "@mui/material/Typography";

const ChatsPage = () => {

    const params = useParams()
    const dispatch = useDispatch()
    const chatReducer = useSelector((store) => store.chatReducer)
    React.useEffect(() => {
        dispatch(getChat(params.chatId))
    }, [dispatch, params.chatId])


    return (
        <Container sx={{padding:2}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        fromNumber : {chatReducer.chat?.fromNumber}
                    </Typography>
                    <Typography variant="h6" component="div" >
                        fromName: {chatReducer.chat?.fromName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <List>
                {chatReducer.messages.map((message) => {
                    return (
                        <ListItem key={message.receivedAt}>
                            <ListItemText primary={message.text} secondary={message.receivedAt}/>
                        </ListItem>
                    )
                })}
            </List>
        </Container>
    );
};

export default ChatsPage;
