import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashBoardIcon from '@mui/icons-material/Dashboard';
import PersionIcon from '@mui/icons-material/Person';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Unstable_Grid2';

import { useDispatch } from 'react-redux'
import { allActions } from '../store/actions'
import { UserManage } from '../containers/System/UserManage';
import { Dashboard } from '../containers/System/ServiceManage';
import { ServiceManage } from '../containers/System/ServiceManager';

import { useNavigate } from 'react-router-dom';

export const BoardAdmin = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [dashboard, setDashBoad] = React.useState(true)
    const [user, setUser] = React.useState(false)
    const [service, setService] = React.useState(false)

    const handleListItemClick = (event) => {

        if (event.target.innerHTML === "Dash board") {
            setService(false)
            setUser(false)
            setDashBoad(true)
        } else if (event.target.innerHTML === "Quản lý người dùng") {
            setService(false)
            setDashBoad(false)
            setUser(true)
        }
        else if (event.target.innerHTML === "Quản lý dịch vụ") {
            setDashBoad(false)
            setUser(false)
            setService(true)
        }
        else if (event.target.innerHTML === "Đăng xuất") {
            dispatch(allActions.processLogout())
            localStorage.removeItem('user')
            localStorage.removeItem('role')
            navigate('/login-admin');
        }
    }

    return (
        <>
            <div className='main-container'>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', height: '100%', minHeight: 600, flexGrow: 1 }}>
                    <Grid container spacing={5}>
                        <Grid xs={6} md={2}>
                            <List
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        Chức năng chính
                                    </ListSubheader>
                                }
                            >
                                <ListItemButton onClick={(event) => handleListItemClick(event)}>
                                    <ListItemIcon>
                                        <DashBoardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dash board" />
                                </ListItemButton>
                                <ListItemButton onClick={(event) => handleListItemClick(event)}>
                                    <ListItemIcon >
                                        <PersionIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Quản lý người dùng" />
                                </ListItemButton>
                                <ListItemButton onClick={(event) => handleListItemClick(event)}>
                                    <ListItemIcon>
                                        <EngineeringIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Quản lý dịch vụ" />
                                </ListItemButton>
                                <ListItemButton onClick={(event) => handleListItemClick(event)} >
                                    <ListItemIcon>
                                        <ArticleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phản hồi khách hàng" />
                                </ListItemButton>
                                <h4>Khác</h4>
                                <ListItemButton onClick={(event) => handleListItemClick(event)} >
                                    <ListItemIcon>
                                        <CalendarMonthIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Lịch hẹn" />
                                </ListItemButton>
                                <ListItemButton onClick={(event) => handleListItemClick(event)} >
                                    <ListItemIcon>
                                        <CalendarMonthIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đăng xuất" />
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} md={10}>
                            {user && <UserManage />}
                            {dashboard && <Dashboard />}
                            {service && <ServiceManage />}
                        </Grid>
                    </Grid>
                </Box >
            </div>
        </>
    );
}
