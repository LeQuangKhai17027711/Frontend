import * as React from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSnackbar } from 'notistack';


import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
import './Login.scss';
import { loginUser } from '../containers/graphql-client/queries';
import { useMutation } from "@apollo/client";
import { allActions } from "../store/actions/index.js";

import { HomeFooter } from '../containers/HomePage/HomeFooter';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export const AdminLogin = () => {

    const [variant, setVariant] = React.useState('')
    const [username, setName] = React.useState('')
    const [password, setPassWord] = React.useState('')
    const [errormessage, setErrorMessage] = React.useState('')
    const [isShowPassWord, setPass] = React.useState(false)
    const [login, dataLogin] = useMutation(loginUser)
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.user)

    React.useEffect(() => {
        login({
            variables: {
                email: username,
                passWord: password
            }
        })
    }, [username, password, login])


    const handleOnChangeUser = (event) => {
        setName(event.target.value)

    }

    const handleOnChangePassword = (event) => {
        setPassWord(event.target.value)

    }

    const handleShowHidePassword = () => {

        setPass(!isShowPassWord)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setVariant('success')
        if (dataLogin.data.login.errCode === "0") {
            setErrorMessage('');
            localStorage.setItem('user', JSON.stringify(dataLogin.data.login))
            dispatch(allActions.userLoginSuccess(dataLogin.data.login.user))
            enqueueSnackbar('Loggin success!', { variant });

        } else {
            setErrorMessage(dataLogin.data.login.errMessage)
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                {
                    auth.isLoggedIn &&
                    <Navigate to="/Admin" replace={true} />
                }
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://source.unsplash.com/random)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in for Admin
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <TextField

                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(event) => handleOnChangeUser(event)}
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type={isShowPassWord ? 'text' : 'password'}
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(event) => handleOnChangePassword(event)}
                                />
                                <div className="custom-input-password">
                                    <span onClick={() => handleShowHidePassword()} className="eyeshow">{isShowPassWord ? 'hide' : 'show'}</span>
                                </div>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <div className="col-12" style={{ color: 'red' }}>
                                    {errormessage}
                                </div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    color="success"
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item >
                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
            <HomeFooter />
        </>
    );
}