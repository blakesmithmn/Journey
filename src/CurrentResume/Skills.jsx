import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';

export default function Skills() {
    return (
        <>
            <h2>Skills:</h2>

            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Card>
                        FrontEnd:

                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card>
                        BackEnd:

                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        Miscellaneous:

                    </Card>
                </Grid>

            </Grid>

        </>

    )
}