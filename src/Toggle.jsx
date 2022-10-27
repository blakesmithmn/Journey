import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';

function Toggle() {

    const [status, setStatus] = useState('then');

    const changeStatus = () => {
        if (status === 'then') {
            setStatus('now');
        } else {
            setStatus('then');
        }
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Then</Typography>
                    <Switch onChange={(event) => changeStatus()} />
                    <Typography>Now</Typography>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Toggle;