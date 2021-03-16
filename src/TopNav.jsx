import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button, Typography, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import { makeStyles, useTheme } from '@material-ui/core/styles';



const TopNav = (props) => {
    const classes = useStyles();
    const theme = useTheme();


    const handleClick = (elementId) => {
        document.getElementById(elementId).scrollIntoView({behviour: 'smooth'})
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttons = [
        {
            buttonTitle: 'Home',
            elementId: 'main'
        },
        {
            buttonTitle: 'About',
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
            menuTitle: 'About',
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