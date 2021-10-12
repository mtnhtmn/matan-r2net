import React from 'react';
import {NavLink} from "react-router-dom";
import {AppBar, Link, Toolbar, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme, p) => {
    return {
        root: {
            flexGrow: 1,
        },
        toolbar: {
            height: 64
        },
        links: {
            display: 'flex',
            gap: 10
        },
        link: {
            color: theme.palette.common.white
        },
        linkActive: {
            textDecoration: 'underline'
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,

        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }
});

const Appbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar} variant={'regular'}>
                <Typography className={classes.title} variant="h6" noWrap>
                   Chat App
                </Typography>
                <div className={classes.links}>
                    <Link sx={{color: 'white'}} activeStyle={{textDecoration: 'underline'}} component={NavLink}
                          to='/home'>
                        Home
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Appbar
