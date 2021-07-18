import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Testimonials from './Testimonials.jsx';
import About from './About.jsx';
import Header from './Header.jsx';
import Contact from './Contact.jsx';
import TopNav from './TopNav.jsx';
import Footer from './Footer';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {

    const theme = createMuiTheme({
        typography: {
            fontFamily: ['Poppins, sans-serif'],
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <TopNav />
            <Header />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </ThemeProvider>      
    )
}

export default App;