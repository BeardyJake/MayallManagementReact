import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = (props) => {
    const classes = useStyles();
    

    return(
        <footer className={classes.footer}>
            <Typography className={classes.footerText} variant='h6' align='center'>
                Proudly supporting <a href='https://www.no-offence.org/unlock-your-future/' target='_blank'>No Offence! Unlock Your Future</a>
            </Typography>
            <Typography className={classes.footerText} variant='subtitle1' align='center' component='p' gutterBottom>
                "Breaking down barriers to employment for people with convictions"
            </Typography>
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