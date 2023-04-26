import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'

import { useMutation } from "@apollo/client";
import { addNewService, getAllService } from '../graphql-client/service-queries.js';
import { ListService } from './ServiceList.js'


export const ServiceManage = () => {
    library.add(fas)

    //Get Services
    const [newservice, setNewservice] = useState({
        idSer: '',
        title: '',
        image: '',
        fee: '',
        descript: '',
        type: 'Hardware',
    })


    const [modal, setModal] = useState(false);
    const [, setIdser] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [fee, setFee] = useState('');
    const [descript, setDescript] = useState('');
    const [, setType] = useState('');
    //Create Service

    const [newService, newServiceData] = useMutation(addNewService)

    //ShowHide Modal
    const toggle = () => {
        setNewservice({
            idSer: ((Math.random() * 99) + 100).toFixed(0),
            title: '',
            image: '',
            fee: '',
            descript: '',
            type: 'Hardware',
        })
        setModal(!modal);
    }

    React.useEffect(() => {
        if (newServiceData.called === true) {
            if (newServiceData.data) {
                if (newServiceData.data.createService.errCode === '1') {
                    alert(newServiceData.data.createService.errMessage);
                }
            }
        }
    }, [newServiceData.loading]);


    //ValidateInput
    const checkValidInput = () => {
        let isValid = true;

        if (!newservice.title) {
            isValid = false;
            setTitle(' * Missing parameter Title')
        }

        if (!newservice.image) {
            isValid = false;
            setImage(' * Missing parameter Image')
        }

        if (!newservice.fee) {
            isValid = false;
            setFee(' * Missing parameter Fee')
        }
        if (!newservice.descript) {
            isValid = false;
            setDescript(' * Missing parameter Descript')
        }
        if (!newservice.type) {
            isValid = false;
            setType(' * Missing parameter Type')
        }
        return isValid;
    }

    //Add User

    const HandleAddNewService = () => {

        setIdser('')
        setTitle('')
        setImage('')
        setFee('')
        setDescript('')
        setType('Hardware')

        if (checkValidInput(newservice)) {

            newService({
                variables: {
                    idSer: newservice.idSer,
                    title: newservice.title,
                    image: newservice.image,
                    fee: newservice.fee,
                    descript: newservice.descript,
                    type: newservice.type,
                },
                refetchQueries: [{ query: getAllService }]
            })

            toggle()
        }

    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        setNewservice({
            ...newservice,
            [event.target.name]: event.target.value
        })
    }


    return (
        <>
            <h3 className="title">MANAGE SERVICE WITH ADMIN</h3>
            <button type="button" className="btn btn-primary"
                onClick={toggle}>
                <FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-plus']} /> Add new user </button>
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle} className="modalHeader">
                    Create a new service
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleTitle">
                                    Title
                                </Label>
                                <Input
                                    id="exampleTitle"
                                    name="title"
                                    placeholder="with a placeholder"
                                    type="text"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.title}
                                />
                                <div className='mesage'>{title}</div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleImage">
                                    Image
                                </Label>
                                <Input
                                    id="exampleImage"
                                    name="image"
                                    type="url"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                />
                                <div className='mesage'>{image}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleFee">
                                    Fee
                                </Label>
                                <Input
                                    id="exampleFee"
                                    name="fee"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.fee}
                                />
                                <div className='mesage'>{fee}</div>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleDescript">
                                    Descript
                                </Label>
                                <Input
                                    id="exampleDescript"
                                    name="descript"
                                    placeholder="Mô tả..."
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newservice.descript}
                                />
                                <div className='mesage'>{descript}</div>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <Input
                                id="exampleSelect"
                                name='type'
                                type="select"
                                onChange={(event) => { handleOnChangeInput(event) }}
                                value={newservice.type}
                            >
                                <option>
                                    Hardware
                                </option>
                                <option>
                                    Software
                                </option>
                                <option>
                                    Orther
                                </option>
                            </Input>
                        </Col>

                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => HandleAddNewService()}>
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
                        <th>Title</th>
                        <th>Image</th>
                        <th>Fee</th>
                        <th>Descript</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ListService />
                </tbody>
            </Table>
        </>
    );
}




