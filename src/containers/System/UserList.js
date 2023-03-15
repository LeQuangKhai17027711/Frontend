import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { useQuery, useMutation } from "@apollo/client";
import { getAllUser, deleteUser } from '../graphql-client/queries.js';


export const ListUser = () => {
    library.add(fas)
    const [userSelected, setUserSelected] = useState(null)
    console.log(userSelected)


    const [deleteuser, userdata] = useMutation(deleteUser)

    const handleDeleteUser = () => {
        deleteuser({
            variables: {
                email: {}
            },
            refetchQueries: [{ query: getAllUser }]
        })
    }
    const { loading, error, data } = useQuery(getAllUser)

    if (loading) return null;
    if (error) return `Error! ${error}`;

    return (
        <>
            {data.users.users && data.users.users.map((user, index) => {
                return (
                    <tr key={index}>
                        <>
                            <td >{user.email}</td>
                            <td >{user.firstName}</td>
                            <td >{user.lastName}</td>
                            <td >{user.address}</td>
                            <td >{user.gender ? 'Nam' : 'Nữ'}</td>
                            <td >{user.phoneNumber}</td>
                            <td >
                                <button><FontAwesomeIcon className="btn-edit" icon={['fas', 'fa-pen-to-square']} onClick={setUserSelected.bind(this, user.email)} /></button>{' '}
                                <button><FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-trash']} /></button>
                            </td>
                        </>
                    </tr>
                )
            })}
        </>

    )
}