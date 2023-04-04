import React from 'react';
import './Production.scss';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Production = () => {
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
                        <span className='title-section'>Sản phẩm nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div>Sản phẩm 1</div>
                            </div>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div>Sản phẩm 2</div>
                            </div>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div>Sản phẩm 3</div>
                            </div>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div>Sản phẩm 4</div>
                            </div>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div>Sản phẩm 5</div>
                            </div>
                            <div className='product-customize'>
                                <div className='bg-img' />
                                <div >Sản phẩm 6</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>

    )
}