import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Table } from 'react-bootstrap';

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
        image: '',
        phoneNumber: '',
        role: 'CUSTOMER',
        position: 'Nomal',
    })


    const [modal, setModal] = useState(false);

    //Create User

    const [newUser, newUserData] = useMutation(addNewUser)

    //ShowHide Modal
    const toggle = () => setModal(!modal);

    //ValidateInput
    const checkValidInput = () => {
        let isValid = true;

        if (!newuser.email) {
            isValid = false;
            alert('Missing parameter: Email')
        }
        else if (!newuser.passWord) {
            isValid = false;
            alert('Missing parameter: Password')
        }
        else if (!newuser.firstName) {
            isValid = false;
            alert('Missing parameter: Firstname')
        }
        else if (!newuser.lastName) {
            isValid = false;
            alert('Missing parameter: Lastname')
        }
        else if (!newuser.address) {
            isValid = false;
            alert('Missing parameter: Address')
        }
        else if (!newuser.phoneNumber) {
            isValid = false;
            alert('Missing parameter: Phone number')
        }
        else if (!newuser.image) {
            isValid = false;
            alert('Missing parameter: Image')
        }
        return isValid;
    }

    //Add User

    const HandleAddNewUser = () => {

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
                    image: newuser.image,
                    phoneNumber: newuser.phoneNumber,
                    role: 'CUSTOMER',
                    position: 'Nomal',
                },
                refetchQueries: [{ query: getAllUser }]
            })
            setNewUser({
                email: '',
                passWord: '',
                firstName: '',
                lastName: '',
                address: '',
                gender: false,
                image: '',
                phoneNumber: '',
                role: 'CUSTOMER',
                position: 'Nomal',
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
                                    type="password"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newuser.passWord}
                                />
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
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup row className='exampleSelect'>
                                <Label

                                    for="exampleSelect"
                                    sm={3}
                                >
                                    Gender
                                </Label>
                                <Col sm={5}>
                                    <Input
                                        id="exampleSelect"
                                        name='gender'
                                        type="select"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                        value={newuser.gender}
                                    >
                                        <option>
                                            Nữ
                                        </option>
                                        <option>
                                            Nam
                                        </option>

                                    </Input>
                                </Col>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleFile">
                                    Image
                                </Label>
                                <Input
                                    id="exampleFile"
                                    name='image'
                                    type="file"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newuser.image}
                                />
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
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>PhoneNumber</th>
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




