import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { Table } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { getAllUser } from '../graphql-client/queries.js';

export const DashUser = () => {

    const { loading, error, data } = useQuery(getAllUser)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    library.add(fas)
    return (
        <>
            <h6>Danh sách user</h6>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>PhoneNumber</th>
                        <th>Role</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.users && data.users.users.map((user, index) => {
                        localStorage.setItem('numberuser', index + 1);
                        return (
                            <tr key={index}>
                                <>
                                    <td >{index + 1}</td>
                                    <td >{user.email}</td>
                                    <td >{user.firstName}</td>
                                    <td >{user.lastName}</td>
                                    <td >{user.address}</td>
                                    <td >{user.gender ? 'Nam' : 'Nữ'}</td>
                                    <td >{user.phoneNumber}</td>
                                    <td >{user.role}</td>
                                    <td >{user.position}</td>
                                </>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}