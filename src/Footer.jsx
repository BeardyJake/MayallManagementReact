import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import DBL from './logos/DoverBigLocal.png';
import GBCA from './logos/GBCAJudge.jpg';
import NCVO from './logos/NCVOLogo.png';
import NAG from './logos/nestAndGrow.png';
import TSL from './logos/ThirdSectorLeaders.png';



const Footer = (props) => {
    const classes = useStyles();
    const logos = [
        {
            logoName: 'Dover Big Local',
            path: DBL,
        },
        {
            logoName: 'Great British Care Awards',
            path: GBCA,
        },
        {
            logoName: 'National Council for Voluntary Organisations',
            path: NCVO,
        },
        {
            logoName: 'Nest And Grow',
            path: NAG,
        },
        {
            logoName: 'Third Sector Leaders',
            path: TSL,
        }
    ]

    return(
        <footer className={classes.footer}>
            <Grid container justify='space-evenly'>
                {logos.map(logo => {
                    const { logoName, path } = logo;
                    return (
                        <Grid item>
                            <img src={path} alt={logoName} className={classes.footerLogos} />
                        </Grid>
                    )
                })}
            </Grid>
            <Typography className={classes.footerText} variant='body2' color='textSecondary' align='center'>
                {'Copyright © '}
                {'Mayall Management Ltd., '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}



export default Footer;