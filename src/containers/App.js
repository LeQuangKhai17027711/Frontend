import './App.scss';

import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/store/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack';
import { StyledEngineProvider } from '@mui/material/styles';

import { HomeBody } from './HomePage/HomeBody.js'
import { HomeHeader } from './HomePage/HomeHeader';
import { SignInSide } from '../routes/Login.js'
import { AdminLogin } from '../routes/AdminLogin';
import { SignUp } from '../routes/Register';
import { BoardAdmin } from '../routes/DashBoardAdmin';
import { BoardStaff } from '../routes/DashBoardStaff';
import { BoardUser } from '../routes/DashBoardUser';
import { IntroPage } from '../routes/IntroPage';


const App = () => {

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <SnackbarProvider >
            <>
              <BrowserRouter >
                <HomeHeader />
                <Routes>
                  <Route path="/" element={<HomeBody />} />
                  <Route path="/home" element={<HomeBody />} />
                  <Route path="/about" element={<IntroPage />} />
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/login" element={<SignInSide />} />
                  <Route path="/login-admin" element={<AdminLogin />} />
                  <Route path="/User" element={<BoardUser />} />
                  <Route path="/Staff" element={<BoardStaff />} />
                  <Route path="/Admin" element={<BoardAdmin />} />
                </Routes>
              </BrowserRouter >
            </>
          </SnackbarProvider>
        </StyledEngineProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
