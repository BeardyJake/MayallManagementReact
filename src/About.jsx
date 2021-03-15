import { Container, Grid, Card, CardMedia, CardContent, Typography,  } from '@material-ui/core';
import useStyles from './styles';


const About = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.cardGrid} maxWidth='lg'>
            <Grid container justify='space-around' spacing={10}>
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
                            Executive Coaching and Board Interface
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <Card className={classes.card} elevation='18'>
                    <CardMedia 
                        className={classes.cardMedia}
                        image='https://source.unsplash.com/random'
                        title='Image Title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardHead} gutterBottom variant='h5' align='center'>
                            Copywriting, Documents, Reports                                    
                        </Typography>
                        <Typography className={classes.cardText} align='center'>
                            This is a media card. [Insert description of image]
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={4} sm={6}>
                <Card className={classes.card} elevation='18'>
                    <CardMedia 
                        className={classes.cardMedia}
                        image='https://source.unsplash.com/random'
                        title='Image Title'
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.cardHead} gutterBottom variant='h5' align='center'>
                            Heading                                    
                        </Typography>
                        <Typography className={classes.cardText} align='center'>
                            This is a media card. [Insert description of image]
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
        </Container>
    )
};

export default About;