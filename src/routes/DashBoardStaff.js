import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { DashboardStaff } from '../containers/Staff/ServiceManager';
import { AppoinmentManageStaff } from '../containers/Staff/AppoinmentManageStaff';
import { CustomerManage } from '../containers/Staff/CustomerManage';
import { ProfileStaff } from '../containers/Staff/ProfileStaff';

export const BoardStaff = () => {

    const [dashboard, setDashBoad] = React.useState(true)
    const [profile, setProfile] = React.useState(false)
    const [customer, setCustomer] = React.useState(false)
    const [appointment, setAppointment] = React.useState(false)


    const HandleProfile = () => {
        setAppointment(false)
        setCustomer(false)
        setDashBoad(false)
        setProfile(true)
    }

    const HandleOnClick = (e, name) => {
        switch (name) {
            case 'Dashboard':
                setAppointment(false)
                setProfile(false)
                setCustomer(false)
                setDashBoad(true)
                break;
            case 'Appoinment':
                setProfile(false)
                setDashBoad(false)
                setCustomer(false)
                setAppointment(true)
                break;
            case 'Custom':
                setProfile(false)
                setAppointment(false)
                setDashBoad(false)
                setCustomer(true)
                break;
            default:
                break;
        }
    }
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card sx={{ maxWidth: '100%', borderRadius: '0px', marginTop: '50px', textAlign: 'center' }} onClick={(e) => HandleProfile()}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                image="https://img.freepik.com/premium-vector/businessman-icon-color-vector-illustration_755164-2088.jpg?size=626&ext=jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" name='Profile'>
                                    Tèo
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tèo @ 123
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Button name='Dashboard' variant="light" size="lg" style={{ width: '100%', borderRadius: '0px' }}
                        onClick={(e, name) => HandleOnClick(e, name = 'Dashboard')}>
                        Dash board
                    </Button>
                    <Button name='Appoinment' variant="light" size="lg" style={{ width: '100%', borderRadius: '0px' }}
                        onClick={(e, name) => HandleOnClick(e, name = 'Appoinment')}>
                        Lịch hẹn
                    </Button>
                    <Button name='Custom' variant="light" size="lg" style={{ width: '100%', borderRadius: '0px' }}
                        onClick={(e, name) => HandleOnClick(e, name = 'Custom')}>
                        Quản lý khách hàng
                    </Button>
                </Col>
                <Col sm={9}>
                    {profile && <ProfileStaff />}
                    {customer && <CustomerManage />}
                    {dashboard && <DashboardStaff />}
                    {appointment && <AppoinmentManageStaff />}
                </Col>
            </Row>
        </Container>
    );
}


