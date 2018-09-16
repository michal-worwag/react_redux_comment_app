import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentContainer from './NewCommentContainer';
import DevTools from './DevTools';

const App = () => {
  return (
    <div className="App">
    <h1>Comment App</h1>
    <p>If you want to comment something type your text below and press ENTER</p>
      <NewCommentContainer />
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;