import React, { useState } from 'react'
import { Button, FormGroup, Label, Row, Col } from 'reactstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';

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


    const [updateuser, setUpdateUser] = useState({
        email: currentUser.email,
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        address: currentUser.address,
        gender: currentUser.gender,
        phoneNumber: currentUser.phoneNumber,
    })

    const HandleChangePass = () => {
        console.log("Ok")
    }

    const HandleEditUser = () => {
        updateChange()
    }
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
    const handleOnChangeInput = (event) => {

        setUpdateUser({
            ...updateuser,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
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