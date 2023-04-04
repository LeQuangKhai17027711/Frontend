import React from 'react';
import './Staff.scss';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Staff = () => {
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "white", border: "2px solid gray", paddingTop: "15px" }}
                onClick={onClick}
            />
        );
    }

    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "white", border: "2px solid gray", paddingTop: "15px" }}
                onClick={onClick}
            />
        );
    }

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='section-specialty'>
            <div className='section-container'>
                <div>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên viên bảo trì</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 1</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 2</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 3</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 4</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 5</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                            <div className='specialty-customize'>
                                <div className='bg-image' />
                                <div className='content'>Cơ xương khớp 6</div>
                                <div className='content'>Nhân viên bảo trì</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}