import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import TopNav from './TopNav.jsx';


const App = () => {
    const classes = useStyles();

    return (
        <>

        {/*------------------------------Navigation Section------------------------------*/}

          <CssBaseline />
          <TopNav />

        {/*------------------------------Header Section------------------------------*/}

            <div className={classes.main} id='main'>
                <Header />
            </div>

        {/*------------------------------About Section------------------------------*/}

            <div className={classes.about} id='about'>
                <About />
            </div>

        {/*------------------------------Testimonials Section------------------------------*/}

            <div className={classes.testimonials} id='testimonials'>
                <Testimonials />
            </div>

        {/*------------------------------Contact Section------------------------------*/}

            <div className={classes.contact} id='contact'>
                <Contact />
            </div>

        {/*------------------------------Footer Section------------------------------*/}
        </>
    )
}



export default App;