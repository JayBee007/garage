import React, { Component } from 'react';

import CommentForm from './CommentForm/CommentForm';
import Comments from './Comments/Comments';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className ="comments-container">
                <CommentForm />     
                <Comments />               
            </div>
        );
    }
}

export default App;