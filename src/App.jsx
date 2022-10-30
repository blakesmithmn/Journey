import logo from './logo.svg';
import './App.css';
import OldResume from './OldResume.jsx';
import CurrentResume from './CurrentResume/CurrentResume';
import React, { useState, useEffect } from 'react';
import { Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#333533',
        contrastText: '#FFD100',
      },
      secondary: {
        main: '#202020',
        contrastText: '#FFD100',
      },
      background: {
        paper: 'rgba(244,245,245,0.7)',
      }
    },
  });


  const [status, setStatus] = useState('then');

  const changeStatus = () => {
    if (status === 'then') {
      setStatus('now');
    } else {
      setStatus('then');
    }
  }

  return (
    <ThemeProvider theme={theme}>

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
    </ThemeProvider>
  );
}

export default App;
