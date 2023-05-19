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

export const Feedback = (data) => {
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
                    {data.data.feedbacks.feedbacks && data.data.feedbacks.feedbacks.map((feedback, index) => {
                        return (
                            <div key={index}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ borderRadius: '100px', width: '150px', position: 'relative', marginLeft: '80px' }}
                                            component="img"
                                            height="140"
                                            image={feedback.image}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="div">
                                                {feedback.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {feedback.descript}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>

    );
}