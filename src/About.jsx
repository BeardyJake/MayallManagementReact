import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeader from './SectionHeader';

const useStyles = makeStyles((theme) => ({
    about: {
        padding: '40px 0',
        backgroundColor: '#EFAA76'
    },
    cardGrid: {
        padding: '0px 20px 40px 20px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.08, 1.08, 1)"
        },
    },
    cardHead: {
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
    },
    cardText: {
        fontSize: '14px',
    },
    cardMedia: {
        paddingTop: '56.25%', //16:9 aspect ratio
    },
    cardContent: {
        flexGrow: 1,
    },
}))

const About = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.about} id='about'>
            <Container className={classes.cardGrid}  maxWidth='lg'>
                <SectionHeader content='What Can We Do For You?' />
                <Grid container justify='space-around' spacing={4}>
                <Grid item xs={12} md={4} sm={6}>
                    <Card className={classes.card} elevation='18'>
                        <CardMedia 
                            className={classes.cardMedia}
                            image='https://bit.ly/3v0aTWl'
                            title='Management Consultancy'
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardHead} gutterBottom variant='h5' align='center'>
                                Management Consultancy                                  
                            </Typography>
                            <Typography className={classes.cardText} align='center'>
                            We provide edge to edge project development and management, to discover your goals, plan the pathway to reach them, and evaluate them along the way. We also specialise in PCAS and PBS.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card className={classes.card} elevation='18'>
                        <CardMedia 
                            className={classes.cardMedia}
                            image='https://bit.ly/3ly0AV7'
                            title='Business Mentoring'
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardHead} gutterBottom variant='h5' align='center'>
                                Business Mentoring                               
                            </Typography>
                            <Typography className={classes.cardText} align='center'>
                            Support at arms-length, to more intensive work including delivery of training and audit systems designed to enhance the quality of service provision.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} sm={6}>
                    <Card className={classes.card} elevation='18'>
                        <CardMedia 
                            className={classes.cardMedia}
                            image='https://bit.ly/3f70jrb'
                            title='Cross Sector Support'
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography className={classes.cardHead} gutterBottom variant='h5' align='center'>
                                Cross Sector Support                                   
                            </Typography>
                            <Typography className={classes.cardText} align='center'>
                            Working alongside charities, the CJS and health & social care organisations across the sectors, we provide experienced and skilled services with a focus on governance, strategic direction and board interface.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                </Grid>
            </Container>
        </div>
    )
};

export default About;