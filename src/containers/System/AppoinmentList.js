import React, { useState, useEffect } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { useQuery, useMutation } from "@apollo/client";
import { getAllAppointment, deleteAppointment } from '../graphql-client/appointment-queries.js';
import { sendMail } from '../graphql-client/sendmail-queries';


export const ListAppoinment = () => {
    library.add(fas)
    const [datasend, setDataSend] = useState({
        nameFrom: '',
        nameTo: '',
        emailFrom: '',
        emailTo: '',
        phoneFrom: '',
        time: '',
        content: '',
    })
    const [checked, setChecked] = useState(false);
    const [modal, setModal] = useState(false);
    const [deleteappointment,] = useMutation(deleteAppointment)
    const [sendmail, emailsend] = useMutation(sendMail)
    const currentUser = useSelector((state) => state.user);

    //ShowHide Modal
    const toggle = () => setModal(!modal);


    useEffect(() => {
        if (emailsend.called === true) {
            if (emailsend.data) {
                if (emailsend.data.sendMail.errCode === '0') {
                    alert(emailsend.data.sendMail.errMessage);
                    toggle()
                    setChecked(true)
                }
            }
        }
    }, [emailsend.loading]);

    const { loading, error, data } = useQuery(getAllAppointment)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //Delete user
    const HandleDeleteUser = (id) => {
        if (window.confirm(`Bạn muốn xóa Appoinment có id là ${id}`)) {
            deleteappointment({
                variables: {
                    idApp: id,
                },
                refetchQueries: [{ query: getAllAppointment }]
            })
        }
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
    const GetAppointmentSendMail = (appointment) => {
        toggle()
        setDataSend({
            nameFrom: (currentUser.userInfo.firstName + ' ' + currentUser.userInfo.lastName),
            idApp: appointment.idApp,
            emailFrom: currentUser.userInfo.email,
            nameTo: appointment.name,
            emailTo: appointment.email,
            phoneFrom: currentUser.userInfo.phoneNumber,
            time: __getCurrentDateTime('hh:mimi:ss dd-mm-yyyy'),
        })
    }




    const HandleSendMail = async () => {
        sendmail({
            variables: {
                nameFrom: datasend.nameFrom,
                nameTo: datasend.nameTo,
                emailFrom: datasend.emailFrom,
                emailTo: datasend.emailTo,
                phoneFrom: datasend.phoneFrom,
                time: datasend.time,
                content: datasend.content,
            },
        })

    }

    const handleOnChangeInput = (event) => {

        setDataSend({
            ...datasend,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <Modal isOpen={modal} toggle={toggle} size="lg" >
                <ModalHeader toggle={toggle} className="modalHeader">
                    Gửi Email xác nhận
                </ModalHeader>
                <h6 className='from-name'>From :{' ' + (currentUser.userInfo.firstName + ' ' + currentUser.userInfo.lastName) + ' ( ' + currentUser.userInfo.email + ' )'}</h6>
                <h6 className='to-name'>To : {' ' + datasend.nameTo + ' ( ' + datasend.emailTo + ' )'}</h6>
                <h6></h6>
                <FormGroup>
                    <Label for="Content">
                        <h6>Content :</h6>
                    </Label>
                    <Input
                        id="Content"
                        className='from-content'
                        name="content"
                        placeholder="Nội dung ..."
                        type="textarea"
                        onChange={(event) => { handleOnChangeInput(event) }}
                        value={datasend.content}

                    />
                </FormGroup>
                <ModalFooter>
                    <Button color="primary" onClick={() => { HandleSendMail() }}>
                        Send
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
            {data.appointments.appointments && data.appointments.appointments.map((appointment, index) => {
                return (
                    <tr key={index}>
                        <>
                            <td >{index + 1}</td>
                            <td >{appointment.name}</td>
                            <td >{appointment.email}</td>
                            <td >{appointment.phone}</td>
                            <td >{appointment.time}</td>
                            <td >{appointment.note}</td>
                            <td >
                                <button><FontAwesomeIcon className="btn-send" icon={['fas', checked ? 'fa-square-check' : 'fa-paper-plane']} onClick={GetAppointmentSendMail.bind(this, appointment)} /></button>{' '}
                                <button><FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-trash']} onClick={HandleDeleteUser.bind(this, appointment.idApp)} /></button>
                            </td>
                        </>
                    </tr>
                )
            })}
        </>

    )
}