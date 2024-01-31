import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {

    const [title, setTitle] = useState('');

    const onPostSubmit = async () => {
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    }

    const onInputChange = () => {

    }

    return (
        <div>
            <div className='form-group'>
                <h2>Title</h2>
                <input 
                    value={title} 
                    onChange={e => setTitle(e.target.value)} 
                    className='form-control' 
                />
            </div>
            <button className='btn btn-primary' onClick={onPostSubmit}>Submit</button>
        </div>
    )
}

export default PostCreate;