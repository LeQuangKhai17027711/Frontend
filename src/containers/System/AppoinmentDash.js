import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { Table } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { getAllAppointment } from '../graphql-client/appointment-queries.js';

export const DashAppoinment = () => {

    const { loading, error, data } = useQuery(getAllAppointment)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    library.add(fas)
    return (
        <>
            <h5>Danh sách Lịch hẹn</h5>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên người yêu cầu</th>
                        <th>Email</th>
                        <th>Điện thoại</th>
                        <th>Ngày đặt lịch</th>
                        <th>Ghi chú</th>
                    </tr>
                </thead>
                <tbody>
                    {data.appointments.appointments && data.appointments.appointments.map((appointment, index) => {
                        localStorage.setItem('numberapp', index + 1);
                        return (
                            <tr key={index}>
                                <>
                                    <td >{index + 1}</td>
                                    <td >{appointment.name}</td>
                                    <td >{appointment.email}</td>
                                    <td >{appointment.phone}</td>
                                    <td >{appointment.time}</td>
                                    <td >{appointment.note}</td>
                                </>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}