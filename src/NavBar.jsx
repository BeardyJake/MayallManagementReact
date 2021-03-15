import { Container, Button } from '@material-ui/core';
import useStyles from './styles';
import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = (props) => {
    const classes = useStyles();

    return (   
        <Router>     
            <Container maxWidth='false' className={classes.nav}>
                <Button className={classes.button}>
                    Home
                </Button>
                <Button className={classes.button}>
                    What We Do
                </Button>
                <Button className={classes.button}>
                    Testimonials
                </Button>
                <Button className={classes.button}>
                    Get In Touch
                </Button>
            </Container>
        </Router>
    )
};




export default NavBar;