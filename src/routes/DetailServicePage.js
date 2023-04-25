import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Slider from "react-slick";
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { useMutation } from '@apollo/client';
import { addNewAppointment } from '../containers/graphql-client/appointment-queries.js'
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

    //Get Users
    const [newappoinment, setNewAppoinment] = React.useState({
        idApp: '',
        name: '',
        email: '',
        phone: '',
        time: '',
        note: '',
    })

    const { state } = useLocation();
    const currentUser = useSelector((state) => state.user);

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [note, setNote] = React.useState('')

    //Create Appoinment

    const [newAppoinment, newAppoinmentData] = useMutation(addNewAppointment)

    React.useEffect(() => {
        if (newAppoinmentData.called === true) {
            console.log(newAppoinmentData)
            if (newAppoinmentData.data) {
                if (newAppoinmentData.data.createAppointment.errCode === '0') {
                    window.confirm(newAppoinmentData.data.createAppointment.errMessage);
                }
            }
        }
        if (currentUser.isLoggedIn) {

            setNewAppoinment({
                name: (currentUser.userInfo.firstName + ' ' + currentUser.userInfo.lastName),
                email: currentUser.userInfo.email,
                phone: currentUser.userInfo.phoneNumber
            })

        }
    }, [newAppoinmentData.loading]);

    //ValidateInput
    const checkValidInput = () => {
        let isValid = true;
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const regexPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/;
        if (!newappoinment.email) {
            isValid = false;
            setEmail(' * Missing parameter Email')
        }
        else if (regex.test(newappoinment.email) === false) {
            isValid = false;
            setEmail(" * Email is not valid !")
        }
        if (!newappoinment.name) {
            isValid = false;
            setName(' * Missing parameter Fullname')
        }
        if (!newappoinment.phone) {
            isValid = false;
            setPhone(' * Missing parameter Phone number')
        }
        else if (regexPhone.test(newappoinment.phone) === false) {
            isValid = false;
            setPhone(" * Number exclude Character and Lengh number is = 10 !")
        }
        if (!newappoinment.note) {
            isValid = false;
            setNote(' * Missing parameter Note')
        }

        return isValid;
    }

    //Get Date
    const __getCurrentDateTime = (format) => {
        var dt = new Date(), x, date = [];
        date['d'] = dt.getDate();
        date['dd'] = dt.getDate() > 10 ? dt.getDate() : '0' + dt.getDate();
        date['m'] = dt.getMonth() + 1;
        date['mm'] = (dt.getMonth() + 1) > 10 ? (dt.getMonth() + 1) : '0' + (dt.getMonth() + 1);
        date['yyyy'] = dt.getFullYear();
        date['yy'] = dt.getFullYear().toString().slice(-2);
        date['h'] = (dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours());
        date['hh'] = dt.getHours();
        date['mi'] = dt.getMinutes();
        date['mimi'] = dt.getMinutes() < 10 ? ('0' + dt.getMinutes()) : dt.getMinutes();
        date['s'] = dt.getSeconds();
        date['ss'] = dt.getSeconds() < 10 ? ('0' + dt.getSeconds()) : dt.getSeconds();
        date['sss'] = dt.getMilliseconds();
        date['ampm'] = (dt.getHours() >= 12 ? 'PM' : 'AM');
        x = format.toLowerCase();
        x = x.indexOf('dd') !== -1 ? x.replace(/(dd)/i, date['dd']) : x.replace(/(d)/i, date['d']);
        x = x.indexOf('mm') !== -1 ? x.replace(/(mm)/i, date['mm']) : x.replace(/(m)/i, date['m']);
        x = x.indexOf('yyyy') !== -1 ? x.replace(/(yyyy)/i, date['yyyy']) : x.replace(/(yy)/i, date['yy']);
        x = x.indexOf('hh') !== -1 ? x.replace(/(hh)/i, date['hh']) : x.replace(/(h)/i, date['h']);
        x = x.indexOf('mimi') !== -1 ? x.replace(/(mimi)/i, date['mimi']) : x.replace(/(mi)/i, date['mi']);
        if (x.indexOf('sss') !== -1) { x = x.replace(/(sss)/i, date['sss']); }
        x = x.indexOf('ss') !== -1 ? x.replace(/(ss)/i, date['ss']) : x.replace(/(s)/i, date['s']);
        if (x.indexOf('ampm') !== -1) { x = x.replace(/(ampm)/i, date['ampm']); }
        return x;
    }

    const handleSubmit = () => {
        setName('')
        setEmail('')
        setPhone('')
        setNote('')

        if (checkValidInput(newappoinment)) {

            newAppoinment({
                variables: {
                    idApp: ((Math.random() * 99) + 100).toFixed(0),
                    name: newappoinment.name,
                    email: newappoinment.email,
                    phone: newappoinment.phone,
                    time: __getCurrentDateTime('hh:mimi:ss dd-mm-yyyy'),
                    note: newappoinment.note,
                },
            })

            setNewAppoinment({
                idApp: '',
                name: '',
                email: '',
                phone: '',
                time: '',
                note: '',
            })
        }
    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setNewAppoinment({
            ...newappoinment,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
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
                                    value={newappoinment.name}
                                    onChange={(e) => handleOnChangeInput(e)} />
                                <div className='mesage'>{name}</div>
                                <TextField id="standard-email" label="Email" variant="standard"
                                    required
                                    fullWidth
                                    value={newappoinment.email}
                                    name="email"
                                    onChange={(e) => handleOnChangeInput(e)} />
                                <div className='mesage'>{email}</div>
                                <TextField id="standard-num" label="Số điện thoại" variant="standard"
                                    required
                                    fullWidth
                                    value={newappoinment.phone}
                                    name="phone"
                                    onChange={(e) => handleOnChangeInput(e)} />
                                <div className='mesage'>{phone}</div>
                                <TextField id="standard-note" label="Ghi chú" variant="standard"
                                    required
                                    fullWidth
                                    value={newappoinment.note}
                                    name="note"
                                    onChange={(e) => handleOnChangeInput(e)} />
                                <div className='mesage'>{note}</div>
                                <Button className='bth-send' variant="contained" endIcon={<SendIcon />} onClick={(e) => handleSubmit(e)}>
                                    Đặt lịch
                                </Button>
                            </Box>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
