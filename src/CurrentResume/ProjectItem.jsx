import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import './Current.css';

export default function ProjectItem({ project }) {

    return (
        <Grid item xs={4}>
            <Card className='CardDisplay'>
                <CardContent>
                    <Typography>{project.title}</Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: .75 }}
                    image={project.image}
                    textAlign='center'
                />
                <CardContent>
                    <Typography>
                        {project.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}