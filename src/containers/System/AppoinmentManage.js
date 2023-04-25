import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'

import { useMutation } from "@apollo/client";
import { addNewAppointment, getAllAppointment } from '../graphql-client/appointment-queries.js';
import { ListAppoinment } from './AppoinmentList';


export const AppoinmentManage = () => {
    library.add(fas)

    //Get Users
    const [newappointment, setNewAppoinment] = useState({
        idApp: '',
        name: '',
        email: '',
        phone: '',
        time: '',
        note: '',
    })

    const [email, setEmail] = useState('');
    const [name, setPassword] = useState('');
    const [phone, setFirstname] = useState('');
    const [note, setLastname] = useState('');


    //Create User

    const [newAppoinment, newAppoinmentData] = useMutation(addNewAppointment);

    React.useEffect(() => {
        if (newAppoinmentData.called === true) {

            if (newAppoinmentData.data) {
                if (newAppoinmentData.data.createUser.errCode === '1') {
                    alert(newAppoinmentData.data.createUser.errMessage);
                }
            }
        }
    }, [newAppoinmentData.loading]);


    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setNewAppoinment({
            ...newappointment,
            [event.target.name]: event.target.value
        })
    }


    return (
        <>
            <h3 className="title">MANAGE APPOINMENT WITH ADMIN</h3>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên người yêu cầu</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Ngày đặt lịch</th>
                        <th>Ghi chú</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ListAppoinment />
                </tbody>
            </Table>
        </>
    );
}




