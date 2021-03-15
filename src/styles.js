import { makeStyles } from '@material-ui/core/styles';
import logo from './MMLogo.png';
import Color from 'color';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#EFEFEF',
    },
    main: {
        padding: '160px 100px 140px 100px',
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 50%',
        backgroundAttachment: 'fixed',
        backgroundSize: 'contain',
        backgroundColor: theme.palette.paper,
        [theme.breakpoints.down('md')]: {
            padding: '150px 50px 100px 50px',
        },
    },
    button: {
        margin: '0 20px',
        width: '100%',
        fontSize: '24px',
        color: '#000',
        transition: 'all .3s ease-in-out 0s',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.9rem',
            margin: '0'
        },
       /* [theme.breakpoints.down('xs')]: {
            display: 'none'
        },*/
    },
    headerContainer: {
        borderRadius: '10%',
        [theme.breakpoints.down('md')]: {
            backgroundColor: 'rgba(149,228,239,0.3)',
        },
    },
    title: {
        fontWeight: 'bold',
        //borderBottom: '4px solid #6B7A8F',
        paddingBottom: '10px',
        transition: 'all .4s ease-out 0s',
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem',
        },
    },
    subtitle: {
        transition: 'all .4s ease-out 0s',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
    },
    sectionHeader: {
        paddingBottom: '30px',
        fontWeight: '450'
    },
    about: {
        padding: '20px 0',
        backgroundColor: '#EFAA76' //'#034DA2'
    },
    cardGrid: {
        padding: '20px 40px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardHead: {
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.2rem',
        },
    },
    cardText: {
        fontSize: '14px',
    },
    cardMedia: {
        paddingTop: '56.25%', //16:9 aspect ratio
    },
    cardContent: {
        flexGrow: 1,
    },
    testimonials: {
        padding: '100px 0',
        backgroundColor: '#66B9BF'
    },
    testCard: {
        margin: '0 200px',
        padding: '0 50px',
        [theme.breakpoints.down('md')]: {
            margin: '0',
        },
    },
    contact: {
        padding: '100px 0',
        backgroundColor: '#07889B' // '#7F9FD2'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2,)
    },
    contactInfo: {
        margin: '0 50px 50px 0'
    },
}));

export default useStyles;