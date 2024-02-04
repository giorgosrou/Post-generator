import React from "react";
import { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({postId}) => {
    const [content,setContent] = useState('');

    const onCommentSubmit = async(event) => {
        event.preventDefault();
        if(content) {
            await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
                content
            })
            setContent('');
            alert('Your comment has been created!');
        } else {
            alert('Please enter a comment and then submit it');
        }
    };

    return (
        <div>
            <form onSubmit={onCommentSubmit}>
                <div className='form-group'>
                    <label>New Comment</label>
                    <input 
                        value={content} 
                        onChange={e => setContent(e.target.value)} 
                        className='form-control' 
                    />
                </div>
                <button className='btn btn-primary' style={{ marginTop: '10px' }}>Submit</button>
            </form>
        </div>
    );
};

export default CommentCreate;