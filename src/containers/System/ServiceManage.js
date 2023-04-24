import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card, CardBody, CardTitle } from 'reactstrap'
import { DashUser } from './UserDash';
import { DashService } from './ServiceDash';


export const Dashboard = () => {
    const [countUser, setCountUser] = React.useState(0)
    //const [countFeedback, setCountFeedback] = React.useState(0)
    const [countService, setCountService] = React.useState(0)

    React.useEffect(() => {
        setCountUser(localStorage.getItem('numberuser'))
        setCountService(localStorage.getItem('numberservice'))
    }, [countUser, countService]);

    return (
        <>
            <h1 style={{ marginBottom: '20px', marginTop: '30px' }}>Dash board</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={7}>
                    <Grid item xs={6} md={3}>
                        <Card
                            style={{
                                width: '100%',
                                backgroundColor: 'lightblue'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                                    Tổng người dùng
                                </CardTitle>
                            </CardBody>
                            <div className='list-user' />
                            <CardBody>
                                <h5 style={{ textAlign: "center" }} >{countUser}</h5>
                                <h6 style={{ textAlign: "center" }} >Người</h6>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card
                            style={{
                                width: '100%',
                                backgroundColor: 'lightskyblue'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                                    Tổng dịch vụ
                                </CardTitle>
                            </CardBody>
                            <div className='list-service' />
                            <CardBody>
                                <h5 style={{ textAlign: "center" }} >{countService}</h5>
                                <h6 style={{ textAlign: "center" }} >Dịch vụ</h6>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Card
                            style={{
                                width: '100%',
                                backgroundColor: 'lightgreen'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5" style={{ textAlign: "center" }}>
                                    Tổng người dùng
                                </CardTitle>
                            </CardBody>
                            <img
                                alt="Card cap"
                                src="https://picsum.photos/318/180"
                                width="100%"
                            />
                            <CardBody>
                                <h5 style={{ textAlign: "center" }} >{countUser}</h5>
                                <h6 style={{ textAlign: "center" }} >Người</h6>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <DashUser />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <DashService />
                    </Grid>
                </Grid>
            </Box >
        </>
    );
}