import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { useQuery, useMutation } from "@apollo/client";
import { getAllService, deleteService, updateService } from '../graphql-client/service-queries.js';


export const ListService = () => {
    library.add(fas)

    const [updateservice, setUpdateService] = useState({
        idSer: '',
        title: '',
        image: '',
        fee: '',
        descript: '',
        type: 'Hardware',
    })

    const [modal, setModal] = useState(false);
    const [serviceupdate,] = useMutation(updateService)
    const [deleteservice,] = useMutation(deleteService)

    //ShowHide Modal
    const toggle = () => setModal(!modal);

    const { loading, error, data } = useQuery(getAllService)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //Delete user
    const HandleDeleteService = (id) => {
        if (window.confirm(`Bạn muốn xóa user có id là ${id}`)) {
            deleteservice({
                variables: {
                    idSer: id,
                },
                refetchQueries: [{ query: getAllService }]
            })
        }
    }
    //Get User Update
    const GetServiceUpdate = (service) => {
        toggle()

        setUpdateService({
            idSer: service.idSer,
            title: service.title,
            image: service.image,
            fee: service.fee,
            descript: service.descript,
            type: service.type,
        })
    }

    //Update user
    const HandleUpdateService = () => {
        if (window.confirm(`Bạn update Service ${updateservice.title}`)) {
            serviceupdate({
                variables: {
                    idSer: updateservice.idSer,
                    title: updateservice.title,
                    image: updateservice.image,
                    fee: updateservice.fee,
                    descript: updateservice.descript,
                    type: updateservice.type,
                },
                refetchQueries: [{ query: getAllService }]
            })
            toggle()
        }
    }


    //Get OnChange Value
    const handleOnChangeInput = (event) => {
        setUpdateService({
            ...updateservice,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle} className="modalHeader">
                    Thông tin dịch vụ
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
                                    value={updateservice.title}

                                />
                            </FormGroup>
                        </Col>
                        <Col md={3} >
                            <Label for="exampleImage">
                                Image
                            </Label>
                            <Input
                                id="exampleImage"
                                name="image"
                                placeholder="with a placeholder"
                                type="url"
                                onChange={(event) => { handleOnChangeInput(event) }}
                            />

                        </Col >
                        <Col md={3}>
                            <img src={updateservice.image}
                                style={{
                                    width: '200px',
                                    height: '70px',
                                    paddingRight: '20px'
                                }}
                            />
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
                                    placeholder="Nguyễn Văn "
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={updateservice.fee}
                                />
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
                                    placeholder="Mo ta..."
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={updateservice.descript}
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Input
                                id="exampleSelect"
                                name='type'
                                type="select"
                                onChange={(event) => { handleOnChangeInput(event) }}
                                value={updateservice.type}
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
                    <Button color="primary" onClick={() => { HandleUpdateService() }}>
                        Save changes
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            {data.services.services && data.services.services.map((service, index) => {

                return (
                    <tr key={index}>
                        <>
                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                            <td >{service.title}</td>
                            <td >{
                                <img src={service.image}
                                    style={{
                                        width: '200px',
                                        height: '100px',
                                        paddingLeft: '50px'
                                    }} />
                            }</td>
                            <td >{service.fee}</td>
                            <td >{service.descript}</td>
                            <td style={{ textAlign: 'center' }} >{service.type}</td>
                            <td >
                                <button><FontAwesomeIcon className="btn-edit" icon={['fas', 'fa-circle-info']} onClick={GetServiceUpdate.bind(this, service)} /></button>{' '}
                                <button><FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-trash']} onClick={HandleDeleteService.bind(this, service.idSer)} /></button>
                            </td>
                        </>
                    </tr>
                )
            })}
        </>

    )
}