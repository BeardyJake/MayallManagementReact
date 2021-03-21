import { makeStyles } from '@material-ui/core/styles';
import logo from './assets/MMLogo.png';

const useStyles = makeStyles((theme) => ({    
    main: {
        padding: '160px 50px 140px 50px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 50%',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
        backgroundColor: theme.palette.paper,
        [theme.breakpoints.down('xs')]: {
            backgroundPosition: '90% 15%',
            backgroundSize: '200px',
            padding: '150px 50px 50px 50px',
        }
    },
    about: {
        padding: '40px 0',
        backgroundColor: '#EFAA76'
    },
    testimonials: {
        padding: '50px 0 100px 0',
        backgroundColor: '#66B9BF'
    },
    contact: {
        padding: '50px 0',
        backgroundColor: '#07889B'
    },
}));

export default useStyles;