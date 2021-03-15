import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import NavBar from './NavBar.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import TopNav from './TopNav.jsx';


const App = () => {
    const classes = useStyles();

    return (
        <>

          {/*------------------------------Navigation Section------------------------------*/}

          <CssBaseline />
          <AppBar />
          <main>

              {/*------------------------------Header Section------------------------------*/}

            <div className={classes.main}>
                <Header id='topSection'/>
            </div>

            {/*------------------------------About Section------------------------------*/}

            <div className={classes.about}>
                <About />
            </div>

            {/*------------------------------Testimonials Section------------------------------*/}

            <div className={classes.testimonials}>
                <Container maxWidth='lg'>
                    <Typography className={classes.sectionHeader} variant='h2' align='center'>
                        What People Say About Us
                    </Typography>
                    <Testimonials />
                </Container>
              </div>

              {/*------------------------------Contact Section------------------------------*/}

            <div className={classes.contact}>
                <Contact />
            </div>
          </main>
        </>
    )
}



export default App;