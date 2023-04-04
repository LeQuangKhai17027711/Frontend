import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { useQuery, useMutation } from "@apollo/client";
import { getAllUser, deleteUser, updateUser } from '../graphql-client/queries.js';


export const ListUser = () => {
    library.add(fas)

    const [updateuser, setUpdateUser] = useState({
        email: '',
        passWord: null,
        firstName: '',
        lastName: '',
        address: '',
        gender: false,
        image: '',
        phoneNumber: '',
        roleId: "1",
        positionId: "2",
    })
    const [modal, setModal] = useState(false);
    const [userupdate, datauser] = useMutation(updateUser)
    const [deleteuser, userdata] = useMutation(deleteUser)



    //ShowHide Modal
    const toggle = () => setModal(!modal);

    const { loading, error, data } = useQuery(getAllUser)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //Delete user
    const HandleDeleteUser = (email) => {
        console.log(email)
        deleteuser({
            variables: {
                email: email,
            },
            refetchQueries: [{ query: getAllUser }]
        })
    }

    //Get User Update
    const GetUserUpdate = (user) => {
        toggle()
        console.log(user)
        setUpdateUser({
            email: user.email,
            passWord: undefined,
            firstName: user.firstName,
            lastName: user.lastName,
            address: user.address,
            phoneNumber: user.phoneNumber,
            gender: user.gender,
            image: '',
            roleId: "1",
            positionId: "2",
        })
    }

    //Update user
    const HandleUpdateUser = () => {
        if (updateuser) {
            if (updateuser.gender === "Nam")
                updateuser.gender = true
            else
                updateuser.gender = false

            userupdate({
                variables: {
                    email: updateuser.email,
                    passWord: undefined,
                    firstName: updateuser.firstName,
                    lastName: updateuser.lastName,
                    address: updateuser.address,
                    phoneNumber: updateuser.phoneNumber,
                    gender: updateuser.gender,
                    image: updateuser.image,
                },
                refetchQueries: [{ query: getAllUser }]
            })
            toggle()
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
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle} className="modalHeader">
                    Edit a user
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
                                    value={updateuser.email}
                                    disabled
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
                                    value={updateuser.passWord}
                                    disabled
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
                                    value={updateuser.firstName}
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
                                    value={updateuser.lastName}
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
                                    value={updateuser.address}
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
                                    value={updateuser.phoneNumber}
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
                                        value={updateuser.gender}
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
                                    value={updateuser.image}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { HandleUpdateUser() }}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            {data.users.users && data.users.users.map((user, index) => {
                return (
                    <tr key={index}>
                        <>
                            <td >{user.email}</td>
                            <td >{user.firstName}</td>
                            <td >{user.lastName}</td>
                            <td >{user.address}</td>
                            <td >{user.gender ? 'Nam' : 'Nữ'}</td>
                            <td >{user.phoneNumber}</td>
                            <td >
                                <button><FontAwesomeIcon className="btn-edit" icon={['fas', 'fa-pen-to-square']} onClick={GetUserUpdate.bind(this, user)} /></button>{' '}
                                <button><FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-trash']} onClick={HandleDeleteUser.bind(this, user.email)} /></button>
                            </td>
                        </>
                    </tr>
                )
            })}
        </>

    )
}