import React from 'react';
import { CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import TopNav from './TopNav.jsx';
import Footer from './Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
    const classes = useStyles();

    const theme = createMuiTheme({
        typography: {
            fontFamily: ['Poppins, sans-serif'],
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500
        }
    });

    return (
        <>
        <ThemeProvider theme={theme}>
            <CssBaseline />
        {/*------------------------------Navigation Section------------------------------*/}
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
            <div>
                <Footer />
            </div>
        </ThemeProvider>
        </>
    )
}

export default App;