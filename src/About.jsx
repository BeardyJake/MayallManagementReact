import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './styles';


const About = (props) => {
    const classes = useStyles();

    return (
        <Container className={classes.cardGrid}  maxWidth='lg'>
            <Typography className={classes.sectionHeader} variant='h2' align='center'>
                What Can We Do For You?
            </Typography>
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
    )
};

export default About;