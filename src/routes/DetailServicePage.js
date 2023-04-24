import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


import Slider from "react-slick";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './DetailServicePage.scss'

import { useLocation } from 'react-router-dom'

export const DetailServicePage = () => {
    library.add(fas)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const { state } = useLocation();

    const [name, setName] = React.useState('')
    const [password, setPassWord] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassWord] = React.useState('')
    return (
        <Container>
            <Row>
                <Col sm={8}>
                    <div className='container-left'>
                        <h1 className='title-left'>{state.service.title}</h1>
                        <h6 className='location'> <FontAwesomeIcon icon={['fas', 'fa-location-dot']} className='location-icon' /> Lê Đức Thọ, Phường 7, Quận Gò Vấp, Thành phố Hồ Chí Minh</h6>

                        <Stack direction="row" spacing={2} className='chip'>
                            <Chip label="Giá rẻ sập sình" variant="outlined" />
                            <Chip label="Chất lượng cao" variant="outlined" />
                            <Chip label="Có bảo hành" variant="outlined" />
                        </Stack>
                        <h2> Ảnh </h2>
                    </div>
                </Col>
                <Col sm={2}>
                    <h2 className='title-right'>{state.service.fee + '  VNĐ'}</h2>
                </Col>
                <Col sm={2}>
                    <Chip label={state.service.type}
                        className='chip-right' />
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <img src={state.service.image}
                                    alt='ảnh 1'
                                    className='ima'
                                />
                            </div>
                            <div>
                                <img src='https://img.timviec.com.vn/2022/08/ky-thuat-vien-la-gi-e1660818210794.jpg'
                                    alt='ảnh 2'
                                    className='ima'
                                />
                            </div>
                            <div className='ima'>
                                <img src='https://glints.com/vn/blog/wp-content/uploads/2022/11/ho%CC%A3c-ky%CC%83-thua%CC%A3%CC%82t-die%CC%A3%CC%82n-die%CC%A3%CC%82n-tu%CC%9B%CC%89-ra-la%CC%80m-gi%CC%80-1024x726.jpg'
                                    alt='ảnh 3'
                                    className='ima'
                                />
                            </div>
                            <div>
                                <img src='https://viecoi.vn/demo/public/uploads/files/bai-viet-viecoi/912/thuc-trang-va-nhung-co-hoi-nghe-nghiep-cua-nganh-ky-thuat-hien-nay-1.png'
                                    alt='ảnh 4'
                                    className='ima'
                                />
                            </div>
                        </Slider>
                    </div>
                    <h2 className='title-descript'> Mô tả</h2>
                    <h6 className='descript'> {state.service.descript}</h6>
                </Col>
                <Col sm={4}>
                    <div className='form-calendar'>
                        <div className='title-calendar'>
                            <h6 className='name-title'>ĐẶT LỊCH VỚI CÔNG TY</h6>
                        </div>
                        <div className='info-calendar'>
                            <h6>THÔNG TIN</h6>
                        </div>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '45ch' },
                            }}
                            noValidate
                        >
                            <TextField id="standard-name" label="Tên" variant="standard"
                                required
                                fullWidth
                                name="name"
                                onChange={(event) => handleOnChangeUser(event)} />
                            <TextField id="standard-email" label="Email" variant="standard" />
                            <TextField id="standard-num" label="Số điện thoại" variant="standard" />
                            <TextField id="standard-note" label="Ghi chú" variant="standard" />
                            <Button className='bth-send' variant="contained" endIcon={<SendIcon />} onClick={() => { }}>
                                Đặt lịch
                            </Button>
                        </Box>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}
