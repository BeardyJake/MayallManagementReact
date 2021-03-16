import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import logo from './MMLogo.png';

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