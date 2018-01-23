import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import PostList from './components/PostList';
import Header from './components/Header';
import Login from './components/Login';
import PostView from './components/PostView';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/post-list" component={PostList} />
            <Route exact path="/post/view/:postId" component={PostView} / >
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
