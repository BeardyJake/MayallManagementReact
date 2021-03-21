import { useState } from 'react';
import { AppBar, Toolbar, Button, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#C0E6E9',
    },
    menuButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2)
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
}))

const TopNav = (props) => {
    const classes = useStyles();
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const buttons = [
        {
            buttonTitle: 'Home',
            elementId: 'main'
        },
        {
            buttonTitle: 'Services',
            elementId: 'about'
        },
        {
            buttonTitle: 'Testimonials',
            elementId: 'testimonials'
        },
        {
            buttonTitle: 'Contact',
            elementId: 'contact'
        }
    ];

    const menuItems = [
        {
            menuTitle: 'Home',
            elementId: 'main'
        },
        {
            menuTitle: 'Services',
            elementId: 'about'
        },
        {
            menuTitle: 'Testimonials',
            elementId: 'testimonials'
        },
        {
            menuTitle: 'Contact',
            elementId: 'contact'
        }
    ];

    return(
         isMobile ? (
            <>
            <AppBar className={classes.appBar} position='fixed' color='secondary'>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="#000"
                        aria-label="menu"
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                        }}
                        open={open}
                        onClose={() => setAnchorEl(null)}
                    >
                        {menuItems.map(menuItem => {
                        const { menuTitle, elementId } = menuItem;
                        return (
                            <MenuItem onClick={() => {
                                document.getElementById(elementId).scrollIntoView({behavior: 'smooth'});
                            }}>
                                {menuTitle}
                            </MenuItem>
                          );
                        })}
                    </Menu>
                </Toolbar>
            </AppBar>
            </>
        ) : (
            <AppBar className={classes.appBar} position='fixed' color='secondary'>
            <Toolbar>
                {buttons.map(button => {
                    const { buttonTitle, elementId } = button;
                    return (
                        <Button className={classes.button} onClick={() => {
                            document.getElementById(elementId).scrollIntoView({behavior: 'smooth'})
                        }} >
                            {buttonTitle}
                        </Button>
                    )
                })}
            </Toolbar>
        </AppBar>
        )
    
        
    )
}



export default TopNav;