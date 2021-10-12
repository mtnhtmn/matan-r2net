import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useHistory} from "react-router";




export default function ChatCard({chat}) {
    const history = useHistory()
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {chat.fromName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {chat.fromNumber}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => history.push(`/chat/${chat.chatId}`)} size="small">Enter Chat</Button>
            </CardActions>
        </Card>
    );
}
