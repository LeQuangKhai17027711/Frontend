import './App.scss';
import Login from './Auth/Login';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react';
import { createStore } from 'redux'
import { rootReducer } from '../store/reducers/index.js'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import { UserManage } from '../containers/System/UserManage.js'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <>
          <UserManage />
        </>
      </Provider>
    </ApolloProvider>
  );
}



export default App;
