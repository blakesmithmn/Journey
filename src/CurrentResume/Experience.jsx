import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';


const ExperienceArray = [

    {
        company: 'Prime Digital Academy',
        position: 'Software Development Student',
        duration: 'JULY 2022 - NOVEMBER 2022',
        projects: [
            "Solo Project: ‘MOSH.’ concert-going companions Going to concerts alone is never quite as fun - find a friend to experience a show together! Built a Desktop / Mobile Responsive application allowing users to connect with one another over shared musical interests. Users are able to  log in, create a profile, find local events and connect with other users to attend the event together. Technologies Used: Javascript, React, Redux, Sagas, Express, Node.js, 3rd Party API’s, SQL,  Postgres, Material UI, HTML, & CSS.",
            "Group Project: Citizen Kanine - work in progress"
        ],
        description: 'description'
    },
    {
        company: 'Starbucks',
        position: 'Shift Supervisor',
        duration: 'FEBRUARY 2020 - AUGUST 2022',
        description: "Adapted to unprecedented times while navigating a team through conflicts - in order to maintain product quality and production efficiency.     Demonstrated superior customer service to a diverse customer base and dedication to craft - being awarded 'Partner of the Quarter'."
    },
    {
        company: 'Fresh Thyme Farmers Market',
        position: 'Dairy & Frozen Department Supervisor',
        duration: 'SEPTEMBER 2017 - AUGUST 2020',
        description: "Managed department through monitoring product flow, delegating tasks to employees, and resolving customer and vendor concerns."
    },
    {
        company: 'MarketSource - Target Tech',
        position: 'Wireless Team Lead',
        duration: 'MARCH 2016 - AUGUST 2017',
        description: "Headed scheduling, training, and onboarding of new employees in order to foster a seamless transition into their new position. Boosted sales through enthusiastic education on products and services offered. ",
    }
];


export default function Experience() {
    return (
        <>
            <h2>Experience:</h2>
            <Grid container spacing={4}>
                {ExperienceArray.map(work => (
                    <Grid item xs={12}>
                        <Card sx={{ textAlign: 'left' }}>
                            <Typography variant='h5' >{work.company}</Typography>
                            <Typography variant='body1'>{work.position}</Typography>
                            <Typography>July 2022 - November 2022</Typography>
                            <Typography>{work.projects}</Typography>
                            <Typography> {work.description}</Typography>
                        </Card>
                    </Grid>

                ))}
            </Grid>
        </>
    )
}