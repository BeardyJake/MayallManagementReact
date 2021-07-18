import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/MMLogo.png';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '160px 50px 140px 50px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 50%',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
        backgroundColor: theme.palette.paper,
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '90% 15%',
            backgroundSize: '200px',
            padding: '150px 50px 50px 50px',
        }
    },
    title: {
        fontWeight: '500',
        paddingBottom: '10px',
        transition: 'all .4s ease-out 0s',
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '5vh'
        },
    },
    subtitle: {
        transition: 'all .4s ease-out 0s',
        marginRight: '150px',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            marginRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5vh'
        },
    },
}))

const Header = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.main} id='main'>
            <Grid container spacing={2} direction='row' lg={9} xs={12} justify='center'>
                <Grid item lg={10} xs={12}>
                    <Typography className={classes.title} variant='h1'>
                        Mayall Management
                    </Typography>
                </Grid>
                <Grid item lg={10} xs={12}>
                    <Typography className={classes.subtitle} variant='h3'>
                        In a Complex Changing World, We Bring Simplicity and Stability.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}



export default Header;