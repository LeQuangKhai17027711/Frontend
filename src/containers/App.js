import './App.scss';

import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/store/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client'
import { SnackbarProvider } from 'notistack';

import { HomeBody } from './HomePage/HomeBody.js'
import { HomeHeader } from './HomePage/HomeHeader';
import { HomeFooter } from './HomePage/HomeFooter';
import { SignInSide } from '../routes/Login.js'
import { SignUp } from '../routes/Register';
import { BoardAdmin } from '../routes/DashBoardAdmin';
import { BoardStaff } from '../routes/DashBoardStaff';
import { BoardUser } from '../routes/DashBoardUser';

const App = () => {


  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SnackbarProvider >
          <>
            <BrowserRouter >
              <HomeHeader />
              <div className="main-container">
                <div className="content-container">
                  <Routes>
                    <Route path="/" element={<HomeBody />} />
                    <Route path="/home" element={<HomeBody />} />
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignInSide />} />
                    <Route path="/User" element={<BoardUser />} />
                    <Route path="/Staff" element={<BoardStaff />} />
                    <Route path="/Admin" element={<BoardAdmin />} />
                  </Routes>
                </div>
              </div>
            </BrowserRouter >
            <HomeFooter />
          </>
        </SnackbarProvider>
      </Provider>
    </ApolloProvider>
  );
}



export default App;
