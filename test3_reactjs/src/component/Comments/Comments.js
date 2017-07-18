import React, { Component } from 'react';

import CommentHeader from './CommentHeader';

class Comments extends Component {
    render() {
        return (
            <div className="comments-flow">
                <CommentHeader />
            </div>
        );
    }
}

export default Comments;