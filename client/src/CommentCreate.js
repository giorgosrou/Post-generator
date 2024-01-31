import React from "react";
import { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({postId}) => {
    const [content,setContent] = useState('');

    const onCommentSubmit = async() => {
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        })
        setContent('');
    };

    return (
        <div>
            <div className='form-group'>
                <p>New Comment</p>
                <input 
                    value={content} 
                    onChange={e => setContent(e.target.value)} 
                    className='form-control' 
                />
            </div>
            <button className='btn btn-primary' onClick={onCommentSubmit}>Submit</button>
        </div>
    );
};

export default CommentCreate;