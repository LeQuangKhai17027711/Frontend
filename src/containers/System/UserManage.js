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
    const [newuser, setNewUser] = useState({
        email: '',
        passWord: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: false,
        phoneNumber: '',
        role: 'Admin',

    })


    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [address, setAddress] = useState('');
    const [phonenumber, setPhonenumber] = useState('');

    //Create User

    const [newUser, newUserData] = useMutation(addNewUser)

    //ShowHide Modal
    const toggle = () => {
        setNewUser({
            email: '',
            passWord: '',
            firstName: '',
            lastName: '',
            address: '',
            gender: false,
            phoneNumber: '',
            role: 'Admin',
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
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
        const regexPhone = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/;
        if (!newuser.email) {
            isValid = false;
            setEmail(' * Missing parameter Email')
        }

        else if (regex.test(newuser.email) === false) {
            isValid = false;
            setEmail(" * Email is not valid !")
        }
        if (!newuser.passWord) {
            isValid = false;
            setPassword(' * Missing parameter Password')
        }
        else if (newuser.passWord.length < 8) {
            isValid = false;
            setPassword(" * Password >= 8 character!")
        }
        if (!newuser.firstName) {
            isValid = false;
            setFirstname(' * Missing parameter Firstname')
        }
        if (!newuser.lastName) {
            isValid = false;
            setLastname(' * Missing parameter Lastname')
        }
        if (!newuser.address) {
            isValid = false;
            setAddress(' * Missing parameter Address')
        }
        if (!newuser.phoneNumber) {
            isValid = false;
            setPhonenumber(' * Missing parameter Phone number')
        }

        else if (regexPhone.test(newuser.phoneNumber) === false) {
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

        if (checkValidInput(newuser)) {
            if (newuser.gender === "Nam")
                newuser.gender = true
            else
                newuser.gender = false
            newUser({
                variables: {
                    email: newuser.email,
                    passWord: newuser.passWord,
                    firstName: newuser.firstName,
                    lastName: newuser.lastName,
                    address: newuser.address,
                    gender: newuser.gender,
                    phoneNumber: newuser.phoneNumber,
                    role: newuser.role,
                },
                refetchQueries: [{ query: getAllUser }]
            })

            toggle()
        }

    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setNewUser({
            ...newuser,
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
                                    value={newuser.email}
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
                                    value={newuser.passWord}
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
                                    value={newuser.firstName}
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
                                    value={newuser.lastName}
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
                                    value={newuser.address}
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
                                    value={newuser.phoneNumber}
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
                                        value={newuser.role}
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




