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
import LogoutIcon from '@mui/icons-material/Logout';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Grid from '@mui/material/Unstable_Grid2';


import { allActions } from '../store/actions'
import { UserManage } from '../containers/System/UserManage';
import { Dashboard } from '../containers/System/ServiceManager';
import { ServiceManage } from '../containers/System/ServiceManage';
import { AppoinmentManage } from '../containers/System/AppoinmentManage';
import { FeedbackManage } from '../containers/System/FeedbackManage';

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


export const BoardAdmin = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [dashboard, setDashBoad] = React.useState(true)
    const [user, setUser] = React.useState(false)
    const [service, setService] = React.useState(false)
    const [feedback, setFeedback] = React.useState(false)
    const [appointment, setAppointment] = React.useState(false)

    const handleListItemClick = (event, name) => {
        switch (name) {
            case 'Dash board':
                setService(false)
                setAppointment(false)
                setUser(false)
                setFeedback(false)
                setDashBoad(true)
                break;
            case 'Quản lý người dùng':
                setService(false)
                setAppointment(false)
                setDashBoad(false)
                setFeedback(false)
                setUser(true)
                break;
            case 'Quản lý dịch vụ':
                setDashBoad(false)
                setUser(false)
                setFeedback(false)
                setAppointment(false)
                setService(true)
                break;
            case 'Phản hồi khách hàng':
                setDashBoad(false)
                setUser(false)
                setAppointment(false)
                setService(false)
                setFeedback(true)
                break;
            case 'Lịch hẹn':
                setDashBoad(false)
                setFeedback(false)
                setUser(false)
                setService(false)
                setAppointment(true)
                break;
            default:
                dispatch(allActions.processLogout())
                localStorage.removeItem('user')
                localStorage.removeItem('role')
                navigate('/login-admin');
                break;
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
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Dash board')}>
                                    <ListItemIcon>
                                        <DashBoardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Dash board" />
                                </ListItemButton>
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Quản lý người dùng')}>
                                    <ListItemIcon >
                                        <PersionIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Quản lý người dùng" />
                                </ListItemButton>
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Quản lý dịch vụ')}>
                                    <ListItemIcon>
                                        <EngineeringIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Quản lý dịch vụ" />
                                </ListItemButton>
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Phản hồi khách hàng')} >
                                    <ListItemIcon>
                                        <ArticleIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Phản hồi khách hàng" />
                                </ListItemButton>
                                <h4>Khác</h4>
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Lịch hẹn')} >
                                    <ListItemIcon>
                                        <CalendarMonthIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Lịch hẹn" />
                                </ListItemButton>
                                <ListItemButton onClick={(event, name) => handleListItemClick(event, name = 'Đăng xuất')} >
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Đăng xuất" />
                                </ListItemButton>
                            </List>
                        </Grid>
                        <Grid xs={6} md={10}>
                            {user && <UserManage />}
                            {dashboard && <Dashboard />}
                            {service && <ServiceManage />}
                            {appointment && <AppoinmentManage />}
                            {feedback && <FeedbackManage />}
                        </Grid>
                    </Grid>
                </Box >
            </div>
        </>
    );
}
