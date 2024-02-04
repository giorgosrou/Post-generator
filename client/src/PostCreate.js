import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {

    const [title, setTitle] = useState('');

    const onPostSubmit = async (event) => {
        event.preventDefault();
    
        if (title) {
            try {
                const response = await axios.post('http://localhost:4000/posts', { title, });
                setTitle('');
                console.log('Response from server:', response.data);
                alert('Your post has been created!');
            } catch (error) {
                console.error('Error creating post:', error);
                alert('Error creating post. Please try again.'); // Handle error
            }
        } else {
            alert('You should create a post first and then submit it!');
        };
    };

    return (
        <div>
            <form onSubmit={onPostSubmit}>
                <div className='form-group'>
                    <h2>Title</h2>
                    <input 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        className='form-control' 
                    />
                </div>
                <button className='btn btn-primary' style={{ marginTop: '10px' }}>Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;