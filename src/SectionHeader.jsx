import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sectionHeader: {
        transition: 'all .4s ease-out 0s',
        padding: '30px 0 50px 0',
        fontWeight: 450,
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4vh'
        }
    }
}));

export default (props) => {
    const classes = useStyles();

    return (
        <Typography className={classes.sectionHeader} variant='h2' align='center'>
            {props.content}
        </Typography>
    )
};