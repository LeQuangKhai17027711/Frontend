import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { Table } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { getAllService } from '../graphql-client/service-queries.js';

export const DashService = () => {

    const { loading, error, data } = useQuery(getAllService)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    library.add(fas)
    return (
        <>
            <h5>Danh sách Dịch vụ</h5>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Fee</th>
                        <th>Descript</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.services.services && data.services.services.map((service, index) => {
                        localStorage.setItem('numberservice', index + 1);
                        return (
                            <tr key={index}>
                                <>
                                    <td >{index + 1}</td>
                                    <td >{service.title}</td>
                                    <td >{service.fee}</td>
                                    <td >{service.descript}</td>
                                    <td >{service.type}</td>
                                </>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}