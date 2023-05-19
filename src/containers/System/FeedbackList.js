import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.css';
import './UserManage.scss'
import { useQuery, useMutation } from "@apollo/client";
import { getAllFeedback, deleteFeedback } from '../graphql-client/feedback-queries';


export const ListFeedback = () => {
    library.add(fas)

    const [deletefeedback,] = useMutation(deleteFeedback)

    const { loading, error, data } = useQuery(getAllFeedback)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    //Delete Feedback
    const HandleDeleteFeedback = (id) => {
        if (window.confirm(`Bạn muốn xóa Feedback có id là ${id}`)) {
            deletefeedback({
                variables: {
                    idFb: id,
                },
                refetchQueries: [{ query: getAllFeedback }]
            })
        }
    }
    return (
        <>
            {data.feedbacks.feedbacks && data.feedbacks.feedbacks.map((feedback, index) => {
                return (
                    <tr key={index}>
                        <>
                            <td >{index + 1}</td>
                            <td >{<img src={feedback.image}
                                alt='Ảnh'
                                style={{
                                    width: '200px',
                                    height: '100px',
                                    paddingLeft: '50px'
                                }} />
                            }</td>
                            <td >{feedback.title}</td>
                            <td >{feedback.descript}</td>
                            <td >
                                <button><FontAwesomeIcon className="btn-trash" icon={['fas', 'fa-trash']} onClick={HandleDeleteFeedback.bind(this, feedback.idFb)} /></button>
                            </td>
                        </>
                    </tr>
                )
            })}
        </>

    )
}