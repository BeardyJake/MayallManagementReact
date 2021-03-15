import { Container, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import logo from './MMLogo.png';
import { useRef } from 'react';

const Header = (props) => {
    const classes = useStyles();

    return (
        <Grid container spacing={4} direction='row' lg={9}>
            <Container className={classes.headerContainer}>
                <Grid item lg={9} xs={12}>
                    <Typography className={classes.title} variant='h1'>
                        Mayall Management
                    </Typography>
                </Grid>
                <Grid item lg={9} xs={12}>
                    <Typography className={classes.subtitle} variant='h3'>
                        In a Complex Changing World, We Bring Simplicity and Stability.
                    </Typography>
                </Grid>
            </Container>
        </Grid>
    )
}



export default Header;