import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { loginUser } from '../graphql-client/queries';
import { useQuery } from "@apollo/client";
import { allActions } from "../../store/actions/index.js";

const Login = () => {
    library.add(fab)
    library.add(fas)

    const [username, setName] = useState('')
    const [password, setPassWord] = useState('')
    const [errormessage, setErrorMessage] = useState('')
    const [isShowPassWord, setPass] = useState(false)
    const dispatch = useDispatch()

    const dataLogin = useQuery(loginUser, {
        variables: {
            email: username,
            passWord: password,
        },
        enabled: false
    })

    const handleOnChangeUser = (event) => {
        setName(event.target.value)
        console.log(username)
    }

    const handleOnChangePassword = (event) => {
        setPassWord(event.target.value)
        console.log(password)
    }

    const handleShowHidePassword = () => {
        setPass(!isShowPassWord)
    }

    const handleUserLogin = () => {
        // manually refetch
        if (dataLogin.data.login.errCode == 0) {
            setErrorMessage('');
            dispatch(allActions.userLoginSuccess(dataLogin.data.login.user));
        } else {
            setErrorMessage(dataLogin.data.login.errMessage)
        }
    };

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
                        <div className="custom-input-password">
                            <input
                                type={isShowPassWord ? 'text' : 'password'}
                                className="form-control"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(event) => handleOnChangePassword(event)} />
                            <span onClick={() => handleShowHidePassword()}><FontAwesomeIcon className="eyeshow" icon={isShowPassWord ? ['fas', 'fa-eye-slash'] : ['fas', 'fa-eye']} /></span>
                        </div>
                    </div>
                    <div className="col-12" style={{ color: 'red' }}>
                        {errormessage}
                    </div>
                    <div className="col-12">
                        <button className="btn-login"
                            onClick={() => handleUserLogin()}>Login</button>
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