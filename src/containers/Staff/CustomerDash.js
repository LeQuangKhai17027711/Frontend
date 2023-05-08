import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { Table } from 'react-bootstrap';
import { useQuery } from "@apollo/client";
import { getAllUser } from '../graphql-client/queries.js';

export const DashCustomer = () => {

    library.add(fas)

    const { loading, error, data } = useQuery(getAllUser)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //Đều kiện
    const filterCustomer = (customer) => {
        if (customer.role === 'Customer') return customer;
    }

    let listCustomer = data.users.users.filter(filterCustomer)
    return (
        <>
            <h5>Danh sách khách hàng</h5>
            <Table striped bordered hover size="sm" >
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Email</th>
                        <th>LastName</th>
                        <th>Gender</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.users && listCustomer.map((user, index) => {
                        localStorage.setItem('numberuser', index + 1);
                        return (
                            <tr key={index}>
                                <>
                                    <td >{index + 1}</td>
                                    <td >{user.email}</td>
                                    <td >{user.lastName}</td>
                                    <td >{user.gender ? 'Nam' : 'Nữ'}</td>
                                    <td >{user.role}</td>
                                </>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}