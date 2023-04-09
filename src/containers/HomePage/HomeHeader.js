import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material'
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { allActions } from '../../store/actions'

import './HomeHeader.scss'
export const HomeHeader = () => {
    library.add(fas)

    const settings = ['Account', 'Logout'];
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const auth = useSelector((state) => state.user)
    let navigate = useNavigate();
    const dispatch = useDispatch()

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (event) => {

        if (event.target.innerHTML === "Account") {

            if (auth.userInfo.role === "Admin") {
                navigate('/Admin')
            } else if (auth.userInfo.role === "Staff") {
                navigate('/Staff')
            } else if (auth.userInfo.role === "Customer") {
                navigate('/User')
            }
        } else if (event.target.innerHTML === "Logout") {
            dispatch(allActions.processLogout())
            navigate('/Home')
        }
        setAnchorElUser(null);
    };

    return (
        <>
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <Link to='/' className='header-logo'></Link>
                    </div>
                    <div className="center-content">
                        <div className='child-content'>
                            <div><b>GIỚI THIỆU</b></div>
                            <div className='subs-title'>Giới thiệu về công ty</div>
                        </div>
                        <div className='child-content'>
                            <div><b>SẢN PHẨM</b></div>
                            <div className='subs-title'>Danh sách sản phẩm</div>
                        </div>
                        <div className='child-content'>
                            <div><b>DỊCH VỤ</b></div>
                            <div className='subs-title'>Chọn gói dịch vụ bảo trì</div>
                        </div>
                        <div className='child-content'>
                            <div><b>BLOG</b></div>
                            <div className='subs-title'>Bài viết về kỹ thuật</div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className='support'>
                            <Box sx={{ flexGrow: 0 }}>
                                {auth.isLoggedIn ?
                                    <Tooltip >
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <div className='user-profile'>
                                                <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/429442426038538240/6Ac9kykG_400x400.jpeg" />
                                                {auth.userInfo.role}
                                            </div>
                                            <div className='cart'>
                                                <FontAwesomeIcon icon={['fas', 'fa-cart-shopping']} />
                                            </div>
                                        </IconButton>
                                    </Tooltip>
                                    : <Tooltip >
                                        <Link to='/login'>
                                            <IconButton sx={{ p: 0 }}>
                                                <Stack spacing={4}>
                                                    <Avatar />
                                                </Stack>
                                            </IconButton>
                                        </Link>
                                    </Tooltip>}
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
                                        <Typography textAlign="center" >{auth.userInfo.lastName}</Typography>
                                    </MenuItem>
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}