import { Grid, makeStyles } from '@material-ui/core';

import logoArray from './logoArray';
import FooterText from './FooterText';

const useStyles = makeStyles({
    footer: {
        padding: '30px 0 20px 0',
    },
    footerLogos: {
        height: '100px',
        width: '100px',
    }
});

export default () => {
    const classes = useStyles();

    const renderLogos = () => {
        return logoArray.map(logo => {
            return (
                <Grid item>
                    <img src={logo.path} alt={logo.logoName} className={classes.footerLogos} />
                </Grid>
            )
        })
    };

    return(
        <footer className={classes.footer}>
            <Grid container justify='space-evenly'>
                {renderLogos()}
            </Grid>
            <FooterText />
        </footer>
    )
};