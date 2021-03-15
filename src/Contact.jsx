import { Button, CssBaseline, Typography, TextField, FormControlLabel, Grid, Container, Box, Link } from '@material-ui/core';
import useStyles from './styles';


const Contact = (props) => {

    const classes = useStyles();

    return(
        <Grid container justify='center'>
            <Grid item>
                <div>
                    <Container className={classes.contactInfo} maxWidth='sm'>
                        <CssBaseline />
                        <Typography variant='h4' align='center'>
                            Contact Us!
                        </Typography>
                        <Typography variant='h6' align='center'>
                            Be in touch today. We can do and make business together.
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
                </div>
            </Grid>
            <Grid item>
                <div>
                    <Container maxWidth='sm'>
                        <CssBaseline />
                        <form className={classes.form}>
                            <Grid container spacing={2} xs={12}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                    autoComplete='fname'
                                    name='firstName'
                                    variant='outlined'
                                    fullWidth
                                    id='firstName'
                                    label='First Name'                                   
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
                                    label='Email'                        
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
                                    />
                                </Grid>
                            </Grid>
                            <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            className={classes.submit}
                            >
                            Contact Us
                            </Button>
                        </form>
                    </Container>
                </div>
            </Grid>
        </Grid>
    )
};





export default Contact;