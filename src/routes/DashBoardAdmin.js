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

import { UserManage } from '../containers/System/UserManage';
import { Dashboard } from '../containers/System/ServiceManage';

export const BoardAdmin = () => {

    const [dashboard, setDashBoad] = React.useState(true)
    const [user, setUser] = React.useState(false)

    const handleListItemClick = (event) => {

        if (event.target.innerHTML === "Dash board") {
            setDashBoad(true)
            setUser(false)
        } else if (event.target.innerHTML === "Quản lý người dùng") {
            setDashBoad(false)
            setUser(true)
        }
    }

    return (
        <>
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
                                <ListItemText primary="Blog" />
                            </ListItemButton>
                            <h4>Khác</h4>
                            <ListItemButton onClick={(event) => handleListItemClick(event)} >
                                <ListItemIcon>
                                    <CalendarMonthIcon />
                                </ListItemIcon>
                                <ListItemText primary="Lịch hẹn" />
                            </ListItemButton>
                        </List>
                    </Grid>
                    <Grid xs={6} md={10}>
                        {user && <UserManage />}
                        {dashboard && <Dashboard />}
                    </Grid>
                </Grid>
            </Box >

        </>
    );
}
