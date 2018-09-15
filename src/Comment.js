import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <li>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        {text}
        <span>votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>ThumbUp</button>
        </li>

export default Comment;