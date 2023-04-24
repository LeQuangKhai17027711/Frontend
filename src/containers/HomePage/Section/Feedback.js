import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Feedback.scss'

export const Feedback = () => {
    var settings = {
        className: "center",
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        speed: 500,
        arrows: true,
        autoplay: false,
    };
    return (
        <div className='container-content'>
            <h1 className='title-content'>
                Phản hồi khách hàng
            </h1>
            <div className='slider-content'>
                <Slider {...settings}>

                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Nguyễn Thị Tuất
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Gâu gâu gâu...
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288868.jpg?size=626&ext=jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Tiêu Thố
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Nhà có bán chó không..
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/premium-photo/durian-fruit-with-cut-half-leaves-isolated-white-surface_252965-916.jpg?size=626&ext=jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Lê Thị Riêng
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Blabla
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/premium-photo/green-tree-white_110893-1398.jpg?size=626&ext=jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Trần Văn Tri
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Blabla
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/premium-photo/sad-businessman-sitting-head-hands-bed-dark-bedroom_41418-7.jpg?size=626&ext=jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Đại gia nghèo
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Blabla
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                    component="img"
                                    height="140"
                                    image="https://img.freepik.com/premium-photo/red-location-symbol-pin-icon-sign-navigation-locator-map-travel-gps-direction-pointer-marker-place-position-point-design-isolated-white-graphic-road-mark-destination-background-3d-render_79161-1994.jpg?size=626&ext=jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                        Lê Văn Trí
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Trên trời và dưới đất, chỉ gô gồ là nhất
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </Slider>
            </div>
        </div>
    );
}