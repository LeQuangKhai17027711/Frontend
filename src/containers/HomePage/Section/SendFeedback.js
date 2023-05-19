import * as React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useMutation } from "@apollo/client";
import { addNewFeedback, getAllFeedback } from '../../graphql-client/feedback-queries';
import { Feedback } from '../Section/Feedback.js'
import { useQuery } from "@apollo/client";
import './SendFeedback.scss'
export const SendFeedback = () => {

    const images = new Array("https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288868.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/durian-fruit-with-cut-half-leaves-isolated-white-surface_252965-916.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/green-tree-white_110893-1398.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/sad-businessman-sitting-head-hands-bed-dark-bedroom_41418-7.jpg?size=626&ext=jpg",
        "https://img.freepik.com/premium-photo/red-location-symbol-pin-icon-sign-navigation-locator-map-travel-gps-direction-pointer-marker-place-position-point-design-isolated-white-graphic-road-mark-destination-background-3d-render_79161-1994.jpg?size=626&ext=jpg");

    //Get Users
    const [newfeedback, setNewFeedback] = React.useState({
        idFb: '',
        title: '',
        descript: ''
    })

    //Create Feedback

    const [newFeedback, newFeedbackData] = useMutation(addNewFeedback)

    const [messageName, setMessageName] = React.useState('')
    const [messageContext, setMessageContext] = React.useState('')

    const { loading, error, data } = useQuery(getAllFeedback)
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const checkValidInput = () => {
        let isValid = true;

        if (!newfeedback.title) {
            isValid = false;
            setMessageName(' * Missing parameter ')
        }
        if (!newfeedback.descript) {
            isValid = false;
            setMessageContext(" * Missing parameter ")
        }
        return isValid;
    }

    const handleSubmit = () => {
        setMessageName('')
        setMessageContext('')

        if (checkValidInput(newfeedback)) {
            newFeedback({
                variables: {
                    idFb: ((Math.random() * 99) + 100).toFixed(0),
                    title: newfeedback.title,
                    image: images[((Math.random() * images.length)).toFixed(0)],
                    descript: newfeedback.descript
                },
                refetchQueries: [{ query: getAllFeedback }]
            })
            setNewFeedback({
                idFb: '',
                title: '',
                image: '',
                descript: ''
            })
            window.alert("Phản hồi thành công!")
        }
    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        setNewFeedback({
            ...newfeedback,
            [event.target.name]: event.target.value
        })
    }
    return (
        <>
            <Feedback data={data} />
            <div className='container-sendfb'>
                <div className='container-title'>Gửi phản hồi</div>
                <div className='container-context'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tên :</Form.Label>
                            <Form.Control type="text" placeholder="Tên..." name="title" onChange={(event) => { handleOnChangeInput(event) }} value={newfeedback.title} />
                        </Form.Group>
                        <div className='message'>{messageName}</div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ý kiến</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Phản hồi" name="descript" onChange={e => handleOnChangeInput(e)} value={newfeedback.descript} />
                        </Form.Group>
                        <div className='message'>{messageContext}</div>
                    </Form>
                    <Button className='btn-send' variant="primary" onClick={handleSubmit}>Gửi</Button>
                </div>
            </div>
        </>
    )
}