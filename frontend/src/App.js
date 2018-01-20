import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Apollo Client
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/graphql', fetchOptions : {method: 'POST'}}),
  cache: new InMemoryCache()
});
client.query({ query: gql`{ posts{
  id
  body
  
} }` }).then(console.log);
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
