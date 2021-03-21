import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    )
}



export default Header;