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
        gender: false,
        image: '',
        phoneNumber: '',
        role: 'Customer',
        position: 'None',
    })

    const checkValidInput = () => {
        let isValid = true;

        if (!newuser.firstName || !newuser.passWord || !newuser.email
            || !newuser.lastName || !newuser.address || !newuser.phoneNumber
            || !newuser.image) {
            isValid = false;
            alert('Missing parameter')
        }
        else
            return isValid;
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
                image: newuser.image,
                phoneNumber: newuser.phoneNumber,
                role: 'Customer',
                position: 'None',
            },
        })
    }, [newuser, newUser]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setVariant('success')
        if (checkValidInput(newuser)) {

            if (newUserData) {
                if (newUserData.data.register.errCode === "0") {
                    enqueueSnackbar('Register user success!', { variant });
                    setRegisterSuccess(!registerSuccess)
                } else {
                    alert(newUserData.data.register.errMessage)
                }
            }
        }
    };

    //Get OnChange Value
    const handleOnChangeInput = (event) => {
        if (event.target.name === "gender") {
            if (event.target.value === "Nam") {
                event.target.value = true
            } else {
                event.target.value = false
            }
        }
        console.log(event.target.name)
        console.log(event.target.value)
        setNewUser({
            ...newuser,
            [event.target.name]: event.target.value
        })
    }
    return (
        <ThemeProvider theme={theme}>
            {registerSuccess && <Navigate to="/home" replace={true} />}
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
                            <Grid item xs={12}>
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
                            <Grid item xs={12} sm={6}>

                                <Input
                                    id="exampleSelect"
                                    name='gender'
                                    type="select"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newuser.gender}
                                >
                                    <option>
                                        Nữ
                                    </option>
                                    <option>
                                        Nam
                                    </option>
                                </Input>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    id="exampleFile"
                                    name='image'
                                    type="file"
                                    onChange={(event) => { handleOnChangeInput(event) }}
                                    value={newuser.image}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
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
    );
}