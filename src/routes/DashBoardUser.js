import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { ProfileCustomer } from '../containers/Customer/ProfileCustomer.js';

import { useSelector } from 'react-redux';



export const BoardUser = () => {

    const currentUser = useSelector((state) => state.user.userInfo);

    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Card sx={{ maxWidth: '100%', borderRadius: '0px', marginTop: '50px', textAlign: 'center' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="350"
                                image="https://img.freepik.com/premium-vector/businessman-icon-color-vector-illustration_755164-2088.jpg?size=626&ext=jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" name='Profile'>
                                    {currentUser.firstName + ' ' + currentUser.lastName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {currentUser.email}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Col>
                <Col sm={9}>
                    <ProfileCustomer />
                </Col>
            </Row>
        </Container>
    );
}
