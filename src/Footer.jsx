import { Typography } from '@material-ui/core';
import useStyles from './styles';

const Footer = (props) => {
    const classes = useStyles();
    

    return(
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
                Here is the footer text
            </Typography>
            <Typography variant='body2' color='textSecondary' align='center'>
                {'Copyright © '}
                {'Mayall Management Ltd., '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}



export default Footer;