import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">

          <ApolloProvider client={client}>
            <div id="main" style={{ backgroundColor: "#50514F" }}>

              nn3

              <BookList />
              <AddBook />

            </div>

            <img src={logo} className="App-logo" alt="logo" />

          </ApolloProvider>

        </header>
      </div>

    );
  }
}

export default App;
