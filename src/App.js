import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';
import NewCommentContainer from './NewCommentContainer';

const App = () => {
  return (
    <div className="App">
    <h1>Comment App</h1>
    <p>If you want to comment something type your text below and press ENTER</p>
      <NewCommentContainer />
      <CommentsListContainer />
    </div>
  );
};

export default App;