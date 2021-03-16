import { Button, CssBaseline, Typography, TextField, FormControlLabel, Grid, Container, Box, Link, IconButton } from '@material-ui/core';
import useStyles from './styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const Contact = (props) => {

    const classes = useStyles();

    return(
        <Container align='center'>
            <Grid container>
                <Grid item xs={12} md={6}>
                        <Container className={classes.contactInfo}>
                            <CssBaseline />
                            <Typography variant='h4' align='center'>
                                Contact Us!
                            </Typography>
                            <Typography variant='h6' align='center'>
                                Be in touch today.
                            </Typography>
                            <Typography variant='h6' align='center'>
                                We can do and make business together.
                            </Typography>
                            <Typography variant='h6' align='center'>
                                Dover, United Kingdom, CT16 1ET
                            </Typography>
                            <Typography variant='h6' align='center'>
                                berniemayall@gmail.com
                            </Typography>
                            <Typography variant='h6' align='center'>
                                07757262380
                            </Typography>
                        </Container>
                        <Container >
                            <CssBaseline />
                            <form className={classes.form}>
                                <Grid container spacing={2} xs={12} align='center'>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        autoComplete='fname'
                                        name='firstName'
                                        variant='outlined'
                                        fullWidth
                                        id='firstName'
                                        label='First Name'
                                        required='true'                                 
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        autoComplete='lname'
                                        name='lastName'
                                        variant='outlined'
                                        fullWidth
                                        id='lastName'
                                        label='Last Name'                        
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <TextField
                                        autoComplete='email'
                                        name='email'
                                        variant='outlined'
                                        fullWidth
                                        id='email'
                                        label='Email Address'
                                        required='true'                    
                                        />                        
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        autoComplete='message'
                                        name='message'
                                        variant='outlined'
                                        fullWidth
                                        id='message'
                                        label='Talk to us...' 
                                        multiline='true'
                                        rows='5'
                                        required='true'       
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                        fullWidth
                                        type='submit'
                                        variant='contained'
                                        className={classes.submit}
                                        >
                                          Submit
                                        </Button>
                                    </Grid>
                                </Grid>                               
                            </form>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container className={classes.socialGrid} xs={12} align='center'>
                            <Grid item xs={4} md={6}>
                                <IconButton className={classes.socialButtons} href='https://www.facebook.com/MayallManagement/' target='_blank'>
                                    <FacebookIcon className={classes.socialIcons} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} md={6}>
                                <IconButton className={classes.socialButtons} href='https://www.linkedin.com/company/mayall-management-ltd' target='_blank'>
                                    <LinkedInIcon className={classes.socialIcons} />
                                </IconButton>
                            </Grid>
                            <Grid item xs={4} md={12}>
                                <IconButton className={classes.socialButtons} href='mailto:berniemayall@gmail.com'>
                                    <EmailIcon className={classes.socialIcons} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>       
        </Container>
    )
};





export default Contact;