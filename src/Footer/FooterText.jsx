import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footerText: {
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem'
        },
    },
}));

export default () => {
    const classes = useStyles();

    return(
        <Typography className={classes.footerText} variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            {'Mayall Management Ltd., '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
};