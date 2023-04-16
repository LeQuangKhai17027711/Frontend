import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Card, CardBody, CardTitle } from 'reactstrap'
import { DashUser } from './UserDash';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Dashboard = () => {
    const [countUser, setCountUser] = React.useState(0)
    const [countBlog, setCountBlog] = React.useState(0)
    const [countService, setCountService] = React.useState(0)
    React.useEffect(() => {
        setCountUser(localStorage.getItem('numberuser'))
    }, [countUser]);

    return (
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
                    <Item>xs=6 md=8</Item>
                </Grid>
            </Grid>
        </Box >
    );
}