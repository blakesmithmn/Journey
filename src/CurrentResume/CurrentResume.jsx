import Experience from "./Experience";
import Skills from "./Skills";
import Header from "./Header";
import Projects from "./Projects";


import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';

function CurrentResume() {

    return (
        <>

            <Header />
            <Projects />
            <Skills />
            <Experience />
        </>

    )
}

export default CurrentResume;