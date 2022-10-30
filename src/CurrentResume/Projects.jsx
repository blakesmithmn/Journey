import { Avatar, Paper, Card, CardContent, Typography, Button, CardActions, Box, Grid, CardMedia, FormGroup, TextField, Stack, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ProjectItem from './ProjectItem';


export default function Projects() {

    const projectsArray = [

        {
            title: 'jQuery Salary Calculator',
            topics: 'jQuery, HTML, & CSS',
            image: 'https://github.com/blakesmithmn/weekend-jquery-salary-calculator/raw/main/overBudget.png',
            description: 'Weekend full stack project built using jQuery (early tech journey) - This app takes in employee salary data, and does relevant calculations server side!',
            link: 'https://github.com/blakesmithmn/weekend-jquery-salary-calculator'
        },
        {
            title: 'Server Side Calculator',
            topics: 'jQuery, Express, HTML, CSS, Javascript, etc.',
            image: 'https://github.com/blakesmithmn/server-side-calculator/raw/main/FinalProduct.PNG',
            description: 'Calculator client interface - with a pokemon theme, that performs all of the math on the server side.',
            link: 'https://github.com/blakesmithmn/server-side-calculator'
        },
        {
            title: 'SQL to do List',
            topics: 'SQL, HTML, CSS, jQuery, Express, etc.',
            image: 'https://media-exp1.licdn.com/dms/image/C5622AQHsXShok6vPpA/feedshare-shrink_800/0/1663178954985?e=1669852800&v=beta&t=0kd-1PjZjgZcRvzFAX-sCkyj8oSwKjURtsTN86U1X0c',
            description: 'Full Stack To Do list -  personalized with SweetAlerts and an Animal Crossing Theme!',
            link: 'https://github.com/blakesmithmn/weekend-sql-to-do-list'
        },
        {
            title: 'React Gallery',
            topics: ' React, SQL, HTML, CSS, Express, etc.',
            image: 'https://media-exp1.licdn.com/dms/image/C4E22AQECe4hX713nBg/feedshare-shrink_800/0/1663816103933?e=1669852800&v=beta&t=RXtc0S8KV3hn9XYmfaRXLgsK-PkKC4H5u3XanA7XYfQ',
            description: 'First project made in React! Also first time using Material-UI ... a full stack Image gallery!',
            link: 'https://github.com/blakesmithmn/weekend-react-gallery'
        },
        {
            title: 'Feedback Loop',
            topics: "React, Redux, Node.js, Express, Postgres, Material-UI, etc.",
            image: 'https://media-exp1.licdn.com/dms/image/C5622AQFZCt97GVn6UQ/feedshare-shrink_800/0/1664246836418?e=1669852800&v=beta&t=nbBYujgQNg8BtcIidJbJjplWFihEvr59wZQom3QdSB0',
            description: 'A survey form - split across multiple pages using Redux to store user input before submitting to a Database after review. This was my first time attempting to make a responsive product! ',
            link: 'https://github.com/blakesmithmn/weekend-redux-feedback-loop',
        },
        {
            title: 'Movie Sagas',
            topics: "React, Redux, Redux-Saga, Node.js, Express, Postgres, Material-UI, API's",
            image: 'https://media-exp1.licdn.com/dms/image/C5622AQEIsI5wYsd79w/feedshare-shrink_800/0/1664822036266?e=1669852800&v=beta&t=jbC1h0RNQ7ayR01L49GwQlPmJNQtFWUHIDqtEwqcB_8',
            description: 'Short sprint project building a full stack Movie website - with API integration as an added bonus! More work in responsive design!',
            link: 'https://github.com/blakesmithmn/weekend-movie-sagas/blob/main/src/components/MovieDetails/MovieDetails.jsx',
        },

    ]






    return (
        <>
            <h2>Projects:</h2>
            <Grid container spacing={3} direction='row'>

                {projectsArray.map(project => (
                    <ProjectItem project={project} />
                ))}

            </Grid>

        </>
    )
}