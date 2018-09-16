import React from 'react';
import './Comment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
    <li>
        <div className='comment'>
            <button className='thumbUp' onClick={() => thumbUpComment(id)}><FontAwesomeIcon icon={faThumbsUp}/></button>
            <button className='thumbDown' onClick={() => thumbDownComment(id)}><FontAwesomeIcon icon={faThumbsDown}/></button>
            <div className='commentText'>{text}</div>
            <div className='votes'>votes: {votes}</div>
            <button className='remove' onClick={() => removeComment(id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
        </div>
        </li>

export default Comment;