import { makeStyles } from '@material-ui/core/styles';
import logo from './MMLogo.png';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#C0E6E9',
    },
    menuButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
    },
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
    },
    title: {
        fontWeight: '500',
        //borderBottom: '4px solid #6B7A8F',
        paddingBottom: '10px',
        transition: 'all .4s ease-out 0s',
        [theme.breakpoints.down('md')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '5vh'
        },
    },
    subtitle: {
        transition: 'all .4s ease-out 0s',
        marginRight: '150px',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            marginRight: '0px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.5vh'
        },
    },
    sectionHeader: {
        transition: 'all .4s ease-out 0s',
        padding: '30px 0 50px 0',
        fontWeight: '450',
        [theme.breakpoints.down('md')]: {
            fontSize: '3rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '4vh'
        },
    },
    about: {
        padding: '40px 0',
        backgroundColor: '#EFAA76'
    },
    aboutParagraph: {
        marginBottom: '30px',
        fontSize: '16px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.8rem'
        },
    },
    cardGrid: {
        padding: '0px 20px 40px 20px',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: "transform 0.15s ease-in-out",
        "&:hover": {
            transform: "scale3d(1.08, 1.08, 1)"
        },
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
        padding: '50px 0 100px 0',
        backgroundColor: '#66B9BF'
    },
    testCard: {
        margin: '0 200px',
        padding: '0 50px',
        [theme.breakpoints.down('md')]: {
            margin: '0',
            padding: '0',
        },
    },
    contact: {
        padding: '50px 0',
        backgroundColor: '#07889B'
    },
    contactUs: {
        color: '#fff'
    },
    contactInfo: {
        color: '#fff',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        maxWidth: '100',
        backgroundColor: '#F7882F',
        color: 'white'
    },
    socialGrid: {
        marginTop: '50px',
        [theme.breakpoints.up('xl')]: {
            marginLeft: '170px'
        },
    },
    socialButtons: {
        padding: 24,
        [theme.breakpoints.down('sm')]: {
            padding: 0
        },
    },
    socialIcons: {
        fontSize: '12rem',
        color: '#EFEFEF',
        [theme.breakpoints.down('sm')]: {
            fontSize: '6rem'
        },
    },
    footer: {
        padding: '30px 0 20px 0',
    },
    footerLogos: {
        height: '100px',
        width: '100px',
    },
    footerText: {
        paddingTop: '20px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem'
        },
    },
}));

export default useStyles;