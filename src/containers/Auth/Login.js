import React, { useState } from "react";
//import { connect } from "react-redux";
//import { push } from "connected-react-router"
//import * as actions from "../store/actions" 
import './Login.scss';
//import { FormattedMessage } from "react-intl"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { getAllUser } from '../graphql-client/queries';
import { useQuery } from "@apollo/client";

const Login = () => {
    library.add(fab)

    const [username, setName] = useState('')
    const [password, setPassWord] = useState('')

    //Get user
    const GetUsers = () => {
        const { loading, error, data } = useQuery(getAllUser)
        if (loading) return console.log('Dang load')
        if (error) return console.log('Dang error')
        return console.log(data)
    }

    const handleOnChangeUser = (event) => {
        setName(event.target.value)
        console.log(username)
    }

    const handleOnChangePassword = (event) => {
        setPassWord(event.target.value)
        console.log(password)
    }

    const handleLogin = () => {
        console.log(username + ' ' + password)
    }
    GetUsers()
    return (

        <div className="login-background">
            <div className="login-container">
                <div className="login-content row">
                    <div className="col-12 text-login">Login</div>
                    <div className="col-12 form-group login-input">
                        <label className="label">Username:</label><br />
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(event) => handleOnChangeUser(event)} />
                    </div>
                    <div className="col-12 form-group login-input">
                        <label className="label">Password:</label><br />
                        <input type="text"
                            className="form-control"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) => handleOnChangePassword(event)} />
                    </div>
                    <div className="col-12">
                        <button className="btn-login"
                            onClick={() => handleLogin()}>Login</button>
                    </div>

                    <div className="col-12">
                        <span className="forgot-password">Forgot your password ?</span>
                    </div>
                    <div className="col-12 text-center mt-3">
                        <span className="text-other-login">Or login with:</span>
                    </div>
                    <div className="col-12 social-login">
                        <FontAwesomeIcon className="facebook" icon={['fab', 'facebook']} />
                        <FontAwesomeIcon className="google" icon={['fab', 'google-plus']} />
                    </div>
                </div>
            </div>
        </div>
    )

}



export default Login;