import { Button, CssBaseline, Typography, TextField, Grid, Container, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
    contact: {
        padding: '50px 0',
        backgroundColor: '#07889B'
    },
    contactUs: {
        color: '#fff'
    },
    contactInfo: {
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        maxWidth: '100',
        backgroundColor: '#F7882F',
        color: 'white'
    },
    socialGrid: {
        marginTop: '50px',
        [theme.breakpoints.up('xl')]: {
            marginLeft: '170px'
        },
    },
    socialButtons: {
        padding: 24,
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
    },
    socialIcons: {
        fontSize: '12rem',
        color: '#EFEFEF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem'
        },
    },
}))

const Contact = (props) => {

    const classes = useStyles();

    return(
        <div className={classes.contact} id='contact'>
            <Container align='center'>
                <Grid container>
                    <Grid item xs={12} md={6}>
                            <Container>
                                <CssBaseline />
                                <Typography variant='h4' align='center' className={classes.contactUs}>
                                    Contact Us!
                                </Typography>
                                <Typography variant='h6' align='center' className={classes.contactInfo}>
                                    Be in touch today.
                                </Typography>
                                <Typography variant='h6' align='center' className={classes.contactInfo}>
                                    We can do and make business together.
                                </Typography>
                                <Typography variant='h6' align='center' className={classes.contactInfo}>
                                    Dover, United Kingdom, CT16 1ET
                                </Typography>
                                <Typography variant='h6' align='center' className={classes.contactInfo}>
                                    berniemayall@gmail.com
                                </Typography>
                                <Typography variant='h6' align='center' className={classes.contactInfo}>
                                    07757262380
                                </Typography>
                            </Container>
                            <Container >
                                <CssBaseline />
                                <form className={classes.form} name='contact' method='POST' data-netlify='true' onSubmit='submit'>
                                    <input type='hidden' name='form-name' value='contact' />
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
        </div>
    )
};





export default Contact;
