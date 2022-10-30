import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <>
            <h2>Projects:</h2>
            <Grid container spacing={3}>
                <Paper>
                    <ProjectItem />
                </Paper>

            </Grid>

        </>
    )
}