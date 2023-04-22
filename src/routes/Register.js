import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Input } from 'reactstrap';
import { useMutation } from "@apollo/client";
import { registerUser } from '../containers/graphql-client/queries';
import { useSnackbar } from 'notistack';
import { Navigate } from "react-router-dom";

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

export const SignUp = () => {
    const [check, setCheck] = React.useState(false)
    const [newUser, newUserData] = useMutation(registerUser)
    const [registerSuccess, setRegisterSuccess] = React.useState(false)
    const [variant, setVariant] = React.useState('')
    const { enqueueSnackbar } = useSnackbar();

    const [newuser, setNewUser] = React.useState({
        email: '',
        passWord: '',
        firstName: '',
        lastName: '',
        address: '',
        gender: '',
        phoneNumber: '',
        role: 'Customer',
    })

    const checkValidInput = () => {
        let isValid = true;
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

        if (!newuser.firstName || !newuser.passWord || !newuser.email
            || !newuser.lastName || !newuser.address || !newuser.phoneNumber) {
            isValid = false;
            alert('Missing parameter')
        } else if (regex.test(newuser.email) === false) {
            isValid = false;
            alert("Email is not valid")
        }
        else if (newuser.passWord.length < 8) {
            isValid = false;
            alert("Password >= 8 character!")
        }
        else if (newuser.gender === '') {
            isValid = false;
            alert("Choose gender!")
        }
        else if (check === false) {
            isValid = false;
            alert(" Check agree with all clauses!")
        }
        else
            return isValid;
    }

    const setCheckBox = () => {
        setCheck(!check)
    }

    React.useEffect(() => {

        newUser({
            variables: {
                email: newuser.email,
                passWord: newuser.passWord,
                firstName: newuser.firstName,
                lastName: newuser.lastName,
                address: newuser.address,
                gender: newuser.gender,
                phoneNumber: newuser.phoneNumber,
                role: 'Customer',
            },
        })

    }, [check]);

    const handleSubmit = (event) => {
        event.preventDefault();

        setVariant('success')

        if (checkValidInput(newuser)) {
            if (newUserData) {
                console.log(newUserData)
                if (newUserData.data.register.errCode === "0") {
                    enqueueSnackbar('Register user success!', { variant });
                    setRegisterSuccess(!registerSuccess)
                } else {
                    alert(newUserData.data.register.errMessage)
                    setCheckBox()
                }
            }
        }
    };

    const isGender = (value) => {
        let gender = false;
        if (value === "Nam") {
            gender = true
        }
        return gender
    }

    //Get OnChange Value
    const handleOnChangeInput = (event) => {

        let value = event.target.value;
        if (event.target.name === "gender") {
            value = isGender(event.target.value)
        }
        console.log(event.target.name)
        console.log(event.target.value)
        setNewUser({
            ...newuser,
            [event.target.name]: value
        })
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                {registerSuccess && <Navigate to="/login" replace={true} />}
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="passWord"
                                        label="Password"
                                        type="text"
                                        id="password"
                                        autoComplete="new-password"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="address"
                                        label="Address"
                                        name="address"
                                        autoComplete="address"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <div >Gender</div>
                                    <Input
                                        id="exampleSelect"
                                        name='gender'
                                        type="select"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    >
                                        <option value=''>

                                        </option>
                                        <option value='Nữ'>
                                            Nữ
                                        </option>
                                        <option value='Nam'>
                                            Nam
                                        </option>
                                    </Input>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="phone"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        autoComplete="phone"
                                        onChange={(event) => { handleOnChangeInput(event) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        onChange={() => { setCheckBox() }}
                                        checked={check}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/login" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider >
            <HomeFooter />
        </>
    );
}