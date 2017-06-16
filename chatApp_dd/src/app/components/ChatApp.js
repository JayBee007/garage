import React, { Component } from 'react';


class ChatApp extends Component {
    render() {
        return (
            <div>
                <p>Тестовое задание</p>
                <Messages messages = {this.state.messages} />
                <ChatInput onSend = {this.sendHandler} />
            </div>
        );
    }
}

ChatApp.defaultProps = {
    username = 'Anonymous'
}

export default ChatApp;