import logo from './logo.svg';
import './App.css';
import OldResume from './OldResume.jsx';
import CurrentResume from './CurrentResume/CurrentResume';
import React, { useState, useEffect } from 'react';
import { Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch } from '@mui/material';

function App() {
  const [status, setStatus] = useState('then');

  const changeStatus = () => {
    if (status === 'then') {
      setStatus('now');
    } else {
      setStatus('then');
    }
  }

  return (
    <div className="App">

      <Grid container>
        <Grid item xs={12}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Then</Typography>
            <Switch onChange={(event) => changeStatus()} />
            <Typography>Now</Typography>
          </Stack>
        </Grid>
      </Grid>

      {status === 'now' ?

        <CurrentResume />
        :
        <OldResume />
      }



    </div>
  );
}

export default App;
