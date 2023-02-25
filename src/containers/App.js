//import logo from './logo.svg';
//import image from '../assets/image/anh2.png'
import './App.scss';
import Login from './Auth/Login';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <Login />
      </>
    </ApolloProvider>

  );
}

export default App;
