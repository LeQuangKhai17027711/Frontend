import React, { useState } from 'react'
import { Button, FormGroup, Label, Row, Col, Modal, ModalBody, ModalFooter } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import { TextField } from '@mui/material';

import './UserManage.scss'
import { useMutation } from "@apollo/client";
import { useSelector } from 'react-redux';
import { updateUser, getUser } from '../graphql-client/queries';

const ariaLabel = { 'aria-label': 'description' };

export const ProfileCustomer = () => {

    const [userupdate,] = useMutation(updateUser)
    const currentUser = useSelector((state) => state.user.userInfo);
    const [update, setUpdate] = useState(false)
    const updateChange = () => setUpdate(!update)
    const [modal, setModal] = useState(false);
    const [mesageNewPassword, setMesageNewPassword] = useState("");
    const [mesageRepeatPassword, setMesageRepeatPassword] = useState("");
    const toggle = () => setModal(!modal);

    const [updateuser, setUpdateUser] = useState({
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        address: currentUser.address,
        gender: currentUser.gender,
        phoneNumber: currentUser.phoneNumber,
    })

    const [changepassword, setChangepassword] = useState({
        newPassword: "",
        repeatPassword: "",
    });

    const HandleChangePass = () => {
        setMesageNewPassword("");
        setMesageRepeatPassword("");
        setChangepassword({
            newPassword: "",
            repeatPassword: "",
        });
        toggle();
    }

    const HandleEditUser = () => {
        updateChange()
    }

    const checkValidInput = () => {
        let isValid = true;

        if (!changepassword.newPassword) {
            isValid = false;
            setMesageNewPassword("Missing parameter");
        } else if (changepassword.newPassword.length < 8) {
            isValid = false;
            setMesageNewPassword("Password >= 8 character!");
        }
        if (!changepassword.repeatPassword) {
            isValid = false;
            setMesageRepeatPassword("Missing parameter");
        } else if (changepassword.repeatPassword !== changepassword.newPassword) {
            isValid = false;
            setMesageRepeatPassword("Wrong password!");
        } else return isValid;
    };

    //Change Password
    const HandleChangePassword = () => {
        setMesageNewPassword("");
        setMesageRepeatPassword("");
        if (checkValidInput(changepassword)) {
            if (
                window.confirm(
                    `Bạn ${currentUser.lastName} có chắc muốn dổi mật khẩu không?`
                )
            ) {
                userupdate({
                    variables: {
                        email: currentUser.email,
                        passWord: changepassword.repeatPassword,
                        firstName: currentUser.firstName,
                        lastName: currentUser.lastName,
                        address: currentUser.address,
                        phoneNumber: currentUser.phoneNumber,
                        gender: currentUser.gender,
                        role: currentUser.role,
                    },
                    refetchQueries: [
                        {
                            query: getUser,
                            variables: {
                                email: currentUser.email,
                            },
                        },
                    ],
                });
                window.alert(`Đổi mật khẩu thành công`);
            }
        }
    };

    //Update user
    const HandleUpdateUser = () => {
        if (window.confirm(`Bạn ${updateuser.lastName} có chắc muốn update không?`)) {

            if (updateuser) {
                if (updateuser.gender === "Nam") {
                    updateuser.gender = true
                }
                else {
                    updateuser.gender = false
                }

                userupdate({
                    variables: {
                        email: updateuser.email,
                        passWord: updateuser.passWord,
                        firstName: updateuser.firstName,
                        lastName: updateuser.lastName,
                        address: updateuser.address,
                        phoneNumber: updateuser.phoneNumber,
                        gender: updateuser.gender,
                        role: updateuser.role,
                    },
                    refetchQueries: [{
                        query: getUser,
                        variables: {
                            email: currentUser.email,
                        },
                    }]
                })
                window.alert(`Cập nhật thành công`)
            }
        }
    }

    //Get OnChange Value
    const handleOnChangePassword = (event) => {
        setChangepassword({
            ...changepassword,
            [event.target.name]: event.target.value,
        });
    };

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setUpdateUser({
            ...updateuser,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <div className="header-modal">
                        <h3>Đổi mật Khẩu</h3>{" "}
                    </div>
                    <div className="body-modal">
                        {" "}
                        <TextField
                            className="field2-modal"
                            id="outlined-basic"
                            label="New Password"
                            variant="outlined"
                            name="newPassword"
                            type="password"
                            onChange={(event) => {
                                handleOnChangePassword(event);
                            }}
                            value={changepassword.newPassword}
                        />{" "}
                        <div className="mesage">{mesageNewPassword}</div>
                        <TextField
                            className="field2-modal"
                            id="outlined-basic"
                            label="Repeat Password"
                            variant="outlined"
                            name="repeatPassword"
                            type="password"
                            onChange={(event) => {
                                handleOnChangePassword(event);
                            }}
                            value={changepassword.repeatPassword}
                        />
                        <div className="mesage">{mesageRepeatPassword}</div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => HandleChangePassword()}>
                        Change Password
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            <div className='contain-profile'>
                <div className='header-profile'><h2>THÔNG TIN CÁ NHÂN</h2></div>

                <div className='body-profile'>

                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleFirstName">
                                    <h5> First name</h5>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {update ? <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input value={updateuser.firstName}
                                    inputProps={ariaLabel}
                                    name="firstName"
                                    onChange={(event) => { handleOnChangeInput(event) }} />
                            </Box> : <h6>{': ' + updateuser.firstName}</h6>}

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleLastName">
                                    <h5> Last name</h5>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {update ? <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input value={updateuser.lastName}
                                    name="lastName"
                                    inputProps={ariaLabel}
                                    onChange={(event) => { handleOnChangeInput(event) }} />
                            </Box> : <h6>{': ' + updateuser.lastName}</h6>}

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleAddress">
                                    <h5>  Address</h5>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {update ? <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input value={updateuser.address}
                                    name="address"
                                    inputProps={ariaLabel}
                                    onChange={(event) => { handleOnChangeInput(event) }} />
                            </Box> : <h6>{': ' + updateuser.address}</h6>}

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormGroup>
                                <Label for="exampleNumber">
                                    <h5>Phone number</h5>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            {update ? <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1 },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Input value={updateuser.phoneNumber}
                                    inputProps={ariaLabel}
                                    name="phoneNumber"
                                    onChange={(event) => { handleOnChangeInput(event) }} />
                            </Box> : <h6>{': ' + updateuser.phoneNumber}</h6>}

                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            <FormLabel id="radio-buttons-group-label" style={{ color: 'black' }}><h5>Gender</h5></FormLabel>
                        </Col>
                        <Col md={6}>
                            {update ? <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-label"
                                name="gender"
                                defaultValue={updateuser.gender ? 'Nam' : 'Nữ'}
                                onChange={(event) => { handleOnChangeInput(event) }}
                            >
                                <FormControlLabel
                                    value="Nữ"
                                    control={<Radio />}
                                    label="Nữ"
                                />
                                <FormControlLabel
                                    value="Nam"
                                    control={<Radio />}
                                    label="Nam"
                                />
                                <FormControlLabel
                                    value="disabled"
                                    disabled
                                    control={<Radio />}
                                    label="Khác"
                                />
                            </RadioGroup> : <h6>{updateuser.gender ? ': Nam' : ': Nữ'}</h6>}
                        </Col>
                    </Row>
                    {update ? <div className='btn-edit'><Button className='btn-save' color="primary" onClick={() => { HandleUpdateUser() }}>
                        Save
                    </Button>{' '}
                        <Button color="danger" onClick={() => { HandleEditUser() }}>
                            Cancel
                        </Button></div> : <div className='btn-changepass'><Button className='btn-change' color="info" onClick={() => { HandleChangePass() }}>
                            Password
                        </Button> {' '} <Button color="primary" onClick={() => { HandleEditUser() }}>
                            Update
                        </Button></div>
                    }
                </div>
            </div>
        </>
    )
}