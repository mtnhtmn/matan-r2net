import React from 'react';
import {Container, Grid} from "@mui/material";
import {useSelector} from "react-redux";
import ChatCard from "./ChatCard";

const ChatsPage = () => {

    const chatsReducer = useSelector((store) => store.chatsReducer)

    return (
        <Container>
            <Grid container justifyContent={'center'}>
                {chatsReducer.chats.map((chat) => {
                    return (
                        <Grid  key={chat.chatId} xs={4} item>
                            <ChatCard chat={chat}/>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default ChatsPage;
