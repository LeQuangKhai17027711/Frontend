import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Table } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'

import { useMutation } from "@apollo/client";
import { addNewUser, getAllUser } from '../graphql-client/queries.js';
import { ListUser } from './UserList';


export const UserManage = () => {
    library.add(fas)




    //Get Users
    const [newservice, setNewservice] = useState({
        idSer: '',
        title: '',
        image: '',
        fee: '',
        descript: '',
        type: '',
    })


    const [modal, setModal] = useState(false);
    const [idSer, setIdser] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [fee, setFee] = useState('');
    const [descript, setDescript] = useState('');
    const [type, setType] = useState('');

    //Create User

    const [newService, newServiceData] = useMutation(addNewUser)

    //ShowHide Modal
    const toggle = () => {
        setNewUser({
            idSer: '',
            title: '',
            image: '',
            fee: '',
            descript: '',
            type: '',
        })
        setModal(!modal);
    }

    React.useEffect(() => {
        if (newUserData.called === true) {
            if (newUserData.data) {
                if (newUserData.data.createUser.errCode === '1') {
                    alert(newUserData.data.createUser.errMessage);
                }
            }
        }
    }, [newUserData.loading]);


    //ValidateInput
    const checkValidInput = () => {
        let isValid = true;

        if (!newservice.email) {
            isValid = false;
            setEmail(' * Missing parameter Email')
        }

        else if (regex.test(newservice.email) === false) {
            isValid = false;
            setEmail(" * Email is not valid !")
        }
        if (!newservice.passWord) {
            isValid = false;
            setPassword(' * Missing parameter Password')
        }
        else if (newservice.passWord.length < 8) {
            isValid = false;
            setPassword(" * Password >= 8 character!")
        }
        if (!newservice.firstName) {
            isValid = false;
            setFirstname(' * Missing parameter Firstname')
        }
        if (!newservice.lastName) {
            isValid = false;
            setLastname(' * Missing parameter Lastname')
        }
        if (!newservice.address) {
            isValid = false;
            setAddress(' * Missing parameter Address')
        }
        if (!newservice.phoneNumber) {
            isValid = false;
            setPhonenumber(' * Missing parameter Phone number')
        }

        else if (regexPhone.test(newservice.phoneNumber) === false) {
            isValid = false;
            setPhonenumber(" * Number exclude Character and Lengh number is = 10 !")
        }

        return isValid;
    }

    //Add User

    const HandleAddNewUser = () => {

        setEmail('')
        setPassword('')
        setFirstname('')
        setLastname('')
        setAddress('')
        setPhonenumber('')

        if (checkValidInput(newservice)) {
            if (newservice.gender === "Nam")
                newservice.gender = true
            else
                newservice.gender = false
            newUser({
                variables: {
                    email: newservice.email,
                    passWord: newservice.passWord,
                    firstName: newservice.firstName,
                    lastName: newservice.lastName,
                    address: newservice.address,
                    gender: newservice.gender,
                    phoneNumber: newservice.phoneNumber,
                    role: newservice.role,
                },
                refetchQueries: [{ query: getAllUser }]
            })

            toggle()
        }

    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setNewUser({
            ...newservice,
            [event.target.name]: event.target.value
        })
    }


    return (
        <>
            <h3 className="title">MANAGE USERS WITH ADMIN</h3>
            <button type="button" className="btn btn-primary"
                onClick={toggle}>
                <FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-plus']} /> Add new user </button>
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle} className="modalHeader">
                    Create a new user
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="email"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.email}
                                />
                                <div className='mesage'>{email}</div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="passWord"
                                    placeholder="password placeholder"
                                    type="text"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.passWord}
                                />
                                <div className='mesage'>{password}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleFirstName">
                                    First Name
                                </Label>
                                <Input
                                    id="exampleFirstName"
                                    name="firstName"
                                    placeholder="Nguyễn Văn "
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.firstName}
                                />
                                <div className='mesage'>{firstname}</div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleLastName">
                                    Last Name
                                </Label>
                                <Input
                                    id="exampleLastName"
                                    name="lastName"
                                    placeholder="Tèo"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.lastName}
                                />
                                <div className='mesage'>{lastname}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleAddress">
                                    Address
                                </Label>
                                <Input
                                    id="exampleAddress"
                                    name="address"
                                    placeholder="1234 Main St"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.address}
                                />
                                <div className='mesage'>{address}</div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleNumber">
                                    Number
                                </Label>
                                <Input
                                    id="exampleNumber"
                                    name="phoneNumber"
                                    placeholder="number placeholder"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.phoneNumber}
                                />
                                <div className='mesage'>{phonenumber}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormLabel id="radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="radio-buttons-group-label"
                                name="gender"
                                defaultValue="Nữ"
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

                            </RadioGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup row className='exampleSelect'>
                                <Label
                                    for="exampleSelect"
                                    sm={3}
                                >
                                    Role
                                </Label>
                                <Col sm={5}>
                                    <Input
                                        id="exampleSelect"
                                        name='role'
                                        type="select"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                        value={newservice.role}
                                    >
                                        <option>
                                            Admin
                                        </option>
                                        <option>
                                            Staff
                                        </option>
                                        <option>
                                            Customer
                                        </option>
                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>

                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => HandleAddNewUser()}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>PhoneNumber</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ListUser />
                </tbody>
            </Table>
        </>
    );
}




