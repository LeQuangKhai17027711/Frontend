import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'

import { ListAppoinment } from './AppoinmentList';


export const AppoinmentManage = () => {
    library.add(fas)

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




