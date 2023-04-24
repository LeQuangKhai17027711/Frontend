import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './Service.scss'

import { useQuery } from "@apollo/client";
import { getAllService } from '../../graphql-client/service-queries.js';
import { useNavigate } from 'react-router-dom'

export const Service = () => {
    library.add(fas)

    const navigate = useNavigate()

    //Get Service
    const { loading, error, data } = useQuery(getAllService)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //
    const HandlePickService = (service) => {
        navigate('/detail', {
            state: {
                service
            }
        })
    }
    return (
        <div className='container-cont'>
            <h1 className='title-cont'>Danh sách dịch vụ</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data.services.services && data.services.services.map((service, index) => (
                        <Grid xs={2} sm={4} md={4} key={index} onClick={() => { HandlePickService(service) }}>
                            <Card sx={{ maxWidth: 345 }}

                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={service.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {<FontAwesomeIcon icon={['fas', 'fa-dollar-sign']} />}
                                            {' ' + service.fee + '  vnđ'}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {'Loại dịch vụ: ' + service.type}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            {'Mô tả : '}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {service.descript}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}