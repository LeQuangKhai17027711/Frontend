import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'

import { ListFeedback } from './FeedbackList';


export const FeedbackManage = () => {
    library.add(fas)

    return (
        <>
            <h3 className="title">MANAGE FEEDBACK WITH ADMIN</h3>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Nội dung</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <ListFeedback />
                </tbody>
            </Table>
        </>
    );
}




