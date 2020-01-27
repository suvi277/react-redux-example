import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts.js';
import PostForm from './components/PostForm.js';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr/>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
