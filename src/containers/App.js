import './App.scss';

import React from 'react';
import { Provider } from 'react-redux'
//import { store } from '../store/store/store';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { client } from './apolloClient';
import { ApolloProvider } from '@apollo/client'
import { HomePage } from './HomePage/HomePage.js'
import { Login } from '../routes/Login.js'
import { UserManage } from './System/UserManage';


const App = () => {

  return (
    <ApolloProvider client={client}>
      <>
        <Login />
        <BrowserRouter >
          <div className="main-container">
            <div className="content-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/usermanage" element={<UserManage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter >
      </>

    </ApolloProvider>
  );
}



export default App;
