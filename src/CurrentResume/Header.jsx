import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import headshot from './headshot.png';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Header() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant='h1'>
                                Hi, I'm Blake
                            </Typography>
                            <Typography variant='subtitle1'>
                                Yep - the old resume is supposed to look like that ... messed up 'float' and all
                            </Typography>
                        </CardContent>
                        <Avatar src={headshot} sx={{ width: 300, height: 300 }} />
                        <CardActions>
                            <Button variant="contained" onClick={handleClickOpen}>
                                About Me
                            </Button>
                            <Dialog
                                open={open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={handleClose}
                                aria-describedby="alert-dialog-slide-description"
                            >
                                <DialogTitle>{"Blake Smith"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        I'm a 26 year old Software Developer.
                                    </DialogContentText>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        In my free time I enjoy playing video games, traveling, trying new foods, and attending concerts!
                                    </DialogContentText>
                                    <DialogContentText id="alert-dialog-slide-description">
                                        This site is meant to show the progress I've made over this year - from basic HTML/CSS to React~!
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button>LinkedIn</Button>
                                    <Button>GitHub</Button>
                                    <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                            </Dialog>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>


        </>

    )
}