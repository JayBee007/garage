import React, { Component } from 'react';

class CommentForm extends Component {
    render() {
        return (
            <form action="" method="post">
                <div className="comment-entry">
                    <div className="comment-entry-header">
                        <img alt="MyNick" src="http://i.playground.ru/i/00/00/00/00/user/default/icon.50x50.png"
                            className="avatar-image size32" /> MyNick
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="text" placeholder="Put your shit here..."></textarea>
                    </div>
                    <div className="comment-entry-footer">
                        <button type="submit" className="btn btn-default btn-sm btn-block">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CommentForm;