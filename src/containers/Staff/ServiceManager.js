import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardBody, CardTitle } from 'reactstrap'
import { DashCustomer } from './CustomerDash';
import { DashAppoinmentStaff } from './AppoinmentDashStaff'
import './UserManage.scss'

export const DashboardStaff = () => {
    const [countCustomer, setCountCustomer] = React.useState(0)
    const [countAppoinment, setCountAppoinment] = React.useState(0)

    React.useEffect(() => {
        setCountCustomer(localStorage.getItem('numberuser'))
        setCountAppoinment(localStorage.getItem('numberapp'))
    }, [countCustomer, countAppoinment]);

    return (
        <>
            <h1 style={{ marginBottom: '20px', marginTop: '30px' }}>Dash board</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid item xs={6} md={6}>
                        <Card
                            style={{
                                width: '100%',
                                backgroundColor: 'lightblue'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                                    Tổng khách hàng
                                </CardTitle>
                            </CardBody>
                            <div className='list-user' />
                            <CardBody>
                                <h5 style={{ textAlign: "center" }} >{countCustomer}</h5>
                                <h6 style={{ textAlign: "center" }} >Người</h6>
                            </CardBody>
                        </Card>
                    </Grid>

                    <Grid item xs={6} md={6}>
                        <Card
                            style={{
                                width: '100%',
                                backgroundColor: 'lightgreen'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                                    Tổng lịch hẹn
                                </CardTitle>
                            </CardBody>
                            <div className='list-appoinment' />
                            <CardBody>
                                <h5 style={{ textAlign: "center" }} >{countAppoinment}</h5>
                                <h6 style={{ textAlign: "center" }} >Buổi</h6>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6} >
                        <DashCustomer />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <DashAppoinmentStaff />
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}