import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { allActions } from '../../store/actions'

import './HomeHeader.scss'
export const HomeHeader = () => {
    library.add(fas)

    const settings = ['Account', 'Logout'];
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    //Get auth 
    const auth = useSelector((state) => state.user)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    //Profile
    const handleCloseUserMenu = (event) => {

        if (event.target.innerHTML === "Account") {

            if (auth.userInfo.role === "Staff") {
                navigate('/Staff')
            } else if (auth.userInfo.role === "Customer") {
                navigate('/User')
            }
        } else if (event.target.innerHTML === "Logout") {
            dispatch(allActions.processLogout())
            navigate('/login')
        }
        setAnchorElUser(null);
    };

    //Scrolling lock
    const stickyHeader = React.useRef()

    React.useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
            if (window.pageYOffset > fixedTop) {
                mainHeader.classList.add('fixedTop')
            } else {
                mainHeader.classList.remove('fixedTop')
            }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])
    //useEffect
    React.useEffect(() => {
        if (auth.isLoggedIn === false && (location.pathname === '/login-admin' || location.pathname === '/Admin')) {
            navigate('/login-admin')
        } else if (auth.isLoggedIn === false && location.pathname === '/login') {
            navigate('/login')
        }

    }, [auth.isLoggedIn, location.pathname, navigate]);

    if (auth.isLoggedIn) {
        console.log(auth.userInfo.role === 'Admin')
    }
    return (
        <>
            {
                auth.isLoggedIn ? (auth.userInfo.role === 'Admin' ? <></> : <> <div className="home-header-container" id="mainHeader" ref={stickyHeader}>
                    <div className="home-header-content">
                        <div className="left-content">
                            <Link to='/' className='header-logo'></Link>
                        </div>
                        <div className='center-content'>
                            <Navbar className="navbar" collapseOnSelect expand="lg" bg="white" variant="white">
                                <Container >
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                    <Navbar.Collapse id="responsive-navbar-nav" >
                                        <Nav className="me-auto my-2 my-lg-0"
                                            navbarScroll>
                                            <Nav.Link as={Link} to="/about">
                                                <h5><b>Giới thiệu công ty</b></h5>
                                            </Nav.Link>
                                            <Nav.Link as={Link} to="/service">
                                                <h5><b>Dịch vụ bảo trì</b></h5>
                                            </Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                        <div className="right-content">
                            <div className='bell'>
                                <FontAwesomeIcon icon={['fas', 'fa-bell']} />
                            </div>
                            <div className='support'>
                                <Box sx={{ flexGrow: 0 }}>
                                    {auth.isLoggedIn ?
                                        <>
                                            <Tooltip >
                                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                    <div className='user-profile'>
                                                        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
                                                        {auth.userInfo.role}
                                                    </div>
                                                </IconButton>
                                            </Tooltip>
                                            <Menu
                                                sx={{ mt: '45px' }}
                                                id="menu-appbar"
                                                anchorEl={anchorElUser}
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                keepMounted
                                                transformOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'right',
                                                }}
                                                open={Boolean(anchorElUser)}
                                                onClose={handleCloseUserMenu}
                                            >
                                                <MenuItem >
                                                    <Typography align="center" variant="h6">{auth.userInfo.lastName}</Typography>
                                                </MenuItem>
                                                <Divider sx={{ my: 0 }} />
                                                {settings.map((setting) => (
                                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                        <Typography textAlign="center">{setting}</Typography>
                                                    </MenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                        : <><Tooltip >
                                            <Link to='/login'>
                                                <IconButton sx={{ p: 0 }}>
                                                    <Stack spacing={4}>
                                                        <Avatar />
                                                    </Stack>
                                                </IconButton>
                                            </Link>
                                        </Tooltip>
                                        </>
                                    }
                                </Box>
                            </div>
                        </div>
                    </div>
                </div ></>) : <>
                    <div className="home-header-container" id="mainHeader" ref={stickyHeader}>
                        <div className="home-header-content">
                            <div className="left-content">
                                <Link to='/' className='header-logo'></Link>
                            </div>
                            <div className='center-content'>
                                <Navbar className="navbar" collapseOnSelect expand="lg" bg="white" variant="white">
                                    <Container >
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse id="responsive-navbar-nav" >
                                            <Nav className="me-auto my-2 my-lg-0"
                                                navbarScroll>
                                                <Nav.Link as={Link} to="/about">
                                                    <h5><b>Giới thiệu công ty</b></h5>
                                                </Nav.Link>
                                                <Nav.Link as={Link} to="/service">
                                                    <h5><b>Dịch vụ bảo trì</b></h5>
                                                </Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                            <div className="right-content">
                                <div className='bell'>
                                    <FontAwesomeIcon icon={['fas', 'fa-bell']} />
                                </div>
                                <div className='support'>
                                    <Box sx={{ flexGrow: 0 }}>
                                        {auth.isLoggedIn ?
                                            <>
                                                <Tooltip >
                                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                                        <div className='user-profile'>
                                                            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
                                                            {auth.userInfo.role}
                                                        </div>
                                                    </IconButton>
                                                </Tooltip>
                                                <Menu
                                                    sx={{ mt: '45px' }}
                                                    id="menu-appbar"
                                                    anchorEl={anchorElUser}
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    keepMounted
                                                    transformOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    open={Boolean(anchorElUser)}
                                                    onClose={handleCloseUserMenu}
                                                >
                                                    <MenuItem >
                                                        <Typography align="center" variant="h6">{auth.userInfo.lastName}</Typography>
                                                    </MenuItem>
                                                    <Divider sx={{ my: 0 }} />
                                                    {settings.map((setting) => (
                                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                            <Typography textAlign="center">{setting}</Typography>
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                            </>
                                            : <><Tooltip >
                                                <Link to='/login'>
                                                    <IconButton sx={{ p: 0 }}>
                                                        <Stack spacing={4}>
                                                            <Avatar />
                                                        </Stack>
                                                    </IconButton>
                                                </Link>
                                            </Tooltip>

                                            </>
                                        }
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div >
                </>}
        </>
    )
}