import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, List, ListItem, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function Skills() {

    const frontEnd = ['React', 'jQuery', 'Redux & Redux-Saga', 'Javascript', 'HTML & CSS', 'Material UI', 'Bootstrap',];
    const backEnd = ['Node.js', 'Express', 'SQL', 'Postgres', 'C#', '.NET'];
    const miscellaneousSkills = [];

    return (
        <>
            <h2>Skills:</h2>



            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Card>
                        FrontEnd:
                        <List>
                            {frontEnd.map(skill => (
                                <ListItem>
                                    <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                        </List>



                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card>
                        BackEnd:
                        <List>
                            {backEnd.map(skill => (
                                <ListItem>
                                    <ListItemText primary={skill} />
                                </ListItem>
                            ))}
                        </List>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        Miscellaneous:
                        <List>
                            <ListItem>
                                <ListItemText primary="API’s" />
                            </ListItem>
                        </List>
                    </Card>
                </Grid>

            </Grid>

        </>

    )
}